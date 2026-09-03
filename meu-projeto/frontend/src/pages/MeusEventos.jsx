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
        status: 'Ativo',
        imagem: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=500&auto=format&fit=crop',
        descricao: 'Uma corrida especial para arrecadar fundos e promover a saúde e bem-estar.',

        nomeUsuario: 'João Silva',
        setor: 'Pista A',
        tipoIngresso: 'Inteira',
        horarioEntrada: '07:00h',
        horarioInicio: '08:00h'
    },
    {
        id: 2,
        nome: 'Workshop de Design',
        organizador: 'Designers SP',
        data: '22 de Outubro, 14h',
        local: 'Centro Cultural, São Paulo',
        status: 'Ativo',
        imagem: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop',
        descricao: 'Aprenda as principais tendências de UI/UX design com especialistas da área.',
        nomeUsuario: 'João Silva',
        setor: 'Pista A',
        tipoIngresso: 'Inteira',
        horarioEntrada: '07:00h',
        horarioInicio: '08:00h'
    },
    {
        id: 3,
        nome: 'Noite de Jazz',
        organizador: 'Clube do Jazz',
        data: '05 de Novembro, 21h',
        local: 'Teatro Municipal, São Paulo',
        status: 'Ativo',
        imagem: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&auto=format&fit=crop',
        descricao: 'Uma noite inesquecível com música ao vivo, ambiente aconchegante e ótimos músicos.',
        nomeUsuario: 'João Silva',
        setor: 'Pista A',
        tipoIngresso: 'Inteira',
        horarioEntrada: '07:00h',
        horarioInicio: '08:00h'
    },

    // --- EVENTOS CONCLUÍDOS ---
    {
        id: 101,
        nome: 'Festival de Verão',
        organizador: 'Coletivo Music',
        data: '15 de Setembro, 20h',
        local: 'Parque da Cidade, São Paulo',
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

                <div className="detalhes-ingresso-container">
                    {/* Card Superior: Modelo retangular horizontal igual ao da listagem */}
                    <img
                        src={eventoSelecionado.imagem}
                        alt={eventoSelecionado.nome}
                        className="detalhes-banner-topo"
                    />
                    <div className="card-ingresso-header">
                        <div className="card-ingresso-qrcode">
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ingresso-${eventoSelecionado.id}`}
                                alt="QR Code"
                            />
                        </div>

                        <div className="card-ingresso-info-rapida">
                            <h2>{eventoSelecionado.nome}</h2>
                            <p className="organizador">por {eventoSelecionado.organizador}</p>
                            <p className="detalhes">📍 {eventoSelecionado.local}</p>
                            <p className="detalhes">📅 {eventoSelecionado.data}</p>
                        </div>
                    </div>

                    {/* Bloco de Informações do Titular e Ingresso */}
                    <div className="card-titular-container">
                        <h3>Informações do Ingresso</h3>

                        <div className="grid-info-titular">
                            <div className="campo-info-titular">
                                <label>TITULAR DO INGRESSO</label>
                                <p>{eventoSelecionado.nomeUsuario}</p>
                            </div>

                            <div className="campo-info-titular">
                                <label>SETOR</label>
                                <p>{eventoSelecionado.setor}</p>
                            </div>

                            <div className="campo-info-titular">
                                <label>TIPO DE INGRESSO</label>
                                <p>{eventoSelecionado.tipoIngresso}</p>
                            </div>

                            <div className="campo-info-titular">
                                <label>HORÁRIO DE ENTRADA</label>
                                <p>{eventoSelecionado.horarioEntrada}</p>
                            </div>

                            <div className="campo-info-titular">
                                <label>INÍCIO DO EVENTO</label>
                                <p>{eventoSelecionado.horarioInicio}</p>
                            </div>

                            <div className="campo-info-titular full-width">
                                <label>DESCRIÇÃO</label>
                                <p>{eventoSelecionado.descricao}</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn-voltar" onClick={() => setEventoSelecionado(null)}>
                        ← Voltar para Meus Eventos
                    </button>
                </div>
            </div>
        );
    }

    // TELA PRINCIPAL DE MEUS EVENTOS
    return (
        <div className="meus-eventos-container">
            <h1>Meus Eventos</h1>
            <h4>Acompanhe os seus ingressos.</h4>

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
            <div className="grid-meus-eventos">
                {eventosExibidos.map((evento) => (
                    <div key={evento.id} className="card-meus-eventos">
                        <img src={evento.imagem} alt={evento.nome} className="card-meus-eventos-img" />

                        <div className="card-meus-eventos-conteudo">

                            <h3>{evento.nome}</h3>
                            <p className="organizador">por {evento.organizador}</p>
                            <p className="detalhes">{evento.data}</p>
                            <p className="detalhes">{evento.local}</p>

                            <div className="card-meus-eventos-rodape">
                                <span className={`badge-status ${evento.status === 'Ativo' ? 'badge-ativo' : 'badge-inativo'}`}>
                                    {evento.status}
                                </span>
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