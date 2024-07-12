// const variable = import.meta.env.VITE_API_URL;


// const apiUrlEntrada = "http://127.0.0.1:3000";
// const apiUrlEntrada = "https://poetic-tube-428221-a5.rj.r.appspot.com";
const apiUrlEntrada = "https://poetic-tube-428221-a5.rj.r.appspot.com";
// const apiUrlEntrada = "https://bce8-190-232-46-111.ngrok-free.app";



export function getToken (){
    const persistRoot = localStorage.getItem('persist:root');
    let token = null;
    // Verificar si hay algún valor
    if (persistRoot) {
        const parsedPersistRoot = JSON.parse(persistRoot);
        const auth = JSON.parse(parsedPersistRoot.auth);
        token = auth.token;
        // console.log("Token:", token);
        console.log("verificando token",token );
        return token;

    } else {
        console.log("No se encontró 'persist:root' en el Local Storage");
        return null;
    }

}


export class Api {

    static get(url, apiUrl = apiUrlEntrada) {

        console.log("Token, method Get: ",getToken());
        // const {token} = useSelector((argumento)=>argumento.auth);
        console.log("URL, method Get: ", `${apiUrl}${url}`);

        return fetch(`${apiUrl}${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            // body: JSON.stringify(data),
        })
        .then((response) => {
            console.log("1° then, get:", response.body);
          if (!response.ok) {
                if (response.status === 403) { // Si el estado es 401 (Unauthorized)
                    throw new Error('Token expired');
                } else {
                    throw new Error('Error in get type network response');
                }
          }
          return response.json();
        })
        .then((data) => {
            console.log("2° then, get:", data);
            // console.log('Success:', data);
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            console.log("3° then, get:", error);
            
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
        
            console.log("1° then, post:", response);
            if (!response.ok) {
                if (response.status === 403) { // Si el estado es 401 (Unauthorized)
                    throw new Error('Token expired');
                } else {
                    throw new Error('Error in get type network response');
                }
            }
          return response.json();
        })
        .then((data) => {
            console.log("2° then, post:", data);
            // console.log('Success:', data);
            return data; // Devuelve los datos para que puedan ser usados
        })
        .catch((error) => {
            console.log("3° then, post:", error);

            // console.error('Error:', error);
            throw error; // Vuelve a lanzar el error para que pueda ser capturado por el llamador
        });
    }
}
