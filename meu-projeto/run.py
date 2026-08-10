import os
import subprocess
import sys
from time import sleep

root = os.path.dirname(os.path.abspath(__file__))

backend = os.path.join(root, "backend")
frontend = os.path.join(root, "frontend")

print("Iniciando processos")

#comando iniciar fastapi com uvicorn
parametros_uvicorn = [
    sys.executable, "-m", "uvicorn", "main:app", "--reload", "--port", "8000",]

#comando iniciar react
npm_executable = "npm.cmd" if sys.platform == "win32" else "npm"
frontend_cmd = [npm_executable, "run", "dev"]

processos = []

try:
    print("Iniciando FastAPI")
    backend_process = subprocess.Popen(parametros_uvicorn, cwd=backend)
    processos.append(backend_process)

    #delay para não concorrer
    sleep(1)

    print("Iniciando react")
    frontend_process = subprocess.Popen(frontend_cmd, cwd=frontend)
    processos.append(frontend_process)

    print("\n Ambos servidores rodando")
    print("Pressione q+enter para sair do react e depois Ctrl + c para sair do fastApi\n")

    #não deixa o python morrer
    for proc in processos:
        proc.wait()

except KeyboardInterrupt:
    print("\n Terminando serviços")
    for proc in processos:
        proc.terminate()

    #espera tudo finalizar
    for proc in processos:
        proc.wait()

    print("Serviços terminados")