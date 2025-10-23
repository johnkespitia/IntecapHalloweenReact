import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

const BusquedaPersonaje = ({ 
    searchPersonaje, 
    setPersonaje
}) => {
    const { state: { themeLight }} = useContext(ThemeContext);
    return <div>
        <h1 style={themeLight ? { color:"#000000"} :{ color:"#FFFFFF"}}>Buscador de Personajes de Rick and Morty</h1>
        <form onSubmit={searchPersonaje}>
            <input type="text" onChange={(e)=>{ setPersonaje(e.currentTarget.value) }}
                placeholder="Buscar personaje"/>
            <button type="submit">Buscar</button>
        </form>
    </div>
}

export default BusquedaPersonaje;