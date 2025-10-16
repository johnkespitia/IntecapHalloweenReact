import PersonajeDetalle from "./PersonajeDetalle"

const ListaPersonajes = ({personajes, onScrollBottom}) => {
    console.log("Renderizando ListaPersonajes", personajes);
    return <>
    <h2>Lista de Personajes</h2>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', 
    paddingLeft: '1rem'}}>
        {personajes.map((personaje, idx) => {
            return <PersonajeDetalle personajeSeleccionado={personaje} key={idx} />
        })}
    </div>
    </>
}

export default ListaPersonajes