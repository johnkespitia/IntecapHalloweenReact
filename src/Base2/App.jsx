import React from 'react'
import './App.css'
import BusquedaPersonaje from './componentes/BusquedaPersonaje.jsx'
import Error from './componentes/Error.jsx'
import Loading from './componentes/Loading.jsx'
import PersonajeDetalle from './componentes/PersonajeDetalle.jsx'
import ListaDeclarativo from './wrappers/ListaDeclarativo.jsx'
import PersonajeDeclarativo from './wrappers/PersonajeDeclarativo.jsx'
import ListaPersonajes from './componentes/ListaPersonajes.jsx'
import ThemeProvider from './store/ThemeContext.jsx'
import ToggleTheme from './componentes/ToggleTheme.jsx'

function App() {
    return <ThemeProvider>
        <ToggleTheme />
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
    </ThemeProvider>
}

export default App
