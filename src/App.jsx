import React from 'react'
import './App.css'
import BusquedaPersonaje from './componentes/BusquedaPersonaje.jsx'
import Error from './componentes/Error.jsx'
import Loading from './componentes/Loading.jsx'
import PersonajeDetalle from './componentes/PersonajeDetalle.jsx'
import ListaDeclarativo from './wrappers/ListaDeclarativo.jsx'
import PersonajeDeclarativo from './wrappers/PersonajeDeclarativo.jsx'
import ListaPersonajes from './componentes/ListaPersonajes.jsx'
import EjemploUseCallback from './componentes/EjemploUseCallback.jsx'

function App() {
    return <React.Fragment>
        <PersonajeDeclarativo>
            
            <BusquedaPersonaje />
            <Error />
            <Loading />
            <PersonajeDetalle />
        </PersonajeDeclarativo>
        <ListaDeclarativo>
            <ListaPersonajes />
            <Error />
            <Loading />
        </ListaDeclarativo>
        {/* <EjemploUseCallback /> */}
    </React.Fragment>
}

export default App
