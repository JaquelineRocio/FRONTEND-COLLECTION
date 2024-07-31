/**
 * Este es un hook personalizado, es decir se usa solo para devolver logica. este codigo
 * no es un componente, no se usa como componente
 */
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    console.log("valor de la url ingresada", url);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // Ejecutamos el useEffect cada vez que le damos un url al useFetch
    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setLoading(true);
            try{
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getToken()}`
                    },
                });

                if(!res.ok){
                    let err = new Error("Error en la petición Fetch");
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "Ourrió un error";
                    throw err;
                }
                // Si no hay error convertimos la respuesta en un json
                // usamos await porque debemos esperar a que res obtenga un resultado
                const json = await res.json();

                // Si todo va bien, actualizamos data
                if(!signal.aborted){
                    setData(json);
                    setError(null);
                }

            }catch(error){
                // Si todo va mal, actualizamos data
                if(!signal.aborted){
                    setData(null);
                    setError(error);
                }
            // FInally se ejecuta siempre en las peticones
            }finally{
                if(!signal.aborted){
                    setLoading(false);
                }
            }
        };

        fetchData();

        // Se ejecuta cuando termina de ejecutarse el useEffect
        return () => abortController.abort();

    },[url])

    return {data:data, error, loading}
}


export function getToken (){
    const persistRoot = localStorage.getItem('persist:root');
    let token = null;
    // Verificar si hay algún valor
    if (persistRoot) {
        const parsedPersistRoot = JSON.parse(persistRoot);
        const auth = JSON.parse(parsedPersistRoot.auth);
        token = auth.token;
        // console.log("Token:", token);
        // console.log("verificando token",token );
        return token;

    } else {
        console.log("No se encontró 'persist:root' en el Local Storage");
        return null;
    }

}

// https://www.youtube.com/watch?v=B4BBH3sbGoY