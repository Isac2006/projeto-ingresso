import { useState } from 'react'
import '../App.css'
import Header from '../header.jsx'
import Emalta, { listadeeventos, Carousel } from '../emalta.jsx'

export default function Home(){
  const [eventoSelecionado, setEventoSelecionado] = useState(null)

  const evento = listadeeventos.find(e => e.id === eventoSelecionado)

  return <>
      <Header />

      {eventoSelecionado === null ? (
        <Emalta
          setEventoSelecionado={setEventoSelecionado}
        />
      ) : (
        <div className="evento-selecionado">
          <h1>{evento?.nome}</h1>

          <Carousel imagens={evento?.imagens} nome={evento?.nome} />

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