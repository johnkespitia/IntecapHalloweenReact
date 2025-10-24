import Menu from "../componentes/Menu";
import { useUserStore } from "../stores";
import { Outlet } from "react-router-dom";
const Home = () => {
    const { clearUser, user } = useUserStore();
    const logout = () => {
        clearUser();
    }
    return <div>
        <Menu />
        Página de Inicio Bienvenido: {user?.username}
        <button onClick={logout}>Cerrar Sesion</button>
        <Outlet />
    </div>
}

export default Home