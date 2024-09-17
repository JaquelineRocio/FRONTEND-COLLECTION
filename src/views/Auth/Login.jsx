
import globalCorebankia from '/globalCorebankia.svg'
import logoContactoEficaz from '../../../public/contactoEficaz.png'

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {loginUser } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

import uno from '../../../public/carousel-imgs/1.jpg';
import dos from '../../../public/carousel-imgs/2.jpg';
import tres from '../../../public/carousel-imgs/3.jpg';
import fondo from '../../../public/fondologin.png';
import Swal from 'sweetalert2';
import { Carousel, Typography } from '@material-tailwind/react';
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import proyecInformation from './../../services/resources/proyectInformation';


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    
    const {register, handleSubmit, formState:{errors}} = useForm();

        // const onSubmit = handleSubmit(data => {
        //     setLoading(true);
        //     dispatch(loginUser(data)).then((response)=>{

        //       console.log("respuesta de login :", response);
        //       if(response.type=="auth/loginUser/fulfilled"){
        //         navigate("/dashboard");
        //       }else{
        //         setLoading(false);
        //         Swal.fire({
        //           // position: 'top-end',
        //           icon: "error",
        //           title: "Usuario o contraseña incorrectos",
        //           showCancelButton: false,
        //           timer: 1500
        //         });
        //       }
        //     });
        // })

        const onSubmit = handleSubmit(data => {
          setLoading(true);
          dispatch(loginUser(data))
          .unwrap()
          .then((response)=>{

            // console.log("respuesta de login :", response);

              navigate("/dashboard");

          }).catch((error) => {
            console.log("este es el error", error);
              let messageError = null;
            if(error.message=="Ocurrio un error"){
              messageError = "Ha ocurrido un error. Por favor, intente más tarde";
            }else{
              messageError = "Usuario o contraseña incorrectos";
            }
            
            setLoading(false);
            Swal.fire({
              icon: "error",
              title: messageError, // Aquí accedes al mensaje de error
              showCancelButton: false,
              timer: 1500
            });
          });
        });

        const reglasUsuario = {
          required:{value: true, message: "Error: El nombre es requerido"},
          minLength:{value: 2, message: "Error: El nombre debe tener al menos 2 caracteres"},
          maxLength:{value: 20, message: "Error: El nombre debe tener menos de 20 caracteres"},
        }

        const reglasPassword = {
          required:{value: true, message: "Error: La contraseña es requerida"},
          minLength:{value: 2, message: "Error: La contraseña  debe tener al menos 2 caracteres"},
          maxLength:{value: 20, message: "Error: La contraseña debe tener menos de 20 caracteres"},
        }

        const showVersionInformation = () => {
          console.log(proyecInformation);
        }
        return (
        <>
          <div className="flex h-screen bg-yellow-900">
              {/* <!-- Right Pane --> */}
              {/* <div className="w-full bg-white lg:w-1/2 flex items-center justify-center"> */}
              <div className="w-full bg-white lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6" >

                  <div className="w-full max-w-md mx-auto mb-12 flex items-center justify-center text-right">
                    <img src={logoContactoEficaz} alt="Login Image" className="w-100 object-cover" />
                  </div>

                  <h1 className="text-4xl font-semibold mb-3 text-black text-center font-ralewayBold">Bienvenido</h1>
                  <h1 className="text-2xl mb-6 text-gray-700 text-center font-ralewayMedium">Sistema de cobranza </h1>
                    {/* <div className="space-y-4"> */}
                    

                  {/* ------------------ */}
                  <form className="" onSubmit={onSubmit}>
                        <div className='mb-6'>
                          <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 font-ralewayMedium ">Usuario</label>
                          {/* <input value={inputUser} onChange={handleUserInputChange} placeholder="Ingrese su nombre de usuario" type="text" id="username" name="username" className="font-ralewayMedium mt-1 p-3 w-full border border-gray-800/30 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-900 transition-colors duration-300"/> */}
                          <input  disabled={loading} placeholder="Ingrese su nombre de usuario" autoComplete="usuario"  type="text" name="usuario" className="font-ralewayMedium mt-1 p-3 w-full border border-gray-800/30 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-900 transition-colors duration-300"
                          {...register("usuario", {...reglasUsuario})}
                          />
                            {errors.usuario && <span className="text-red-800 font-ralewayRegular text-xs">{errors.usuario.message}</span>}
                        </div>

                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-ralewayMedium">Contraseña</label>
                          {/* <input value={inputPassword} onChange={handlePasswordInputChange} placeholder="Ingrese contraseña" type="password" id="password" name="password" className=" font-ralewayMedium mt-1 p-3 w-full border border-gray-800/30 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-900 transition-colors duration-300"/>                            */}
                          <input disabled={loading} placeholder="Ingrese contraseña" autoComplete="password"  type="password" name="password" className=" font-ralewayMedium mt-1 p-3 w-full border border-gray-800/30 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-900 transition-colors duration-300"
                          {...register("password", {...reglasPassword})}
                          />                           
                            {errors.password && <span className="text-red-800 font-ralewayRegular text-xs">{errors.password.message}</span>}
                        </div>

                        <div className="mt-4 text-sm text-gray-600 text-right mb-9">
                          <p><a href="#" className="text-black hover:underline font-ralewayMedium ">¿Olvidaste tu usuario ó contraseña?</a></p>
                        </div>

                        <div>
                          {/* <button  type="submit" className="font-ralewayMedium w-full bg-[#0041BF] text-white p-3 rounded-md hover:bg-blue-950 focus:outline-none focus:bg-blue-800 focus:outline-none focus:bg-blue-700  transition-colors duration-300">Ingresar</button> */}
                          <button disabled={loading}  type="submit" className={`font-ralewayMedium w-full bg-[#0041BF] text-white p-3 rounded-md hover:bg-blue-950 focus:outline-none  transition-colors duration-300 flex flex-col justify-center items-center ${loading&&"bg-[#0041BF]/80"}`}>
                            { !loading && <>Ingresar</>}
                            <ClipLoader color="#ffffff" size={24} loading={loading}/>
                          </button>
                        </div>
                  </form>
                  {/* ------------------ */}

                    {/* </div> */}
                  <div className="w-full max-w-md mx-auto mt-12 flex items-center justify-center text-right" onClick={showVersionInformation}>
                    <img src={globalCorebankia} alt="Login Image" className="w-100 object-cover" />
                  </div>

                </div>
              </div>


            {/* <!-- Left Pane --> */}

            <div className="hidden flex-1 lg:flex items-center justify-center  px-[5%] py-[4%] text-black bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900">           

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
                    {/* <Typography
                      // variant="h1"
                      variant="lead"
                      color="black"
                      className="mb-4 text-xl md:text-xl lg:text-3xl w-full pt-10 font-ralewayMedium"
                    >
                      {'"La perseverancia y la determinación son nuestras herramientas más poderosas."'}
                    </Typography> */}
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