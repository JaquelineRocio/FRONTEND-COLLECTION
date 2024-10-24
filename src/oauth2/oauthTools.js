// utils/oauth.js


// Genera una cadena aleatoria de longitud especificada en bytes
export function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let result = '';
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
        result += characters.charAt(array[i] % characters.length);
    }
    return result;
}
  
// Codifica una cadena en Base64URL
export function base64urlencode(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer);
    let binary = '';
    bytes.forEach(b => binary += String.fromCharCode(b));
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
  
// Calcula el code_challenge a partir del code_verifier
export async function generateCodeChallenge(codeVerifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return base64urlencode(digest);
}
  
// Almacena en sessionStorage
export function storeInSession(key, value) {
    sessionStorage.setItem(key, value); 
}
  
// Recupera de sessionStorage
export function getFromSession(key) {
    return sessionStorage.getItem(key);
}

// Construye la URL de autorización
export function buildParams({ clientId, redirectUri, state, codeChallenge, scope = '', responseType = 'code', codeChallengeMethod = 'S256' }) {
    const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: responseType,
        scope: scope,
        state: state,
        code_challenge: codeChallenge,
        code_challenge_method: codeChallengeMethod,
    });
  
    // return `http://127.0.0.1:8000/oauth/authorize?${params.toString()}`;
    // return `https://corebankia.florecercontigo.com/oauth/authorize?${params.toString()}`;
    // return `${urlBackend}/oauth/authorize?${params.toString()}`;
    return params;
  }
  