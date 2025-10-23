import './App.css'
import Login from "./social-network/pages/Login.jsx"
import Home from "./social-network/pages/Home.jsx"
import { useUserStore } from './social-network/stores';

const App = () => {
    const { user } = useUserStore();
    if(user == null){
        return <Login />
    }

    return <Home />
}

export default App