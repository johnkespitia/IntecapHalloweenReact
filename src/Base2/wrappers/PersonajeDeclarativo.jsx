// Wrapper Component
import React, { Children, cloneElement, isValidElement, useRef, useState } from "react";
import { API } from "../constantes.js";
const PersonajeDeclarativo = ({ children }) => {
    const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const inputPersonajeRef = useRef("");

    const assignPersonajeRef = (personaje) => {
        inputPersonajeRef.current = personaje;
    }
    
    const searchPersonaje = async (e) => { 
        e.preventDefault();
        setLoading(true);
        setError(null);
        setPersonajeSeleccionado(null);
        try {
            const response = await fetch(`${API}character?name=${inputPersonajeRef.current}`)
            const data = await response.json();
            setPersonajeSeleccionado(data.results[0]);
        }catch (err) {
            setError(err.message || 'Error al buscar personaje');
        }finally{
            setLoading(false);
        }
    }
    
    //Inyeccion de propiedades a los componentes hijos
    return Children.map(children, child => {
        if (!isValidElement(child)) return child;
        return cloneElement(child, {
            ...child.props,
            searchPersonaje,
            setPersonaje: assignPersonajeRef,
            personajeSeleccionado,
            loading,
            error
        })
    })
}

export default PersonajeDeclarativo;