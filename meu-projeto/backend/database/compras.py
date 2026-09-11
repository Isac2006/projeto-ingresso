from secrets import token_hex

def _gerar_codigo():
    bruto = token_hex(6).upper()
    return f"{bruto[:4]} - {bruto[4:8]} - {bruto[8:]}"

def comprar(conn, id_comprador, id_evento, itens):
    """Itens: lista de (id_setor, tipo, quantidade)"""

    sql = """
        SELECT id_vendedor,
            (datetime('now') BETWEEN inicio_anuncio AND fim_anuncio)    AS em_cartaz
          FROM evento WHERE id_evento = ?
    """
    evento = conn.execute(sql, (id_evento,)).fetchone()

    if evento is None:
        raise ValueError("evento_inexistente")
    if not evento["em_cartaz"]:
        raise ValueError("fora_do_periodo_de_venda")

    total, planejados = 0, []

    for id_setor, tipo, quantidade in itens:

        if quantidade < 1:
            raise ValueError("quantidade_invalida")

        linha = conn.execute("""
            SELECT p.valor,
                   s.capacidade - (SELECT COUNT(*) FROM ingresso i
                                    WHERE i.id_setor = s.id_setor) AS disponiveis
              FROM setor s
              JOIN preco p ON p.id_setor = s.id_setor AND p.tipo = ?
             WHERE s.id_setor = ? AND s.id_evento = ?
        """, (tipo, id_setor, id_evento)).fetchone()

        if linha is None:
            raise ValueError("setor_ou_tipo_invalido")
        if linha["disponiveis"] < quantidade:
            raise ValueError("sem_ingressos_suficiente")
        total += linha["valor"] * quantidade
        planejados.append((id_setor, tipo, linha["valor"], quantidade))

    saldo = conn.execute("SELECT saldo FROM comprador WHERE id_comprador = ?", 
                         (id_comprador,)).fetchone()

    if saldo is None:
        raise ValueError("comprador_inexistente")
    if saldo["saldo"] < total:
        raise ValueError("saldo_insuficiente")

    id_compra = conn.execute(
        "INSERT INTO compra (id_comprador, id_evento) VALUES (?, ?) RETURNING id_compra",
        (id_comprador, id_evento)).fetchone()["id_compra"]

    codigos = []
    for id_setor, tipo, valor, quantidade in planejados:
        for _ in range(quantidade):
            codigo = _gerar_codigo()
            conn.execute("""
                INSERT INTO ingresso (id_compra, id_evento, id_setor, tipo,
                                      preco_pago, codigo_validacao)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (id_compra, id_evento, id_setor, tipo, valor, codigo))
            codigos.append(codigo)

    conn.execute("UPDATE comprador SET saldo = saldo - ? WHERE id_comprador = ?", (total, id_comprador))
    conn.execute("UPDATE vendedor SET saldo = saldo + ? WHERE id_vendedor = ?", (total, evento["id_vendedor"]))
    return {"id_compra" : id_compra, "total" : total, "codigos": codigos}

def listar_compras(conn, id_comprador):
    """Tela 'minhas_compras': uma linha por evento, com os dados do evento"""
    sql = """
        SELECT c.id_compra, c.data_compra,
               e.id_evento, e.nome                 AS evento, e.local_evento, e.inicio_evento,
               (datetime('now') > e.fim_evento)    AS ja_aconteceu,
               (SELECT img.caminho FROM evento_imagem img
                  WHERE img.id_evento = e.id_evento
                  ORDER BY img.ordem LIMIT 1)       AS capa,
               COUNT(i.id_ingresso)                AS quantidade,
               COALESCE(SUM(i.preco_pago), 0)      AS total
        FROM compra c
        JOIN evento e           ON e.id_evento = c.id_evento
        LEFT JOIN ingresso i    ON i.id_compra = c.id_compra
        WHERE c.id_comprador = ?
        GROUP BY c.id_compra
        ORDER BY c.data_compra DESC
    """

    return conn.execute(sql, (id_comprador,)).fetchall()

def listar_ingressos(conn, id_compra, id_comprador):
    """Ingressos de uma mesma compra. Só devolve se a compra for do comprador"""

    sql = """
        SELECT i.id_ingresso, i.codigo_validacao, i.tipo, i.preco_pago,
               i.data_validacao,
               (i.data_validacao IS NOT NULL) AS utilizado,
               s.nome                         AS setor
            FROM ingresso i
            JOIN compra c ON c.id_compra = i.id_compra
            JOIN setor  s ON s.id_setor = i.id_setor
            WHERE i.id_compra = ? AND c.id_comprador = ?
            ORDER BY s.nome, i.id_ingresso
    """
    return conn.execute(sql, (id_compra, id_comprador)).fetchall()

def validar_ingresso(conn, codigo, id_vendedor):
    """Portaria. Consome o ingresso de forma atômica.
    Devolve (ok, motivo, dados)."""
    sql = """
        UPDATE ingresso
           SET data_validacao = datetime('now')
         WHERE codigo_validacao = ?
           AND data_validacao IS NULL
           AND id_evento IN (SELECT id_evento FROM evento WHERE id_vendedor = ?)
        RETURNING id_ingresso, id_evento, id_setor, tipo, data_validacao
    """
    linha = conn.execute(sql, (codigo, id_vendedor)).fetchone()

    if linha is not None:
        dados = conn.execute("""
            SELECT e.nome AS evento, s.nome AS setor, i.tipo, i.data_validacao
              FROM ingresso i
              JOIN evento e ON e.id_evento = i.id_evento
              JOIN setor  s ON s.id_setor  = i.id_setor
             WHERE i.id_ingresso = ?
        """, (linha["id_ingresso"],)).fetchone()
        return (True, None, dados)

    # nada foi alterado: descobrir por quê (só leitura)
    diag = conn.execute("""
        SELECT i.data_validacao, e.id_vendedor, e.nome AS evento
          FROM ingresso i
          JOIN evento e ON e.id_evento = i.id_evento
         WHERE i.codigo_validacao = ?
    """, (codigo,)).fetchone()

    if diag is None:
        return (False, "codigo_inexistente", None)
    if diag["id_vendedor"] != id_vendedor:
        return (False, "evento_de_outro_vendedor", None)
    return (False, "ja_utilizado", diag)