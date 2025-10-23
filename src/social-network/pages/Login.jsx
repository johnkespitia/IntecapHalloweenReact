import styles from "../styles/login.module.css"
import { useUserStore } from "../stores"
const Login = () => {
    const { setUser } = useUserStore();
    // const userManagement = useUserStore();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
        };
        setUser(data);
        // userManagement.setUser(data);
    };
    return <div className={styles.centerLogin}>
        <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>
            <input type="text" name="username" placeholder="Username" />
            <br />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
}

export default Login