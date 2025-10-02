import React, { useEffect, useState } from "react";

const Cronometro = () => {
    const [segundos, setSegundos] = useState(0);
    const [activo, setActivo] = useState(true);
    const [timer, setTimer] = useState(null);
    
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
    </div>;
}

export default Cronometro;