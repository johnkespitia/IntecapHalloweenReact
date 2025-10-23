const PersonajeDetalle = ({ 
    personajeSeleccionado,
    handleSeleccionaPersonaje 
}) => {
    if(!personajeSeleccionado) return null;
    return <div onClick={()=>handleSeleccionaPersonaje(personajeSeleccionado.id)} 
    style={{cursor: 'pointer'}}
    className={personajeSeleccionado.seleccionado ? 'selected': ''}>
        <img src={personajeSeleccionado.image} style={{aspecRatio:"1/2", width:"100%"}} alt={personajeSeleccionado.name} />
        <h3>Nombre: {personajeSeleccionado.name}</h3>
        <p>Especie: {personajeSeleccionado.species}</p>
    </div>
}

export default PersonajeDetalle;