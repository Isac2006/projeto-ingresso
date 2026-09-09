import { Link } from 'react-router-dom'
import './App.css'
import './NavBar.css'

function NavBar() {
    return (
        <div className="navbar">

            <Link to="/" id="navbar-title">
                EventHub
            </Link>

            <Link to="/" className="navbar-pages">
                Explorar
            </Link>

            <Link to="/meus-eventos" className="navbar-pages">
                Meus Eventos
            </Link>

            <Link to="/configuracoes" className="navbar-avatar-link">
                <img
                    src="./images/user.png"
                    id="navbar-avatar"
                    alt="Perfil"
                />
            </Link>

        </div>
    )
}

export default NavBar