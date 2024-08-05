// const variable = import.meta.env.VITE_API_URL;
const apiUrlEntrada = "https://poetic-tube-428221-a5.rj.r.appspot.com";
// const apiUrlEntrada = "https://cf0f-201-240-244-251.ngrok-free.app";

export class LoginApi {

    static get(url, apiUrl = apiUrlEntrada) {
        // console.log("this is my get url: ", `${apiUrl}${url}`);
        return fetch(`${apiUrl}${url}`, {
            method: 'GET',
        })
        .then((response) => {
            console.log("oooPrimerThen",response);
            if (!response.ok) {
                throw new Error('error in get type network response');
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

    static post(data, url, apiUrl = apiUrlEntrada) {

        console.log(`Peticion POST LoginApi realizada a: ${apiUrl}${url}`);
        return fetch(`${apiUrl}${url}`, {    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
          if (!response.ok) {
            
            throw new Error('error in post type network response');
          }
          return response.json();
        })
        .then((data) => {
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            console.log("mensaje obtenido 'post' ", error);
            throw error; // Vuelve a lanzar el error para que pueda ser capturado por el llamador
        });
    }
}
