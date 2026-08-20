import React from 'react'
import '../App.css'



export default function Login(){
  return  <div className="login">
    <h1>Login</h1>

    <input
      type="email"
      className="email"
      placeholder="Email"
    />

    <input
      type="password"
      className="password"
      placeholder="Senha"
    />

    <button>Entrar</button>
  </div>

}
