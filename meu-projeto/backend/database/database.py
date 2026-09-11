import sqlite3
from pathlib import Path
import unicodedata

CAMINHO_BANCO = Path(__file__).parent/"ingressos.db"

def sem_acento(text):
    """ 'Música' -> 'musica'. Função auxiliar nas buscas por nome """
    if text is None:
        return None
    decomposto = unicodedata.normalize("NFD", text) #ú -> u + '
    return "".join(c for c in decomposto if not unicodedata.combining(c)).lower() #unicodedata.combining só pega acento

def conectar() -> sqlite3.Connection:
    conn = sqlite3.connect(CAMINHO_BANCO)
    conn.execute("PRAGMA foreign_keys = ON") #para garantir que as FK funcionam
    conn.row_factory = sqlite3.Row #ao invés de linha[3] -> linha["nome"]
    conn.create_function("sem_acento", 1, sem_acento, deterministic=True)
    return conn


