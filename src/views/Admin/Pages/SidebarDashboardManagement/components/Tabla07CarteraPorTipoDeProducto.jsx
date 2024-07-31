import DataTable from 'react-data-table-component';
import { Chip } from "@material-tailwind/react";
import RiseLoader from "react-spinners/RiseLoader";
import PercentageBar from './PercentageBar';

export default function Tabla07CarteraPorTipoDeProducto({tableRows, loading}) {

    console.log("nuevos datos ingresados",tableRows );
	
	return (
		<DataTable
			// title="Dashboard de cartera por tramo de importe"
			columns={columns}
			data={buildRows(tableRows)}
			progressPending={loading}
			progressComponent={<CustomLoader />}
			pagination
			// paginationServer
			// paginationTotalRows={totalRows}
			// onChangeRowsPerPage={handlePerRowsChange}
			// onChangePage={handlePageChange}
			conditionalRowStyles={conditionalRowStyles}
			customStyles={customStyles}
		/>
	);
}

const buildRows = (rowsInput) => {
	const rowsOutput = []

	rowsInput?.registrosAgrupados?.map((bloque)=>{

		// Arma la primera fila "suma"
		const objetoTotal = bloque?.total || {}
		rowsOutput.push({...objetoTotal, tipo: "suma", codTipo: objetoTotal.desCartera})

		// Arma las filas "fila"
		bloque?.subRegistros?.map((row)=>{
			row = {...row, tipo: "fila", porcentajeTotalPagos: bloque?.total["pagos"]}
			rowsOutput.push(row)
		}) || {}

		

	}) || []

	// Arma la fila "total"
	rowsOutput.push({...rowsInput.totalGeneral, tipo: "total", codTipo: "TOTAL GENERAL"});

	console.log("Resultado final",rowsOutput );
	return rowsOutput;
}

const columns = [
	{
		name: 'TIPO DE PRODUCTO',
		selector: row => row.codTipo,
		// sortable: true,
		cell: row => (
			<div title={row.codTipo}>
				{row.codTipo}
			</div>
		),
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		// sortable: true,
		cell: row => (
			<div title={row.clientes}>
				{row.clientes}
			</div>
		),
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		// sortable: true,
		cell: row => (
			<div title={row.cuentas}>
				{row.cuentas}
			</div>
		),
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		// sortable: true,

	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		// sortable: true,
		cell: row => <AdicionaComas value={row.capitalMN} />,
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital}>
				{row.porcentajeCapital}
			</div>
		),
	},
	{
		name: <div>%CTC</div>,	
		selector: row => row.porcentajeCtc,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCtc}>
				{row.porcentajeCtc}
			</div>
		),
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		// sortable: true,
		cell: row => (
			<div title={row.numCtc}>
				{row.numCtc}
			</div>
		),
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		// sortable: true,
		cell: row => (
			<div title={row.numCd}>
				{row.numCd}
			</div>
		),
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// sortable: true,
		cell: row => <CustomRowCD row={row} />,
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{row.porcentajeTc}
			</div>
		),
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		// sortable: true,
		cell: row => (
			<div title={row.numPDP}>
				{row.numPDP}
			</div>
		),
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		// sortable: true,
		cell: row => (
			<div title={row.montoPDP}>
				{row.montoPDP}
			</div>
		),
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => (
			<div title={row.intTotal}>
				{row.intTotal}
			</div>
		),
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => (
			<div title={row.intAgente}>
				{row.intAgente}
			</div>
		),
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		// sortable: true,
		cell: row => (
			<div title={row.intCTC}>
				{row.intCTC}
			</div>
		),
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		// sortable: true,
		cell: row => (
			<div title={row.intCD}>
				{row.intCD}
			</div>
		),
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <CustomRowPagosSecondVersion row={row} />,
	},
	{
		name: <div>S/. PAGOS</div>,
		// sortable: true,
		cell: row => (
			<div title={row.solesPagos}>
				{row.solesPagos}
			</div>
		),
	},
	{
		name: <div>%EFICIENCIA</div>,
		selector: row => row.porcentajeEficiencia,
		cell: row => (<CustomRowPercentageEficiencia row={row}/>),
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		// sortable: true,
		cell: row => (
			<div title={row.ticketCapital}>
				{row.ticketCapital}
			</div>
		),
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		// sortable: true,
	},
];


const CustomRowPagos = ({row}) => (

			<div
				// title={row.pagos}
				// data-tag="allowRowEvents"
				// style={{ color: 'grey', overflow: 'hidden', whiteSpace: 'wrap', textOverflow: 'ellipses' }}
			>
				
				{
					row.tipo == "suma" && row.pagos
				}

				{
					row.tipo === "fila" && (row.pagos / row.porcentajeTotalPagos < 0.002) && (
						// <Chip size="sm" color="red" value={row.pagos} />
						<Chip size="sm" className="bg-red-200 text-black border-2 border-red-600" value={row.pagos} />
					)
				}

				{
				row.tipo === "fila" && ((row.pagos / row.porcentajeTotalPagos >= 0.002)&&(row.pagos / row.porcentajeTotalPagos < 0.0029)) && (
						// <Chip size="sm" color="amber" value={row.pagos} />
						<Chip size="sm" className="bg-yellow-200 text-black border-2 border-yellow-600" value={row.pagos} />
					)
				}

				{
					row.tipo === "fila" && (row.pagos / row.porcentajeTotalPagos > 0.0029) && (
						<Chip size="sm" className="bg-lime-200 text-black border-2 border-lime-500" value={row.pagos} />
						// <Chip size="sm" className="bg-red-200 text-black border-2 border-red-600" value={row.pagos} />
						// <div  className="bg-teal-100 p-2 flex text-black border-2 border-teal-100"> {row.pagos}</div>
					)
				}

				{
					row.tipo == "total" && row.pagos
				}

			</div>

);

const CustomRowPagosSecondVersion = ({row}) => (

	<>
		{
			row.tipo != "total" &&row.numPagos
		}
		{
			row.tipo == "suma" && row.numPagos
		}

		{
			row.tipo === "fila" && (row.numPagos / row.porcentajeTotalPagos < 0.002) && (
				<CustomBar children={row.numPagos} color="red" />
			)
		}

		{
			row.tipo === "fila" && ((row.numPagos / row.porcentajeTotalPagos >= 0.002)&&(row.pagos / row.porcentajeTotalPagos < 0.0029)) && (
				<CustomBar children={row.numPagos} color="yellow" />
			)
		}

		{
			row.tipo === "fila" && (row.numPagos / row.porcentajeTotalPagos > 0.0029) && (
				// <Chip size="sm" className="bg-lime-200 text-black border-2 border-lime-500" value={row.pagos} />
				<CustomBar children={row.numPagos} color="green" />
				// <h3>hola</h3>
			)
		}

		{
			row.tipo == "total" && row.numPagos
		}

	</>
);

const CustomBar = ({children, color}) => {

	let ColorDeFondo = '#000000';
	let ColorDeBorde = '#000000'; 
	switch(color){
		case "green":
			ColorDeFondo = '#5DD2C6';
			ColorDeBorde = '#5DD2C6'; 
			break;
		case "yellow":
			ColorDeFondo = '#FECD5B';
			ColorDeBorde = '#FECD5B'; 
			break;
		case "red":
			ColorDeFondo = '#FE436E';
			ColorDeBorde = '#FE436E'; 
			break;
		default:
			console.log("Ninguno de los valores anteriores")				
	}

    const barStyles = {
        height: '20px',
        width: '100%',  // La barra siempre tendrá el ancho completo
        // backgroundColor: getColorIntensity(ColorDeFondo),
        background: `${ColorDeFondo}`, // Aplica un degradado
        borderRadius: '5px',
        transition: 'background-color 0.5s ease',
        display: 'flex',
        justifyContent: 'center', // Asegura que el contenido esté centrado
        textAlign: 'center', // Centrar el texto
        alignItems: 'center',  // Centra verticalmente el contenido
        padding: '10px 0',  // Añade padding vertical
        border: `2px solid ${ColorDeBorde}`,	
    };
	return (
		<div style={barStyles}>
			{children}
		</div>
	);
}

const CustomRowCD = ({row}) => (
	<>		
		{
			row.tipo == "suma" && row.porcentajeCd
		}

		{
			row.tipo === "fila" && <PercentageBar percentage={row.porcentajeCd}/>
		}

		{
			row.tipo == "total" && row.porcentajeCd
		}

	</>	
);

const CustomRowPercentageEficiencia = ({row}) => (
	<>
		{
			row.tipo == "suma" && row.porcentajeEficiencia
		}

		{
			row.tipo === "fila" && <PercentageBar percentage={row.porcentajeEficiencia}/>
		}

		{
			row.tipo === "total" && row.porcentajeEficiencia
		}
	</>	
	
);

const AdicionaComas = ({ value }) => {
    if (value === undefined || value === null) {
        return '';
    }

    // Convertir a número si es una cadena
    const numero = typeof value === 'number' ? value : parseFloat(value.replace(/,/g, ''));

    // Verificar si la conversión fue exitosa
    if (isNaN(numero)) {
        return value;
    }

    return numero.toLocaleString('en-US');
};

const customStyles = {
	// rows: {
	// 	style: {
	// 		minHeight: '72px', // override the row height
	// 	},
	// },
	headCells: {
		style: {
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
			backgroundColor: '#699AD0', // Usar el tono 500 del color rojo
			fontSize: '14px',
			color: '#FFFFFF',
			textAlign: 'center', // Centrar el texto
			justifyContent: 'center', // Asegura que el contenido esté centrado			
		},
	},
	cells: {
		style: {
			// paddingLeft: 'px', // override the cell padding for data cells
			// paddingRight: '0px',
			textAlign: 'center', // Centrar el texto en las celdas de datos
			justifyContent: 'center', // Asegura que el contenido esté centrado
		},
	},
};

const conditionalRowStyles = [
	{
		when: row => row.tipo == "suma",
		style: {
			backgroundColor: 'rgba(0, 170, 255, 0.2)',
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
			backgroundColor: '#AAD6EE',
			color: 'black',
			fontWeight: 'bold',
			border: '1px solid #1A237E',
			// '&:hover': {
			// 	cursor: 'pointer',
			// },
		},
	},
];

const CustomLoader = () => (
	<div style={{ padding: '50px', textAlign: 'center' }}>
		<RiseLoader color="#1A237E" size={12} loading={true}/>
	</div>
		// <div style={{ padding: '24px', textAlign: 'center' }}>
		//   <img src="/loading.gif" alt="Cargando..." />  // Puedes usar una imagen de carga
		//   <p>Cargando datos, por favor espera...</p>
		// </div>
);
