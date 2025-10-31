import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Login from "./social-network/pages/Login.jsx"
import Home from "./social-network/pages/Home.jsx"
import { useUserStore } from './social-network/stores';
import Solicitud from './social-network/pages/Solicitud.jsx'
import RegistroPQRS from './social-network/pages/RegistroPQRS.jsx'
const App = () => {
    const basename = import.meta.env.BASE_URL || '/';
    const { user } = useUserStore();
    return <BrowserRouter basename={basename}>
        <Routes>
            {user == null && <Route path='/' element={<Login />} />}
            {user == null && <Route path='/pqrs' element={<RegistroPQRS />} />}
            {user != null && <Route path='/' element={<Home />}>
                <Route path='pqrs' element={<h1>Quejate!</h1>} />
                <Route path='request/:id' element={<Solicitud />} />
            </Route>}
            <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
    </BrowserRouter>
    // if(user == null){
    //     return <Login />
    // }

    // return <Home />
}

export default App