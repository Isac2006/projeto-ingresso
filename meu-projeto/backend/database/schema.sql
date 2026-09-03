CREATE TABLE vendedor (
    id_vendedor INTEGER PRIMARY KEY, -- SQLite já vai preencher automaticamente
    nome          TEXT NOT NULL,
    username      TEXT NOT NULL UNIQUE,
    email         TEXT NOT NULL UNIQUE,
    senha_hash    TEXT NOT NULL,
    saldo         INTEGER NOT NULL DEFAULT 0 CHECK (saldo >= 0),
    data_cadastro TEXT NOT NULL DEFAULT (datetime('now'))

);


CREATE TABLE comprador (
    id_comprador  INTEGER PRIMARY KEY,
    nome          TEXT NOT NULL,
    username      TEXT NOT NULL UNIQUE,
    email         TEXT NOT NULL UNIQUE,
    senha_hash    TEXT NOT NULL,
    saldo         INTEGER NOT NULL DEFAULT 0 CHECK (saldo >= 0),
    data_cadastro TEXT NOT NULL DEFAULT (datetime('now'))
);


--esta tabela serve para validar o cadastro do usuário

CREATE TABLE usuario_pendente (

    id_cadastro INTEGER PRIMARY KEY,
    nome        TEXT NOT NULL,
    username    TEXT NOT NULL,
    email       TEXT NOT NULL,
    senha_hash  TEXT NOT NULL,
    tipo        TEXT NOT NULL CHECK (tipo IN ('comprador', 'vendedor')), 
    codigo      TEXT NOT NULL, -- para que 0042 não vire 42
    tentativas  INTEGER NOT NULL DEFAULT 0,
    criado_em   TEXT NOT NULL DEFAULT (datetime('now')),
    expira_em   TEXT NOT NULL DEFAULT (datetime('now', '+15 minutes')),
    UNIQUE (email, tipo) -- uma pessoa pode se cadastrar como comprador e vendedor, mas nunca pode se 
    -- cadastrar duas vezes para o mesmo tipo
);

-- Token responsável por manter o usuário loggado num dispositivo
CREATE TABLE refresh_token (
    id_token INTEGER PRIMARY KEY,
    id_comprador INTEGER REFERENCES comprador(id_comprador),
    id_vendedor INTEGER REFERENCES vendedor(id_vendedor),
    token_hash TEXT NOT NULL UNIQUE,
    criado_em TEXT NOT NULL DEFAULT (datetime('now')),
    expira_em TEXT NOT NULL DEFAULT(datetime('now', '+30 days')),
    revogado_em TEXT,
    CHECK (
        (id_comprador IS NOT NULL AND id_vendedor IS NULL)
        OR (id_comprador IS NULL AND id_vendedor IS NOT NULL)
    )
);

CREATE TABLE evento (
    id_evento INTEGER PRIMARY KEY,
    id_vendedor INTEGER NOT NULL REFERENCES vendedor(id_vendedor),
    nome TEXT NOT NULL,
    descricao TEXT,
    local_evento TEXT NOT NULL,
    categoria TEXT NOT NULL CHECK (categoria in ('show', 'teatro', 
                'esporte', 'palestra', 'balada', 'casamento', 'outro')),
    -- preço em centavos, considerando que pode ser grátis
    preco_ingresso INTEGER NOT NULL CHECK (preco_ingresso >= 0),
    capacidade_total INTEGER NOT NULL CHECK (capacidade_total > 0),
    inicio_anuncio TEXT NOT NULL DEFAULT (datetime('now')),
    fim_anuncio TEXT NOT NULL,
    inicio_evento TEXT NOT NULL,
    fim_evento TEXT NOT NULL,
    CHECK (fim_anuncio >= inicio_anuncio),
    CHECK (fim_evento >= inicio_evento)
);

CREATE TABLE evento_imagem (
    id_imagem INTEGER PRIMARY KEY,
    id_evento INTEGER NOT NULL REFERENCES evento(id_evento) ON DELETE CASCADE,
    caminho TEXT NOT NULL, -- path da imagem
    ordem INTEGER NOT NULL DEFAULT 0, -- ordem em que cada imagem aparece
    UNIQUE (id_evento, ordem)
);

CREATE TABLE compra (
    id_compra INTEGER PRIMARY KEY,
    id_comprador INTEGER NOT NULL REFERENCES comprador(id_comprador),
    id_evento INTEGER NOT NULL REFERENCES evento(id_evento),
    data_compra TEXT NOT NULL DEFAULT (datetime('now')),
    preco_unitario_pago INTEGER NOT NULL CHECK (preco_unitario_pago >= 0)
);

CREATE TABLE ingresso (
    id_ingresso INTEGER PRIMARY KEY,
    id_compra INTEGER NOT NULL REFERENCES compra(id_compra),
    codigo_validacao TEXT NOT NULL UNIQUE,
    data_validacao TEXT
);

-- Índices das chaves estrangeiras

CREATE INDEX idx_evento_vendedor ON evento(id_vendedor);
CREATE INDEX idx_compra_comprador ON compra(id_comprador);
CREATE INDEX idx_compra_evento ON compra(id_evento);
CREATE INDEX idx_ingresso_compra ON ingresso(id_compra);