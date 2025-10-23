import React from "react"
import PersonajeDetalle from "./PersonajeDetalle"

const ListaPersonajes = ({
    personajes, 
    handleSeleccionaPersonaje, 
    personajeSeleccionado
}) => {
    const ComponenteMemorizado = React.memo(()=>
         <PersonajeDetalle personajeSeleccionado={personajeSeleccionado} />
    , [personajeSeleccionado])
    return <>
    <h2>Personaje Seleccionado</h2>
    {personajeSeleccionado ? <ComponenteMemorizado /> :
    <p>No hay ningún personaje seleccionado. Haz click en uno de la lista para seleccionarlo.</p>}
    <h2>Lista de Personajes</h2>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', 
    paddingLeft: '1rem'}}>
        {personajes.map((personaje, idx) => {
            return <PersonajeDetalle 
                personajeSeleccionado={personaje} 
                handleSeleccionaPersonaje={handleSeleccionaPersonaje} key={idx} 
            />
        })}
    </div>
    </>
}

export default ListaPersonajes