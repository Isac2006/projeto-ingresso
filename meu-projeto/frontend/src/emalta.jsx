import { useState } from 'react'
import './App.css'

export const listadeeventos = [
  {
    id: 1,
    nome: "Festival de Música Urbana",
    categoria: "Música",
    descricao:
      "Uma noite especial com grandes artistas da música urbana, reunindo rap, trap, hip hop e outros estilos.",
    data: "15/09/2026",
    horario: "19:00",
    local: "Arena Central",
    cidade: "São Paulo - SP",
    preco: 80.00,
    ingressosDisponiveis: 350,
    imagens: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 2,
    nome: "Festival Gastronômico",
    categoria: "Gastronomia",
    descricao:
      "Uma experiência gastronômica com comidas de diferentes regiões, chefs convidados e música ao vivo.",
    data: "20/09/2026",
    horario: "12:00",
    local: "Parque das Flores",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 500,
    imagens: [
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 3,
    nome: "Festival de Rock",
    categoria: "Música",
    descricao:
      "Um grande encontro para os amantes do rock com bandas independentes e muita música ao vivo.",
    data: "27/09/2026",
    horario: "18:00",
    local: "Espaço Rock",
    cidade: "São Paulo - SP",
    preco: 65.00,
    ingressosDisponiveis: 280,
    imagens: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 4,
    nome: "Feira de Tecnologia",
    categoria: "Tecnologia",
    descricao:
      "Evento dedicado à tecnologia, inovação e desenvolvimento, com palestras e experiências interativas.",
    data: "03/10/2026",
    horario: "10:00",
    local: "Centro de Convenções",
    cidade: "São Paulo - SP",
    preco: 45.00,
    ingressosDisponiveis: 750,
    imagens: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 5,
    nome: "Festival de Dança",
    categoria: "Dança",
    descricao:
      "Apresentações de dança contemporânea, urbana, ballet e outros estilos com grupos e artistas convidados.",
    data: "10/10/2026",
    horario: "17:00",
    local: "Teatro Municipal",
    cidade: "São Paulo - SP",
    preco: 50.00,
    ingressosDisponiveis: 200,
    imagens: [
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4e4d7?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 6,
    nome: "Stand Up Comedy Night",
    categoria: "Comédia",
    descricao:
      "Uma noite de muito humor com comediantes convidados apresentando seus melhores números de stand up.",
    data: "17/10/2026",
    horario: "20:00",
    local: "Teatro Central",
    cidade: "São Paulo - SP",
    preco: 55.00,
    ingressosDisponiveis: 180,
    imagens: [
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587223557154-0e2f09c1e6b6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 7,
    nome: "Festival Eletrônico",
    categoria: "Música",
    descricao:
      "Uma experiência audiovisual com DJs, música eletrônica, iluminação e uma grande estrutura.",
    data: "24/10/2026",
    horario: "21:00",
    local: "Arena Music",
    cidade: "São Paulo - SP",
    preco: 120.00,
    ingressosDisponiveis: 600,
    imagens: [
      "https://images.unsplash.com/photo-1571266028243-d220c8f6d1f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571266028243-d220c8f6d1f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 8,
    nome: "Feira de Arte e Cultura",
    categoria: "Cultura",
    descricao:
      "Uma feira reunindo artistas, artesãos e produtores culturais com exposições e apresentações.",
    data: "31/10/2026",
    horario: "11:00",
    local: "Centro Cultural",
    cidade: "São Paulo - SP",
    preco: 20.00,
    ingressosDisponiveis: 900,
    imagens: [
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 9,
    nome: "Festival de Cinema",
    categoria: "Cinema",
    descricao:
      "Mostra especial de filmes nacionais e internacionais, seguida de debates e encontros.",
    data: "07/11/2026",
    horario: "14:00",
    local: "Cinemateca Central",
    cidade: "São Paulo - SP",
    preco: 30.00,
    ingressosDisponiveis: 400,
    imagens: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 10,
    nome: "Grande Festival de Verão",
    categoria: "Festival",
    descricao:
      "Um grande festival reunindo música, gastronomia, cultura e entretenimento para toda a família.",
    data: "21/11/2026",
    horario: "15:00",
    local: "Parque Estadual",
    cidade: "São Paulo - SP",
    preco: 90.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

// ---- Componente de carrossel ----
function Carousel({ imagens, nome }) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % imagens.length)
  const prev = () => setIndex((i) => (i - 1 + imagens.length) % imagens.length)

  return (
    <div className="carousel-wrapper">
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {imagens.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${nome} - imagem ${i + 1}`}
              className="carousel-slide"
            />
          ))}
        </div>

        {imagens.length > 1 && (
          <>
            <button
              onClick={prev}
              className="carousel-arrow carousel-arrow--prev"
              aria-label="Imagem anterior"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="carousel-arrow carousel-arrow--next"
              aria-label="Próxima imagem"
            >
              ›
            </button>
          </>
        )}
      </div>

      {imagens.length > 1 && (
        <div className="carousel-dots">
          {imagens.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir para imagem ${i + 1}`}
              className={`carousel-dot ${i === index ? "carousel-dot--active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ---- Componente Em Alta (lista de eventos) ----
function Emalta({ setEventoSelecionado }) {
  return (
    <>
      <div className="emalta">

        <div>
          <h1>Em Alta</h1>
        </div>

        <div id="emaltaeventos">
          {listadeeventos.map((evento) => (
            <div
              key={evento.id}
              className="card-evento"
              onClick={() => setEventoSelecionado(evento.id)}
            >
              <img
                src={evento.imagens[0]}
                alt={evento.nome}
                className="imagem-em-alta"
              />

              <h3>{evento.nome}</h3>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export { Carousel }
export default Emalta