import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { CssBaseline } from '@mui/material';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor  } from './store';


ReactDOM.createRoot(document.getElementById('root')).render(  
  // <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>

      <ThemeProvider> {/*Aply styles of material-tailwind */}
      {/* <CssBaseline/> */}
        <App />
      </ThemeProvider>

    </PersistGate>
    </Provider>
//  </React.StrictMode>,
)
