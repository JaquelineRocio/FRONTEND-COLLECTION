// const variable = import.meta.env.VITE_API_URL;
// const apiUrlEntrada = "https://crack-lamp-435704-g6.rj.r.appspot.com";
// const apiUrlEntrada = "https://bb43-2001-1388-6460-e97b-e5e6-ffe1-f2b-1cbf.ngrok-free.app";
const apiUrlEntrada = "http://ec2-18-218-211-151.us-east-2.compute.amazonaws.com:8080"


export class LoginApi {

    static get(url, apiUrl = apiUrlEntrada) {
        // console.log("this is my get url: ", `${apiUrl}${url}`);
        return fetch(`${apiUrl}${url}`, {
            method: 'GET',
        })
        .then((response) => {
            
            if (!response.ok) {

                // console.log("accedemos al bloque de errores:", response);
                // if (response.status === 500) {
                //     throw new Error('Ocurrio un error');
                // }

                //     throw new Error('error in get type network response');
                      // Manejar diferentes códigos de error
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

    static post(data, url, apiUrl = apiUrlEntrada) {

        return fetch(`${apiUrl}${url}`, {    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            // console.log("Bloque then 1 :", response);
          if (!response.ok) {
            // console.log("accedemos al bloque de errores:", response);
            // throw new Error('error in post type network response');
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
            // console.log("Bloque then 2");
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            console.log("Bloque catch", error);
            // console.log("error bloque post")
            throw error; // Vuelve a lanzar el error para que pueda ser capturado por el llamador
        });
    }
}
