import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/**
 * extraReducers solo funciona con createAsyncThunk, informacion que solo se puede obtener de manera 
 * asincrona.
 * Por otro lado "createAsyncThunk" toma dos argumentos. la primera es una ulr y la segunda es una funcion anónima asíncrona
 */
import { LoginApi } from "../services/LoginApi";
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try{
      const response = await LoginApi.post(data, '/auth/login');
      return response;
    }catch(error){
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const loginUserOauth = createAsyncThunk(
  "auth/loginUserOauth",
  async (data, thunkAPI) => {
    try{
      const response = await LoginApi.post(data, '/oauth/token');
      return response;
    }catch(error){
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const initialState = {
    entero: 1,

    // token: null,
    accessToken: null,
    refreshToken: null,
    user: null,
    isLogin: false,
    isLoading: false,

    roles: [],
    permissions: [],

};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        increment: (state) => {
          state.entero += 1
        },
        /**
         * Funcion que debe usarse para desconectar un usuario o sus credenciales sena incorrectas
         */
        unauthenticatedUser: (state) => {
          state.isLogin = false;
          state.accessToken = null;
          state.refreshToken = null;
          state.user = null;
          state.roles = null;
          state.permissions = null;
        },
        incrementByAmount: (state, action) =>{
          state.entero += action.payload;
        },

        //dispatch para guradar los roles, permisos y perfil del usuario
        savePersonalUserData: (state, action) => {
          state.user = action.payload.email
          state.roles = action.payload.roles
          state.permissions = action.payload.permissions
        }

    },

    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isLogin = true;
          state.accessToken = action.payload.token;
          state.user = action.payload.usuario;
          state.roles = action.payload.rol;
        })
        .addCase(loginUser.rejected, (state) => {
          state.isLoading = false;
          state.isLogin = false;
          state.accessToken = null;
          state.user = null;
        });
      builder
        .addCase(loginUserOauth.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(loginUserOauth.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isLogin = true;
          state.accessToken = action.payload.access_token;
          state.refreshToken = action.payload.refresh_token;
          // state.user = action.payload.usuario;
          // state.roles = action.payload.rol;
          // Lógica para esta acción asíncrona...
        })
        .addCase(loginUserOauth.rejected, (state) => {
          state.isLoading = false;
          // Lógica para esta acción asíncrona...
        });
    },


})
export const { increment,incrementByAmount,unauthenticatedUser, savePersonalUserData} = authSlice.actions
export default authSlice.reducer;

