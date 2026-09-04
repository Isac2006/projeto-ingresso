import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Login from './pages/Login.jsx'

function App() {
  const [pagina, setPagina] = useState('home')

  return (
    <>
      {pagina === 'home' && <Home />}
      {pagina === 'cadastro' && <Cadastro />}
      {pagina === 'login' && <Login />}

      <button onClick={() => setPagina('home')}>
        Home
      </button>

      <button onClick={() => setPagina('cadastro')}>
        Cadastro
      </button>

      <button onClick={() => setPagina('login')}>
        Login
      </button>
    </>
  )
}

export default App