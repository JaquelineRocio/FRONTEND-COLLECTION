import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

    token: null,
    user: null,
    isLogin: false,
    isLoading: false,

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
         * Funcion que debe usarse para contectar un usuario al sistema
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
         * Funcion que debe usarse para desconectar un usuario o sus credenciales sena incorrectas
         */
        unauthenticatedUser: (state) => {
          state.isLogin = false;
          state.token = null;
          state.user = null;
        },

        /**
         * Tenemos tres funciones principales, cargando(pending), cargado(fulfilled) y rechazado(rejected)
         * 
         */
        loginUserPending: (state) => {
          state.isLoading = true;
        },
        loginUserFulFilled:(state, action) => {
          state.isLoading = false;
          state.isLogin = true;
          state.token = action.payload.token;
          state.user = action.payload.user;
        },
        loginUserRejected:(state) => {
          state.isLoading = false;
          state.isLogin = false;
          state.token = null;
          state.user = null;
        }
    },

    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          // state.loading = 'pending';
          state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          // state.loading = 'idle';
          // state.entity = action.payload;
          state.isLoading = false;
          state.isLogin = true;
          state.token = action.payload.token;
          state.user = action.payload.usuario;
          state.roles = action.payload.rol;
        })
        .addCase(loginUser.rejected, (state) => {
          // state.loading = 'idle';
          // state.error = action.error.message;
          state.isLoading = false;
          state.isLogin = false;
          state.token = null;
          state.user = null;
        });
    },


    // extraReducers: (builder) => {},
})
export const { increment, decrement, incrementByAmount, authenticatedUser,unauthenticatedUser, setIsloginToTrue } = authSlice.actions
export default authSlice.reducer;

/**
 * extraReducers solo funciona con createAsyncThunk, informacion que solo se puede obtener de manera 
 * asincrona.
 * Por otro lado "createAsyncThunk" toma dos argumentos. la primera es una ulr y la segunda es una funcion anónima asincrna
 */
import { LoginApi } from "../services/LoginApi";
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    console.log("datos ingresados", data);
    try{
      const response = await LoginApi.post(data, '/auth/login');
      return response;
    }catch(error){
      console.log("pppError",error);
      return thunkAPI.rejectWithValue(error);
    }
  }

)