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
    const {user, roles} = useSelector((argumento)=>argumento.auth);

    return(
        <>
           <div className="ml-auto flex items-center ">
            <UserProfile 
              // name='juan carlos'
              // name={user?.name}
              // name={user && user.name ? user.name : 'Invitado'}
              name={user}
              role={roles}
              className=""
            />
          </div>

        </>

    )
}

export default Header;