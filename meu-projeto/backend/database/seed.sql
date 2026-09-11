-- Mock do banco de dados
-- Deve ser rodado depois de schema.sql
INSERT INTO vendedor (id_vendedor, nome, username, email, senha_hash, saldo) VALUES
 (1, 'Produtora Aurora', 'aurora', 'contato@aurora.com', 'hash_falso_v1', 0),
 (2, 'Coletivo Sabor',   'sabor',  'contato@sabor.com',  'hash_falso_v2', 45000);

INSERT INTO comprador (id_comprador, nome, username, email, senha_hash, saldo) VALUES
 (1, 'Ana Souza',  'anas',   'ana@usp.br',   'hash_falso_c1', 100000),
 (2, 'Bruno Lima', 'brunol', 'bruno@usp.br', 'hash_falso_c2',  15000);


-- 1: Evento já está sendo anunciado || 2: Evento será anunciado || 3: Evento já aconteceu
INSERT INTO evento (id_evento, id_vendedor, nome, descricao, local_evento, categoria,
                    inicio_anuncio, fim_anuncio, inicio_evento, fim_evento) VALUES
 (1, 1, 'Festival de Música Urbana', 'Três palcos e mais de 20 atrações.', 'Arena Central', 'musica',
     datetime('now','-10 days'), datetime('now','+20 days'),
     datetime('now','+25 days'), datetime('now','+25 days','+6 hours')),

 (2, 1, 'Mostra de Cinema Nacional', 'Ciclo de longas premiados.', 'Cine Belas Artes', 'cinema',
     datetime('now','+5 days'),  datetime('now','+30 days'),
     datetime('now','+40 days'), datetime('now','+43 days')),

 (3, 2, 'Feira Gastronômica', 'Chefs e food trucks.', 'Praça Central', 'gastronomia',
     datetime('now','-60 days'), datetime('now','-35 days'),
     datetime('now','-30 days'), datetime('now','-30 days','+8 hours'));

INSERT INTO evento_imagem (id_evento, caminho, ordem) VALUES
 (1, '/img/festival-capa.jpg', 0), (1, '/img/festival-palco.jpg', 1),
 (2, '/img/cinema-capa.jpg',   0),
 (3, '/img/feira-capa.jpg',    0);

INSERT INTO setor (id_setor, id_evento, nome, capacidade) VALUES
 (1, 1, 'Pista',    500),
 (2, 1, 'Camarote',  50),
 (3, 2, 'Único',    120),
 (4, 3, 'Único',    300);

INSERT INTO preco (id_setor, tipo, valor) VALUES
 (1, 'inteira', 8000), (1, 'meia', 4000),
 (2, 'inteira', 20000), (2, 'meia', 10000),
 (3, 'inteira',  3000), (3, 'meia',  1500),
 (4, 'inteira',  2000), (4, 'meia',  1000);

INSERT INTO compra (id_compra, id_comprador, id_evento, data_compra) VALUES
 (1, 1, 1, datetime('now','-3 days')),
 (2, 2, 1, datetime('now','-1 day')),
 (3, 1, 3, datetime('now','-40 days'));

INSERT INTO ingresso (id_compra, id_evento, id_setor, tipo, preco_pago, codigo_validacao, data_validacao) VALUES
 (1, 1, 1, 'inteira',  8000, 'A7K2-9QX4-M1', NULL),
 (1, 1, 1, 'meia',     4000, 'B3M8-2LP6-K7', NULL),
 (1, 1, 2, 'inteira', 20000, 'C9T1-7RW5-Z3', NULL),
 (2, 1, 1, 'inteira',  8000, 'D5N4-8VQ2-H9', NULL),
 (3, 3, 4, 'inteira',  2000, 'E1P6-3XT8-J5', datetime('now','-30 days','+1 hour')),
 (3, 3, 4, 'meia',     1000, 'F8R3-5YU1-Q2', NULL);
