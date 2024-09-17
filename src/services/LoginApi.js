// const variable = import.meta.env.VITE_API_URL;
const apiUrlEntrada = "https://crack-lamp-435704-g6.rj.r.appspot.com";
// const apiUrlEntrada = "https://bb43-2001-1388-6460-e97b-e5e6-ffe1-f2b-1cbf.ngrok-free.app";


export class LoginApi {

    static get(url, apiUrl = apiUrlEntrada) {
        // console.log("this is my get url: ", `${apiUrl}${url}`);
        return fetch(`${apiUrl}${url}`, {
            method: 'GET',
        })
        .then((response) => {
            
            if (!response.ok) {

                console.log("accedemos al bloque de errores:", response);
                if (response.status === 500) {
                    throw new Error('Ocurrio un error');
                }

                    throw new Error('error in get type network response');
            }
            return response.json();
        })
        .then((data) => {
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
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
          if (!response.ok) {
            console.log("accedemos al bloque de errores:", response);
                // if (response.status === 500) {
                //     throw new Error('Ocurrio un error');
                // }
                throw new Error('error in post type network response');
          }
          return response.json();
        })
        .then((data) => {
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            throw error; // Vuelve a lanzar el error para que pueda ser capturado por el llamador
        });
    }
}
