from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, StringConstraints, EmailStr
from typing import Annotated

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

class usuario(BaseModel):
    id: int
    nome: str
    username: str
    email: EmailStr
    hash: str
    dinheiro: int
    tipo: int

#=============================================
#Iniciação do app, junto com permissão da porta do react
#=============================================
app = FastAPI()
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
async def signin(item: criarUsuario):
    #todo
    #pydantic faz validação automatica dos campos, precisamos apenas verificar se confirmacao == senha
    #se tiver confirmação de email, apenas geramos o código, salvamos e enviamos para o email, a criação em si fica em outra rota
    #se não tiver confirmação de email, criamos a entrada no banco de dados e retornamos o token de autenticação (com um Ok: 200?)
    ...

@app.post("/login")
async def login(item: loginUsuario):
    #todo
    #pydantic faz validação automatica dos campos
    #retornamos o token de autenticação (com um Ok: 200?)
    ...