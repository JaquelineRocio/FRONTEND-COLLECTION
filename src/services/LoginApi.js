// const variable = import.meta.env.VITE_API_URL;


// const apiUrlEntrada = "http://127.0.0.1:3000";
// const apiUrlEntrada = "https://poetic-tube-428221-a5.rj.r.appspot.com";
const apiUrlEntrada = "https://poetic-tube-428221-a5.rj.r.appspot.com";
// const apiUrlEntrada = "https://bce8-190-232-46-111.ngrok-free.app";


export class LoginApi {

    static get(url, apiUrl = apiUrlEntrada) {

        // const {token} = useSelector((argumento)=>argumento.auth);
        // console.log("this is my get url: ", `${apiUrl}${url}`);

        return fetch(`${apiUrl}${url}`, {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${token}`
            // },
            // body: JSON.stringify(data),
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error('error in get type network response');
          }
          return response.json();
        })
        .then((data) => {
            // console.log('Success:', data);
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            // console.error('Error:', error);
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
            // console.log('Success:', data);
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            // console.error('Error:', error);
            throw error; // Vuelve a lanzar el error para que pueda ser capturado por el llamador
        });
    }
}
