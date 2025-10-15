import { useEffect, useState } from "react"

 const Posiciones = ({llegada}) => {
    const [posicionesArray, setPosicionesArray] = useState([])

    useEffect(() => {
        if(llegada != null && llegada > 0){
// malo malo malo no no no            llegada = 30
            setPosicionesArray([...posicionesArray, llegada])
            // let newArray = posicionesArray
            // newArray.push(llegada)
            // setPosicionesArray(newArray)
        }
    }, [llegada])

    return (
    <div> 
        <h2>Posiciones</h2>
        <ol>
            {posicionesArray.map((posicion, index) => <li key={index}>{posicion}</li>)}
        </ol>
    </div>
        )
    }  

export default Posiciones