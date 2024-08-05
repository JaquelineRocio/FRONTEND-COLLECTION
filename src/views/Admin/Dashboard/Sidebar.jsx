// import { Button, Input } from "@material-tailwind/react";
import { Button, Input, ButtonProps, ListItem, ListItemPrefix } from "@material-tailwind/react";
import SidebarListButton from "./Components/SidebarListButton";
import { IoAlbums } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { BiSolidHomeCircle, BiSolidMessageSquare } from "react-icons/bi";
import { IoMdArchive } from "react-icons/io";
import { RiNotificationFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ItemList from "./Components/ItemList";

import { FaHome } from "react-icons/fa"
import { RiCustomerService2Line } from "react-icons/ri";

import { BsFillPhoneVibrateFill } from "react-icons/bs";
// import { MdManageAccounts } from "react-icons/md";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiGraphite } from "react-icons/si";
import { CiGrid42 } from "react-icons/ci";
import { RiGitPullRequestFill } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import logoContactoEficaz from '../../../../public/contactoEficaz.png'
import { useLocation } from "react-router-dom";





function Sidebar(){
    const location = useLocation();
    let secondSegment = null;

    const handleClick = () => {
        const segments = location.pathname.split('/').filter(Boolean); // Filtra segmentos vacíos
        secondSegment = segments[1] || null; // Obtiene el segundo segmento o un mensaje si no existe

        console.log("ruta actual", location.pathname);
        console.log("Segundo segmento:", secondSegment);
    };
    
    return(
        <>

      {/* <div className="fixed left-0 top-0 rounded w-[300px] bg-white p-2 h-full  z-50 sidebar-menu transition-transform overflow-y-auto" style={{scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1'}} > */}
      <div className="fixed left-0 top-0 rounded w-[300px] p-2 h-full  z-50 sidebar-menu transition-transform overflow-y-auto" style={{scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1'}} >
        
            {/* <a href="#" className="flex items-center pb-4 border-b border-b-gray-800"> */}
                {/* <h2 className="font-bold text-2xl">CONTACTO EFICAZ <span className="bg-[#f84525] text-white px-2 rounded-md">IPSUM</span></h2> */}
                {/* <h2 className="font-bold text-2xl">CONTACTO EFICAZ </h2> */}
            {/* </a> */}

            <ul className="grap-2">
            
            <div className="mt-2 mb-2 flex pl-9">
            <img src={logoContactoEficaz} alt="Login Image" className="w-100  p-4 h-16 text-sm text-center" />
            </div>


            {/* <div className="bg-red-600 text-center flex justify-center items-center">
                <img src={logoContactoEficaz} alt="Login Image" className="w-100 p-4 h-16 text-sm align-bottom bg-blue-700" />
            </div> */}


            {/* 
            <img
            className="h-96 w-full object-cover object-center"
            // src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            src={logoContactoEficaz}
            alt="nature image"
            /> */}
            
            

            <ItemList name="Home" to="/" icon={FaHome} />
            <ItemList name="Dashboard de gestión" to="gestiondashboard" icon={TbLayoutDashboardFilled} />
            <ItemList name="Gestión de cliente" to="gestiondecliente" icon={FaPeopleGroup} />
            <ItemList name="Gestión de información" to="gridtailwind" icon={RiCustomerService2Line} />
            <ItemList name="Gestión de comunicaciones" to="flextailwind" icon={BsFillPhoneVibrateFill} />
            <ItemList name="Gestión de entidades" to="accordiontailwind" icon={MdManageAccounts} />
            <ItemList name="Gestión de accesos" to="selecttailwind" icon={FaUnlockKeyhole} />
            <ItemList name="Ejemplo Componente" to="accordiontailwindsecondversion" icon={BiSolidHomeCircle} />
            {/* <ItemList name="Ejemplo graficos react chart" to="graficos" icon={SiGraphite} />
            <ItemList name="Ejemplo grid" to="gridtailwind" icon={CiGrid42} />
            <ItemList name="Peticion de ejemplo" to="peticionapi" icon={RiGitPullRequestFill} />
            <ItemList name="Componente Select" to="selecttailwindtow" icon={FaUnlockKeyhole} />
            <ItemList name="Ejemplo uso de redux" to="exampleredux" icon={FaUnlockKeyhole} />
            <ItemList name="Hook form" to="hookform" icon={FaUnlockKeyhole} />
            <ItemList name="Elemento tabla" to="reacttable" icon={FaUnlockKeyhole} />
            <ItemList name="exportar datos para excel" to="reactexcel" icon={FaUnlockKeyhole} />
            <ItemList name="Select component" to="selectcomponent" icon={FaUnlockKeyhole} />
            <ItemList name="Selects aninados" to="selectaninados" icon={FaUnlockKeyhole} />
            <ItemList name="Use Efect" to="useefect" icon={FaUnlockKeyhole} /> */}
            </ul>

        </div>
        </>
    )
}
export default Sidebar;


const styleScrollbar = {
    
}


{/* <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform overflow-y-auto">
    <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">

        <h2 className="font-bold text-2xl">CONTACTO EFICAZ </h2>
    </a>
    <ul className="mt-4">
    <ItemList name="Home" to="/" icon={BiSolidHomeCircle} />

        <span className="text-gray-400 font-bold">ADMINISTRADOR</span>
            <SidebarListButton name="Home" to="" icon={BiSolidHomeCircle}/>
        <span className="text-gray-400 font-bold">USUARIO</span>
            <SidebarListButton name='Dashboard de gestión' to="gestiondashboard" icon={MdManageAccounts} />
        <li className="mb-1 group hover:bg-yellow-950">
            <a href="" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-yellow-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                <IoMdArchive className='bx bx-archive mr-3 text-lg'/>
                <span className="text-sm">Archive</span>
            </a>
        </li>

        <span className="text-gray-400 font-bold">PERSONAL</span>
        <li className="mb-1 group">
            <a href="" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                <RiNotificationFill className='bx bx-bell mr-3 text-lg' />          
                <span className="text-sm">Notifications</span>
                <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">5</span>
            </a>
        </li>
        <li className="mb-1 group">
            <Link to="exampleview"  className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">

                <BiSolidMessageSquare className='bx bx-envelope mr-3 text-lg' />               
                <span className="text-sm">Messages</span>
                <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">2 New</span>
            </Link>
        </li>

        <span className="text-gray-400 font-bold">Tailwind Style</span>
        <SidebarListButton name="Estilos tailwind" to="homeview" icon={BiSolidHomeCircle}/>
        <span className="text-gray-400 font-bold">Ejemplos</span>
        <SidebarListButton name="Ejemplo Grid con tailwind" to="gridtailwind" icon={BiSolidHomeCircle}/>
        <SidebarListButton name="Ejemplo Flex con tailwind" to="flextailwind" icon={BiSolidHomeCircle}/>
        <SidebarListButton name="Ejemplo acordion con tailwind" to="accordiontailwind" icon={BiSolidHomeCircle}/>
        <SidebarListButton name="Ejemplo select con tailwind" to="selecttailwind" icon={BiSolidHomeCircle}/>
        <SidebarListButton name="Ejemplo acordion con tailwind v2" to="accordiontailwindsecondversion" icon={BiSolidHomeCircle}/>
        <SidebarListButton name="Ejemplo de tabla" to="tabletailwind" icon={BiSolidHomeCircle}/>
        <SidebarListButton name="Ejemplo de drawer" to="drawertailwind" icon={BiSolidHomeCircle}/>               

    </ul>
    
</div> */}