// import React from 'react';
import globalCorebankia from '/globalCorebankia.svg'
import logoContactoEficaz from '../../../public/contactoEficaz.png'
// import { Input } from "@material-tailwind/react";
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { authenticatedUser, unauthenticatedUser, setIsloginToTrue, loginUser } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { LoginApi } from '../../services/LoginApi';
// import { Carousel } from "@material-tailwind/react";
import { getToken } from '../../services/Api';

import uno from '../../../public/carousel-imgs/1.jpg';
import dos from '../../../public/carousel-imgs/2.jpg';
import tres from '../../../public/carousel-imgs/3.jpg';
import fondo from '../../../public/fondologin.png';
import Swal from 'sweetalert2';
import { Carousel, Typography } from '@material-tailwind/react';
import { Button } from 'react-day-picker';
// import { useAppDispatch } from '../../store';

const Login = () => {



const [inputUser, setInputUser] = useState('');
const [inputPassword, setInputPassword] = useState('');
const {isLogin} = useSelector((argumento)=>argumento.auth);

const navigate = useNavigate();
const dispatch = useDispatch();
// const dispatch = useAppDispatch();

const handleUserInputChange = (event) => {
  console.log(event.target.value);
  setInputUser(event.target.value);
}

const handlePasswordInputChange = (event) => {
  setInputPassword(event.target.value);
}



async function handleSubmit(){
  
  const data = {
    "usuario": inputUser,
    "password": inputPassword
  }

  // try{

  //   // Intenta realizar la solicitud de login
  //   const response = await LoginApi.post(data, '/auth/login');
  //   console.log("espuesta***", response);
  //   // Si la respuesta no contiene un token válido, lanzamos un error
  //   const token = response?.token;
  //   if (!token) {
  //     throw new Error('No se recibió un token válido');
  //   }

  //   // Crear el objeto de respuesta
  //   const dataResponse = {
  //     "token": token,
  //     "user": {
  //       "id": 1,
  //       "name": "Juan",
  //       "email": "juan@gmail.com"
  //     },
  //   };

  //   // Despachar el usuario autenticado
  //   dispatch(authenticatedUser(dataResponse));
    
  //   // Lógica para asegurar que el token está guardado en el localstorage
  //   let newToken = getToken();
  //   const maxAttempts = 10; // Número máximo de intentos
  //   let attempts = 0;

  //   while (token !== newToken && attempts < maxAttempts) {
  //     newToken = getToken();
  //     console.log("nuevo Token", getToken());
  //     attempts++;
  //     await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo antes de la siguiente verificación
  //   }

  //   // Si después de varios intentos el token no coincide, registramos un error y despachamos un usuario no autenticado
  //   if (token !== newToken) {
  //     console.error('No se pudo actualizar el token');
  //     dispatch(unauthenticatedUser());
  //   }

  //   // Establece login a verdadero solo si el token es guardado correctamente en el local storage
  //   if (token == newToken) {
  //     console.log('Token guardado correctamente');
  //     dispatch(setIsloginToTrue());
  //   }




  // }catch(error){
  //     console.error('Error en la petición:', error);
  // }
  dispatch(loginUser(data)).then((response)=>{
    console.log("mi respuesta login",response);
    if(response.type=="auth/loginUser/fulfilled"){
      // alert("Tu sesión ha iniciado correctamente");
      // Swal.fire({
      //   position: "top-end",
      //   icon: "success",
      //   title: "Su sesión inició correctamente",
      //   showConfirmButton: false,
      //   timer: 1500
      // });
      navigate("/dashboard");
    }else{
      // alert("hubo un error en tu inicio de sesión");
      Swal.fire({
        // position: 'top-end',
        icon: "error",
        title: "Usuario o contraseña incorrectos",
        // text: "¡Algo salió mal!",
        // footer: '<a href="#">Why do I have this issue?</a>'
        showCancelButton: false,
        timer: 1500
      });
    }
  });
}

// useEffect(()=>{
//   console.log("useEffect verificado");
//   if(isLogin){
//     navigate("/dashboard");
//   }

// },[isLogin]);

    return (
    <>

      <div className="flex h-screen">
          {/* <!-- Right Pane --> */}
          <div className="w-full bg-white lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6 " >
            <div className="w-full max-w-md mx-auto mb-12 flex items-center justify-center text-right">
              <img src={logoContactoEficaz} alt="Login Image" className="w-100 object-cover" />
            </div>
            <h1 className="text-4xl font-semibold mb-3 text-black text-center font-ralewayBold">Bienvenido</h1>
            <h1 className="text-2xl mb-6 text-gray-700 text-center font-ralewayMedium">Sistema de cobranza </h1>
            <div className="space-y-4">
              {/* <!-- Your form elements go here --> */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 font-ralewayMedium">Usuario</label>
                <input value={inputUser} onChange={handleUserInputChange} placeholder="Ingrese su nombre de usuario" type="text" id="username" name="username" className="font-ralewayMedium mt-1 p-3 w-full border border-gray-800/30 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-900 transition-colors duration-300"/>
              </div>
              {/* <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
              </div> */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-ralewayMedium">Contraseña</label>
                {/* <input placeholder="Ingrese contraseña" type="password" id="password" name="password" className="mt-1 p-3 w-full border border-gray-800 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-900 transition-colors duration-300"/> */}
                <input value={inputPassword} onChange={handlePasswordInputChange} placeholder="Ingrese contraseña" type="password" id="password" name="password" className=" font-ralewayMedium mt-1 p-3 w-full border border-gray-800/30 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-900 transition-colors duration-300"/>
                {/* <Input color="indigo" className="bg-white" label="Ingrese contraseña" /> */}
              
              
              </div>
              <div className="mt-4 text-sm text-gray-600 text-right">
                <p><a href="#" className="text-black hover:underline font-ralewayMedium">¿Olvidaste tu usuario ó contraseña?</a>
                </p>
              </div>
              <div>
                {/* <button onClick={handleSubmit}  type="submit" className="w-full bg-blue-900 text-white p-3 rounded-md hover:bg-blue-950 focus:outline-none focus:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-900 transition-colors duration-300">Ingresar</button> */}
                <button onClick={handleSubmit} type="button" className="font-ralewayMedium w-full bg-blue-900 text-white p-3 rounded-md hover:bg-blue-950 focus:outline-none focus:bg-blue-800 focus:outline-none focus:bg-blue-700  transition-colors duration-300">Ingresar</button>

              </div>
              </div>
            {/* </form> */}
            <div className="w-full max-w-md mx-auto mt-12 flex items-center justify-center text-right">
              <img src={globalCorebankia} alt="Login Image" className="w-100 object-cover" />
            </div>

          </div>
        </div>
        {/* <!-- Left Pane --> */}


         <div className="hidden lg:flex items-center justify-center flex-1 px-[5%] py-[4%] text-black bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">
          {/*<div className="max-w-2xl  text-center">*/}
          {/* <img src={fondo} alt="Portada" className="w-full h-auto rounded-2xl shadow-lg"/>  */}

              

          <Carousel className="rounded-2xl max-w-screen-xl ">

          <div className="relative h-full w-full">
            <img
              src={fondo}
              alt="image 1"
              // className="h-auto w-full "
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full  bg-black/10">
              <div className="text-center">
                <Typography
                  // variant="h1"
                  variant="lead"
                  color="black"
                  className="mb-4 text-xl md:text-xl lg:text-3xl w-full pt-10 font-ralewayMedium"
                >
                  {'"La perseverancia y la determinación son nuestras herramientas más poderosas."'}
                </Typography>
                {/* <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit.
                </Typography> */}
                {/* <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
          </Carousel>     

        </div> 

      </div>





    </>
    )

};

export default Login;