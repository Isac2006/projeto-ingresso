from pathlib import Path
from database import conectar
import sys

CAMINHO_SCHEMA = Path(__file__).parent/"schema.sql"
CAMINHO_SEED = Path(__file__).parent/"seed.sql"

def criar_banco(com_seed=False):
    with conectar() as conn:
        conn.executescript(CAMINHO_SCHEMA.read_text(encoding="utf-8"))
        if com_seed:
            conn.executescript(CAMINHO_SEED.read_text(encoding="utf-8"))

if __name__ == "__main__":
    com_dados = "--seed" in sys.argv
    criar_banco(com_dados)
    print(">$ Banco criado" + (" com dados de teste." if com_dados else "."))