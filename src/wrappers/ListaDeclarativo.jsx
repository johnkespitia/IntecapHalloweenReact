import { Children, cloneElement, isValidElement, useCallback, useEffect, useRef, useState } from "react";
import { API } from "../constantes";

const ListaDeclarativo = ({children}) => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pagina, setPagina] = useState(1);
    const lastPageRef = useRef(null);

    const getPersonajes = useCallback(async () => {
        setError(null);
        setLoading(true);
        try {
            const response = await fetch(`${API}character?page=${pagina}`);
            const data = await response.json();
            const nuevosPersonajes = data.results || [];
            setPersonajes((prevPersonajes) => [...prevPersonajes, ...nuevosPersonajes]);
            lastPageRef.current = data.info.pages;
        } catch (error) {
            setError(error.message || 'Error al cargar personajes');
        }finally {
            setLoading(false);
        }
    },[pagina]);

    useEffect(() => {
        getPersonajes();
    },[getPersonajes]);

    // Detectar scroll al final de la página (ventana) y cargar siguiente página
    useEffect(() => {
        const handleWindowScroll = () => {
            // Evitar disparar mientras está cargando
            if (loading) return;
            // Comprobar si llegamos al fondo (pequeño margen de 100px)
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100)) {
                setPagina((prev) => {
                    if (prev < lastPageRef.current) {
                        return prev + 1;
                    }
                    return prev;
                });
            }
        };

        window.addEventListener('scroll', handleWindowScroll);
        return () => window.removeEventListener('scroll', handleWindowScroll);
    }, [loading]);

    //Inyeccion de propiedades a los componentes hijos
    return Children.map(children, child => {
        if (!isValidElement(child)) return child;
        return cloneElement(child, {
            ...child.props,
            personajes,
            loading,
            error,
        })
    })
}

export default ListaDeclarativo;

// //imperativa
// const Componente1 = new Componente()
// Componente1.title= "Titulo"
// //declarativa
// const Componente2 = <Componente title="Titulo" />