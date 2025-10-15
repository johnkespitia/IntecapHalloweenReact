import { useRef, useState } from "react";
import PersonajeVista from "./PersonajeVista";

const API = 'https://dragonball-api.com/api/';

/**
 * HOC para manejo de personajes de Dragon Ball
 * Manjear el estado 
 * exponer las funciones a los hijos
 * en pocas palabras manejar la logica
 * @param {*} Vista 
 */
const HOCPersonajes = (Vista) => {
    return function ContenedorPersonajes(props) {
        const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const inputPersonajeRef = useRef(null);
        const assignPersonajeRef = (personaje) => {
            inputPersonajeRef.current = personaje;
        }
        const searchPersonaje = async (e) => {
            e.preventDefault();
            console.log("Buscar personaje Ref: ", inputPersonajeRef.current);
            setLoading(true);
            setError(null);
            setPersonajeSeleccionado(null);
            try {
                const response = await fetch(`${API}characters?name=${inputPersonajeRef.current}`)
                const data = await response.json();
                setPersonajeSeleccionado(data[0]);
            }catch (err) {
                setError(err.message || 'Error al buscar personaje');
            }finally{
                setLoading(false);
            }
        }
        return <Vista
            {...props}
            searchPersonaje={searchPersonaje}
            setPersonaje={assignPersonajeRef}
            personajeSeleccionado={personajeSeleccionado}
            loading={loading}
            error={error}
        />
    }
}

const Personaje = HOCPersonajes(PersonajeVista);
export default Personaje;