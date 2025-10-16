const BusquedaPersonaje = ({ 
    searchPersonaje, 
    setPersonaje
}) => {
    return <div>
        <h1>Buscador de Personajes de Rick and Morty</h1>
        <form onSubmit={searchPersonaje}>
            <input type="text" onChange={(e)=>{ setPersonaje(e.currentTarget.value) }}
                placeholder="Buscar personaje"/>
            <button type="submit">Buscar</button>
        </form>
    </div>
}

export default BusquedaPersonaje;