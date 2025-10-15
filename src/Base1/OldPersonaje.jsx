import { useRef, useState } from "react";
const API = 'https://rickandmortyapi.com/api/character/'
const Personaje = () => { //HOC
    const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
    const inputPersonajeRef = useRef(null);
    const assignPersonajeRef = (personaje) => {
        inputPersonajeRef.current = personaje;
    }

    const searchPersonaje = async (e) => {
        e.preventDefault();
        console.log("Buscar personaje Ref: ", inputPersonajeRef.current);
        // Promesas
        // fetch(`https://rickandmortyapi.com/api/character/?name=${personajeRef.current}`)
        //     .then((res) => { return res.json() })
        //     .then((data) => { setPersonajeSeleccionado(data.results[0]) })
        //     .catch((err) => { console.log(err) });
        // Async Await
        try {
            const response = await fetch(`${API}?name=${inputPersonajeRef.current}`)
            const data = await response.json();
            console.log('data: ', data);
            setPersonajeSeleccionado(data.results[0]);
        } catch (error) {
            console.log(err)
        }
        
    }
    return <div>
        <h1>Personaje</h1>
        <Busqueda searchPersonaje={searchPersonaje} setPersonaje={assignPersonajeRef} />
        {personajeSeleccionado != null ? 
            <PersonajeDetalle personaje={personajeSeleccionado} /> : 
            <p>No hay personaje seleccionado</p>
        }
    </div>
}

const Busqueda = ({searchPersonaje, setPersonaje}) => {
    return <div>
        <form onSubmit={searchPersonaje}>
            <input type="text" onChange={(e)=>{ setPersonaje(e.currentTarget.value) }} 
                placeholder="Buscar personaje"/>
            <button type="submit">Buscar</button>
        </form>
    </div>
}

const PersonajeDetalle = ({personaje}) => {
    return <div>
        <img src={personaje.image} alt={personaje.name} />
        <h3>Nombre: {personaje.name}</h3>
        <p>Especie: {personaje.species}</p>
    </div>
}

export default Personaje