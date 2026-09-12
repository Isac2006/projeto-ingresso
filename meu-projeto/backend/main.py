from fastapi import FastAPI, HTTPException, status, Cookie
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, StringConstraints, EmailStr
from typing import Annotated, Literal
from random import randint
from pwdlib import PasswordHash
from pwdlib.hashers.argon2 import Argon2Hasher

import access_token as at
import database.usuarios as services
import database.database as db

#=============================================
#Variáveis úteis
#=============================================
tipo = ["comprador", "vendedor"]

#=============================================
#Criação das classes pydantic para validação de entradas
#=============================================
class criarUsuario(BaseModel):
    nome: Annotated[str, StringConstraints(strip_whitespace=True, min_length=1)] #Nome da pessoa, não pode ser nulo e remove espaços no começo e fim
    username: Annotated[str, StringConstraints(strip_whitespace=True, min_length=1)] #Nome do usuario, deve ser único, não pode ser nulo e remove espaços no começo e fim
    email: EmailStr #Email do usuario, deve ser único
    senha: str = Field(min_length=1) #Senha do usuario
    confirmacao: str = Field(min_length=1) #confirmacao da senha
    tipo: Literal[0, 1] #tabelas diferentes para compradores e anunciantes, isso define qual tabela é, 0 para comprador, 1 para vendedor

class loginUsuario(BaseModel):
    email: EmailStr #aqui dá para colcoar um campo str genérico, que ai dá para a gente aceitar email ou username
    senha: str = Field(min_length=1)
    tipo: Literal[0, 1]

class codigoUsuario(BaseModel):
    email: EmailStr
    tipo: Literal[0, 1]
    codigo: Annotated[str, StringConstraints(strip_whitespace=True, max_length=4, min_length=4)] #só aceita se tiver 4 digitos

class usuario(BaseModel):
    id: int
    nome: str
    username: str
    email: EmailStr
    hash: str
    saldo: int
    tipo: Literal[0, 1]

#=============================================
#Iniciação do app e dependências, junto com permissão da porta do react
#=============================================
app = FastAPI()
ph = PasswordHash((Argon2Hasher(),))
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)

#=============================================
#Rotas do app
#=============================================
@app.get("/")
def read_root():
    return {"status": "ok"}

@app.post("/signup")
async def signup(usuario: criarUsuario):
    #Conecta com o banco de dados
    conn = db.conectar()

    #Pydantic faz validação de tipo dos campos automaticamente
    #Verifica se a senha e a confirmação da senha são iguais, se não, dispara um erro
    if usuario.confirmacao != usuario.senha:
        conn.close()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A senha e a confirmação da senha não coincidem."
        )
    #Verifica se o email já foi utilizado para esse tipo
    if tipo[usuario.tipo] in services.conta_existente(conn, usuario.email, usuario.username):
        conn.close()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="E-mail já cadastrado"
        )  

    #gera o código que será enviado ao email do usuario
    codigo = (f"{randint(1, 9999):04d}") #o código é uma string, tomar cuidado

    #hash da senha
    hash_senha = ph.hash(usuario.senha)

    #Salva o usuario pendente
    with conn:
        services.gravar_usuario_pendente(conn, usuario.nome, usuario.username, usuario.email, hash_senha, tipo[usuario.tipo], codigo)

    #envia o código ao email do usuario
    #todo

    #Encerra a conexão com o banco de dados
    conn.close()
    
    return {
        "message": "Código de verificação enviado.",
        "email": usuario.email,
        "tipo": usuario.tipo
    }

@app.post("/codigo")
async def codigo(usuario: codigoUsuario):
    conn = db.conectar()

    #Valida o código
    with conn:
        resultado = services.validar_codigo_cadastro(conn, usuario.email, tipo[usuario.tipo], usuario.codigo)
    if not resultado[0]:
        conn.close()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Código de verificação inválido ou expirado."
        )

    #Cria o usuario definitivo
    with conn:
        id_usuario = services.criar_usuario_definitivo(conn, resultado[2])

    #Retorna os tokens JWTs
    resposta = JSONResponse(
        content={"message": "Usuário autenticado com sucesso!"}
    )
    
    payload = {"sub": str(id_usuario), "tipo":usuario.tipo}
    access_token = at.create_access_token(payload)
    refresh_token = at.create_refresh_token(payload)
    # 1. Cookie do Access Token (Vida curta: 15 min)
    resposta.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,   # Impede acesso via script JS (Proteção XSS)
        #secure=True,     # Garante envio apenas em HTTPS
        samesite="lax",  # Proteção contra CSRF
        max_age=900      # 15 minutos em segundos
    )

    # 2. Cookie do Refresh Token (Vida longa: 7 dias)
    resposta.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        #secure=True,
        samesite="lax",
        path="/auth/refresh", # Rota de "recarga" de access token
        max_age=604800        # 7 dias em segundos
    )
    services.gravar_refresh_token(conn, id_usuario, tipo[usuario.tipo], refresh_token)
    conn.close()
    return resposta


@app.post("/login")
#Retorna um Acces Token e Refresh Token
async def login(usuario: loginUsuario):
    #Pydantic faz validação de tipo dos campos automaticamente

    conn = db.conectar()

    #Verifica se as informações do usuario são válidas
    with conn:
        resultado = services.buscar_usuario_por_login(conn, usuario.email, tipo[usuario.tipo])

    #aparentemente esse modelo é vulnerável a timing_attack, revisar depois
    if resultado == None or not (ph.verify(usuario.senha, resultado["senha_hash"])):
        conn.close()
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou senha incorretos."
        )

    #Retorna os tokens JWTs
    resposta = JSONResponse(
        content={"message": "Usuário autenticado com sucesso!"}
    )
    
    payload = {"sub": str(resultado["id"]), "tipo":usuario.tipo}
    access_token = at.create_access_token(payload)
    refresh_token = at.create_refresh_token(payload)
    # 1. Cookie do Access Token (Vida curta: 15 min)
    resposta.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,   # Impede acesso via script JS (Proteção XSS)
        #secure=True,     # Garante envio apenas em HTTPS
        samesite="lax",  # Proteção contra CSRF
        max_age=900      # 15 minutos em segundos
    )

    # 2. Cookie do Refresh Token (Vida longa: 7 dias)
    resposta.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        #secure=True,
        samesite="lax",
        path="/auth/refresh", # Rota de "recarga" de access token
        max_age=604800        # 7 dias em segundos
    )
    services.gravar_refresh_token(conn, resultado["id"], tipo[usuario.tipo], refresh_token)
    conn.close()
    return resposta

#Atualizar access token
@app.post("/auth/refresh")
async def refresh(refresh_token: str | None = Cookie(default=None)):
    if refresh_token is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Refresh token ausente")

    try:
        payload = at.jwt.decode(refresh_token, at.SECRET_KEY, algorithms=[at.ALGORITHM])
    except at.ExpiredSignatureError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Sessão expirada, faça login novamente")
    except at.JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Refresh token inválido")

    if payload.get("type") != "refresh":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token inválido")

    conn = db.conectar()
    resultado = services.buscar_refresh_token(conn, refresh_token)
    conn.close()
    if resultado is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Sessão inválida ou revogada")

    id_usuario, tipo_str = resultado
    tipo_idx = tipo.index(tipo_str)

    novo_payload = {"sub": str(id_usuario), "tipo": tipo_idx}
    novo_access = at.create_access_token(novo_payload)


    resposta = JSONResponse(content={"message": "Token renovado com sucesso!"})
    resposta.set_cookie(key="access_token", value=novo_access, httponly=True, samesite="lax", max_age=900)

    return resposta

@app.post("/logout")
async def logout(refresh_token: str | None = Cookie(default=None)):
    if refresh_token is not None:
        conn = db.conectar()
        with conn:
            services.revogar_refresh_token(conn, refresh_token)
        conn.close()

    resposta = JSONResponse(content={"message": "Logout realizado com sucesso."})
    resposta.delete_cookie(key="access_token")
    resposta.delete_cookie(key="refresh_token", path="/auth/refresh")
    return resposta
