
import { useEffect, useState } from 'react';
// import {  getFromSession } from "../../utils/oauth";
import { getFromSession } from './oauthTools';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { loginUser } from '../../store/authSlice';
import { loginUser } from '../store/authSlice';
import { loginUserOauth, savePersonalUserData } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import useFetchApi from '../hooks/useFetchApi';

const CallbackOauth2 = () => {

    const {getMethod} = useFetchApi()

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const clientId = import.meta.env.VITE_OAUTH_CLIENT_ID; 
    const redirectUri = import.meta.env.VITE_OAUTH_REDIRECT_URI;

    useEffect(()=>{
        const HandleCallback = async () => {

            // Obtenemos datos de la url (datos enviados por el bacend oauth)
            const params = new URLSearchParams(location.search);
            // obtiene el codigo de autorizacion
            const code = params.get('code');
            // obtiene state que la propia sigle page application envió
            const state = params.get('state');

            // Obtenemos nuestros propios datos guardados
            const storedState =  getFromSession('oauth_state');
            const codeVerifier = getFromSession('oauth_code_verifier');
            console.log("Console.log: CSRF guardado", storedState);
            // verificamos si los valores que enviamos son los mismos devueltos
            if (!state || state != storedState) {
                setError('State mismatch. Posible ataque CSRF.');
                // console.log("Console.log: CSRF");
                return;
            }
        
            if (!code) {
                setError('No se encontró el código de autorización.');
                return;
            }

            // Opcional: Elimina los valores de sessionStorage una vez validados
            sessionStorage.removeItem('oauth_state');
            sessionStorage.removeItem('oauth_code_verifier');

            // Construye cuerpo de la peticion, para realizar la peticion del token y el refresh token
            const body = {
                grant_type: 'authorization_code',
                client_id: clientId,
                redirect_uri: redirectUri, // Debe coincidir con el redirect_uri registrado
                code_verifier: codeVerifier,
                code: code,
                // scope: "place-orders",
            }

            /**
             * Envía el código y code_verifier al backend para intercambiar por un token.
             * utilizar reduxtoolkit para manejar la peticion del token y su almacenamiento
             * La peticion se realiza a: LoginApi.post(data, '/oauth/token');
             */
            await dispatch(loginUserOauth(body)).unwrap().then((response)=>{

            }).catch((error)=>{
                console.log("este es un error al obtener el token:",error);
            });

            // necesitamos obtener los datos personales del usuiario, tambien sus roles y permisos
            const resultado = await getMethod('/api/user');
            const email = resultado?.data?.data?.user?.email;
            const roles = resultado?.data?.data?.roles;
            const permissions = resultado?.data?.data?.permissions;
            const personalUserData = {email, roles, permissions}
            // console.log(resultado);
            dispatch(savePersonalUserData(personalUserData))
            // Navegar al dashboard
            navigate("/dashboard");

        };


        
        HandleCallback();

        },[])
    return (
        <>
        <div className='bg-red-100 w-full h-[100vh] flex justify-center items-center font-OficialFontExtraLight text-2xl'>
            {error?  <div className='text-red-500'>{error}</div> : "Estamos obteniendo sus credenciales. por favor espere"}
        </div>
        {/* <button className='bg-pink-200' onClick={FetchData}>presiona para obtener datos del usuario</button> */}
        </>
    )
}

export default CallbackOauth2;