import styles from "../styles/login.module.css"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useUserStore } from "../stores"
import { TextField } from "@mui/material";
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
    return <Card className={styles.cardLogin}>
        <CardContent>
            <form onSubmit={handleFormSubmit}>
            <h1 className="text-danger">Login</h1>
            <TextField type="text" name="username" placeholder="Username" variant="filled">

            </TextField>
            <br />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <Button type="submit">Iniciar Sesión</Button>
        </form>
        </CardContent>
    </Card>
}

export default Login