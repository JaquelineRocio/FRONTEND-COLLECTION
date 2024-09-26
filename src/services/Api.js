// const variable = import.meta.env.VITE_API_URL;


// const apiUrlEntrada = "http://127.0.0.1:3000";
// const apiUrlEntrada = "https://crack-lamp-435704-g6.rj.r.appspot.com";
const apiUrlEntrada = "http://ec2-18-218-211-151.us-east-2.compute.amazonaws.com:8080"

// const apiUrlEntrada = "https://bb43-2001-1388-6460-e97b-e5e6-ffe1-f2b-1cbf.ngrok-free.app";

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


export class Api {

    static get(url, apiUrl = apiUrlEntrada) {

        // console.log("Token, method GET: ",getToken());
        // console.log("Url, method Get: ", `${apiUrl}${url}`);

        return fetch(`${apiUrl}${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
                'ngrok-skip-browser-warning': '1' // Agrega este encabezado
            },
        })
        .then(async (response) => {
            // console.log("Estado de la respuesta:", response.status);
            // const contentType = response.headers.get('content-type');
            // console.log("Content-Type:", contentType);
            // const text = await response.text();
            // console.log("Contenido de la respuesta:", text);
        //   console.log("Respuesta de estatus get",response)
          if (!response.ok) {
                if (response.status === 401) { // Si el estado es 401 (Unauthorized)
                    throw new Error('Token expired');
                } else {
                    throw new Error('Error in get type network response');
                }
          }
          return response.json();
        })
        .then((data) => {
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            console.log("mensaje obtenido 'get' ", error);
            // console.error('Error:', error);
            throw error; // Vuelve a lanzar el error para que pueda ser capturado por el llamador
        });
    }

    static post(data, url, apiUrl = apiUrlEntrada) {

        console.log("Token, method Post: ",getToken());
        console.log(`Url, method Post: ${apiUrl}${url}`);

        return fetch(`${apiUrl}${url}`, {    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            // console.log("Respuesta de estatus post",response)
            if (!response.ok) {
                if (response.status === 401) { // Si el estado es 401 (Unauthorized)
                    throw new Error('Token expired');
                } else {
                    throw new Error('Error in get type network response');
                }
            }
          return response.json();
        })
        .then((data) => {
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            console.log("mensaje obtenido 'get' ", error);
            throw error; // Vuelve a lanzar el error para que pueda ser capturado por el llamador
        });
    }
}
