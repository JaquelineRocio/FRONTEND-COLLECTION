// import { Button, Input } from "@material-tailwind/react";
import { Button, Input, ButtonProps, ListItemPrefix } from "@material-tailwind/react";
import SidebarListButton from "./Components/SidebarListButton";
import { IoAlbums } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { BiSolidHomeCircle, BiSolidMessageSquare } from "react-icons/bi";
import { IoMdArchive } from "react-icons/io";
import { RiNotificationFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ItemList from "./Components/ItemList";
// import ListItem from "./Components/ListItem";
import ListItem from "./Components/ListItem";

// import { FaHome } from "react-icons/fa"
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
import house from './../../../../public/imgs/sidebarIcons/house.svg';
import gestion from './../../../../public/imgs/sidebarIcons/gestion.svg';
import cliente from './../../../../public/imgs/sidebarIcons/cliente.svg';
import informacion from './../../../../public/imgs/sidebarIcons/informacion.svg';
import comunicacion from './../../../../public/imgs/sidebarIcons/comunicacion.svg';
import entidad from './../../../../public/imgs/sidebarIcons/entidad.svg';
import accesos from './../../../../public/imgs/sidebarIcons/accesos.svg';
import contactoeficazicono from './../../../../public/imgs/iconoscontactoeficaz/contactoeficazicono.svg';
import contactoeficazcompleto from './../../../../public/imgs/iconoscontactoeficaz/contactoeficazcompleto.svg';
// import viteLogo from '/vite.svg'




function Sidebar({openSidebar}){
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
            <div className={`bg-sidebarColor-0 fixed left-0 top-0 h-full w-[300px] z-50 overflow-y-auto ${openSidebar?'':' w-[90px] ml-[210px] transition-all'} style={{scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1'}} `}>
                
                    {/* <a href="#" className="flex items-center pb-4 border-b border-b-gray-800"> */}
                        {/* <h2 className="font-bold text-2xl">CONTACTO EFICAZ <span className="bg-[#f84525] text-white px-2 rounded-md">IPSUM</span></h2> */}
                        {/* <h2 className="font-bold text-2xl">CONTACTO EFICAZ </h2> */}
                    {/* </a> */}

                    <ul>
                    
                        {/* <div className="mt-2 mb-2 flex pl-9">
                        <img src={logoContactoEficaz} alt="Login Image" className="w-100  p-4 h-16 text-sm text-center" />
                        </div> */}
                        {/* <img src={contactoeficazicono} className={` bg-red-200 w-10 ${open?'ml-4':''}`}/> */}


                        <div className="flex flex-col items-center mt-6 mb-6">
                            <img src={contactoeficazcompleto} className={`w-40 ${openSidebar?'':'hidden'}`}/>
                            <img src={contactoeficazicono}      className={` w-8 ${openSidebar?'hidden':''}`}/>
                        </div>

        
                    {/* 
                    <img
                    className="h-96 w-full object-cover object-center"
                    // src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    src={logoContactoEficaz}
                    alt="nature image"
                    /> */}

                        <ListItem open={openSidebar} to=""                 src={house}        name="Home"/>
                        <ListItem open={openSidebar} to="gestiondashboard" src={gestion}      name="Dashboard de gestión"/>
                        <ListItem open={openSidebar} to="gestiondecliente" src={cliente}      name="Gestión de cliente"/>
                        <ListItem open={openSidebar} to="gridtailwind" src={informacion}  name="Gestión de información"/>                        
                        <ListItem open={openSidebar} to="flextailwind" src={comunicacion} name="Gestión de comunicaciones"/>
                        <ListItem open={openSidebar} to="accordiontailwind" src={entidad}      name="Gestión de entidades"/>
                        <ListItem open={openSidebar} to="selecttailwind" src={accesos}      name="Gestión de accesos"/>
                       
                        
                        {/* <ItemList name="Home" to="/" icon={TbLayoutDashboardFilled} />
                        <ItemList name="Dashboard de gestión" to="gestiondashboard" icon={TbLayoutDashboardFilled} />
                        <ItemList name="Gestión de cliente" to="gestiondecliente" icon={FaPeopleGroup} />
                        <ItemList name="Gestión de información" to="gridtailwind" icon={RiCustomerService2Line} />
                        <ItemList name="Gestión de comunicaciones" to="flextailwind" icon={BsFillPhoneVibrateFill} />
                        <ItemList name="Gestión de entidades" to="accordiontailwind" icon={MdManageAccounts} />
                        <ItemList name="Gestión de accesos" to="selecttailwind" icon={FaUnlockKeyhole} /> */}

                    </ul>

                </div>
        </>
    )
}
export default Sidebar;


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