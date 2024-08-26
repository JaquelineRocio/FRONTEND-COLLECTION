import DataTable from 'react-data-table-component';
import { Chip } from "@material-tailwind/react";
import MoonLoader from "react-spinners/MoonLoader";
import PercentageBar from './PercentageBar';
// import './TableCustomed.css';
// import styled from 'styled-components';
/**
 * tableRows, son las filas que se integrarán a la tabla
 * tableColumns, son los titulos de las columnas
 */

export default function TableCustomed({tableRows, tableColumns = [], loading = false, nameOfTable=null}) {
	// console.log("entrada registros tabla dos: ", tableRows);
	
	return (
		<DataTable
			// title="Dashboard de cartera por tramo de importe"
			columns={tableColumns}
			data={buildRows(tableRows,nameOfTable)}
			progressPending={loading}
			progressComponent={<CustomLoader />}
			pagination
			// paginationServer
			// paginationTotalRows={totalRows}
			// onChangeRowsPerPage={handlePerRowsChange}
			// onChangePage={handlePageChange}
			conditionalRowStyles={conditionalRowStyles}
			customStyles={customStyles}
			paginationRowsPerPageOptions={[1,2,3,4,5,10, 15, 20, 25, 30]}
			paginationPerPage={5} 
			paginationComponentOptions={configuracionDeMensajes}
			noDataComponent={<NoDataComponent />}
		/>
	);
}

/**
 *  * Esta funcion une todas las filas entregadas por el backend. el resultado es una coleccion (array de objetos) 
 */
const buildRows = (rowsInput,nameOfTable) => {
	if(nameOfTable=="ESTADO GENERAL DE CARTERA DEL MES (PONER MES Y AÑO)"){
		if (rowsInput && Object.keys(rowsInput).length > 0) {
			const rowsOutput = []
		
			rowsInput?.registros?.map((bloque)=>{
				// Arma las filas "fila"
				bloque = {...bloque, tipo: "fila"}
				rowsOutput.push(bloque);
			}) || []
		
			// Arma la fila "total"
			rowsOutput.push({...rowsInput.total[0], tipo: "total"});
		
			return rowsOutput;
			}
	}else{
		if (rowsInput && Object.keys(rowsInput).length > 0) {
			// console.log("entrada build tabla prioridad ",rowsInput);
			const rowsOutput = []
			// registros
			rowsInput?.registros?.map((bloque)=>{
		
				// Arma la primera fila "suma"
				const objetoTotal = bloque?.total || {}
				rowsOutput.push({...objetoTotal, tipo: "suma", codTipo: objetoTotal.desCartera})
		
				// Arma las filas "fila"
				bloque?.subRegistros?.map((row)=>{
					row = {...row, tipo: "fila", porcentajeTotalPagos: bloque?.total["pagos"]}
					rowsOutput.push(row)
				}) || {}
		
				
		
			}) || []
		
			// totalGeneral
			rowsOutput.push({...rowsInput.totalGeneral[0], tipo: "total", codTipo: "TOTAL GENERAL"});
		
			return rowsOutput;
		}
	}


}

const customStyles = {
	// rows: {
	// 	style: {
	// 		minHeight: '72px', // override the row height
	// 	},
	// },
	headCells: {
		style: {
			paddingLeft: '6px', // override the cell padding for head cells
			paddingRight: '6px',
			backgroundColor: '#064469', // Usar el tono 500 del color rojo
			fontSize: '14px',
			color: '#FFFFFF',
			textAlign: 'center', // Centrar el texto
			justifyContent: 'center', // Asegura que el contenido esté centrado			
			// whiteSpace: 'nowrap', // Evita el ajuste de línea
			textOverflow: 'ellipsis',
			borderRight: '1px solid rgba(2, 28, 43)', // Línea vertical entre encabezados
		},
	},
	cells: {
		style: {
			paddingLeft: '6px', // override the cell padding for data cells
			paddingRight: '6px',
			// textAlign: 'right', // Centrar el texto en las celdas de datos
			justifyContent: 'right', // Asegura que el contenido esté centrado
			whiteSpace: 'nowrap',
			borderRight: '1px solid #DDD', // Línea vertical entre celdas
			textOverflow: 'ellipsis',
			// whiteSpace: 'nowrap', // Evita el ajuste de línea
		},
	},
	pagination: {
        style: {
            minHeight: '12px', // Asegura que la paginación tenga suficiente altura
            // backgroundColor: 'transparent', // Puedes cambiar el fondo si es necesario
            // color: 'white', // Cambia el color del texto si es necesario
			overflow: 'hidden',
        },
        pageButtonsStyle: {
            borderRadius: '50%', // Hace que los botones de página sean redondos
            height: '40px', // Altura de los botones
            width: '40px', // Ancho de los botones
            padding: '6px', // Espacio dentro de los botones
            margin: '2px', // Margen entre botones
            cursor: 'pointer', // Cursor como puntero
            transition: '0.4s', // Suaviza la transición de estados
            // color: 'white', // Color del texto
            // fill: 'white', // Color del icono de los botones
			className: 'pagination-buttons'
        },
    }
};

const conditionalRowStyles = [
	{
		when: row => row.tipo == "suma",
		style: {
			backgroundColor: '#E6F0F2',
			color: 'black',
			fontWeight: 'bold',
			// '&:hover': {
			// 	cursor: 'pointer',
			// },
		},
	},
	{
		when: row => row.tipo == "total",
		style: {
			backgroundColor: '#9CCDDB',
			color: 'black',
			fontWeight: 'bold',
			// border: '1px solid #1A237E',
			// '&:hover': {
			// 	cursor: 'pointer',
			// },
		},
	},
];

const CustomLoader = () => (
	<div style={{ padding: '50px', textAlign: '' }}>
		<MoonLoader color="#1A237E" size={40} loading={true}/>
	</div>
		// <div style={{ padding: '24px', textAlign: 'center' }}>
		//   <img src="/loading.gif" alt="Cargando..." />  // Puedes usar una imagen de carga
		//   <p>Cargando datos, por favor espera...</p>
		// </div>
);

const configuracionDeMensajes = {
	rowsPerPageText: 'Filas por página:',
	rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: 'Todos',
}

const NoDataComponent = () => (
    <div style={{ textAlign: 'center', padding: '50px' }}>
        <p>No hay registros disponibles.</p>
    </div>
);

