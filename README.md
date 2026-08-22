# 🎟️ Sistema de Venda e Gerenciamento de Ingressos para Eventos

Sistema web para venda e gerenciamento de ingressos para eventos, permitindo que compradores adquiram e acompanhem seus ingressos, enquanto anunciantes podem criar, gerenciar e acompanhar o desempenho de seus eventos.

## 📄 Documentação

Materiais utilizados para definição, planejamento e desenvolvimento do projeto:
- [Documentação](https://docs.google.com/document/d/1-Fgc1P54GTgCeLKJAxpoOEAwDf5pV5d1WfiDWcu73RY/edit?usp=sharing)
- [Figma](https://www.figma.com/design/kPn7GelPrxG1D7x9uveDCw/Untitled?node-id=0-1&t=GvICJC9mQ9mvh8N6-1)

## 🛠️ Tecnologias

- Front-end: React + Vite
- Back-end: Python + FastAPI + Uvicorn

## 📁 Estrutura

```
meu-projeto/
├── frontend/ # Aplicação frontend (React + Vite) 
├── backend/ # API backend (FastAPI + Uvicorn) 
├── run.py # Executa frontend e backend juntos 
└── README.md
```

## ✅ Requisitos

Antes de executar o projeto, certifique-se de ter instalado: Node.js e npm, Python 3 e Git

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/Isac2006/projeto-ingresso.git
cd meu-projeto
```

2. Instale as dependências do front-end
```bash
cd frontend
npm install
```

3. Configure o back-end
```bash
cd backend
python -m venv .venv
source .venv/bin/activate # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## ▶️ Executando o projeto

Abra dois terminais separados:

- Terminal 1 — frontend (Vite):
```bash
cd frontend
npm run dev
# frontend em http://localhost:5173 (ou a porta mostrada)
```

- Terminal 2 — backend (Uvicorn):
```bash
cd backend
source .venv/bin/activate
uvicorn main:app --reload
# backend em http://localhost:8000
```

Ou, para subir os dois de uma vez a partir da raiz:
```bash
python run.py
```

Documentação interativa da API (Swagger): `http://localhost:8000/docs`

## 📦 Build

```bash
cd frontend
npm run build
```

### Observações
- Se a API não estiver respondendo às requisições do frontend, verifique `frontend/src/services/api.js` e confirme que o `baseURL` aponta para `http://localhost:8000`.
- O CORS no backend (`backend/main.py`) está liberado apenas para `http://localhost:5173`. Se o Vite subir em outra porta na sua máquina, ajuste `allow_origins` em `backend/main.py`.

## 🌿 Git Workflow

Para manter o histórico do projeto organizado, cada nova alteração deve ser desenvolvida em uma **branch própria**.

### 1. Atualize a main

Antes de começar uma nova tarefa faça:
```bash
git checkout main
git pull origin main
```

### 2. Crie uma branch

As branches devem seguir uma convenção de nomenclatura baseada no tipo da alteração:
- feature/nome-da-feature
- fix/nome-do-problema
- refactor/nome-do-refactor
- docs/nome-da-documentacao
- chore/nome-da-tarefa

Para criar uma branch, faça `git checkout -b feature/cadastro-de-eventos`.

Para enviar sua branch para o GitHub, faça `git push origin feature/cadastro-de-eventos`.

### 3. Atualize sua branch com a main

Antes de abrir o Pull Request (PR), **traga as últimas alterações da `main` para sua branch** e resolva eventuais conflitos localmente:
```bash
git checkout feature/cadastro-de-eventos
git fetch origin
git merge origin/main
```
Se houver conflitos, resolva-os, teste o projeto novamente e depois:
```bash
git add .
git commit -m "merge: atualiza branch com a main"
git push origin feature/cadastro-de-eventos
```

### 4. Abra um Pull Request (PR)

Após finalizar a tarefa e garantir que sua branch está atualizada com a main:
- Abra um Pull Request (PR) no GitHub;
- Selecione a branch **main** como destino;
- Descreva as alterações feitas e, se possível, vincule a issue relacionada.
- Aguarde para a aprovação de alguém do grupo.

## 👥 Colaboradores

| Nome | GitHub |
|------|--------|
| Daniel | [@dlmeneguin](https://github.com/dlmeneguin)
| Gabriela | [@gabikwong](https://github.com/gabikwong) |
| Igor | [@Far1a1](https://github.com/Far1a1) |
| Isabela | [@isaaoki](https://github.com/isaaoki) |
| Isac | [@Isac2006](https://github.com/Isac2006) |
| Jaime | [@Jaime-Cg-si](https://github.com/jaime-cg-si) |
| Pedro | [@pacinipedro](https://github.com/pacinipedro) |

Este projeto foi desenvolvido para o Onboarding da entidade USPCodeLab.

---