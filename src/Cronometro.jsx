import React, { use, useEffect, useRef, useState } from "react";
import Posiciones from "./Posiciones";

const Cronometro = ({ nombre = "Walter" }) => {
    const [segundos, setSegundos] = useState(0); // --> renderiza
    const [activo, setActivo] = useState(true);// --> renderiza
    const [llegada, setLlegada] = useState(0);// --> renderiza
    const timerRef = useRef(null);
    const fechaRef = useRef(new Date());
    const buttonRef = useRef(null); // document.getElementById("miBoton")
    const button2Ref = useRef(null); 
    
    // setTimeout(() => {
    //     setSegundos(segundos + 1);
    // }, 5000);
    
    useEffect(() => {
        console.log('Cronometro mounted');
        const timer = setInterval(() => {
            console.log('Intervalo corriendo');
            setSegundos((valor_previo) => { return valor_previo + 1 }); // --> renderiza
        }, 1000);
        console.log('Ref Limpio: ',timerRef)
        timerRef.current = timer;
        console.log('Ref con data: ',timerRef)
    }, []);

    useEffect(() => {
       
    }, [activo]);

    useEffect(() => {
       
    }, [timerRef]);

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
            if(timerRef.current != null){
                clearInterval(timerRef.current);
            }
        }
    }, []) //listener de didMount y willUnmount

    useEffect(() => {
        console.log("cambio propiedad nombre ",nombre)
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
        button2Ref.current.innerText = "Llego " + nombre;
        setLlegada(segundos); // --> renderiza
    }

    const handleActivo = () => {
        setActivo(!activo);// --> renderiza
        fechaRef.current = new Date();
        if(timerRef.current != null){
            clearInterval(timerRef.current);
            timerRef.current= null;
        }else{
            const newTimer = setInterval(() => {
                setSegundos((valor_previo) => { return valor_previo + 1 });
            }, 1000);
           timerRef.current=newTimer;
        }
    }
    
    return <div>
        <h2>Cronometro Segundos 
            <p>{fechaRef.current.getFullYear()}-{fechaRef.current.getMonth()}-{fechaRef.current.getDate()}:{fechaRef.current.getHours()}:{fechaRef.current.getMinutes()}:{fechaRef.current.getSeconds()}</p>
        </h2>
        <p>{segundos} segs.</p>
        <button onClick={handleActivo} ref={buttonRef}>{activo ? 'Pausar' : 'Reanudar'}</button> {/* id=miBoton */}
        <button onClick={handleLlegada} ref={button2Ref}>Registar llegada</button>
        <Posiciones llegada={llegada} />
    </div>;
}

export default Cronometro;