import swal from "sweetalert";
import { unauthenticatedUser } from "../store/authSlice";

 const manageErrorAndSessionUtils = (error, dispatch) => {

    if (!error) {
      return; // No renderiza nada si no hay error
    }
  
    if (error.message === 'Token expired') {
      swal({
        title: "Sesión Finalizada",
        text: "Por favor, inicie sesión nuevamente para continuar.",
        icon: "warning",
        button: "OK",
      }).then(() => {
        // Cerrar sesión después de la notificación
        dispatch(unauthenticatedUser());
      });
    } else if(error.name == 'AbortError'){
      // Manejo de error de solicitud abortada
      console.log("fetch request cancelled: ", error);
    } else {
      swal({
        title: "Algo salió mal.",
        text: "No pudimos obtener los datos en este momento. Por favor, vuelve a intentarlo más tarde",
        icon: "warning",
        button: "OK",
      });
    }
};

export default manageErrorAndSessionUtils;