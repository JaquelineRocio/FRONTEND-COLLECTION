import { createSlice } from "@reduxjs/toolkit";

/**
 * Contenido de usuario:
 * 
 * interface IUser {
 *    id: number,
 *    name: string,
 *    email: string,
 * }
 * 
 * Contenido de Roles:
 * 
 * roles: ['DirectorRedactor', 'Editores', 'Usuarios' ];
 * 
 * Contenido de Permissions:
 * 
 * permissions: ['eliminar', 'crear', 'actualizar', ]
 * 
 * Nota: los roles solo agrupan los permisos, lo realmene valioso son los permisos
 * 
 */


const initialState = {
    entero: 1,
    isLogin: false,
    token: null,
    user: null,
    roles: null,
    permissions: null,

};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        increment: (state) => {
          state.entero += 1
        },
        decrement: (state) => {
          state.entero -= 1
        },
        incrementByAmount: (state, action) => {
          console.log("This is the payload", action);
          state.entero += action.payload
        },
        /**
         * Funcion que debe usarser para contectar un usuario al sistema
         */
        authenticatedUser: (state, action) => {
          // state.isLogin = true;
          state.token = action.payload.token;
          state.user = action.payload.user;
        },

        setIsloginToTrue: (state) => {
          state.isLogin = true;
        },
        /**
         * Funcion que debe usarser para desconectar un usuario o sus credenciales sena incorrectas
         */
        unauthenticatedUser: (state) => {
          state.isLogin = false;
          state.token = null;
          state.user = null;
        }


      },
    // extraReducers: (builder) => {},
})
export const { increment, decrement, incrementByAmount, authenticatedUser,unauthenticatedUser, setIsloginToTrue } = authSlice.actions
export default authSlice.reducer;