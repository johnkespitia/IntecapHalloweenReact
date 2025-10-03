import React, { use, useEffect, useState } from "react";
import Posiciones from "./Posiciones";

const Cronometro = ({ nombre = "Nombre" }) => {
    const [segundos, setSegundos] = useState(0);
    const [activo, setActivo] = useState(true);
    const [timer, setTimer] = useState(null);
    const [llegada, setLlegada] = useState(0);
    
    // setTimeout(() => {
    //     setSegundos(segundos + 1);
    // }, 5000);
    
    useEffect(() => {
        console.log('Cronometro mounted');
        const timer = setInterval(() => {
            setSegundos((valor_previo) => { return valor_previo + 1 }); 
        }, 1000);
        setTimer(timer);
    }, []);

    useEffect(() => {
       
    }, [activo]);

    useEffect(() => {
       
    }, [timer]);

    useEffect(() => {
        //console.log("cambio")
    }) //listener de todo el estado (didUpdate)

    useEffect(() => {
        console.log("EL COMPONENTE SE MONTO ESTA VEZ Y ES LA UNICA ------")
    }, []) //listener de didMount

    useEffect(() => {
        console.log("cambio activo")
    }, [activo]) //listener de didUpdate de segundos, [segundos, ...]

    useEffect(() => {
        return () => {
            console.log("EL COMPONENTE SE VA A DESMONTAR")
            if(timer != null){
                clearInterval(timer);
            }
        }
    }, []) //listener de didMount y willUnmount

    useEffect(() => {
        console.log("cambio propiedad nombre")
    }, [nombre])
    // sin segundo parametro didUpdate todo el estado
    // con [] solo didMount
    // useEffect(() => {
    //     console.log('Cronometro updated', activo);
    //     if(!activo) {
    //         clearInterval(timer);
    //     }else{
    //         const newTimer = setInterval(() => {
    //             setSegundos((valor_previo) => { return valor_previo + 1 });
    //         }, 1000);
    //         setTimer(newTimer);
    //     }
    // },[activo])
    // useEffect(() => {},[])
    
    const handleLlegada = () => {
        setLlegada(segundos);
    }

    const handleActivo = () => {
        console.log('handleActivo', activo);
        setActivo(!activo);
        if(timer != null){
            clearInterval(timer);
            setTimer(null);
        }else{
            const newTimer = setInterval(() => {
                setSegundos((valor_previo) => { return valor_previo + 1 });
            }, 1000);
            setTimer(newTimer);
        }
    }

    return <div>
        <h2>Cronometro Segundos</h2>
        <p>{segundos} segs.</p>
        <button onClick={handleActivo}>{activo ? 'Pausar' : 'Reanudar'}</button>
        <button onClick={handleLlegada}>Registar llegada</button>
        <Posiciones llegada={llegada} />
    </div>;
}

export default Cronometro;