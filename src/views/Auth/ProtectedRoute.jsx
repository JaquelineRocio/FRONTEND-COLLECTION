// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// const ProtectedRoute = ({children}) => {
//     const {isLogin} = useSelector((argumento)=>argumento.auth);
//     const navigate = useNavigate();
//     if(!isLogin){
//         navigate('/login')
//     }
//     return(
//         <>
//         {children}
//         </>
//     )
// }

// export default ProtectedRoute;



import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
  const isLogin = useSelector(state => state.auth.isLogin); // Asume que tienes un slice auth con isLogin en tu estado global

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;