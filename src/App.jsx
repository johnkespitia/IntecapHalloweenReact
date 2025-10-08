import { useState } from 'react'
import './App.css'
// import Cronometro from './Cronometro'
import Personaje from './Personaje'
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
    <Personaje />
  </div>
}

export default App
