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
import UsoFormularioReactHookForm from "../views/ExampleView/UsoFormularioReactHookForm";
import PageNotFound from "./../views/miscellany/PageNotFound";
import EnConstruccion from "./../views/miscellany/EnConstruccion";
// import FlexTailwind from "../views/ExampleView/GridTailwind";
// import SidebarAccessManagementView from "../views/Admin/Pages/SidebarAccessManagement/SidebarAccessManagementView";
import ReactExcel from "../views/ExampleView/ReactExcel";
import ContruccionDeTabla from "../views/ExampleView/ContruccionDeTabla";
import HooksReact from "../views/ExampleView/HooksReact";
import SelectComponent from "../views/ExampleView/SelectComponent";
import SelectMaterialUI from "../views/ExampleView/SelectMaterialUI";

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
            // element: <SidebarClientManagerView/>
            element: <EnConstruccion/>
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
            element: <EnConstruccion/>
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
      }           
      
      
  ]);
  
  return <RouterProvider router={router} />;
};

export default Route;


    