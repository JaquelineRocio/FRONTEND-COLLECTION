import { useEffect, useRef, useState } from "react";

// const apiUrlEntrada = "https://backend.corebankia.com";
// const apiUrlEntrada = "https://corebankia.uc.r.appspot.com";
const apiUrlEntrada = "https://crack-lamp-435704-g6.rj.r.appspot.com";

const useFetchApi = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const controllerRef  = useRef(null);
    const signalRef = useRef(null);

    const requestIdRef = useRef(0);


    const postMethod = async (body = {}, url, apiUrl = apiUrlEntrada) => {
        
        // Incrementar el ID de la petición
        requestIdRef.current += 1;
        const currentRequestId = requestIdRef.current;

        // Abortar la petición anterior si existe
        if(controllerRef.current){
            controllerRef.current.abort();
        }

        // Crear un nuevo AbortController para la petición actual
        controllerRef.current = new AbortController();
        signalRef.current = controllerRef.current.signal;

        // Resetear estados
        setError(null);
        setData(null);
        setLoading(true);

        let result = null;
        let errores = null;

        try {

            const response = await fetch(`${apiUrl}${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                },
                body: JSON.stringify(body),
                signal: signalRef.current,
            });

            // Verifica si la respuesta es JSON
            const contentType = response.headers.get('content-type');
            

            if (contentType && contentType.includes('application/json')) {
                result = await response.json(); // Si es JSON, lo procesamos como tal
            } else {
                result = await response.text(); // Si no es JSON, lo tratamos como texto
            }

            if (!response.ok) {
                // console.log("contendio de la respusta !ok 1: ", response); // me va a devolver todo el objeto
                // console.log("contendio de la respusta !ok 2: ", result);  // { "error": "Token JWT expirado" }
                if (response.status === 401) {
                    throw new Error('Token expired');
                } else {
                    throw new Error(`Error in network response: ${JSON.stringify(result)}`);
                }
            }

            setData(result);
            // setError(null);
            
        } catch (err) {
            // ignoramos el error de tipo "AbortError"
            if (err.name === 'AbortError') {
                console.log('Petición abortada');
                // No establecer el error para peticiones abortadas
            } else {
                setError(err);
                errores = err;
            }
            
        } finally{
            if (currentRequestId === requestIdRef.current) {
                setLoading(false);
            }
        }

        // Cuando la promesa se resuelva, la funcion retorna estos valores
        return {
            data: result,
            error: errores,
        }
            
    }
    
    useEffect(()=>{
        return () => {console.log("componente useFetch desmontado");controllerRef?.current?.abort();}
    },[])
    
    return {
        loading: loading,
        error: error,
        data: data,
        postMethod: postMethod,
        getMethod: "funcion aun no implementada"
    }
}

export default useFetchApi;


export function getToken (){
    const persistRoot = localStorage.getItem('persist:root');
    let token = null;
    // Verificar si hay algún valor
    if (persistRoot) {
        const parsedPersistRoot = JSON.parse(persistRoot);
        const auth = JSON.parse(parsedPersistRoot.auth);
        token = auth.token;
        return token;
    } else {
        console.log("No se encontró 'persist:root' en el Local Storage");
        return null;
    }

}