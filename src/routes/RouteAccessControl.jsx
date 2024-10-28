
/**
 * Mensjaes: su sesion a caducado.
 * usted no tiene permiso para acceder a esta seccion
 * 
 */
import { useSelector } from 'react-redux';
const RouteAccessControl = ({roles=[], permissions=[], children}) => {
    const isLogin = useSelector(state => state.auth.isLogin)
    const storedRoles = useSelector(state => state.auth.roles);
    const storedPermissions = useSelector(state => state.auth.permissions);

    if (!isLogin) {
        return "Su sesion ha expirado";
    }

    if(roles.length != 0 || permissions.length != 0){
        // si uno de los roles del argumento esta en storedRoles, entonces permitimos el pase al usuario
        const roleExists = roles.some( elemento => storedRoles.includes(elemento));
        // si uno de los roles del argumento esta en storedRoles, entonces permitimos el pase al usuario
        const permissionExists = permissions.some( elemento => storedPermissions.includes(elemento));

        if(!roleExists && !permissionExists){
            return "Usted no tiene permiso de acceso a esta sección"
        }

    }else{
        return "Usted no tiene permiso de acceso a esta sección";
    }


    return children;
}

export default RouteAccessControl;





