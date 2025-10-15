import './App.css'
import BusquedaPersonaje from './componentes/BusquedaPersonaje.jsx'
import Error from './componentes/Error.jsx'
import Loading from './componentes/Loading.jsx'
import PersonajeDetalle from './componentes/PersonajeDetalle.jsx'
import PersonajeDeclarativo from './wrappers/PersonajeDeclarativo.jsx'
const App = () => <PersonajeDeclarativo>
    <h1>Buscador de Personajes de Rick and Morty</h1>
    <BusquedaPersonaje />
    <Error />
    <Loading />
    <PersonajeDetalle />
</PersonajeDeclarativo>

export default App
