from secrets import compare_digest
from hashlib import sha256

MAX_TENTATIVAS_VALIDACAO_CODIGO = 5

TABELAS = {
    "comprador": ("comprador", "id_comprador"),
    "vendedor": ("vendedor", "id_vendedor"),
}

def conta_existente(conn, email, username):
    """Devolve 'comprador', 'vendedor' ou None."""
    sql = """
        SELECT 'comprador' AS tipo FROM comprador WHERE email = ? OR username = ?
        UNION ALL
        SELECT 'vendedor' AS tipo from vendedor WHERE email = ? OR username = ? 
        LIMIT 1
    """

    linha = conn.execute(sql, (email, username, email, username)).fetchone()
    return linha["tipo"] if linha else None

def gravar_usuario_pendente(conn, nome, username, email, senha_hash, tipo, codigo):
    """Grava o cadastro pendente. Se já existir um cadastro para este e-mail e este tipo, 
    apenas substitui ele - é o caso de pedir um código novo"""

    sql = """
        INSERT INTO usuario_pendente (nome, username, email, senha_hash, tipo, codigo)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT (email, tipo) DO UPDATE SET
            nome        = excluded.nome,
            username    = excluded.username,
            senha_hash  = excluded.senha_hash,
            codigo      = excluded.codigo,
            tentativas  = 0,
            criado_em   = datetime('now'),
            expira_em   = datetime('now', '+15 minutes')
    """
    conn.execute(sql, (nome, username, email, senha_hash, tipo, codigo))

def validar_codigo_cadastro(conn, email, tipo, codigo):

    """Consome uma tentativa e diz se o código confere"""

    sql = """
        UPDATE usuario_pendente
        SET tentativas = tentativas + 1
        WHERE email = ? AND tipo = ?
        RETURNING id_cadastro, nome, username, email, senha_hash, tipo,
        codigo, tentativas, (datetime('now') < expira_em) AS no_prazo
    """
    linha = conn.execute(sql, (email, tipo)).fetchone()

    if linha is None:
        return (False, "nao_encontrado", None)
    if not linha["no_prazo"]:
        return (False, "expirado", None)
    if linha["tentativas"] > MAX_TENTATIVAS_VALIDACAO_CODIGO:
        return (False, "tentativas_excedidas", None)
    if not compare_digest(codigo, linha["codigo"]):
        return (False, "codigo_incorreto", None)
    return (True, None, linha)

def criar_usuario_definitivo(conn, pendente):
    """Move o cadastro pendente para a tabela definitiva. Devolve o id novo"""

    tabela, coluna_id = TABELAS[pendente["tipo"]]
    sql = f"""
        INSERT INTO {tabela} (nome, username, email, senha_hash)
        VALUES (?, ?, ?, ?)
        RETURNING {coluna_id}
    """
    novo = conn.execute(sql, (pendente["nome"], pendente["username"],
                              pendente["email"], pendente["senha_hash"])).fetchone()

    delete = """
            DELETE FROM usuario_pendente WHERE id_cadastro = ?
    """

    conn.execute(delete, (pendente["id_cadastro"],))
    return novo[coluna_id]

def buscar_usuario_por_login(conn, login, tipo):
    """Busca por e-mail OU por username. Devolve a linha ou None"""

    tabela, coluna_id = TABELAS[tipo]

    sql = f"""
        SELECT {coluna_id} AS id, nome, username, email, senha_hash, saldo
        FROM {tabela}
        WHERE email = ? OR username = ?
    """
    return conn.execute(sql, (login, login)).fetchone()

def _hash_token(token):
    return sha256(token.encode("utf-8")).hexdigest()

def gravar_refresh_token(conn, id_usuario, tipo, token):
    """Registrar o token emitido. Guarda apenas o Hash"""
    _, coluna_id = TABELAS[tipo]
    sql = f"INSERT INTO refresh_token ({coluna_id}, token_hash) VALUES (?, ?)"
    conn.execute(sql, (id_usuario, _hash_token(token)))

def buscar_refresh_token(conn, token):
    """Devolve (id_usuario, tipo) se o token for válido, senão None"""

    sql = """
        SELECT id_comprador, id_vendedor
        FROM refresh_token
        WHERE token_hash = ?
            AND revogado_em IS NULL
            AND datetime('now') < expira_em
    """
    linha = conn.execute(sql, (_hash_token(token),)).fetchone()

    if linha is None:
        return None

    if linha["id_comprador"] is not None:
        return (linha["id_comprador"], "comprador")
    
    return (linha["id_vendedor"], "vendedor")

def revogar_refresh_token(conn, token):
    """Logout. Devolve True se revogou agora, False se já estava revogado"""

    sql = """
        UPDATE refresh_token
            SET revogado_em = datetime('now')
        WHERE token_hash = ? AND revogado_em IS NULL
    """
    return conn.execute(sql, (_hash_token(token),)).rowcount == 1