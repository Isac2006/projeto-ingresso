import { useEffect, useState } from 'react'
import './App.css'

export const listadeeventos = [
  {
    id: 1,
    nome: "Festival de Cinema Nacional",
    categoria: "Cinema",
    descricao: "Uma mostra especial dedicada ao cinema brasileiro, reunindo filmes de diferentes gêneros e produções independentes.",
    data: "12/09/2025",
    horario: "18:00",
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
    id: 2,
    nome: "Noite da Comédia",
    categoria: "Comédia",
    descricao: "Uma noite especial de stand up comedy com humoristas convidados e apresentações repletas de histórias e diversão.",
    data: "19/09/2026",
    horario: "20:00",
    local: "Teatro Central",
    cidade: "São Paulo - SP",
    preco: 55.00,
    ingressosDisponiveis: 250,
    imagens: [
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587223557154-0e2f09c1e6b6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 3,
    nome: "Feira Cultural de São Paulo",
    categoria: "Cultura",
    descricao: "Evento que reúne exposições, artesanato, apresentações culturais e manifestações artísticas de diferentes regiões.",
    data: "26/09/2026",
    horario: "11:00",
    local: "Centro Cultural",
    cidade: "São Paulo - SP",
    preco: 20.00,
    ingressosDisponiveis: 800,
    imagens: [
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 4,
    nome: "Festival Internacional de Dança",
    categoria: "Dança",
    descricao: "Apresentações de ballet, dança contemporânea, dança urbana e outros estilos com grupos e artistas convidados.",
    data: "03/10/2026",
    horario: "17:00",
    local: "Teatro Municipal",
    cidade: "São Paulo - SP",
    preco: 50.00,
    ingressosDisponiveis: 300,
    imagens: [
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4e4d7?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 5,
    nome: "Grande Festival de Música",
    categoria: "Festival",
    descricao: "Um grande evento reunindo música, gastronomia, cultura e entretenimento em uma experiência para toda a família.",
    data: "10/10/2026",
    horario: "15:00",
    local: "Parque Estadual",
    cidade: "São Paulo - SP",
    preco: 90.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 6,
    nome: "Festival Gastronômico Internacional",
    categoria: "Gastronomia",
    descricao: "Uma experiência gastronômica com pratos de diferentes países, chefs convidados e diversas opções de comidas.",
    data: "17/10/2026",
    horario: "12:00",
    local: "Parque das Flores",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 600,
    imagens: [
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 7,
    nome: "Festival de Música Urbana",
    categoria: "Música",
    descricao: "Uma grande noite dedicada à música urbana com apresentações de rap, trap, hip hop e artistas independentes.",
    data: "24/10/2026",
    horario: "19:00",
    local: "Arena Central",
    cidade: "São Paulo - SP",
    preco: 80.00,
    ingressosDisponiveis: 350,
    imagens: [
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 8,
    nome: "Expo Tecnologia e Inovação",
    categoria: "Tecnologia",
    descricao: "Evento dedicado à tecnologia e inovação, com palestras, demonstrações, experiências interativas e novidades.",
    data: "31/10/2026",
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
    id: 9,
    nome: "Mostra de Cinema Internacional",
    categoria: "Cinema",
    descricao: "Uma programação especial com filmes internacionais, sessões especiais, debates e encontros com profissionais do cinema.",
    data: "07/11/2026",
    horario: "14:00",
    local: "Cinemateca Central",
    cidade: "São Paulo - SP",
    preco: 30.00,
    ingressosDisponiveis: 450,
    imagens: [
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 10,
    nome: "Festival de Cultura e Gastronomia",
    categoria: "Cultura",
    descricao: "Um encontro cultural com apresentações artísticas, música, culinária regional, exposições e atividades para o público.",
    data: "14/11/2026",
    horario: "13:00",
    local: "Parque da Cidade",
    cidade: "São Paulo - SP",
    preco: 25.00,
    ingressosDisponiveis: 900,
    imagens: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 11,
    nome: "Mostra de Filmes Brasileiros",
    categoria: "Cinema",
    descricao: "Exibição de produções brasileiras recentes acompanhadas de debates com diretores e convidados.",
    data: "21/11/2026",
    horario: "18:30",
    local: "Cine Belas Artes",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 320,
    imagens: [
      "https://images.unsplash.com/photo-1518930259200-5c3f8f1e6f4c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 12,
    nome: "Festival de Curtas-Metragens",
    categoria: "Cinema",
    descricao: "Uma seleção de curtas-metragens nacionais e internacionais de novos cineastas.",
    data: "28/11/2026",
    horario: "16:00",
    local: "Cine Cultura",
    cidade: "São Paulo - SP",
    preco: 25.00,
    ingressosDisponiveis: 280,
    imagens: [
      "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 13,
    nome: "Cinema ao Ar Livre",
    categoria: "Cinema",
    descricao: "Sessões de cinema ao ar livre com clássicos e filmes contemporâneos para toda a família.",
    data: "05/12/2026",
    horario: "19:30",
    local: "Parque Ibirapuera",
    cidade: "São Paulo - SP",
    preco: 15.00,
    ingressosDisponiveis: 1200,
    imagens: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 14,
    nome: "Festival de Cinema de Animação",
    categoria: "Cinema",
    descricao: "Evento dedicado à animação com sessões especiais, oficinas e apresentações de artistas.",
    data: "12/12/2026",
    horario: "15:00",
    local: "Centro de Artes",
    cidade: "São Paulo - SP",
    preco: 28.00,
    ingressosDisponiveis: 500,
    imagens: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 15,
    nome: "Noite do Stand Up",
    categoria: "Comédia",
    descricao: "Apresentações de comediantes convidados com diferentes estilos de humor e muita interação com o público.",
    data: "19/12/2026",
    horario: "21:00",
    local: "Teatro das Artes",
    cidade: "São Paulo - SP",
    preco: 60.00,
    ingressosDisponiveis: 220,
    imagens: [
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587223557154-0e2f09c1e6b6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 16,
    nome: "Festival do Humor Brasileiro",
    categoria: "Comédia",
    descricao: "Uma programação especial com humoristas de várias regiões do Brasil.",
    data: "09/01/2027",
    horario: "20:00",
    local: "Teatro Municipal",
    cidade: "São Paulo - SP",
    preco: 65.00,
    ingressosDisponiveis: 350,
    imagens: [
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587223557154-0e2f09c1e6b6?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 17,
    nome: "Comédia em Família",
    categoria: "Comédia",
    descricao: "Espetáculo de humor para toda a família com histórias do cotidiano.",
    data: "16/01/2027",
    horario: "18:00",
    local: "Teatro Central",
    cidade: "São Paulo - SP",
    preco: 45.00,
    ingressosDisponiveis: 300,
    imagens: [
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 18,
    nome: "Festival de Improviso",
    categoria: "Comédia",
    descricao: "Uma noite de improvisação teatral com desafios e participação da plateia.",
    data: "23/01/2027",
    horario: "20:30",
    local: "Espaço Cultural Central",
    cidade: "São Paulo - SP",
    preco: 40.00,
    ingressosDisponiveis: 240,
    imagens: [
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 19,
    nome: "Comédia na Praça",
    categoria: "Comédia",
    descricao: "Apresentação gratuita e descontraída com novos talentos da comédia.",
    data: "30/01/2027",
    horario: "17:00",
    local: "Praça Central",
    cidade: "São Paulo - SP",
    preco: 0.00,
    ingressosDisponiveis: 1500,
    imagens: [
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 20,
    nome: "Festival Internacional de Humor",
    categoria: "Comédia",
    descricao: "Humoristas nacionais e internacionais se apresentam em uma noite especial.",
    data: "06/02/2027",
    horario: "20:00",
    local: "Arena Paulista",
    cidade: "São Paulo - SP",
    preco: 75.00,
    ingressosDisponiveis: 700,
    imagens: [
      "https://images.unsplash.com/photo-1587223557154-0e2f09c1e6b6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 21,
    nome: "Semana da Cultura Brasileira",
    categoria: "Cultura",
    descricao: "Uma semana dedicada à cultura brasileira com exposições, música, arte e apresentações.",
    data: "13/02/2027",
    horario: "10:00",
    local: "Centro Cultural",
    cidade: "São Paulo - SP",
    preco: 20.00,
    ingressosDisponiveis: 900,
    imagens: [
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 22,
    nome: "Mostra de Arte Contemporânea",
    categoria: "Cultura",
    descricao: "Exposição reunindo artistas contemporâneos e diferentes linguagens artísticas.",
    data: "20/02/2027",
    horario: "11:00",
    local: "Museu de Arte Moderna",
    cidade: "São Paulo - SP",
    preco: 25.00,
    ingressosDisponiveis: 600,
    imagens: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 23,
    nome: "Feira de Artesanato",
    categoria: "Cultura",
    descricao: "Feira com artesanato, produtos regionais e apresentações culturais.",
    data: "27/02/2027",
    horario: "09:00",
    local: "Parque da Cidade",
    cidade: "São Paulo - SP",
    preco: 10.00,
    ingressosDisponiveis: 2000,
    imagens: [
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 24,
    nome: "Festival de Cultura Popular",
    categoria: "Cultura",
    descricao: "Apresentações de manifestações populares, danças, música e tradições brasileiras.",
    data: "06/03/2027",
    horario: "14:00",
    local: "Centro de Eventos",
    cidade: "São Paulo - SP",
    preco: 15.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 25,
    nome: "Exposição de Fotografia Urbana",
    categoria: "Cultura",
    descricao: "Exposição fotográfica retratando diferentes paisagens e histórias das grandes cidades.",
    data: "13/03/2027",
    horario: "10:00",
    local: "Galeria Central",
    cidade: "São Paulo - SP",
    preco: 18.00,
    ingressosDisponiveis: 450,
    imagens: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 26,
    nome: "Festival de Ballet",
    categoria: "Dança",
    descricao: "Apresentações clássicas de ballet com grupos profissionais e jovens talentos.",
    data: "20/03/2027",
    horario: "19:00",
    local: "Teatro Municipal",
    cidade: "São Paulo - SP",
    preco: 55.00,
    ingressosDisponiveis: 400,
    imagens: [
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4e4d7?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 27,
    nome: "Mostra de Dança Contemporânea",
    categoria: "Dança",
    descricao: "Espetáculos contemporâneos explorando diferentes movimentos e expressões corporais.",
    data: "27/03/2027",
    horario: "20:00",
    local: "Teatro das Artes",
    cidade: "São Paulo - SP",
    preco: 45.00,
    ingressosDisponiveis: 300,
    imagens: [
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4e4d7?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 28,
    nome: "Festival de Dança Urbana",
    categoria: "Dança",
    descricao: "Competições e apresentações de hip hop, street dance e dança urbana.",
    data: "03/04/2027",
    horario: "16:00",
    local: "Arena Central",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 800,
    imagens: [
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 29,
    nome: "Noite de Dança Latina",
    categoria: "Dança",
    descricao: "Uma noite especial com apresentações e aulas de salsa, tango, bachata e outros ritmos.",
    data: "10/04/2027",
    horario: "19:30",
    local: "Espaço Cultural",
    cidade: "São Paulo - SP",
    preco: 40.00,
    ingressosDisponiveis: 500,
    imagens: [
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4e4d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 30,
    nome: "Festival de Danças Brasileiras",
    categoria: "Dança",
    descricao: "Apresentações de frevo, samba, forró, maracatu e outras danças tradicionais.",
    data: "17/04/2027",
    horario: "15:00",
    local: "Parque Cultural",
    cidade: "São Paulo - SP",
    preco: 25.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4e4d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 31,
    nome: "Festival Primavera Cultural",
    categoria: "Festival",
    descricao: "Um grande encontro cultural com música, arte, gastronomia e atividades ao ar livre.",
    data: "24/04/2027",
    horario: "12:00",
    local: "Parque Estadual",
    cidade: "São Paulo - SP",
    preco: 70.00,
    ingressosDisponiveis: 1500,
    imagens: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 32,
    nome: "Festival das Cores",
    categoria: "Festival",
    descricao: "Evento ao ar livre com música, arte, performances e experiências visuais.",
    data: "01/05/2027",
    horario: "14:00",
    local: "Parque Central",
    cidade: "São Paulo - SP",
    preco: 65.00,
    ingressosDisponiveis: 2000,
    imagens: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 33,
    nome: "Festival de Verão",
    categoria: "Festival",
    descricao: "Festival com música, esportes, gastronomia e diversas atrações para o público.",
    data: "08/05/2027",
    horario: "11:00",
    local: "Parque das Águas",
    cidade: "São Paulo - SP",
    preco: 85.00,
    ingressosDisponiveis: 1800,
    imagens: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 34,
    nome: "Festival de Inverno",
    categoria: "Festival",
    descricao: "Festival com música, gastronomia, arte e atrações especiais durante o inverno.",
    data: "15/05/2027",
    horario: "13:00",
    local: "Centro de Eventos",
    cidade: "São Paulo - SP",
    preco: 60.00,
    ingressosDisponiveis: 1200,
    imagens: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 35,
    nome: "Festival Família",
    categoria: "Festival",
    descricao: "Um festival pensado para famílias com música, brincadeiras, gastronomia e atrações infantis.",
    data: "22/05/2027",
    horario: "10:00",
    local: "Parque da Família",
    cidade: "São Paulo - SP",
    preco: 30.00,
    ingressosDisponiveis: 2000,
    imagens: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 36,
    nome: "Festival Gastronômico de São Paulo",
    categoria: "Gastronomia",
    descricao: "Chefs renomados apresentam pratos especiais e experiências gastronômicas.",
    data: "29/05/2027",
    horario: "12:00",
    local: "Centro Gastronômico",
    cidade: "São Paulo - SP",
    preco: 45.00,
    ingressosDisponiveis: 700,
    imagens: [
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 37,
    nome: "Festival da Pizza",
    categoria: "Gastronomia",
    descricao: "Uma grande celebração da pizza com diferentes sabores, pizzaiolos e atrações.",
    data: "05/06/2027",
    horario: "18:00",
    local: "Espaço Gastronômico",
    cidade: "São Paulo - SP",
    preco: 40.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 38,
    nome: "Festival do Hambúrguer",
    categoria: "Gastronomia",
    descricao: "Evento reunindo hamburguerias artesanais e receitas exclusivas.",
    data: "12/06/2027",
    horario: "17:00",
    local: "Parque Central",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 900,
    imagens: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 39,
    nome: "Festival do Café",
    categoria: "Gastronomia",
    descricao: "Uma experiência dedicada ao café brasileiro com degustações e workshops.",
    data: "19/06/2027",
    horario: "10:00",
    local: "Centro Cultural",
    cidade: "São Paulo - SP",
    preco: 30.00,
    ingressosDisponiveis: 600,
    imagens: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 40,
    nome: "Festival Sabores do Brasil",
    categoria: "Gastronomia",
    descricao: "Pratos típicos de diferentes regiões brasileiras em um grande encontro gastronômico.",
    data: "26/06/2027",
    horario: "11:00",
    local: "Parque da Cidade",
    cidade: "São Paulo - SP",
    preco: 25.00,
    ingressosDisponiveis: 1500,
    imagens: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 41,
    nome: "Festival de Rock Nacional",
    categoria: "Música",
    descricao: "Grandes bandas e novos artistas do rock brasileiro se apresentam durante uma noite especial.",
    data: "03/07/2027",
    horario: "18:00",
    local: "Arena Central",
    cidade: "São Paulo - SP",
    preco: 90.00,
    ingressosDisponiveis: 1200,
    imagens: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 42,
    nome: "Noite do Samba",
    categoria: "Música",
    descricao: "Uma grande celebração do samba com grupos tradicionais e novos artistas.",
    data: "10/07/2027",
    horario: "19:00",
    local: "Praça da Música",
    cidade: "São Paulo - SP",
    preco: 55.00,
    ingressosDisponiveis: 800,
    imagens: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 43,
    nome: "Festival de Música Eletrônica",
    categoria: "Música",
    descricao: "DJs nacionais e internacionais comandam uma noite de música eletrônica.",
    data: "17/07/2027",
    horario: "21:00",
    local: "Arena Paulista",
    cidade: "São Paulo - SP",
    preco: 110.00,
    ingressosDisponiveis: 1500,
    imagens: [
      "https://images.unsplash.com/photo-1571266028243-d220c9c3b0f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 44,
    nome: "Festival de Jazz",
    categoria: "Música",
    descricao: "Uma programação especial com músicos de jazz brasileiros e internacionais.",
    data: "24/07/2027",
    horario: "18:30",
    local: "Teatro Municipal",
    cidade: "São Paulo - SP",
    preco: 85.00,
    ingressosDisponiveis: 500,
    imagens: [
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 45,
    nome: "Festival de Música Independente",
    categoria: "Música",
    descricao: "Artistas independentes apresentam seus trabalhos em uma programação diversificada.",
    data: "31/07/2027",
    horario: "16:00",
    local: "Centro Cultural",
    cidade: "São Paulo - SP",
    preco: 45.00,
    ingressosDisponiveis: 700,
    imagens: [
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 46,
    nome: "Festival de Música Sertaneja",
    categoria: "Música",
    descricao: "Uma noite dedicada à música sertaneja com artistas convidados.",
    data: "07/08/2027",
    horario: "19:00",
    local: "Arena Sertaneja",
    cidade: "São Paulo - SP",
    preco: 95.00,
    ingressosDisponiveis: 1300,
    imagens: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 47,
    nome: "Festival de Música Pop",
    categoria: "Música",
    descricao: "Uma grande noite com artistas da música pop e apresentações especiais.",
    data: "14/08/2027",
    horario: "20:00",
    local: "Arena Central",
    cidade: "São Paulo - SP",
    preco: 100.00,
    ingressosDisponiveis: 1400,
    imagens: [
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 48,
    nome: "Noite do Hip Hop",
    categoria: "Música",
    descricao: "Evento reunindo rappers, DJs, dançarinos e artistas da cultura hip hop.",
    data: "21/08/2027",
    horario: "18:00",
    local: "Arena Urbana",
    cidade: "São Paulo - SP",
    preco: 60.00,
    ingressosDisponiveis: 900,
    imagens: [
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 49,
    nome: "Festival de Música Acústica",
    categoria: "Música",
    descricao: "Apresentações intimistas de artistas utilizando instrumentos acústicos.",
    data: "28/08/2027",
    horario: "19:30",
    local: "Teatro Central",
    cidade: "São Paulo - SP",
    preco: 50.00,
    ingressosDisponiveis: 400,
    imagens: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 50,
    nome: "Grande Festival Musical",
    categoria: "Música",
    descricao: "Um dos maiores encontros musicais do ano reunindo diferentes estilos.",
    data: "04/09/2027",
    horario: "15:00",
    local: "Parque Estadual",
    cidade: "São Paulo - SP",
    preco: 120.00,
    ingressosDisponiveis: 3000,
    imagens: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 51,
    nome: "Expo Tecnologia 2027",
    categoria: "Tecnologia",
    descricao: "Grande exposição com novidades em tecnologia, inovação e transformação digital.",
    data: "11/09/2027",
    horario: "10:00",
    local: "Centro de Convenções",
    cidade: "São Paulo - SP",
    preco: 50.00,
    ingressosDisponiveis: 2000,
    imagens: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 52,
    nome: "Feira de Startups",
    categoria: "Tecnologia",
    descricao: "Startups apresentam soluções inovadoras e novas tecnologias.",
    data: "18/09/2027",
    horario: "09:00",
    local: "Centro de Inovação",
    cidade: "São Paulo - SP",
    preco: 30.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 53,
    nome: "Congresso de Inteligência Artificial",
    categoria: "Tecnologia",
    descricao: "Palestras e demonstrações sobre inteligência artificial e suas aplicações.",
    data: "25/09/2027",
    horario: "09:00",
    local: "Centro de Convenções",
    cidade: "São Paulo - SP",
    preco: 80.00,
    ingressosDisponiveis: 800,
    imagens: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 54,
    nome: "Feira de Robótica",
    categoria: "Tecnologia",
    descricao: "Exposição de robôs, projetos educacionais e novas tecnologias.",
    data: "02/10/2027",
    horario: "10:00",
    local: "Centro Tecnológico",
    cidade: "São Paulo - SP",
    preco: 25.00,
    ingressosDisponiveis: 1200,
    imagens: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 55,
    nome: "Semana de Programação",
    categoria: "Tecnologia",
    descricao: "Workshops, palestras e atividades práticas sobre programação e desenvolvimento.",
    data: "09/10/2027",
    horario: "09:00",
    local: "Campus Tecnológico",
    cidade: "São Paulo - SP",
    preco: 20.00,
    ingressosDisponiveis: 600,
    imagens: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 56,
    nome: "Hackathon São Paulo",
    categoria: "Tecnologia",
    descricao: "Maratona de programação para criação de projetos inovadores.",
    data: "16/10/2027",
    horario: "08:00",
    local: "Hub de Inovação",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 500,
    imagens: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 57,
    nome: "Feira de Games",
    categoria: "Tecnologia",
    descricao: "Evento dedicado aos jogos digitais, desenvolvimento e cultura gamer.",
    data: "23/10/2027",
    horario: "10:00",
    local: "Expo Center",
    cidade: "São Paulo - SP",
    preco: 65.00,
    ingressosDisponiveis: 2500,
    imagens: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 58,
    nome: "Conferência de Tecnologia",
    categoria: "Tecnologia",
    descricao: "Especialistas discutem as principais tendências tecnológicas do futuro.",
    data: "30/10/2027",
    horario: "09:00",
    local: "Centro de Convenções",
    cidade: "São Paulo - SP",
    preco: 70.00,
    ingressosDisponiveis: 900,
    imagens: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 59,
    nome: "Expo Ciência e Tecnologia",
    categoria: "Tecnologia",
    descricao: "Experimentos, descobertas e tecnologias para aproximar ciência e sociedade.",
    data: "06/11/2027",
    horario: "10:00",
    local: "Museu da Ciência",
    cidade: "São Paulo - SP",
    preco: 20.00,
    ingressosDisponiveis: 1500,
    imagens: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 60,
    nome: "Festival de Inovação Digital",
    categoria: "Tecnologia",
    descricao: "Evento sobre inovação digital, criatividade e novas ferramentas tecnológicas.",
    data: "13/11/2027",
    horario: "13:00",
    local: "Centro de Inovação",
    cidade: "São Paulo - SP",
    preco: 45.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 61,
    nome: "Festival de Cinema Europeu",
    categoria: "Cinema",
    descricao: "Seleção especial de filmes europeus contemporâneos e clássicos.",
    data: "20/11/2027",
    horario: "18:00",
    local: "Cinemateca Central",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 400,
    imagens: [
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 62,
    nome: "Mostra de Documentários",
    categoria: "Cinema",
    descricao: "Documentários sobre sociedade, cultura, ciência e meio ambiente.",
    data: "27/11/2027",
    horario: "14:00",
    local: "Cine Cultura",
    cidade: "São Paulo - SP",
    preco: 25.00,
    ingressosDisponiveis: 350,
    imagens: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 63,
    nome: "Cinema e Música",
    categoria: "Cinema",
    descricao: "Sessões especiais de filmes relacionados à história da música.",
    data: "04/12/2027",
    horario: "19:00",
    local: "Cine Central",
    cidade: "São Paulo - SP",
    preco: 30.00,
    ingressosDisponiveis: 300,
    imagens: [
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 64,
    nome: "Festival de Filmes de Ação",
    categoria: "Cinema",
    descricao: "Uma programação dedicada aos grandes filmes de ação e aventura.",
    data: "11/12/2027",
    horario: "20:00",
    local: "Cinemark Central",
    cidade: "São Paulo - SP",
    preco: 40.00,
    ingressosDisponiveis: 500,
    imagens: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 65,
    nome: "Festival de Teatro e Comédia",
    categoria: "Comédia",
    descricao: "Espetáculos de comédia e teatro apresentados por grupos convidados.",
    data: "18/12/2027",
    horario: "19:00",
    local: "Teatro Municipal",
    cidade: "São Paulo - SP",
    preco: 50.00,
    ingressosDisponiveis: 450,
    imagens: [
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 66,
    nome: "Festival de Humor Universitário",
    categoria: "Comédia",
    descricao: "Novos humoristas apresentam seus trabalhos em uma noite descontraída.",
    data: "08/01/2028",
    horario: "20:00",
    local: "Teatro Universitário",
    cidade: "São Paulo - SP",
    preco: 30.00,
    ingressosDisponiveis: 350,
    imagens: [
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587223557154-0e2f09c1e6b6?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 67,
    nome: "Festival Cultural de Verão",
    categoria: "Cultura",
    descricao: "Atividades culturais, exposições, música e apresentações artísticas.",
    data: "15/01/2028",
    horario: "12:00",
    local: "Parque Cultural",
    cidade: "São Paulo - SP",
    preco: 20.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 68,
    nome: "Mostra de Pintura Brasileira",
    categoria: "Cultura",
    descricao: "Exposição de obras de pintores brasileiros de diferentes gerações.",
    data: "22/01/2028",
    horario: "10:00",
    local: "Galeria Nacional",
    cidade: "São Paulo - SP",
    preco: 25.00,
    ingressosDisponiveis: 500,
    imagens: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 69,
    nome: "Festival de Dança Infantil",
    categoria: "Dança",
    descricao: "Apresentações de dança realizadas por crianças e jovens talentos.",
    data: "29/01/2028",
    horario: "16:00",
    local: "Teatro Infantil",
    cidade: "São Paulo - SP",
    preco: 30.00,
    ingressosDisponiveis: 600,
    imagens: [
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4e4d7?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 70,
    nome: "Festival de Dança de Rua",
    categoria: "Dança",
    descricao: "Competições e apresentações de grupos de dança de rua.",
    data: "05/02/2028",
    horario: "15:00",
    local: "Arena Urbana",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 900,
    imagens: [
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 71,
    nome: "Festival de Dança Experimental",
    categoria: "Dança",
    descricao: "Artistas exploram novas possibilidades de movimento e expressão corporal.",
    data: "12/02/2028",
    horario: "19:00",
    local: "Centro de Artes",
    cidade: "São Paulo - SP",
    preco: 40.00,
    ingressosDisponiveis: 350,
    imagens: [
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4e4d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 72,
    nome: "Festival Cultural Internacional",
    categoria: "Festival",
    descricao: "Culturas de diferentes países reunidas em um grande evento.",
    data: "19/02/2028",
    horario: "11:00",
    local: "Parque Internacional",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 1800,
    imagens: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 73,
    nome: "Festival de Arte e Música",
    categoria: "Festival",
    descricao: "Evento combinando exposições de arte, apresentações musicais e experiências culturais.",
    data: "26/02/2028",
    horario: "14:00",
    local: "Parque das Artes",
    cidade: "São Paulo - SP",
    preco: 50.00,
    ingressosDisponiveis: 1200,
    imagens: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 74,
    nome: "Festival de Comida de Rua",
    categoria: "Gastronomia",
    descricao: "Comidas de rua de diferentes regiões reunidas em um só lugar.",
    data: "04/03/2028",
    horario: "11:00",
    local: "Praça Central",
    cidade: "São Paulo - SP",
    preco: 20.00,
    ingressosDisponiveis: 2000,
    imagens: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 75,
    nome: "Festival de Doces",
    categoria: "Gastronomia",
    descricao: "Evento dedicado aos amantes de doces, chocolates, bolos e sobremesas.",
    data: "11/03/2028",
    horario: "12:00",
    local: "Centro Gastronômico",
    cidade: "São Paulo - SP",
    preco: 25.00,
    ingressosDisponiveis: 900,
    imagens: [
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 76,
    nome: "Festival de Culinária Asiática",
    categoria: "Gastronomia",
    descricao: "Sabores e pratos tradicionais de diferentes países asiáticos.",
    data: "18/03/2028",
    horario: "12:00",
    local: "Espaço Oriental",
    cidade: "São Paulo - SP",
    preco: 40.00,
    ingressosDisponiveis: 700,
    imagens: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 77,
    nome: "Festival de Música Clássica",
    categoria: "Música",
    descricao: "Concertos com grandes obras da música clássica interpretadas por músicos convidados.",
    data: "25/03/2028",
    horario: "19:00",
    local: "Sala São Paulo",
    cidade: "São Paulo - SP",
    preco: 80.00,
    ingressosDisponiveis: 500,
    imagens: [
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 78,
    nome: "Festival de Reggae",
    categoria: "Música",
    descricao: "Uma noite de reggae com bandas e artistas convidados.",
    data: "01/04/2028",
    horario: "18:00",
    local: "Arena Verde",
    cidade: "São Paulo - SP",
    preco: 70.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 79,
    nome: "Festival de Música Latina",
    categoria: "Música",
    descricao: "Uma noite com salsa, merengue, reggaeton e outros ritmos latinos.",
    data: "08/04/2028",
    horario: "19:00",
    local: "Arena Latina",
    cidade: "São Paulo - SP",
    preco: 75.00,
    ingressosDisponiveis: 1100,
    imagens: [
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4e4d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 80,
    nome: "Festival de Música Gospel",
    categoria: "Música",
    descricao: "Grande encontro musical com apresentações de artistas e bandas.",
    data: "15/04/2028",
    horario: "17:00",
    local: "Arena Central",
    cidade: "São Paulo - SP",
    preco: 60.00,
    ingressosDisponiveis: 2000,
    imagens: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 81,
    nome: "Feira de Tecnologia Educacional",
    categoria: "Tecnologia",
    descricao: "Tecnologias e ferramentas digitais voltadas para educação e aprendizagem.",
    data: "22/04/2028",
    horario: "09:00",
    local: "Centro Educacional",
    cidade: "São Paulo - SP",
    preco: 20.00,
    ingressosDisponiveis: 800,
    imagens: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 82,
    nome: "Conferência de Cibersegurança",
    categoria: "Tecnologia",
    descricao: "Especialistas apresentam soluções e estratégias de segurança digital.",
    data: "29/04/2028",
    horario: "09:00",
    local: "Centro de Convenções",
    cidade: "São Paulo - SP",
    preco: 90.00,
    ingressosDisponiveis: 600,
    imagens: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 83,
    nome: "Expo Realidade Virtual",
    categoria: "Tecnologia",
    descricao: "Experiências imersivas utilizando realidade virtual e realidade aumentada.",
    data: "06/05/2028",
    horario: "10:00",
    local: "Centro Tecnológico",
    cidade: "São Paulo - SP",
    preco: 55.00,
    ingressosDisponiveis: 900,
    imagens: [
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 84,
    nome: "Festival de Tecnologia Verde",
    categoria: "Tecnologia",
    descricao: "Tecnologias sustentáveis e soluções inovadoras para o meio ambiente.",
    data: "13/05/2028",
    horario: "10:00",
    local: "Parque Tecnológico",
    cidade: "São Paulo - SP",
    preco: 30.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 85,
    nome: "Mostra de Cinema de Ficção Científica",
    categoria: "Cinema",
    descricao: "Filmes clássicos e contemporâneos de ficção científica.",
    data: "20/05/2028",
    horario: "18:00",
    local: "Cine Futuro",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 450,
    imagens: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 86,
    nome: "Festival de Cinema de Terror",
    categoria: "Cinema",
    descricao: "Uma programação especial para fãs de filmes de suspense e terror.",
    data: "27/05/2028",
    horario: "21:00",
    local: "Cine Horror",
    cidade: "São Paulo - SP",
    preco: 40.00,
    ingressosDisponiveis: 350,
    imagens: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 87,
    nome: "Festival de Cinema Infantil",
    categoria: "Cinema",
    descricao: "Sessões especiais de filmes infantis e animações para toda a família.",
    data: "03/06/2028",
    horario: "14:00",
    local: "Cine Família",
    cidade: "São Paulo - SP",
    preco: 20.00,
    ingressosDisponiveis: 800,
    imagens: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 88,
    nome: "Festival de Gastronomia Vegana",
    categoria: "Gastronomia",
    descricao: "Pratos e receitas veganas preparados por chefs especializados.",
    data: "10/06/2028",
    horario: "11:00",
    local: "Espaço Verde",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 700,
    imagens: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 89,
    nome: "Festival de Churrasco",
    categoria: "Gastronomia",
    descricao: "Evento dedicado ao churrasco com especialistas, cortes especiais e acompanhamentos.",
    data: "17/06/2028",
    horario: "12:00",
    local: "Parque Central",
    cidade: "São Paulo - SP",
    preco: 55.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 90,
    nome: "Festival de Comida Internacional",
    categoria: "Gastronomia",
    descricao: "Pratos típicos de diversos países em uma experiência gastronômica internacional.",
    data: "24/06/2028",
    horario: "12:00",
    local: "Parque Internacional",
    cidade: "São Paulo - SP",
    preco: 40.00,
    ingressosDisponiveis: 1500,
    imagens: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 91,
    nome: "Festival de Música Experimental",
    categoria: "Música",
    descricao: "Artistas exploram novos sons, instrumentos e experiências musicais.",
    data: "01/07/2028",
    horario: "19:00",
    local: "Centro Experimental",
    cidade: "São Paulo - SP",
    preco: 45.00,
    ingressosDisponiveis: 400,
    imagens: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 92,
    nome: "Festival de Música Brasileira",
    categoria: "Música",
    descricao: "Uma celebração da música brasileira com artistas de diferentes estilos.",
    data: "08/07/2028",
    horario: "18:00",
    local: "Parque da Música",
    cidade: "São Paulo - SP",
    preco: 85.00,
    ingressosDisponiveis: 1800,
    imagens: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 93,
    nome: "Festival de Música ao Vivo",
    categoria: "Música",
    descricao: "Uma programação especial com apresentações ao vivo durante todo o dia.",
    data: "15/07/2028",
    horario: "14:00",
    local: "Parque Estadual",
    cidade: "São Paulo - SP",
    preco: 75.00,
    ingressosDisponiveis: 2000,
    imagens: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 94,
    nome: "Festival de Inovação e Futuro",
    categoria: "Tecnologia",
    descricao: "Especialistas apresentam tecnologias que podem transformar o futuro.",
    data: "22/07/2028",
    horario: "10:00",
    local: "Centro de Convenções",
    cidade: "São Paulo - SP",
    preco: 60.00,
    ingressosDisponiveis: 1000,
    imagens: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 95,
    nome: "Feira de Eletrônicos",
    categoria: "Tecnologia",
    descricao: "Exposição de novos dispositivos, computadores, acessórios e eletrônicos.",
    data: "29/07/2028",
    horario: "10:00",
    local: "Expo Center",
    cidade: "São Paulo - SP",
    preco: 30.00,
    ingressosDisponiveis: 2000,
    imagens: [
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 96,
    nome: "Festival de Cultura Digital",
    categoria: "Tecnologia",
    descricao: "Tecnologia, arte digital, criatividade e inovação reunidas em um grande evento.",
    data: "05/08/2028",
    horario: "13:00",
    local: "Centro Digital",
    cidade: "São Paulo - SP",
    preco: 40.00,
    ingressosDisponiveis: 1200,
    imagens: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 97,
    nome: "Festival de Arte Urbana",
    categoria: "Cultura",
    descricao: "Grafite, música, dança e outras manifestações da cultura urbana.",
    data: "12/08/2028",
    horario: "14:00",
    local: "Centro Urbano",
    cidade: "São Paulo - SP",
    preco: 15.00,
    ingressosDisponiveis: 1300,
    imagens: [
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 98,
    nome: "Festival de Gastronomia Brasileira",
    categoria: "Gastronomia",
    descricao: "Uma grande celebração dos sabores e ingredientes das diferentes regiões do Brasil.",
    data: "19/08/2028",
    horario: "12:00",
    local: "Parque Gastronômico",
    cidade: "São Paulo - SP",
    preco: 35.00,
    ingressosDisponiveis: 1800,
    imagens: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 99,
    nome: "Grande Festival Cultural",
    categoria: "Festival",
    descricao: "Um grande encontro reunindo cultura, música, gastronomia, arte e entretenimento.",
    data: "26/08/2028",
    horario: "12:00",
    local: "Parque Estadual",
    cidade: "São Paulo - SP",
    preco: 80.00,
    ingressosDisponiveis: 2500,
    imagens: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    id: 100,
    nome: "Festival Internacional de Eventos",
    categoria: "Festival",
    descricao: "Grande evento de encerramento reunindo música, cultura, gastronomia, tecnologia e entretenimento.",
    data: "02/09/2028",
    horario: "15:00",
    local: "Mega Arena São Paulo",
    cidade: "São Paulo - SP",
    preco: 100.00,
    ingressosDisponiveis: 5000,
    imagens: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
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

function converterData(data) {
  const [dia, mes, ano] = data.split("/");
  return new Date(ano, mes - 1, dia);
}

function Emalta({ setEventoSelecionado }) {

  const eventosMaisProximos = [...listadeeventos]
    .sort((a, b) => converterData(a.data) - converterData(b.data))
    .slice(0, 5);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((valorAtual) => (valorAtual + 1) % eventosMaisProximos.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [eventosMaisProximos.length])

  const evento = eventosMaisProximos[index]

  const mover = (direcao) => {
    setIndex((valorAtual) =>
      (valorAtual + direcao + eventosMaisProximos.length) % eventosMaisProximos.length
    )
  }

  return (
    <div className="emalta">

      <div>
        <h1>Em Alta</h1>
      </div>

      <div className="emalta-carrossel">
        <img
          src={evento.imagens[0]}
          alt={evento.nome}
          className="emalta-imagem"
        />

        <div className="emalta-sombra" />

        <div className="emalta-informacoes">
          <span className="emalta-etiqueta">Evento em destaque</span>
          <h2>{evento.nome}</h2>
          <p>{evento.data} às {evento.horario} · {evento.cidade}</p>
          <button onClick={() => setEventoSelecionado(evento.id)}>
            Ver detalhes
          </button>
        </div>

        <button
          className="emalta-seta emalta-seta--prev"
          onClick={() => mover(-1)}
          aria-label="Evento em destaque anterior"
        >
          ‹
        </button>
        <button
          className="emalta-seta emalta-seta--next"
          onClick={() => mover(1)}
          aria-label="Próximo evento em destaque"
        >
          ›
        </button>

        <div className="emalta-pontos">
          {eventosMaisProximos.map((item, itemIndex) => (
            <button
              key={item.id}
              className={itemIndex === index ? 'emalta-ponto ativo' : 'emalta-ponto'}
              onClick={() => setIndex(itemIndex)}
              aria-label={`Mostrar ${item.nome}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export { Carousel }
export default Emalta