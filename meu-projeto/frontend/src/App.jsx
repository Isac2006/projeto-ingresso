import { useState } from 'react'
import './App.css'
import Home from './pages/home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Login from './pages/Login.jsx'
import MeusEventos from './pages/MeusEventos.jsx'

function App() {
  const [pagina, setPagina] = useState('home')

  return (
    <>
      {pagina === 'home' && <Home />}
      {pagina === 'cadastro' && <Cadastro />}
      {pagina === 'login' && <Login />}
      {pagina === 'meus-eventos' && <MeusEventos />}

      <button onClick={() => setPagina('home')}>
        Home
      </button>

      <button onClick={() => setPagina('cadastro')}>
        Cadastro
      </button>

      <button onClick={() => setPagina('login')}>
        Login
      </button>

      <button onClick={() => setPagina('meus-eventos')}>
        Meus Eventos
      </button>
    </>
  )
}

export default App