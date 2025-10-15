import './App.css'
import PersonajeVista from './PersonajeDeclarativo/PersonajeVista.jsx'
import PersonajeDeclarativo from './PersonajeDeclarativo/PersonajeDeclarativo.jsx'
import BusquedaPersonaje from './PersonajeDeclarativo/BusquedaPersonaje.jsx'
import PersonajeDetalle from './PersonajeDeclarativo/PersonajeDetalle.jsx'
// import Cronometro from './Cronometro'
// import Personaje from './Personaje'
function App() {
  // const [show, setShow] = useState(true)
  // const [nombre, setNombre] = useState("")
  return <div>
    {/* <h1>Cronometro Happy Halloween!</h1>
    <hr/>
    {show? <Cronometro nombre={nombre} /> : <h3>El cronometro esta oculto</h3>}
    <input 
      type="text" 
      placeholder='Ingrese nombre'  
      onChange={(e) => setNombre(e.target.value)} />
    <button onClick={() => setShow(!show)} > 
      {show ? "Ocultar" : "Mostrar"}
    </button> */}
    {/* <Personaje /> */}
    <PersonajeDeclarativo>
      <h1>Rick Y Morty API - Personajes</h1>
      {/* <PersonajeVista /> */}
      <BusquedaPersonaje />
      <PersonajeDetalle />
    </PersonajeDeclarativo>
  </div>
}

export default App
