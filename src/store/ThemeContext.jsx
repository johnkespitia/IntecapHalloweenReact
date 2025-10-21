import React, {createContext} from "react"
// Crear el contexto donde se prepara el componente provider para proveer el estado global del contexto
export const ThemeContext = createContext();

// Componente proveedor del contexto
const ThemeProvider = ({children}) => {
    // Estado global del contexto
    const [state, setState] = React.useState({
        themeLight: true, // valor inicial del tema
        zoomLevel: 1 // valor inicial del nivel de zoom
    });
    // Objeto contexto que se pasará a los componentes hijos
    const contexto = {
        state,
        toggleTheme: () => setState((prevState) => ({...prevState, themeLight: !prevState.themeLight})),
        setZoomLevel: (zoomLevel) => setState((prevState) => ({...prevState, zoomLevel}))
    }
    // ThemeContext.Provider envuelve a los componentes hijos y les provee el estado global del contexto
    return <ThemeContext.Provider value={contexto}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider;