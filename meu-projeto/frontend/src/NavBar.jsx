import './App.css'
import './NavBar.css'

function NavBar() {
    return (
        <div className='navbar'>
            <p id="navbar-title">EventHub</p>
            <p className="navbar-pages">Explorar</p>
            <p className="navbar-pages">Meus Eventos</p>
            <img src="./images/user.png" id="navbar-avatar"></img>
        </div>
    )
}

export default NavBar