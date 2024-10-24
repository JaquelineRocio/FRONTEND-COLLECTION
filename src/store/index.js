import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import authSlice from "./authSlice";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ['auth']
}

const rootReducer  = combineReducers({
    auth: authSlice,
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
export const AppDispatch = store.dispatch;
import { useDispatch } from "react-redux";
export const useAppDispatch = () => useDispatch;
