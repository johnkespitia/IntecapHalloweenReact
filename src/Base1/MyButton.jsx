// Hooks (ganchos) - funciones especiales de React
import React from 'react';
function MyButton({ name }) {
    // useSate 
    const handleClick= () => {
        alert("¡Feliz Halloween " + name + " !");
    }
    return <button onClick={handleClick} className="custom">{name} Dulce o Truco?</button>
}

// export const Mensaje = "Feliz Halloween";
export default MyButton;