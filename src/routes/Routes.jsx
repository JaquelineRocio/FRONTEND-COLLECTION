import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
    // Route,
    // Link,
  } from "react-router-dom";
import MainLayout from "../views/Admin/Dashboard/MainLayout";
// import SidebarHomeView from "../views/Admin/Pages/SidebarHome/SidebarHomeView";

import SidebarHomeView from "../views/Admin/Pages/SidebarHome/SidebarHomeView";

import SidebarDashboardView from "../views/Admin/Pages/SidebarDashboardManagement/SidebarDashboardView";


import Login from "../views/Auth/Login";

import SidebarClientManagerView from "../views/Admin/Pages/SidebarClientManager/SidebarClientManagerView";

import ProtectedRoute from "../views/Auth/ProtectedRoute";

// import EnConstruccion from "../views/ExampleView/EnConstruccion";
import { useDispatch } from "react-redux";
import {unauthenticatedUser} from "../store/authSlice";
import { useEffect } from "react";
// import UsoFormularioReactHookForm from "../views/ExampleView/UsoFormularioReactHookForm";
import PageNotFound from "./../views/miscellany/PageNotFound";
import EnConstruccion from "./../views/miscellany/EnConstruccion";
// import FlexTailwind from "../views/ExampleView/GridTailwind";
// import SidebarAccessManagementView from "../views/Admin/Pages/SidebarAccessManagement/SidebarAccessManagementView";
import ReactExcel from "../views/ExampleView/ReactExcel";
import ContruccionDeTabla from "../views/ExampleView/ContruccionDeTabla";
import HooksReact from "../views/ExampleView/HooksReact";
import SelectComponent from "../views/ExampleView/SelectComponent";
import SelectMaterialUI from "../views/ExampleView/SelectMaterialUI";
import RouteAccessControl from "./RouteAccessControl";
// import { useAccessControl } from "./RouteAccessControl";
import useViewAccessControl from "./useViewAccessControl";
// import Debug from "../views/ExampleView/Debug";
import CallbackOauth2 from "../oauth2/CallbackOauth2";
// import { useSelector } from 'react-redux';
// import useFetchApi from "../hooks/useFetchApi";
import SidebarAccessManagementView from "../views/Admin/Pages/SidebarAccessManagement/SidebarAccessManagementView";
import Usuarios from "../views/Admin/Pages/SidebarAccessManagement/Children/Usuarios/Usuarios";
import Equipo from "../views/Admin/Pages/SidebarAccessManagement/Children/Equipo/Equipo";
import Contrasenha from "../views/Admin/Pages/SidebarAccessManagement/Children/Contrasenha/Contrasenha";
import Perfiles from "../views/Admin/Pages/SidebarAccessManagement/Children/Perfiles/Perfiles";
import HistorialCambios from "../views/Admin/Pages/SidebarAccessManagement/Children/HistorialCambios/HistorialCambios";

const DeleteSession = ({children}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(unauthenticatedUser());
  },[dispatch]);
  return children;
}
    
const Route = () => {

  const router = createBrowserRouter([
      // {
      //   path: '/',
      //   element: <Navigate to="/login" replace />
      // },
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: '/*',
        element: < PageNotFound/>
      },  
      // {
      //     path: '/login',
      //     element: <Login/>
      // },
      {
        path: '/login',
        // element: <Login/>
        // element: 
        element: <DeleteSession> <Login/> </DeleteSession>
      },
      {
        path: '/dashboard',
        element: <ProtectedRoute element={<MainLayout />} />,
        children: [
          {
            index: true,
            element: <SidebarHomeView/>
          },
          {
            path: "gestiondashboard",
            element: <SidebarDashboardView/>
          },
          {
            path: "gestiondecliente",
            element: <SidebarClientManagerView/>
            // element: <EnConstruccion/>
          },
          {
            path: "gestioninformacion",
            element: <EnConstruccion/>
          },
          {
            path: "gestioncomunicacion",
            element: <EnConstruccion/>
          },
          {
            path: "gestionentidades",
            element: <EnConstruccion/>
          },
          {
            path: "gestionaccesos",
            element: <SidebarAccessManagementView/>,
            children: [
              {
                index: true,
                element: <Usuarios/>
              },          
              {
                path: "equipo",
                element: <Equipo/>
              },
              {
                path: "contrasenha",
                element: <Contrasenha/>
              },
              {
                path: "perfiles",
                element: <Perfiles/>
              },
              {
                path: "historialcambios",
                element: <HistorialCambios/>
              },
            ]
          }
        ],
      },
      {
        path: '/examples',
        element: <ReactExcel/>
      },
      {
        path: 'examplestwo',
        element: <ContruccionDeTabla/>
      },
      {
        path: 'hooksreact',
        element: <HooksReact/>
      },
      {
        path: 'select',
        element: <SelectComponent/>
      },
      {
        path: 'selectmaterialui',
        element: <SelectMaterialUI/>
      },
      {
        path: "/callback",
        element: <CallbackOauth2/>,
      },
      {
        path: "/obtenertoken",
        element: <Xxx/>
      },
      {
        path: "/informacionprotegida",
        element: <RouteAccessControl roles={["Editor"]} permissions={["editar artículos", "crear artículos"]}> <Xxx/> </RouteAccessControl> 
      }
      // {
      //   path: 'debug',
      //   element: <Debug/>
      // }            
      
      
  ]);
  
  return <RouterProvider router={router} />;
};

export default Route;


const Xxx = () => {
  const canEdit = useViewAccessControl({roles:["Editor"], permissions:["editar artículos","crear artículos"]})

  return(
    <>
      { canEdit && <div className="bg-pink-100">crear</div>}
      <div className="bg-pink-200">eliminar</div>
      <div className="bg-pink-300">actualizar</div>
      <div className="bg-pink-400">visualizar</div>
      <div className="bg-pink-500">cinco</div>
    </>
  )
}