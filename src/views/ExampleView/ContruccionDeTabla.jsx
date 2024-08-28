import { useEffect, useState } from "react";
import TableCustomed from "../Admin/Pages/SidebarDashboardManagement/components/TableCustomed";
import {titulosParaTablaEstadoGeneralDeCartera} from "./../Admin/Pages/SidebarDashboardManagement/components/ColumnTitles";
import SimulatorApi from "../../services/resources/SimulatorApi";
const ContruccionDeTabla = () => {
    const [rows, setRows] = useState([]);

     const getData = async () => {
        const response = await SimulatorApi();
        setRows(response);
        console.log(response);
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <>
            <TableCustomed
                tableRows={rows.data}
                tableColumns={titulosParaTablaEstadoGeneralDeCartera}
                nameOfTable={"esta es una tabla"}
            />
        </>
    )
}

export default ContruccionDeTabla;