import { useSelector } from 'react-redux';
const useViewAccessControl = ({roles=[], permissions=[]}) => {
    const isLogin = useSelector(state => state.auth.isLogin)
    const storedRoles = useSelector(state => state.auth.roles);
    const storedPermissions = useSelector(state => state.auth.permissions);

    if (!isLogin) {
        return false
    }

    if(roles.length != 0 || permissions.length != 0){
        // si uno de los roles del argumento esta en storedRoles, entonces permitimos el pase al usuario
        const roleExists = roles.some( elemento => storedRoles.includes(elemento));
        // si uno de los roles del argumento esta en storedRoles, entonces permitimos el pase al usuario
        const permissionExists = permissions.some( elemento => storedPermissions.includes(elemento));

        if(!roleExists && !permissionExists){
            return false
        }

    }else{
        return false
    }

    return true;
}
export default useViewAccessControl;