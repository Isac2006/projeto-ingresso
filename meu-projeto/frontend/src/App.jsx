import { useState } from 'react'
import './App.css'
import Header from './header.jsx'
import Emalta, { listadeeventos } from './emalta.jsx'

function App() {
  const [eventoSelecionado, setEventoSelecionado] = useState(null)

  const evento = listadeeventos.find(
    (evento) => evento.id === eventoSelecionado
  )

  return (
    <>
      <Header />

      {eventoSelecionado === null ? (
        <Emalta
          setEventoSelecionado={setEventoSelecionado}
        />
      ) : (
        <div>
          <p>Evento ID: {eventoSelecionado}</p>

          <h1>{evento?.nome}</h1>

          {/* Todas as imagens do evento */}
          <div className="imagens-evento">
            {evento?.imagens.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                alt={`${evento.nome} - imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Quantidade de ingressos */}
          <input
            type="number"
            placeholder="Quantidade de ingressos"
          />

          <button id="comprar">
            Comprar
          </button>

          {/* Voltar para Em Alta */}
          <button onClick={() => setEventoSelecionado(null)}>
            Voltar
          </button>

          <h3>Histórico de compra:</h3>

          <div>
            data da compra, quantidade de ingressos
          </div>
        </div>
      )}
    </>
  )
}

export default App