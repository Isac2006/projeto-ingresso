# meu-projeto

README rápido para rodar o projeto localmente.

## Estrutura
- `src/` — frontend (React + Vite)
- `server/` — backend (Node + Express)
- `public/`, `index.html`, `vite.config.js`, `.env` — raiz

## Requisitos
- Node.js 
- npm

## Instalação
Abra um terminal na raiz do projeto:

```bash
cd "C:\projeto ingresso\meu-projeto"
npm install
```

## Desenvolvimento
Abra dois terminais separados:

- Terminal 1 — frontend (Vite):

```bash
npm run dev
# abre http://localhost:5173 (ou a porta mostrada)
```

- Terminal 2 — backend (nodemon):

```bash
npm run dev:server
# backend em http://localhost:3000
```

API base exemplo: `http://localhost:3000/api`

## Build

```bash
npm run build
```



```
PORT=3000
# DB_URI=...
```

## Observações
- Se preferir separar em dois repositórios, mova `src/` e `server/` para repositórios distintos e crie `package.json` próprios.
- Se a API não estiver respondendo ao fazer requisições do frontend, verifique `src/services/api.js` e ajuste o `baseURL` para `http://localhost:3000/api`.

---
