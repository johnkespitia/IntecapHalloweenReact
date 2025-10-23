import { useUserStore } from "../stores";

const Home = () => {
    const { clearUser, user } = useUserStore();
    const logout = () => {
        clearUser();
    }
    return <div>
        Página de Inicio Bienvenido: {user.username}
        <button onClick={logout}>Cerrar Sesion</button>
    </div>
}

export default Home