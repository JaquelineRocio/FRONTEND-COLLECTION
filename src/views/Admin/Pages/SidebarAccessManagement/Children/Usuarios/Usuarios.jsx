import { registrosCuentasDelCliente, titulosParaTablaCuentasDelCliente } from "./Componentes/ColumnTitles";
import TableCustomed from "./Componentes/TableCustomed";

const Usuarios = () => {

    return(
        <>
            <div className="mb-6 border-[1px] bg-pink-500"> 
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
                </div>

            </div>
        </>
    )
}

export default Usuarios;