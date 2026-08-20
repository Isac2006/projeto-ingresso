import React from "react";
import '../App.css'


export default function Cadastro(){
  return( 
  <div className="cadastro">
  <input
    type="text"
    className="nome"
    placeholder="Nome Completo"
  />

  <input
    type="email"
    className="email"
    placeholder="Email"
  />

  <input
    type="date"
    className="date"
  />

  <input
    type="password"
    className="password"
    placeholder="Senha"
  />

  <input
    type="password"
    className="confirmar-password"
    placeholder="Confirmar Senha"
  />

  <button type="submit">
    Cadastrar
  </button>
</div>
  )
}
