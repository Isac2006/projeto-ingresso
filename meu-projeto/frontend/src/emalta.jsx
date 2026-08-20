import './App.css'
export const listadeeventos = [
  {
    id: 1,
    nome: "Evento 1",
    imagens: [
      "/evento1-1.jpg",
      "/evento1-2.jpg",
      "/evento1-3.jpg"
    ]
  },
  {
    id: 2,
    nome: "Evento 2",
    imagens: [
      "/evento2-1.jpg",
      "/evento2-2.jpg"
    ]
  }
]
function Emalta({ setEventoSelecionado }) {



  return (
    <><div className="emalta">
      <div >
        <h1>Em Alta</h1>
      </div>

      <div id="emaltaeventos">

        {listadeeventos.map((evento) => (
    <img
         key={evento.id}
        src={evento.imagens[0]}
         alt={evento.nome}
         onClick={() => setEventoSelecionado(evento.id)}
      />
    ))}
      </div>
      </div>
    </>
  )
}

export default Emalta