import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
    // Route,
    // Link,
  } from "react-router-dom";
import MainLayout from "../views/Admin/Dashboard/MainLayout";
// import SidebarHomeView from "../views/Admin/Pages/SidebarHome/SidebarHomeView";
import FlexTailwind from "../views/ExampleView/FlexTailwind";
import SidebarHomeView from "../views/Admin/Pages/SidebarHome/SidebarHomeView";
import GridTailwind from "../views/ExampleView/GridTailwind";
import SidebarDashboardView from "../views/Admin/Pages/SidebarDashboardManagement/SidebarDashboardView";
import AccordionTailwind from "../views/ExampleView/AccordionTailwind";
import SelectTailwind from "../views/ExampleView/SelectTailwind";
import AccordionTailwindSecond from "../views/ExampleView/AccordionTailwindSecond";
import TableTailwind from "../views/ExampleView/TableTailwind";
import DrawerTailwind from "../views/ExampleView/DrawerTailwind";
import Login from "../views/Auth/Login";
import ReactChart from "../views/ExampleView/Graficos";
import Graficos from "../views/ExampleView/Graficos";
import PeticionApi from "../views/ExampleView/PeticionApi";
import SidebarClientManagerView from "../views/Admin/Pages/SidebarClientManager/SidebarClientManagerView";
import SelectTailwindTwo from "../views/ExampleView/SelectTailwindTwo";
import ExampleUseRedux from "../views/ExampleView/ExampleUseRedux";
import ProtectedRoute from "../views/Auth/ProtectedRoute";
import HookForm from "../views/ExampleView/HookForm";
import ReactTable from "../views/ExampleView/ReactTable";
import ReactExcel from "../views/ExampleView/ReactExcel";
import SelectComponent from "../views/ExampleView/SelectComponent";
import SelectsAninados from "../views/ExampleView/SelectsAninados";
import UseEffect from "../views/ExampleView/UseEffect";
import EnConstruccion from "../views/ExampleView/EnConstruccion";
import { useDispatch } from "react-redux";
import {unauthenticatedUser} from "../store/authSlice";
import { useEffect } from "react";
import UsoFormularioReactHookForm from "../views/ExampleView/UsoFormularioReactHookForm";
// import FlexTailwind from "../views/ExampleView/GridTailwind";
// import SidebarAccessManagementView from "../views/Admin/Pages/SidebarAccessManagement/SidebarAccessManagementView";


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
        element: <> Not Found</>
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
        path: 'examples',
        element: <UsoFormularioReactHookForm/>
      }    
  ]);
  
  return <RouterProvider router={router} />;
};

export default Route;


    