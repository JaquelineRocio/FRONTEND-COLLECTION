import { IoChevronBackCircle } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import TextLink from "./Componentes/TextLink";
import TableCustomed from "./Componentes/TableCustomed";
import { registrosCuentasDelCliente, titulosParaTablaCuentasDelCliente } from "./Componentes/ColumnTitles";

const SidebarAccessManagementView = () => {
    return(
        <div className=" h-[90vh] py-5 px-7 ">
            <div className="flex mb-5">
                    <Link to="/dashboard" className="pr-5 flex items-center"> <IoChevronBackCircle  className={`text-5xl text-[#1F263E]`}/> </Link>
                    <div className="">
                        <h1 className="font-ralewaySemibold text-2xl">Gestión de accesos</h1>
                        <h1 className="font-ralewayMedium text-base">Administra y gestiona los accesos.</h1>
                    </div>
            </div>

            <div className="flex flex-wrap mb-5 justify-around">

                <TextLink text="Usuarios"             to=""/>
                <TextLink text="Equipo"               to="equipo"/>
                <TextLink text="Contraseñas"          to="contrasenha"/>
                <TextLink text="Perfiles"             to="perfiles"/>
                <TextLink text="Historial de cambios" to="historialcambios"/>

            </div>

                <Outlet/>

            

        </div>
    )
}

export default SidebarAccessManagementView;