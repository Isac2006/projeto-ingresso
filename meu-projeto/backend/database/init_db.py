from pathlib import Path
from database import conectar

CAMINHO_SCHEMA = Path(__file__).parent/"schema.sql"

def criar_banco():
    with conectar() as conn:
        conn.executescript(CAMINHO_SCHEMA.read_text(encoding="utf-8"))

if __name__ == "__main__":
    criar_banco()
    print(">$ Banco de Dados criado com sucesso.")