import './ConfiguracoesUsuario.css'
import '@fontsource/plus-jakarta-sans';
import '@fontsource/plus-jakarta-sans/700.css'; 

export default function ConfiguracoesUsuario() {

    return (
        <div className="configuracoes">
            <h1 className="configuracoes-titulo"><b>Configurações do Usuário</b></h1>

            <div className="card-formulario">
                <form>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" className="input-formulario" />
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" className="input-formulario" />
                    </div>

                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" className="input-formulario" />
                    </div>

                    <div className="linha-botoes">
                        <button type="button" className="btn-logout">
                            <b>Logout</b>
                        </button>

                        <button type="submit" className="btn-save">
                            <b>Salvar</b>
                        </button>
                    </div>
                </form>

                <button type="button" className="btn-delete">
                    <b>Excluir a conta</b>
                </button>
            </div>
        </div>
    );
}