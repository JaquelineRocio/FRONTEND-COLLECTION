import { useEffect, useRef, useState } from "react";

// const apiUrlEntrada = "https://backend.corebankia.com";
const apiUrlEntrada = "https://corebankia.uc.r.appspot.com";

const useFetchApi = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const controllerRef  = useRef(null);
    const signalRef = useRef(null);


    const getData = async (body = {}, url, apiUrl = apiUrlEntrada) => {
        setError(null);
        setData(null);
        setLoading(true);


        let result = null;
        let errores = null;


        if(controllerRef.current){
            controllerRef.current.abort();
        }

        controllerRef.current = new AbortController();
        signalRef.current = controllerRef.current.signal;

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
                console.log("accedemos al bloque de erroes", response);
                if (response.status === 401) {
                    throw new Error('Token expired');
                } else {
                    // const errorResponse = await response.json();
                    throw new Error(`Error in network response: ${JSON.stringify(result)}`);
                }
            }

            setData(result);
            // setError(null);
            
        } catch (err) {
            setError(err) ;
            errores = err;
        } finally{
            setLoading(false);
        }


        // Cuando la promesa se resuelva, la funcion retorna estos valores
        return {
            data: result,
            error: errores,
        }
        
        
    }
    
    useEffect(()=>{
        console.log("componente useFetch montado");
        return () => {console.log("componente useFetch desmontado"); controllerRef?.current?.abort();}
    },[])
    
    return {
        loading: loading,
        error: error,
        data: data,
        getData: getData,
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
        // console.log("Token:", token);
        // console.log("verificando token",token );
        return token;

    } else {
        console.log("No se encontró 'persist:root' en el Local Storage");
        return null;
    }

}