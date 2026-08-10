# meu-projeto

README rápido para rodar o projeto localmente.

## Estrutura
- `src/` — frontend (React + Vite)
- `server/` — backend (Node + Express)
- `public/`, `index.html`, `vite.config.js`, `.env` — raiz

## Requisitos
- Node.js (v16+ recomendado)
- npm

## Instalação
Abra um terminal na raiz do projeto:

```bash
cd "C:\Users\isac\Downloads\projeto ingresso\meu-projeto"
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

## Variáveis de ambiente
Edite o arquivo `.env` na raiz (exemplo):

```
PORT=3000
# DB_URI=...
```

## Observações
- Se preferir separar em dois repositórios, mova `src/` e `server/` para repositórios distintos e crie `package.json` próprios.
- Se a API não estiver respondendo ao fazer requisições do frontend, verifique `src/services/api.js` e ajuste o `baseURL` para `http://localhost:3000/api`.

---
Para qualquer dúvida, me diga que eu atualizo este README.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
