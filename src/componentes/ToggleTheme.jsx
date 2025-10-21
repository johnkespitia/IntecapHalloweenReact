import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

const ToggleTheme = () => {
    const { toggleTheme, state: { themeLight }} = useContext(ThemeContext);
    return <button 
    onClick={toggleTheme} 
    style={ themeLight ? { backgroundColor: "#000000", color: "#FFFFFF"} :
     { backgroundColor: "#FFFFFF", color: "#000000"}}>
        { themeLight ? "Modo Oscuro" : "Modo Claro" }
    </button>
}

export default ToggleTheme;