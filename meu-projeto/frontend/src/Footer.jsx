import './App.css'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div id="footer-container">
                <div id="footer-info">
                    <h1>EventHub</h1>
                    <p>Encontre e organize os melhores eventos perto de você.</p>
                </div>

                <div id="footer-explore">
                    <h2>Explorar</h2>
                    <p>Eventos em Alta</p>
                    <p>Todos os Eventos</p>
                </div>

                <div id="footer-account">
                    <h2>Conta</h2>
                    <p>Meus Eventos</p>
                    <p>Perfil</p>
                </div>
                
                <div id="footer-support">
                    <h2>Suporte</h2>
                    <p>Central de Ajuda</p>
                    <p>Contato</p>
                    <p>Termos de Uso</p>
                </div>
            </div>

            <hr></hr>
            <p id="footer-rights">© 2026 EventHub. Todos os direitos reservados.</p>
        </div>
    )
}

export default Footer