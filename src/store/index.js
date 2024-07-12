import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import authSlice from "./authSlice";
import loginSlice from "./loginSlice"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['auth', 'login']
}

const rootReducer  = combineReducers({
    auth: authSlice,
    login: loginSlice,
});

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: [thunk],
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(thunk),

});

export const persistor  = persistStore(store);