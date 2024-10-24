
const urlBackend = import.meta.env.VITE_URL_BACKEND;


export class LoginApi {

    static get(url, apiUrl = urlBackend) {
        return fetch(`${apiUrl}${url}`, {
            method: 'GET',
        })
        .then((response) => {
            if (!response.ok) {
                switch (response.status) {
                    case 400:
                    throw new Error('Solicitud inválida (400)');
                    case 401:
                    throw new Error('No autorizado (401)');
                    case 404:
                    throw new Error('Recurso no encontrado (404)');
                    case 500:
                    throw new Error('Error interno del servidor (500)');
                    default:
                    throw new Error(`Error desconocido (${response.status})`);
                }
            }
            return response.json();
        })
        .then((data) => {
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            // console.log("error bloque get")
            throw error; // Vuelve a lanzar el error para que pueda ser capturado por el llamador
        });
    }

    static post(data, url, apiUrl = urlBackend) {
        // console.log("metodo post");
        return fetch(`${apiUrl}${url}`, {    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        // Toda respueta correcta se carga en este bloque
        .then( async (response) => {

            const data = await response.json(); // Leer el cuerpo de la respuesta una vez

          if (!response.ok) {

            // Error credenciales incorrectas
            if (response.status == 500){
                if(data?.detail == "Bad credentials"){
                    throw new Error("Bad credentials");
                }
            }

            throw new Error("Desconocido");  
          }
          return data;
        })
        .then((data) => {
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            console.log("Bloque catch login:", error);
            // console.log("error bloque post")
            throw error; // Vuelve a lanzar el error para que pueda ser capturado por el llamador
        });
    }
}
