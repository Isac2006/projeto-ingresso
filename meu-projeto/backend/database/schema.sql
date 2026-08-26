CREATE TABLE vendedor (
    id_vendedor INTEGER PRIMARY KEY, -- SQLite já vai preencher automaticamente
    nome          TEXT NOT NULL,
    username      TEXT NOT NULL UNIQUE,
    email         TEXT NOT NULL UNIQUE,
    senha_hash    TEXT NOT NULL,
    data_cadastro TEXT NOT NULL DEFAULT (datetime('now'))
    --Decidir se o vendedor tem saldo ou não
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
    tipo        INTEGER NOT NULL CHECK (tipo IN ('comprador', 'vendedor')), 
    codigo      TEXT NOT NULL, -- para que 0042 não vire 42
    tentativas  INTEGER NOT NULL DEFAULT 0,
    criado_em   TEXT NOT NULL DEFAULT (datetime('now')),
    expira_em   TEXT NOT NULL DEFAULT (datetime('now', '+15 minutes')),
    UNIQUE (email, tipo) -- uma pessoa pode se cadastrar como comprador e vendedor, mas nunca pode se 
    -- cadastrar duas vezes para o mesmo tipo
)