import {
    // Card,
    // CardHeader,
    // CardBody,
    // CardFooter,
    // Typography,
    // Button,
  } from "@material-tailwind/react";
import UserProfile from "./Components/UserProfile";
import { useSelector } from "react-redux";

const Header = () => {
    // const selector = useSelector((argumento)=> argumento.auth );
    // const data {user, roles} = useSelector((argumento)=>argumento.auth);
    const data = useSelector((argumento)=>argumento.auth);
    // console.log("datos de usuario", user, roles);
    return(
        <>
           <div className="ml-auto flex items-center ">
            <UserProfile 
              // name='juan carlos'
              // name={user?.name}
              // name={user && user.name ? user.name : 'Invitado'}
              name={data?.user}
              role={data?.roles}
              className=""
            />
          </div>

        </>

    )
}

export default Header;