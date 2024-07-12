import { Api } from "../../services/Api";

const PeticionApi = () => {

    const handleRequest = async () => {


        const data = {
            'prioridad': 'uno',
            'cartera': 'ejemplo',
            'moneda': 'sol',

        }



        try {
            const response = await Api.post(data,'/auth'); // Llamada directa al método estático
            console.log("Mi respuestas",response);
            console.log("Estamos en el try");
        } catch (error) {
            console.error('Error en la petición:', error);
            console.log("Estamos en el catch");
        }
    }

    return(
        <>
        <h3>This is the response</h3>
        <button 
            className="bg-green-600"
            onClick={handleRequest}
        >
            Presione para hacer peticion
        </button>
        </>
    )
}

export default PeticionApi;
