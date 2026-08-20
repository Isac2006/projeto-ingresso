import { useState } from 'react'
import '../App.css'
import Header from '../header.jsx'
import Emalta, { listadeeventos } from '../emalta.jsx'

export default function Home(){
  const [eventoSelecionado, setEventoSelecionado] = useState(null)

  // Busca o evento completo a partir do ID selecionado
  const evento = listadeeventos.find(e => e.id === eventoSelecionado)

  return <>
      <Header />

      {eventoSelecionado === null ? (
        <Emalta
          setEventoSelecionado={setEventoSelecionado}
        />
      ) : (
        <div className="evento-selecionado">
          <p>Evento ID: {eventoSelecionado}</p>

          <h1>{evento?.nome}</h1>

          <div className="imagens-evento">
            {evento?.imagens.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                alt={`${evento.nome} - imagem ${index + 1}`}
              />
            ))}
          </div>

          <input
            type="number"
            placeholder="Quantidade de ingressos"
            className="input-quantidade"
          />

          <button id="comprar" className="buttoneventos">
            Comprar
          </button>

          <button onClick={() => setEventoSelecionado(null)} className="buttoneventos">
            Voltar
          </button>

          <h3>Histórico de compra:</h3>

          <div>
            data da compra, quantidade de ingressos
          </div>
        </div>
      )}
    </>
}