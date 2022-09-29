import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <div className="navBarContainer">
            <h1 className="logo">Kritsch Deportivos</h1>
            <ul className="navLinks">
                <li><a href="/">Home</a></li>
                <li><a href="/">Nosotros</a></li>
                <li><a href="/">Vehiculos</a></li>
                <li><a href="/">Contacto</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;