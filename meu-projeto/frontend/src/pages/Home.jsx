import { useRef, useState } from 'react'
import '../App.css'
import Header from '../header.jsx'
import Emalta, { listadeeventos, Carousel } from '../emalta.jsx'

export default function Home() {

  const [eventoSelecionado, setEventoSelecionado] = useState(null)
  const [quantidade, setQuantidade] = useState(1)
  const [compraRealizada, setCompraRealizada] = useState(false)
  const categoriasRefs = useRef({})

  const moverCategoria = (categoria, distancia) => {
    categoriasRefs.current[categoria]?.scrollBy({
      left: distancia,
      behavior: 'smooth'
    })
  }

  const evento = listadeeventos.find(
    e => e.id === eventoSelecionado
  )

  const categorias = [
    "Cinema",
    "Comédia",
    "Cultura",
    "Dança",
    "Festival",
    "Gastronomia",
    "Música",
    "Tecnologia"
  ]
function converterData(data) {
  const [dia, mes, ano] = data.split("/");

  return new Date(ano, mes - 1, dia);
}
  return (
    <>
      <Header />

      {eventoSelecionado === null ? (

        <>
          <Emalta
            setEventoSelecionado={setEventoSelecionado}
          />

          <div className="categorias">

            {categorias.map((categoria) => (

              <div className="categoria" key={categoria}>

                <h1>{categoria}</h1>

                <div className="carrossel-categoria">
                  <button
                    className="categoria-seta categoria-seta--prev"
                    onClick={() => moverCategoria(categoria, -580)}
                    aria-label={`Voltar eventos de ${categoria}`}
                  >
                    ‹
                  </button>

                  <div
                    className="eventos"
                    ref={(elemento) => {
                      categoriasRefs.current[categoria] = elemento
                    }}
                  >

                  {listadeeventos
                    .filter(
                      (evento) =>
                        (evento.categoria === categoria) && (converterData(evento.data) >= new Date())
                    )
                    .map((evento) => (

                      <div
                        className="evento"
                        key={evento.id}
                      >

                        <img
                          src={evento.imagens[0]}
                          alt={evento.nome}
                        />

                        <h2>{evento.nome}</h2>

                        <p>{evento.data}</p>

                        <p>{evento.horario}</p>

                        <p>
                          R$ {evento.preco.toFixed(2)}
                        </p>

                        <button
                          onClick={() =>
                            setEventoSelecionado(evento.id)
                          }
                        >
                          Ver evento
                        </button>

                      </div>

                    ))}

                  </div>

                  <button
                    className="categoria-seta categoria-seta--next"
                    onClick={() => moverCategoria(categoria, 580)}
                    aria-label={`Avançar eventos de ${categoria}`}
                  >
                    ›
                  </button>
                </div>

              </div>

            ))}

          </div>
        </>

      ) : (

        <div className="evento-selecionado">
          <button
            className="voltar-evento"
            onClick={() => setEventoSelecionado(null)}
          >
            ← Voltar para eventos
          </button>

          <div className="evento-compra">
            <div className="evento-galeria">
              <Carousel
                imagens={evento?.imagens}
                nome={evento?.nome}
              />
            </div>

            <div className="painel-compra">
              <span className="categoria-evento">{evento?.categoria}</span>
              <h1>{evento?.nome}</h1>
              <p className="avaliacao-evento">★ Evento confirmado e venda segura</p>
              <div className="linha-separadora" />

              <span className="rotulo-preco">A partir de</span>
              <strong className="preco-evento">R$ {evento?.preco.toFixed(2)}</strong>

              <div className="informacoes-evento">
                <p><strong>Quando</strong>{evento?.data} às {evento?.horario}</p>
                <p><strong>Onde</strong>{evento?.local}, {evento?.cidade}</p>
                <p><strong>Ingressos</strong>{evento?.ingressosDisponiveis} disponíveis</p>
              </div>

              <label htmlFor="quantidade">Quantidade</label>
              <input
                id="quantidade"
                type="number"
                min="1"
                max={evento?.ingressosDisponiveis}
                value={quantidade}
                onChange={(e) => {
                  const valor = Number(e.target.value)
                  const limite = evento?.ingressosDisponiveis ?? 1

                  setQuantidade(
                    Number.isFinite(valor)
                      ? Math.min(Math.max(1, valor), limite)
                      : 1
                  )
                }}
                className="input-quantidade"
              />

              <div className="resumo-compra">
                <span>Total</span>
                <strong>R$ {(evento?.preco * quantidade).toFixed(2)}</strong>
              </div>

              <button
                id="comprar"
                className="botao-comprar"
                onClick={() => setCompraRealizada(true)}
              >
                Comprar ingressos
              </button>
              <p className="compra-segura">Compra protegida · ingresso digital</p>
              {compraRealizada && (
                <p className="mensagem-compra">Pedido iniciado com sucesso.</p>
              )}
            </div>
          </div>

          <div className="descricao-evento">
            <h3>Sobre o evento</h3>
            <p>{evento?.descricao}</p>
          </div>
        </div>

      )}

    </>
  )
}