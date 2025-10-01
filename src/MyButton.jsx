function MyButton({ name }) {
    const handleClick= () => {
        alert("¡Feliz Halloween " + name + " !");// ``
    }
    return <button onClick={handleClick} className="custom">{name} Dulce o Truco?</button>
}

// export const Mensaje = "Feliz Halloween";
export default MyButton;