const PersonajeDetalle = ({ 
    personajeSeleccionado 
}) => {
    if(!personajeSeleccionado) return null;
    return <div>
        <img src={personajeSeleccionado.image} alt={personajeSeleccionado.name} />
        <h3>Nombre: {personajeSeleccionado.name}</h3>
        <p>Especie: {personajeSeleccionado.species}</p>
    </div>
}

export default PersonajeDetalle;