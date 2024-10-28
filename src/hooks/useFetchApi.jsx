import { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
const apiUrlEntrada = import.meta.env.VITE_URL_BACKEND; 
import { store } from '../store'; // Ajusta la ruta según la ubicación de tu store
// const apiUrlEntrada = " https://backend.corebankia.com"

const useFetchApi = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const controllerRef  = useRef(null);
    const signalRef = useRef(null);

    const requestIdRef = useRef(0);

    // Obtener el accessToken directamente desde el estado de Redux
    // const accessToken = useSelector(state => state.auth.accessToken);
    // console.log("este es el token: ",accessToken );
    const postMethod = async (body = {}, url, apiUrl = apiUrlEntrada) => {
        // Obtener el accessToken desde el store
        const accessToken = store.getState().auth.accessToken;
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
            // console.log("se esta enviado el token?", accessToken);
            const response = await fetch(`${apiUrl}${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept': 'application/json' // para indicarle al backend que la peticion que estoy realizando es tipo api y que requiero un json como respuesta
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
            // console.log("bloque catch: ", err);
            // ignoramos el error de tipo "AbortError"
            if (err.name === 'AbortError') {
                // console.log('Petición abortada');
                // No establecer el error para peticiones abortadas
                setError(err);
                errores = err;
            } else {
                setError(err);
                errores = err;
            }
            
        } finally{
            // console.log("bloque finally");
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

    const getMethod = async (url, apiUrl = apiUrlEntrada) => {
        const accessToken = store.getState().auth.accessToken;
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
            // console.log("se esta enviado el token?", accessToken);
            const response = await fetch(`${apiUrl}${url}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept': 'application/json' // para indicarle al backend que la peticion que estoy realizando es tipo api y que requiero un json como respuesta
                },
                // body: JSON.stringify(body),
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
                setError(err);
                errores = err;
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
        getMethod: getMethod
    }
}

export default useFetchApi;


// export function GetToken (){
//     const token = useSelector(state => state.auth.accessToken); 
//     if(token){
//         return token;
//     }else{
//         console.log("No se encontró 'persist:root' en el Local Storage");
//         return null;
//     }

// }