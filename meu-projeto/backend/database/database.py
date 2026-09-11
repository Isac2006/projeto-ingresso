import sqlite3
from pathlib import Path

CAMINHO_BANCO = Path(__file__).parent/"ingressos.db"

def conectar() -> sqlite3.Connection:
    conn = sqlite3.connect(CAMINHO_BANCO)
    conn.execute("PRAGMA foreign_keys = ON") #para garantir que as FK funcionam
    conn.row_factory = sqlite3.Row #ao invés de linha[3] -> linha["nome"]
    return conn


