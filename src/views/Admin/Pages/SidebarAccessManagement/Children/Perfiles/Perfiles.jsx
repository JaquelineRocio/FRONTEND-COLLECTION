import { registrosCuentasDelCliente, titulosParaTablaCuentasDelCliente, titulosParaPerfiles } from "./Componentes/ColumnTitles";
import TableCustomed from "./Componentes/TableCustomed";
import BotonAzulyRosa from "../../../../../../components/BotonAzulyRosa";
import useFetchApi from "../../../../../../hooks/useFetchApi";
import { useEffect, useState } from "react";
import Modal from "./Componentes/Modal";
const Perfiles = () => {
    const {getMethod,loading,data} = useFetchApi();
    const [showModal, setShowModal] = useState(false);


    const getRoles = async () => {
        const response = await getMethod('/api/roles');
        console.log(response);
    }
    const handleButtonClick = () => {
        console.log("Botón clickeado");
        setShowModal(true);
    }
    const xxx = () => {
        console.log("xxx");
        return(
            <div className="w-full h-full bg-black/50  z-50 fixed top-0 left-0">
                asdfasdfadf
            </div>
        )
    }

    useEffect(() => {
        getRoles();
    },[])
    return(
        <div className="flex flex-col gap-6">
            <div className="flex justify-end">
                <BotonAzulyRosa layout="Nuevo perfil" azul={true} onClick={handleButtonClick}/>
            </div>
            <div className="border-[1px] bg-pink-500"> 
                 <h3 className="bg-gray-200 p-4 rounded font-ralewaySemibold text-xl">
                    Perfiles
                </h3>

                <div className=" p-6 flex flex-col" >
                    <TableCustomed
                        // key={task.key}
                        tableRows={data?.data}
                        tableColumns={titulosParaPerfiles}
                        loading={loading}
                        // nameOfTable={task.nombreDeTabla}
                    />
                </div>
            </div>
            { showModal && <Modal/>}
        </div>
    )
}

export default Perfiles;