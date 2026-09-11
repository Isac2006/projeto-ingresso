import { Link } from 'react-router-dom'
import './App.css'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">

            <div id="footer-container">

                <div id="footer-info">
                    <h1>EventHub</h1>
                    <p>
                        Encontre e organize os melhores eventos perto de você.
                    </p>
                </div>

                <div id="footer-explore">
                    <h2>Explorar</h2>

                    <Link to="/" className="footer-link">
                        Eventos em Alta
                    </Link>

                    <Link to="/" className="footer-link">
                        Todos os Eventos
                    </Link>
                </div>

                <div id="footer-account">
                    <h2>Conta</h2>

                    <Link to="/meus-eventos" className="footer-link">
                        Meus Eventos
                    </Link>

                    <Link to="/configuracoes" className="footer-link">
                        Perfil
                    </Link>
                </div>

                <div id="footer-support">
                    <h2>Suporte</h2>

                    <Link to="/ajuda" className="footer-link">
                        Central de Ajuda
                    </Link>

                    <Link to="/contato" className="footer-link">
                        Contato
                    </Link>

                    <Link to="/termos" className="footer-link">
                        Termos de Uso
                    </Link>
                </div>

            </div>

            <hr />

            <p id="footer-rights">
                © 2026 EventHub. Todos os direitos reservados.
            </p>

        </div>
    )
}

export default Footer