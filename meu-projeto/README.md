# meu-projeto

README rápido para rodar o projeto localmente.

## Estrutura
- `frontend/` — frontend (React + Vite)
- `backend/` — backend (FastAPI + Uvicorn)
- `run.py` — sobe frontend e backend juntos, na raiz

## Requisitos
- Node.js e npm
- Python 3

## Instalação

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd backend
python -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Desenvolvimento

Abra dois terminais separados:

- Terminal 1 — frontend (Vite):
```bash
cd frontend
npm run dev
# abre http://localhost:5173 (ou a porta mostrada)
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

## Build

```bash
cd frontend
npm run build
```

## Observações
- Se a API não estiver respondendo às requisições do frontend, verifique `frontend/src/services/api.js` e confirme que o `baseURL` aponta para `http://localhost:8000`.
- O CORS no backend (`backend/main.py`) está liberado apenas para `http://localhost:5173`. Se o Vite subir em outra porta na sua máquina, ajuste `allow_origins` em `backend/main.py`.

---