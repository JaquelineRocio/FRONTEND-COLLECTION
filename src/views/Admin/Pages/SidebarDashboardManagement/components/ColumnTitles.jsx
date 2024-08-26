import PercentageBar from "./PercentageBar";

/**
 * Aquí se configuran los nombres de los titulos de todas las tablas
 */

// Para tabla numero uno
export const titulosParaTablaEstadoGeneralDeCartera = [
	{
		// HECHO
		name: <div>CARTERA</div>,
		selector: row => row.desCartera,
		// sortable: true,
		cell: row => (
			<div title={row.desCartera} style={{ textAlign: 'center' }}>
				{row.desCartera}
			</div>
		),
		width: "120px"
		
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={row.clientes} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={row.cuentas} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		// sortable: true,

	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
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
		width: "80px"
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
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={row.numCtc} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={row.numCd} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// sortable: true,
		cell: row => <CustomRowCD row={row} />,
		width: "60px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{row.porcentajeTc}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={row.numPDP} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={row.montoPDP} />,
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={row.intTotal} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={row.intAgente} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={row.intCTC} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={row.intCD} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={row.numPagos} />,
		width: "80px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={row.solesPagos} />,
		width: "80px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => (<CustomRowPercentageEficiencia row={row}/>),
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={row.ticketCapital} />,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <AdicionaComas value={row.ticketPago} />,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		width: "60px"
		// sortable: true,
	},
];

// Para tabla numero dos
export const titulosParaTablaSituacionDeCarteraSegunPrioridad = [
	{
		name: 'PRIORIDAD',
		selector: row => row.codTipo,
		// sortable: true,
		cell: row => (
			<div title={row.codTipo} className='pl-4'>
				{row.codTipo}
			</div>
		),
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={row.clientes} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={row.cuentas} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		// sortable: true,

	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
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
		width: "80px"
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
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={row.numCtc} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={row.numCd} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// sortable: true,
		cell: row => <CustomRowCD row={row} />,
		width: "60px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{row.porcentajeTc}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={row.numPDP} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={row.montoPDP} />,
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={row.intTotal} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={row.intAgente} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={row.intCTC} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={row.intCD} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={row.numPagos} />,
		width: "80px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={row.solesPagos} />,
		width: "80px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => (<CustomRowPercentageEficiencia row={row}/>),
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={row.ticketCapital} />,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <AdicionaComas value={row.ticketPago} />,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		width: "60px"
		// sortable: true,
	},
];

// Para tabla numero tres
export const titulosParaTablaCarteraPorTramoDeImporte= [
	{
		name: 'PRIORIDAD',
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
		cell: row => <AdicionaComas value={row.clientes} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={row.cuentas} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		// sortable: true,

	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
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
		width: "80px"
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
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={row.numCtc} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={row.numCd} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// sortable: true,
		cell: row => <CustomRowCD row={row} />,
		width: "60px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{row.porcentajeTc}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={row.numPDP} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={row.montoPDP} />,
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={row.intTotal} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={row.intAgente} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={row.intCTC} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={row.intCD} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={row.numPagos} />,
		width: "80px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={row.solesPagos} />,
		width: "80px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => (<CustomRowPercentageEficiencia row={row}/>),
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={row.ticketCapital} />,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <AdicionaComas value={row.ticketPago} />,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		width: "60px"
		// sortable: true,
	},
];

// Para tabla numero cuatro
export const titulosParaTablaCarteraPorRangoDeMaduracion = [
	{
		name: 'R. DE MADURACIÓN',
		selector: row => row.codTipo,
		// sortable: true,
		cell: row => (
			<div title={row.codTipo} className='pl-4'>
				{row.codTipo}
			</div>
		),
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={row.clientes} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={row.cuentas} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		// sortable: true,

	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
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
		width: "80px"
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
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={row.numCtc} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={row.numCd} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// sortable: true,
		cell: row => <CustomRowCD row={row} />,
		width: "60px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{row.porcentajeTc}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={row.numPDP} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={row.montoPDP} />,
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={row.intTotal} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={row.intAgente} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={row.intCTC} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={row.intCD} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={row.numPagos} />,
		width: "80px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={row.solesPagos} />,
		width: "80px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => (<CustomRowPercentageEficiencia row={row}/>),
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={row.ticketCapital} />,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <AdicionaComas value={row.ticketPago} />,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		width: "60px"
		// sortable: true,
	},
];

// Para tabla nuermo cinco
export const titulosParaTablaCarteraPorAnhoMesCastigo = [
	{
		name: 'AÑO Y MES CASTIGO',
		selector: row => row.codTipo,
		// sortable: true,
		cell: row => (
			<div title={row.codTipo} className='pl-4'>
				{row.codTipo}
			</div>
		),
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={row.clientes} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={row.cuentas} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		// sortable: true,

	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
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
		width: "80px"
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
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={row.numCtc} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={row.numCd} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// sortable: true,
		cell: row => <CustomRowCD row={row} />,
		width: "60px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{row.porcentajeTc}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={row.numPDP} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={row.montoPDP} />,
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={row.intTotal} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={row.intAgente} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={row.intCTC} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={row.intCD} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={row.numPagos} />,
		width: "80px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={row.solesPagos} />,
		width: "80px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => (<CustomRowPercentageEficiencia row={row}/>),
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={row.ticketCapital} />,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <AdicionaComas value={row.ticketPago} />,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		width: "60px"
		// sortable: true,
	},
];
// Para tabla numero seis
export const titulosParaTablaRangoDeCampanha = [
	{
		name: 'R. DE CAMPAÑA',
		selector: row => row.codTipo,
		// sortable: true,
		cell: row => (
			<div title={row.codTipo} className='pl-4'>
				{row.codTipo}
			</div>
		),
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={row.clientes} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={row.cuentas} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		// sortable: true,

	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
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
		width: "80px"
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
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={row.numCtc} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={row.numCd} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// sortable: true,
		cell: row => <CustomRowCD row={row} />,
		width: "60px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{row.porcentajeTc}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={row.numPDP} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={row.montoPDP} />,
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={row.intTotal} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={row.intAgente} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={row.intCTC} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={row.intCD} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={row.numPagos} />,
		width: "80px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={row.solesPagos} />,
		width: "80px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => (<CustomRowPercentageEficiencia row={row}/>),
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={row.ticketCapital} />,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <AdicionaComas value={row.ticketPago} />,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		width: "60px"
		// sortable: true,
	},
];

// Para tabla numero siete
export const titulosParaTablaCarteraPorTipoDeProducto = [
	{
		name: 'TIPO DE PRODUCTO',
		selector: row => row.codTipo,
		// sortable: true,
		cell: row => (
			<div title={row.codTipo} className='pl-4'>
				{row.codTipo}
			</div>
		),
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={row.clientes} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={row.cuentas} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		// sortable: true,

	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
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
		width: "80px"
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
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={row.numCtc} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={row.numCd} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// sortable: true,
		cell: row => <CustomRowCD row={row} />,
		width: "60px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{row.porcentajeTc}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={row.numPDP} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={row.montoPDP} />,
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={row.intTotal} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={row.intAgente} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={row.intCTC} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={row.intCD} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={row.numPagos} />,
		width: "80px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={row.solesPagos} />,
		width: "80px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => (<CustomRowPercentageEficiencia row={row}/>),
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={row.ticketCapital} />,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <AdicionaComas value={row.ticketPago} />,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		width: "60px"
		// sortable: true,
	},
];

// Para tabla numero ocho
export const titulosParaTablaCarteraPorZona = [
	{
		name: 'CARTERA POR ZONA',
		selector: row => row.codTipo,
		// sortable: true,
		cell: row => (
			<div title={row.codTipo} className='pl-4'>
				{row.codTipo}
			</div>
		),
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={row.clientes} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={row.cuentas} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		// sortable: true,

	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
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
		width: "80px"
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
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={row.numCtc} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={row.numCd} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// sortable: true,
		cell: row => <CustomRowCD row={row} />,
		width: "60px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{row.porcentajeTc}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={row.numPDP} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={row.montoPDP} />,
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={row.intTotal} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={row.intAgente} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={row.intCTC} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={row.intCD} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={row.numPagos} />,
		width: "80px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={row.solesPagos} />,
		width: "80px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => (<CustomRowPercentageEficiencia row={row}/>),
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={row.ticketCapital} />,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <AdicionaComas value={row.ticketPago} />,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		width: "60px"
		// sortable: true,
	},
];

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




