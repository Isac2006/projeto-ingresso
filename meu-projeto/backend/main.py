from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, StringConstraints, EmailStr
from typing import Annotated
from random import randint
from pwdlib import PasswordHash
from pwdlib.hashers.argon2 import Argon2Hasher
import access_token as at

#=============================================
#Criação das classes pydantic para validação de entradas
#=============================================
class criarUsuario(BaseModel):
    nome: Annotated[str, StringConstraints(strip_whitespace=True, min_length=1)] #Nome da pessoa, não pode ser nulo e remove espaços no começo e fim
    username: Annotated[str, StringConstraints(strip_whitespace=True, min_length=1)] #Nome do usuario, deve ser único, não pode ser nulo e remove espaços no começo e fim
    email: EmailStr #Email do usuario, deve ser único
    senha: str = Field(min_length=1) #Senha do usuario
    confirmacao: str = Field(min_length=1) #confirmacao da senha
    tipo = int #tabelas diferentes para compradores e anunciantes, isso define qual tabela é, 0 para comprador, 1 para anunciante

class loginUsuario(BaseModel):
    email: EmailStr #aqui dá para colcoar um campo str genérico, que ai dá para a gente aceitar email ou username
    senha: str = Field(min_length=1)
    tipo = int

class usuario(BaseModel):
    id: int
    nome: str
    username: str
    email: EmailStr
    hash: str
    dinheiro: int
    tipo: int

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
)

#=============================================
#Rotas do app
#=============================================
@app.get("/")
def read_root():
    return {"status": "ok"}

@app.post("/signin")
async def signin(usuario: criarUsuario):
    #Pydantic faz validação de tipo dos campos automaticamente
    #Verifica se a senha e a confirmação da senha são iguais, se não, dispara um erro
    if usuario.confirmacao != usuario.senha:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A senha e a confirmação da senha não coincidem."
        )
    '''eu preciso que você tente puxar uma conta que já tenha esse nome ou email, para garantir
    que não tenham contas repetidas e, caso tenha, eu levantar um erro'''

    #todo - levantar erro, caso necessário, de conta repetida

    #gera o código que será enviado ao email do usuario
    codigo = (f"{randint(1, 9999):04d}") #o código é uma string, tomar cuidado

    #hash da senha
    hash = ph.hash(usuario.senha)

    '''eu preciso que todas as informações do usuario sejam salvas junto com o codigo gerado no banco de dados
    pois eu não posso perder as informações dele nesse meio tempo de signin e confirmação do código'''

    #envia o código ao email do usuario
    #todo
    

@app.post("/login")
#Retorna um Acces Token e Refresh Token
async def login(usuario: loginUsuario):
    #Pydantic faz validação de tipo dos campos automaticamente
    '''eu preciso que você puxe os dados de um usuario com esse email, para eu
    validar se ele existe e validar se as senhas batem'''

    #aparentemente esse modelo é vulnerável a timing_attack, revisar depois
    if not (ph.verify(usuario.senha, hash)): #aqui eu coloco junto para levantar erros e o email n exisit
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou senha incorretos."
        )

    payload = {"sub": str(.id)} #query.id
    access_token = at.create_access_token(payload)
    refresh_token = at.create_refresh_token(payload)

    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }

#todo rota para revocar refresh token
#todo rota para codigo