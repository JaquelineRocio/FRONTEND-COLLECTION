import { IoChevronBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import TextLink from "./Componentes/TextLink";
import { TextField } from "@mui/material";
import BotonAzulyRosa from "../../../../components/BotonAzulyRosa";
import TableCustomed from "./Componentes/TableCustomed";
import { titulosParaTablaCuentasDelCliente } from "./Componentes/ColumnTitles";
import { registrosCuentasDelCliente } from "./Componentes/ColumnTitles";
import Card from "./Componentes/Card";

const SidebarClientManagerView = () => {
    return(
        <>
        {/* <div className="py-5 px-7 flex flex-col h-screen"></div> */}
            <div className=" h-full py-5 px-7 ">

            <div className=" flex mb-5">
                    <Link to="/dashboard" className="pr-5 flex items-center"> <IoChevronBackCircle  className={`text-5xl text-[#1F263E]`}/> </Link>
                    <div className="flex items-center">
                        <h1 className="font-ralewaySemibold text-2xl">Gestión de clientes</h1>
                        {/* <h1 className="font-ralewayMedium text-base">Revisemos cómo ha ido la Gestión...</h1> */}
                    </div>
            </div>

            <div className="flex gap-x-4 justify-start flex-wrap mb-5">

                <TextLink text="Búsqueda de cliente"/>
                <TextLink text="Historial de Gestiones"/>
                <TextLink text="Telefonos - Direcciones"/>
                <TextLink text="Recordatorio de gestión"/>

            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 mb-6">

                    {/* <TextField className="md:col-start-1 md:col-end-1" label="N° de documento" type="email" variant="outlined" /> */}
                    
                    <TextField label="N° de documento" type="email" variant="outlined" />
                    <TextField label="Nombre y apellido" type="email" variant="outlined" />
                    <TextField label="N° de cuenta" type="email" variant="outlined" />
                    <TextField label="N° de teléfono" type="email" variant="outlined" />
                    <BotonAzulyRosa layout="Buscar"  azul={true}/>
                    <BotonAzulyRosa layout="Limpiar" azul={false}/>


            </div>


            
            <div className="mb-6 border-[1px] bg-pink-300}">

                <h3 className="bg-gray-200 p-4 rounded font-ralewaySemibold text-xl">
                    Datos del cliente
                </h3>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 p-6">
                    <TextField disabled={true} label="N° de documento" type="email" variant="outlined" />
                    <TextField disabled={true} label="Nombre completo" type="email" variant="outlined" />
                    <TextField disabled={true} label="Condición" type="email" variant="outlined" />
                    <TextField disabled={true} label="Teléfono" type="email" variant="outlined" />
                    <TextField disabled={true} label="DIrección" type="email" variant="outlined" />
                    <TextField disabled={true} label="Correo electrónico" type="email" variant="outlined" />
                </div>

            </div>

            <div className="mb-6 border-[1px] bg-pink-300}">

                <h3 className="bg-gray-200 p-4 rounded font-ralewaySemibold text-xl">
                    Cuentas del cliente
                </h3>
                <div className=" p-6 flex flex-col" >

                <TableCustomed
                    // key={task.key}
                    tableRows={registrosCuentasDelCliente}
                    tableColumns={titulosParaTablaCuentasDelCliente}
                    // loading={task.masInformacion.loading}
                    // nameOfTable={task.nombreDeTabla}
                />

                    <div>
                        <h3 className=" py-4 rounded font-ralewaySemibold text-xl">
                            Detalle total cuentas cliente
                        </h3>
                        <div className="flex gap-4 py-4">
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>

                    </div>
                </div>

            </div>







            </div>

        </>
    )
}

export default SidebarClientManagerView;