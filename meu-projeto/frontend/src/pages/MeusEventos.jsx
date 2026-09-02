import React, { useState } from 'react';
import '../App.css';

const todosEventos = [
    // --- EVENTOS ATIVOS ---
    {
        id: 1,
        nome: 'Corrida Beneficente',
        organizador: 'Atletas Solidários',
        data: '10 de Outubro, 08h',
        local: 'Parque da Cidade, São Paulo',
        preco: 'R$ 30,00',
        status: 'Ativo',
        imagem: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=500&auto=format&fit=crop',
        descricao: 'Uma corrida especial para arrecadar fundos e promover a saúde e bem-estar.'
    },
    {
        id: 2,
        nome: 'Workshop de Design',
        organizador: 'Designers SP',
        data: '22 de Outubro, 14h',
        local: 'Centro Cultural, São Paulo',
        preco: 'R$ 50,00',
        status: 'Ativo',
        imagem: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop',
        descricao: 'Aprenda as principais tendências de UI/UX design com especialistas da área.'
    },
    {
        id: 3,
        nome: 'Noite de Jazz',
        organizador: 'Clube do Jazz',
        data: '05 de Novembro, 21h',
        local: 'Teatro Municipal, São Paulo',
        preco: 'R$ 60,00',
        status: 'Ativo',
        imagem: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&auto=format&fit=crop',
        descricao: 'Uma noite inesquecível com música ao vivo, ambiente aconchegante e ótimos músicos.'
    },

    // --- EVENTOS CONCLUÍDOS ---
    {
        id: 101,
        nome: 'Festival de Verão',
        organizador: 'Coletivo Music',
        data: '15 de Setembro, 20h',
        local: 'Parque da Cidade, São Paulo',
        preco: 'R$ 40,00',
        status: 'Inativo',
        imagem: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop',
        descricao: 'O maior festival de música de verão da região.'
    },
    {
        id: 102,
        nome: 'Feira Gastronômica',
        organizador: 'Sabores da Cidade',
        data: '10 de Setembro, 12h',
        local: 'Praça Central, São Paulo',
        preco: 'R$ 20,00',
        status: 'Inativo',
        imagem: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop',
        descricao: 'Diversos pratos típicos e chefs renomados reunidos.'
    }
];

export default function MeusEventos() {
    // Estado para controlar a aba selecionada ('Ativo' ou 'Inativo')
    const [abaAtiva, setAbaAtiva] = useState('Ativo');

    // Estado para guardar o evento selecionado para ver os detalhes
    const [eventoSelecionado, setEventoSelecionado] = useState(null);

    // Filtra os eventos com base na aba atual
    const eventosExibidos = todosEventos.filter(ev => ev.status === abaAtiva);

    // Se o usuário clicou em um evento ativo, mostra a TELA DE DETALHES (Segunda imagem)
    if (eventoSelecionado) {
        return (
            <div className="meus-eventos-container">
                <button className="btn-voltar" onClick={() => setEventoSelecionado(null)}>
                    ← Voltar para Meus Eventos
                </button>

                <div className="detalhes-evento-wrapper">
                    <img
                        src={eventoSelecionado.imagem}
                        alt={eventoSelecionado.nome}
                        className="detalhes-imagem-principal"
                    />

                    <h2>{eventoSelecionado.nome}</h2>

                    <div className="detalhes-grid">
                        {/* Bloco de Informações */}
                        <div className="card-info-detalhes">
                            <div className="campo-info">
                                <label>DESCRIÇÃO</label>
                                <p>{eventoSelecionado.descricao}</p>
                            </div>
                            <div className="campo-info">
                                <label>AUTOR DO EVENTO</label>
                                <p>{eventoSelecionado.organizador}</p>
                            </div>
                            <div className="campo-info">
                                <label>LOCAL</label>
                                <p>{eventoSelecionado.local}</p>
                            </div>
                            <div className="campo-info">
                                <label>DATA</label>
                                <p>{eventoSelecionado.data}</p>
                            </div>
                        </div>

                        {/* Bloco do Ingresso com QR Code */}
                        <div className="card-qrcode-detalhes">
                            <h3>Ingresso 1</h3>
                            <p>{eventoSelecionado.data}</p>
                            <p>{eventoSelecionado.local}</p>

                            <div className="qrcode-box">
                                {/* QR Code gerado dinamicamente via API gratuita do Google Charts */}
                                <img
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=Ingresso-${eventoSelecionado.id}`}
                                    alt="QR Code do Ingresso"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // TELA PRINCIPAL DE MEUS EVENTOS
    return (
        <div className="meus-eventos-container">
            <h1>Meus Eventos</h1>

            {/* Botões para alternar a visualização */}
            <div className="fundo-toggle-abas">
                <button
                    className={`btn-aba ${abaAtiva === 'Ativo' ? 'ativa' : ''}`}
                    onClick={() => setAbaAtiva('Ativo')}
                >
                    Eventos Ativos
                </button>
                <button
                    className={`btn-aba ${abaAtiva === 'Inativo' ? 'ativa' : ''}`}
                    onClick={() => setAbaAtiva('Inativo')}
                >
                    Eventos Concluídos
                </button>
            </div>

            {/* Lista de Eventos */}
            <div className="grid-eventos">
                {eventosExibidos.map((evento) => (
                    <div key={evento.id} className="card-evento">
                        <img src={evento.imagem} alt={evento.nome} className="card-evento-img" />

                        <div className="card-conteudo">
                            <span className={`badge-status ${evento.status === 'Ativo' ? 'badge-ativo' : 'badge-inativo'}`}>
                                {evento.status}
                            </span>
                            <h3>{evento.nome}</h3>
                            <p className="organizador">por {evento.organizador}</p>
                            <p className="detalhes">{evento.data}</p>
                            <p className="detalhes">{evento.local}</p>

                            <div className="card-rodape">
                                <span className="preco">{evento.preco}</span>

                                {/* O botão "Ver Detalhes" só abre o modal se o evento for Ativo */}
                                {evento.status === 'Ativo' ? (
                                    <button
                                        className="buttoneventos"
                                        onClick={() => setEventoSelecionado(evento)}
                                    >
                                        Ver Detalhes
                                    </button>
                                ) : (
                                    <button className="buttoneventos desabilitado" disabled>
                                        Concluído
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}