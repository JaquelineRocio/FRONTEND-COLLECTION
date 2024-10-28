import { titulosParaPerfiles } from "./Componentes/ColumnTitles";
import TableCustomed from "./Componentes/TableCustomed";
import BotonAzulyRosa from "../../../../../../components/BotonAzulyRosa";
import useFetchApi from "../../../../../../hooks/useFetchApi";
import { useEffect } from "react";
import {Modal, useModal }from "./Componentes/Modal";
// import { Dialog } from '@headlessui/react';
import { TextField } from "@mui/material";
import BotonBlancoVerde from "../../../../../../components/BotonBlancoVerde";
import { Controller, useForm } from "react-hook-form";
const Perfiles = () => {
    // const {getMethod, loading, data} = useFetchApi();
    const getListOfRoles = useFetchApi();
    const createOneRole = useFetchApi();
    const {closeModal, isModalOpen, openModal} = useModal();
    const {control, register, handleSubmit, formState:{errors}, reset} = useForm();

    const reglasParaRoles = {
        required:{value: true, message: "Por favor ingrese un nombre para el rol."},
        minLength:{value: 2, message: "El nombre debe contener al menos 2 caracteres."},
        maxLength:{value: 60, message: "El nombre no debe exceder los 60 caracteres."},
    }
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);


    const getRoles = async () => {
        const response = await getListOfRoles.getMethod('/api/roles');
        console.log(response);
    }

    const createRole = async () => {
        const body =  { valor: "uno" }
        const response = await createOneRole.postMethod(body,'/api/roles')
        if(response.data.status){
            getRoles();
            closeModal();
        }
        console.log(response);
    }


    const onSubmit =  handleSubmit( async (data) => {
        console.log("objeto enviado:", data);
        const body = {
            "destinatario": "ayala.polloyqueri.juan.carlos@gmail.com",
            "asunto":"PAGINA DE COREBANKIA",
            "nombre":data.nombre,
            // "identificador":data.identificador,

        };

        console.log("valores enviados a backend: ", body);
        const response = await createOneRole.postMethod(body,'/api/roles')
        
        // const response = await postMethod(body, "/api/sendemail"); 

        console.log("valores recibidos del backend",response);
        if (response.data.status) {
            console.log("estasmo en correo enviado exitosamente");
            getRoles();
            closeModal();
            reset(); // Limpiar los inputs después del éxito
        } else{
            console.log("xxx", response);

        }

    });



    useEffect(() => {
        getRoles();
    },[])
    return(
        <div className="flex flex-col gap-6">
            <div className="flex justify-end">
                <BotonAzulyRosa layout="Nuevo perfil" azul={true} onClick={openModal}/>
                {/* <button onClick={openModal}>Abrir Modal</button> */}
            </div>
            <div className="border-[1px]"> 
                 <h3 className="bg-gray-200 p-4 rounded font-ralewaySemibold text-xl">
                    Perfiles
                </h3>

                <div className=" p-6 flex flex-col" >
                    <TableCustomed
                        // key={task.key}
                        tableRows={getListOfRoles.data?.data}
                        tableColumns={titulosParaPerfiles}
                        loading={getListOfRoles.loading}
                        // nameOfTable={task.nombreDeTabla}
                    />
                </div>
            </div>
            {/* { showModal && <Modal/>} */}

            <Modal isOpen={isModalOpen} onClose={closeModal} titulo="Nuevo perfil">
                
                <form onSubmit={onSubmit} className="p-8 grid grid-cols-2 gap-4">
                    
                    <TextField 
                        name="identificador" 
                        label="Perfil" 
                        type="text" variant="outlined" disabled={true} className="w-full"

                    />

                    <Controller
                        name="nombre"
                        control={control}
                        defaultValue=""
                        rules={reglasParaRoles}
                        render={({ field, fieldState }) => (
                            <TextField
                            {...field}
                            label="Nombre del perfil"
                            variant="outlined"
                            error={!!fieldState.error}
                            helperText={fieldState.error ? fieldState.error.message : null}
                            fullWidth
                            />
                        )}
                    />
                    <BotonBlancoVerde blanco={true}  layout="Cancelar" onClick={closeModal}/>
                    <BotonBlancoVerde blanco={false} layout="Guardar"  type="submit"/>
                </form>
                
            </Modal>
            {/* Modal */}
            {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl font-semibold">Crear Nuevo Perfil</h2>

                <p>Contenido del modal para crear un nuevo perfil.</p>
                <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Cerrar
                </button>
            </Modal> */}
        </div>
    )
}

export default Perfiles;