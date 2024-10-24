import { generateRandomString, generateCodeChallenge,storeInSession, buildParams } from "./oauthTools";

const Redirect = async () => {
    try {
    // preapara datos para pedir codigo de autorizacion de backend
    // const clientId = '9d37d732-9588-40f1-9dd2-279ba3130c3f';
    const clientId = import.meta.env.VITE_OAUTH_CLIENT_ID;

    // const redirectUri = 'https://corebankia.com/callback';
    const redirectUri = import.meta.env.VITE_OAUTH_REDIRECT_URI;

    const urlBackend = import.meta.env.VITE_URL_BACKEND;

    // genera state y code_verifier
    const state = generateRandomString(40);
    console.log("estate creado previo al envio:",state)
    const codeVerifier = generateRandomString(128);

    // Calcula el code_challenge
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    // Almacena state y code_verifier en sessionStorage
    storeInSession('oauth_state', state);
    storeInSession('oauth_code_verifier', codeVerifier);

    // Construye la URL de autorización
    const params = buildParams({
          clientId,
          redirectUri,
          state,
          codeChallenge,
        //   scope: '', // Define los scopes necesarios, por ejemplo: 'read write'
        //   scope: 'place-orders check-status',
          prompt: 'login'
    });

    const authUrl = `${urlBackend}/oauth/authorize?${params.toString()}`;
     
    // Nos redirecciona a la url (viajamos junto con el flujo)
    window.location.href = authUrl;

    } catch (error) {
        console.error('Error iniciando el flujo OAuth:', error);
        // Maneja el error según tus necesidades
    }

}

export default Redirect;