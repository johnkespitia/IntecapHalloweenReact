import { NavLink } from "react-router-dom"
const Menu = () => {
    return <nav>
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/pqrs">PQRS</NavLink></li>
            <li><NavLink to="/request/1">Solicitud 1</NavLink></li>
            <li><NavLink to="/request/2">Solicitud 2</NavLink></li>
            <li><NavLink to="/request/3">Solicitud 3</NavLink></li>
        </ul>
    </nav>
}

export default Menu