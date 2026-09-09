import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

import Home from './pages/Home.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Login from './pages/Login.jsx'
import ConfiguracoesUsuario from './pages/ConfiguracoesUsuario.jsx'

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/configuracoes" element={<ConfiguracoesUsuario />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App