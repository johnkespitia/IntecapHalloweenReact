import BusquedaPersonaje from "./BusquedaPersonaje";
import PersonajeDetalle from "./PersonajeDetalle";
/**
 * Vista del componente Personaje
 * @param {*} param0 
 * @returns 
 */
const PersonajeVista = ({ 
    searchPersonaje, 
    setPersonaje, 
    personajeSeleccionado, 
    loading, 
    error 
}) => {
    return <div>
        <h1>Personaje</h1>
        <BusquedaPersonaje searchPersonaje={searchPersonaje} setPersonaje={setPersonaje} />
        {loading && <p>Cargando...</p>}
        {error && <p style={{color: 'red'}}>Error: {error}</p>}
        {personajeSeleccionado != null ? 
            <PersonajeDetalle personajeSeleccionado={personajeSeleccionado} /> : 
            !loading && <p>No hay personaje seleccionado</p>
        }
    </div>
}

export default PersonajeVista;