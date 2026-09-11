from database import sem_acento

def listar_vitrine(conn, limite=20, offset=0):
    """Eventos com anúncios abertos agora, para a home."""
    sql = """
        SELECT e.id_evento, e.nome, e.categoria, e.local_evento, e.inicio_evento,
            v.nome AS organizador,
            (SELECT i.caminho
                FROM evento_imagem i
                WHERE i.id_evento = e.id_evento
                ORDER BY i.ordem
                LIMIT 1) AS capa,
            (SELECT MIN(p.valor)
                FROM setor s
                JOIN preco p ON p.id_setor = s.id_setor
                WHERE s.id_evento = e.id_evento
                AND p.tipo = 'inteira') AS preco_inteira_a_partir_de
            FROM evento e
            JOIN vendedor v on v.id_vendedor = e.id_vendedor
            WHERE datetime('now') BETWEEN e.inicio_anuncio AND e.fim_anuncio
            ORDER BY e.inicio_evento
            LIMIT ? OFFSET ?
    """

    return conn.execute(sql, (limite, offset)).fetchall()

def listar_em_alta(conn, limite=8):
    """Eventos em cartaz, do mais vendido ao menos."""

    sql = """
        SELECT e.id_evento, e.nome, e.categoria,
        COUNT(i.id_ingresso) AS vendidos,
        (SELECT img.caminho
            FROM evento_imagem img
            WHERE img.id_evento = e.id_evento
            ORDER BY img.ordem
            LIMIT 1) AS capa
        FROM evento e
        LEFT JOIN compra    c ON c.id_evento = e.id_evento
        LEFT JOIN ingresso  i ON i.id_compra = c.id_compra
        WHERE datetime('now') BETWEEN e.inicio_anuncio AND e.fim_anuncio
        GROUP BY e.id_evento
        ORDER BY vendidos DESC, e.inicio_evento
        LIMIT ?
    """

    return conn.execute(sql, (limite,)).fetchall()

def buscar_evento(conn, id_evento):
    """Retorna dados do evento + organizador. None se não existir"""

    sql = """
        SELECT e.*, v.nome AS organizador,
            (datetime('now') BETWEEN e.inicio_anuncio AND e.fim_anuncio) AS em_cartaz,
            (datetime('now') > e.fim_evento) AS ja_aconteceu
        FROM evento e
        JOIN vendedor v ON v.id_vendedor = e.id_vendedor
        WHERE e.id_evento = ?
    """
    return conn.execute(sql, (id_evento,)).fetchone()

def listar_imagens(conn, id_evento):
    sql = "SELECT caminho, ordem FROM evento_imagem WHERE id_evento = ? ORDER BY ordem"
    return conn.execute(sql, (id_evento,)).fetchall()

def listar_setores(conn, id_evento):
    """Retorna os setores com os dois preços (inteira, meia) e quantos lugares restam em cada."""

    sql = """
        SELECT s.id_setor, s.nome, s.capacidade,
            MAX(CASE WHEN p.tipo = 'inteira'    THEN p.valor END) AS preco_inteira,
            MAX(CASE WHEN p.tipo = 'meia'       THEN p.valor END) AS preco_meia,
            COUNT(DISTINCT i.id_ingresso) AS vendidos,
            s.capacidade - COUNT(DISTINCT i.id_ingresso) AS disponiveis
        FROM setor s
        LEFT JOIN preco     p ON p.id_setor = s.id_setor
        LEFT JOIN ingresso  i ON i.id_setor = s.id_setor
        WHERE s.id_evento = ?
        GROUP BY s.id_setor
        ORDER BY s.nome
    """

    return conn.execute(sql, (id_evento,)).fetchall()

def _preparar_termo(termo):
    """Normaliza o termo e neutraliza os curingas (% e _) digitados pelo usuário"""
    normalizado = sem_acento(termo) or ""
    for c in ("\\", "%", "_"):
        normalizado = normalizado.replace(c, "\\" + c)
    return f"%{termo}%"

def buscar_eventos(conn, termo, limite=20):
    """Busca por nome, descrição ou local, entre os eventos em cartaz."""
    padrao = _preparar_termo(termo)
    sql = """
        SELECT e.id_evento, e.nome, e.categoria, e.local_evento, e.inicio_evento,
               v.nome AS organizador
          FROM evento e
          JOIN vendedor v ON v.id_vendedor = e.id_vendedor
         WHERE datetime('now') BETWEEN e.inicio_anuncio AND e.fim_anuncio
           AND (   sem_acento(e.nome)         LIKE ? ESCAPE '\\'
                OR sem_acento(e.descricao)    LIKE ? ESCAPE '\\'
                OR sem_acento(e.local_evento) LIKE ? ESCAPE '\\')
         ORDER BY e.inicio_evento
         LIMIT ?
    """
    return conn.execute(sql, (padrao, padrao, padrao, limite)).fetchall()

def listar_eventos_do_vendedor(conn, id_vendedor):

    """Tela 'meus eventos': cada evento com ocupação e receita."""
    sql = """
        SELECT e.id_evento, e.nome, e.categoria, e.local_evento,
               e.inicio_evento, e.fim_evento,
               (datetime('now') BETWEEN e.inicio_anuncio AND e.fim_anuncio) AS em_cartaz,
               (datetime('now') > e.fim_evento)                             AS ja_aconteceu,
               (SELECT img.caminho FROM evento_imagem img
                 WHERE img.id_evento = e.id_evento
                 ORDER BY img.ordem LIMIT 1)                                AS capa,
               (SELECT COALESCE(SUM(s.capacidade), 0) FROM setor s
                 WHERE s.id_evento = e.id_evento)                           AS capacidade,
               (SELECT COUNT(*) FROM compra c
                  JOIN ingresso i ON i.id_compra = c.id_compra
                 WHERE c.id_evento = e.id_evento)                           AS vendidos,
               (SELECT COALESCE(SUM(i.preco_pago), 0) FROM compra c
                  JOIN ingresso i ON i.id_compra = c.id_compra
                 WHERE c.id_evento = e.id_evento)                           AS receita
          FROM evento e
         WHERE e.id_vendedor = ?
         ORDER BY e.inicio_evento DESC
    """
    return conn.execute(sql, (id_vendedor,)).fetchall()

