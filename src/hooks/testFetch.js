const apiUrlEntrada = "https://poetic-tube-428221-a5.rj.r.appspot.com";
export class testFetch {
    static async get(url, apiUrl = apiUrlEntrada) {
        let loading = true;
        let error = null;
        let data = null;

        try {
            const response = await fetch(`${apiUrl}${url}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                },
            });

            loading = false;

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Token expired');
                } else {
                    throw new Error('Error in network response');
                }
            }

            data = await response.json();
        } catch (err) {
            error = err;
            loading = false;
        }

        return { data, error, loading };
    }

    static async post(data, url, apiUrl = apiUrlEntrada) {
        let loading = true;
        let error = null;
        let responseData = null;

        try {
            const response = await fetch(`${apiUrl}${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                },
                body: JSON.stringify(data),
            });

            loading = false;

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Token expired');
                } else {
                    throw new Error('Error in network response');
                }
            }

            responseData = await response.json();
        } catch (err) {
            error = err;
            loading = false;
        }

        return { data: responseData, error, loading };
    }
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