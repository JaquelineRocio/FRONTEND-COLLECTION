import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

import { Api } from '../../services/Api';
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { unauthenticatedUser } from '../../store/authSlice';
import { Chip } from "@material-tailwind/react";
import { red } from '@mui/material/colors';

const CustomTitle = ({ row }) => (
	<div>
		{}
		<div>{row.mesCastigo}</div>
		{/* <Chip size="sm" value="chip small" /> */}
		
		<div>
			<div
				data-tag="allowRowEvents"
				style={{ color: 'grey', overflow: 'hidden', whiteSpace: 'wrap', textOverflow: 'ellipses' }}
			>
				<Chip size="sm"  color="purple" value={row.mesCastigo} />
				{/* {row.mesCastigo} */}
			</div>
		</div>
	</div>
);

const columns = [
{
	name: 'ID Tablon',
	selector: row => row.idTablon,
	sortable: true,
},
{
	name: 'N° Cuenta',
	selector: row => row.nroCuenta,
	sortable: true,
},
{
	name: 'Mes Castigo',
	selector: row => row.mesCastigo,
	sortable: true,
	cell: row => <CustomTitle row={row} />,
},
{
	name: 'Rango Campaña',
	selector: row => row.rangoCampaña,
	sortable: true,
},
{
	name: 'Fecha de Asignación',
	selector: row => row.fechaAsignacion,
	sortable: true,
},
{
	name: 'P6M',
	selector: row => row.p6m,
	sortable: true,
},
{
	name: 'P5M',
	selector: row => row.p5m,
	sortable: true,
},
{
	name: 'P4M',
	selector: row => row.p4m,
	sortable: true,
},
{
	name: 'P3M',
	selector: row => row.p3m,
	sortable: true,
},
{
	name: 'P2M',
	selector: row => row.p2m,
	sortable: true,
},
{
	name: 'P1M',
	selector: row => row.p1m,
	sortable: true,
},
{
	name: 'Int Total',
	selector: row => row.intTotal,
	sortable: true,
},
{
	name: 'PDP',
	selector: row => row.pdp,
	sortable: true,
},
{
	name: 'PDP Acido',
	selector: row => row.pdpAcido,
	sortable: true,
},
{
	name: 'PDP Pago',
	selector: row => row.pdpPago,
	sortable: true,
},
{
	name: 'Int Agente',
	selector: row => row.intAgente,
	sortable: true,
},
{
	name: 'Int CTC',
	selector: row => row.intCtc,
	sortable: true,
},
{
	name: 'Deuda Capital',
	selector: row => row.deudaCapital,
	sortable: true,
},
{
	name: 'Deuda Total',
	selector: row => row.deudaTotal,
	sortable: true,
},
{
	name: 'Campaña',
	selector: row => row.campaña,
	sortable: true,
},
{
	name: 'Maduracion',
	selector: row => row.maduracion,
	sortable: true,
},
{
	name: 'Total Pago',
	selector: row => row.totalPago,
	sortable: true,
},
{
	name: 'N° Pagos',
	selector: row => row.nroPagos,
	sortable: true,
},
{
	name: 'Edad',
	selector: row => row.edad,
	sortable: true,
},
{
	name: 'Rango Edad',
	selector: row => row.rangoEdad,
	sortable: true,
},
{
	name: 'Macro Regiones',
	selector: row => row.macroRegiones,
	sortable: true,
},
{
	name: 'Estado Cuenta',
	selector: row => row.estadoCuenta,
	sortable: true,
},
{
	name: 'CTC',
	selector: row => row.ctc,
	sortable: true,
},
{
	name: 'Flag Cob',
	selector: row => row.flagCob,
	sortable: true,
},
{
	name: 'Phone CDH',
	selector: row => row.phoneCdh,
	sortable: true,
},
{
	name: 'CDH',
	selector: row => row.cdh,
	sortable: true,
},
{
	name: 'CD',
	selector: row => row.cd,
	sortable: true,
},
{
	name: 'TC',
	selector: row => row.tc,
	sortable: true,
},
{
	name: 'Eficiencia',
	selector: row => row.eficiencia,
	sortable: true,
},
{
	name: 'Ticket Pagos',
	selector: row => row.ticketPagos,
	sortable: true,
},
{
	name: 'Ticket Capital',
	selector: row => row.ticketCapital,
	sortable: true,
},
];
  


export default function TablaEstadoGeneralDeCartera () {
	const dispatch = useDispatch();

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [totalRows, setTotalRows] = useState(0);
	const [perPage, setPerPage] = useState(10);

	const fetchUsers = async page => {
		setLoading(true);
		let response = {}
		try{		
            response = await Api.get(`/admin/tablon?page=${page}&size=${perPage}`)
			setData(response.content);
			setTotalRows(response.totalElements);
			setLoading(false);
            console.log('SUCCESS_SDW02');
        }catch(error){
            console.error('ERROR_SDV02', error);
            if (error.message === 'Token expired') {
                swal({
                    title: "Sesión Expirada",
                    text: "Su sesión ha expirado. Por favor, inicie sesión nuevamente para continuar.",
                    icon: "warning",
                    button: "OK"
                }).then(() => {
                    dispatch(unauthenticatedUser());
                });
            }
        }
	};

	const handlePageChange = page => {
		page = page-1;
		console.log("IR SUIGUIENTE PAGINA");
		fetchUsers(page);
	};

	const handlePerRowsChange = async (newPerPage, page) => {
		page = page-1;
		console.log("CAMBIA NUMERO DE PAGINAS MOSTRADA");
		console.log("xx camibio de grupo:", newPerPage);
		console.log("xx pagina actula", page);
		setLoading(true);

		setPerPage(newPerPage);
		try{		
            const response = await Api.get(`/admin/tablon?page=${page}&size=${newPerPage}`)
			setData(response.content);
			setTotalRows(response.totalElements);
			setLoading(false);
            console.log('SUCCESS_SDW02');
        }catch(error){
            console.error('ERROR_SDV02', error);
            if (error.message === 'Token expired') {
                swal({
                    title: "Sesión Expirada",
                    text: "Su sesión ha expirado. Por favor, inicie sesión nuevamente para continuar.",
                    icon: "warning",
                    button: "OK"
                }).then(() => {
                    dispatch(unauthenticatedUser());
                });
            }
        }

	};

	const conditionalRowStyles = [
		{
			when: row => row.idTablon < 40,
			style: {
				backgroundColor: 'rgba(63, 195, 128, 0.9)',
				color: 'white',
				'&:hover': {
					cursor: 'pointer',
				},
			},
		},
		{
			when: row => row.idTablon > 40,
			style: {
				backgroundColor: 'rgba(3, 73, 121, 0.9)',
				color: 'white',
				'&:hover': {
					cursor: 'pointer',
				},
			},
		},
	];

	const customStyles = {
		rows: {
			style: {
				minHeight: '72px', // override the row height
			},
		},
		headCells: {
			style: {
				paddingLeft: '8px', // override the cell padding for head cells
				paddingRight: '8px',
				backgroundColor: red[500], // Usar el tono 500 del color rojo
				fontSize: '14px',
				
			},
		},
		cells: {
			style: {
				paddingLeft: '8px', // override the cell padding for data cells
				paddingRight: '8px',
			},
		},
	};

	useEffect(() => {
		// fetchUsers(1); // fetch page 1 of users
		fetchUsers(0); // fetch page 1 of users
		
	}, []);

	return (
		<DataTable
			title="Estado general de cartera por mes"
			columns={columns}
			data={data}
			progressPending={loading}
			pagination
			paginationServer
			paginationTotalRows={totalRows}
			onChangeRowsPerPage={handlePerRowsChange}
			onChangePage={handlePageChange}
			conditionalRowStyles={conditionalRowStyles}
			customStyles={customStyles}
		/>
	);
}