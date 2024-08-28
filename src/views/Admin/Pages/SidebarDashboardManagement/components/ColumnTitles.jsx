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
			<div title={row.desCartera} className="w-full text-center">
				{formatValue(row.desCartera)}
			</div>
		),
		width: "120px"
		
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={formatValue(row.clientes)} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={formatValue(row.cuentas)} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <AdicionaComas value={formatValue(row.capitalMN)} />,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital}>
				{formatValue(row.porcentajeCapital)}
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
				{formatValue(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={formatValue(row.numCtc)} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={formatValue(row.numCd)} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
		// cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{formatValue(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={formatValue(row.numPDP)} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={formatValue(row.montoPDP)} />,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={formatValue(row.intTotal)} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={formatValue(row.intAgente)} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={formatValue(row.intCTC)} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={formatValue(row.intCD)} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={formatValue(row.numPagos)} />,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={formatValue(row.solesPagos)} />,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => formatValue(row.porcentajeEficiencia)
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={formatValue(row.ticketCapital)} />,
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
		cell: row => formatValue(row.porcentajeCalidadPDP),
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => formatValue(row.cob),
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <DownloadExcel>{row}</DownloadExcel>,
		width: "100px"
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
			<div title={row.codTipo} className="w-full text-center">
				{formatValue(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={formatValue(row.clientes)} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={formatValue(row.cuentas)} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <AdicionaComas value={formatValue(row.capitalMN)} />,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital}>
				{formatValue(row.porcentajeCapital)}
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
				{formatValue(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={formatValue(row.numCtc)} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={formatValue(row.numCd)} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
		// cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{formatValue(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={formatValue(row.numPDP)} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={formatValue(row.montoPDP)} />,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={formatValue(row.intTotal)} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={formatValue(row.intAgente)} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={formatValue(row.intCTC)} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={formatValue(row.intCD)} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={formatValue(row.numPagos)} />,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={formatValue(row.solesPagos)} />,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => formatValue(row.porcentajeEficiencia)
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={formatValue(row.ticketCapital)} />,
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
		cell: row => formatValue(row.porcentajeCalidadPDP),
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => formatValue(row.cob),
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <DownloadExcel>{row}</DownloadExcel>,
		width: "100px"
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
			<div title={row.codTipo} className="w-full text-center">
				{formatValue(row.codTipo)}
			</div>
		),
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={formatValue(row.clientes)} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={formatValue(row.cuentas)} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <AdicionaComas value={formatValue(row.capitalMN)} />,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital}>
				{formatValue(row.porcentajeCapital)}
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
				{formatValue(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={formatValue(row.numCtc)} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={formatValue(row.numCd)} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
		// cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{formatValue(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={formatValue(row.numPDP)} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={formatValue(row.montoPDP)} />,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={formatValue(row.intTotal)} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={formatValue(row.intAgente)} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={formatValue(row.intCTC)} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={formatValue(row.intCD)} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={formatValue(row.numPagos)} />,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={formatValue(row.solesPagos)} />,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => formatValue(row.porcentajeEficiencia)
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={formatValue(row.ticketCapital)} />,
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
		cell: row => formatValue(row.porcentajeCalidadPDP),
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => formatValue(row.cob),
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <DownloadExcel>{row}</DownloadExcel>,
		width: "100px"
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
			<div title={row.codTipo} className="w-full text-center">
				{formatValue(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={formatValue(row.clientes)} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={formatValue(row.cuentas)} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <AdicionaComas value={formatValue(row.capitalMN)} />,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital}>
				{formatValue(row.porcentajeCapital)}
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
				{formatValue(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={formatValue(row.numCtc)} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={formatValue(row.numCd)} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
		// cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{formatValue(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={formatValue(row.numPDP)} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={formatValue(row.montoPDP)} />,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={formatValue(row.intTotal)} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={formatValue(row.intAgente)} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={formatValue(row.intCTC)} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={formatValue(row.intCD)} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={formatValue(row.numPagos)} />,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={formatValue(row.solesPagos)} />,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => formatValue(row.porcentajeEficiencia)
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={formatValue(row.ticketCapital)} />,
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
		cell: row => formatValue(row.porcentajeCalidadPDP),
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => formatValue(row.cob),
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <DownloadExcel>{row}</DownloadExcel>,
		width: "100px"
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
			<div title={row.codTipo} className="w-full text-center">
				{formatValue(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={formatValue(row.clientes)} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={formatValue(row.cuentas)} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <AdicionaComas value={formatValue(row.capitalMN)} />,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital}>
				{formatValue(row.porcentajeCapital)}
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
				{formatValue(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={formatValue(row.numCtc)} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={formatValue(row.numCd)} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
		// cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{formatValue(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={formatValue(row.numPDP)} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={formatValue(row.montoPDP)} />,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={formatValue(row.intTotal)} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={formatValue(row.intAgente)} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={formatValue(row.intCTC)} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={formatValue(row.intCD)} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={formatValue(row.numPagos)} />,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={formatValue(row.solesPagos)} />,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => formatValue(row.porcentajeEficiencia)
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={formatValue(row.ticketCapital)} />,
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
		cell: row => formatValue(row.porcentajeCalidadPDP),
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => formatValue(row.cob),
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <DownloadExcel>{row}</DownloadExcel>,
		width: "100px"
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
			<div title={row.codTipo} className="w-full text-center">
				{formatValue(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={formatValue(row.clientes)} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={formatValue(row.cuentas)} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <AdicionaComas value={formatValue(row.capitalMN)} />,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital}>
				{formatValue(row.porcentajeCapital)}
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
				{formatValue(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={formatValue(row.numCtc)} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={formatValue(row.numCd)} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
		// cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{formatValue(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={formatValue(row.numPDP)} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={formatValue(row.montoPDP)} />,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={formatValue(row.intTotal)} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={formatValue(row.intAgente)} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={formatValue(row.intCTC)} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={formatValue(row.intCD)} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={formatValue(row.numPagos)} />,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={formatValue(row.solesPagos)} />,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => formatValue(row.porcentajeEficiencia)
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={formatValue(row.ticketCapital)} />,
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
		cell: row => formatValue(row.porcentajeCalidadPDP),
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => formatValue(row.cob),
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <DownloadExcel>{row}</DownloadExcel>,
		width: "100px"
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
			<div title={row.codTipo} className="w-full text-center">
				{formatValue(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={formatValue(row.clientes)} />,
		width: "100px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={formatValue(row.cuentas)} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <AdicionaComas value={formatValue(row.capitalMN)} />,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital}>
				{formatValue(row.porcentajeCapital)}
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
				{formatValue(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={formatValue(row.numCtc)} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={formatValue(row.numCd)} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
		// cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{formatValue(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={formatValue(row.numPDP)} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={formatValue(row.montoPDP)} />,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={formatValue(row.intTotal)} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={formatValue(row.intAgente)} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={formatValue(row.intCTC)} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={formatValue(row.intCD)} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={formatValue(row.numPagos)} />,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={formatValue(row.solesPagos)} />,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => formatValue(row.porcentajeEficiencia)
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={formatValue(row.ticketCapital)} />,
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
		cell: row => formatValue(row.porcentajeCalidadPDP),
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => formatValue(row.cob),
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <DownloadExcel>{row}</DownloadExcel>,
		width: "100px"
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
			<div title={row.codTipo} className="w-full text-center">
				{formatValue(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <AdicionaComas value={formatValue(row.clientes)} />,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <AdicionaComas value={formatValue(row.cuentas)} />,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <AdicionaComas value={formatValue(row.capitalMN)} />,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital}>
				{formatValue(row.porcentajeCapital)}
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
				{formatValue(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <AdicionaComas value={formatValue(row.numCtc)} />,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <AdicionaComas value={formatValue(row.numCd)} />,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => formatValue(row.porcentajeCuentas),
		// sortable: true,
		// cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc}>
				{formatValue(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <AdicionaComas value={formatValue(row.numPDP)} />,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={formatValue(row.montoPDP)} />,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <AdicionaComas value={formatValue(row.intTotal)} />,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <AdicionaComas value={formatValue(row.intAgente)} />,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <AdicionaComas value={formatValue(row.intCTC)} />,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <AdicionaComas value={formatValue(row.intCD)} />,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <AdicionaComas value={formatValue(row.numPagos)} />,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <AdicionaComas value={formatValue(row.solesPagos)} />,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => formatValue(row.porcentajeEficiencia)
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <AdicionaComas value={formatValue(row.ticketCapital)} />,
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
		cell: row => formatValue(row.porcentajeCalidadPDP),
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => formatValue(row.cob),
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <DownloadExcel>{row}</DownloadExcel>,
		width: "100px"
		// sortable: true,
	},
];

import {testFetch} from './../../../../../hooks/testFetch';
import { useDispatch } from "react-redux";
import swal from "sweetalert";
// import { unauthenticatedUser } from "../../../../store/authSlice";
import { unauthenticatedUser } from "../../../../../store/authSlice";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

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
			// console.log("Ninguno de los valores anteriores")				
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

const GetData = async (children, dispatch) => {
	// const dispatch = useDispatch();
	console.log(children);

	// Construimos el payload
	let payload = {
		"producto": [], 
		"campaña": [],    
		"macroRegiones": [], 
		"añoCastigo":  null,
		"moneda": null,
		"estadoCuenta": [],
		"mesCastigo": null,
		"prioridad": null,
		"rangoEdad":[],
		"tipo":null,
		"maduracion": null ,
	};

	// Almacena detalles como filtros usados para realizar la descarga de registros de excel
	let downloadData = {
		Fecha:"-",
		Entidad:"-",
        Cartera:"-",
        CodigoDeCartera:"-",
        Filtro:"-",
        Fila:"-",
	}
	downloadData.Fecha = children?.payloadUrl?.selectFecha?.format('MM-YYYY');
	downloadData.Entidad = children?.payloadUrl?.selectEntidad;
	downloadData.Cartera = children?.desCartera;

	downloadData.CodigoDeCartera = children?.codCartera;
	

	/***
	 * la variable "tipo" almacena el tipo de tabla. estos son : "General", "Prioridad", "Maduracion", "AÑO_CASTIGO", "RangoCampaña", "CodProducto", "MacroRegiones".
	 * Nota: Cuando se presiona sobre el botón exportar excel, cada fila envia dos datos: el tipo de fila (fila, suma o total) y el tipo de tabla ("General", "Prioridad",
	 * "Maduracion", etc...). Estos datos enviados son necesarios para todas los "tipo" de tablas excepto para el tipo "General"
	 */
	if(children?.payloadBody?.tipo =="General"){
		/**
		 * Cuando el tipo es "General" debemos enviar el payload con datos vacios, esto es así porque las
		 * filas de la tabla "General" son carteras, a diferencia de las otras tablas que tienen filas que 
		 * son carteras y también tienen filas que son subgrupos de las filas Cartera 
		 */
		downloadData.Filtro = "Estado General de Cartera";
	}else if(children?.payloadBody?.tipo =="Prioridad"){
		downloadData.Filtro = "Cartera Según Prioridad";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			payload.prioridad = children.codTipo;
			downloadData.Fila = children.codTipo;
		}

	}else if(children?.payloadBody?.tipo =="Maduracion"){
		downloadData.Filtro = "Cartera Por Rango de Maduración";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			payload.maduracion = children.codTipo;
			downloadData.Fila = children.codTipo;
		}
	}else if(children?.payloadBody?.tipo =="AÑO_CASTIGO"){
		downloadData.Filtro = "Cartera por Año y Mes de Castigo";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			const fechaYmes = children.codTipo.split(" - ");
			payload.añoCastigo = fechaYmes[0];
			payload.mesCastigo = fechaYmes[1];
			downloadData.Fila = children.codTipo;
		}
	}else if(children?.payloadBody?.tipo =="RangoCampaña"){
		downloadData.Filtro = "Cartera por Rango De Campaña";
		if(children.tipo == "suma"){
			console.log("rango campaña suma");
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			console.log("rango campaña fila");
			payload.campaña[0] = children.codTipo;
			downloadData.Fila = children.codTipo; 
		}
	}else if(children?.payloadBody?.tipo =="CodProducto"){
		downloadData.Filtro = "Cartera por Tipo de Producto";
		console.log("entramos en - de producto")
		if(children.tipo == "suma"){
			console.log("entramos en suma de producto")
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			console.log("entramos en fila de producto")
			payload.producto[0] = children.codTipo;
			downloadData.Fila = children.codTipo;
		}
	}else if(children?.payloadBody?.tipo =="MacroRegiones"){
		downloadData.Filtro = "Cartera por Zona";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			// Tomar en cuenta que el backend esta enviado archivos "sin info" que es un valor que no existe para hacer la busqueda.
			// probablemente esto genere errores en la consulta
			payload.macroRegiones[0] = children.codTipo;
			downloadData.Fila = children.codTipo;
		}
	}else{
		swal({
			title: "Error de Exportación de datos",
			text: "Hubo un error al obtener los datos, por favor vuelva a realizar su consulta.",
			icon: "warning",
			button: "OK"
		});
		return null;
	}

	let {data, error} = await testFetch.post(payload,`/admin/tablon/datos-descarga?entidad=${children.payloadUrl.selectEntidad}&mes=${children.payloadUrl?.selectFecha?.format('MM-YYYY')}&carteras=${children.codCartera}`); 
	ErrorToken(error,dispatch);
	DescargarExcelUnaSolaHoja(data?.data, downloadData);
	return null;
}

const DownloadExcel = ({children}) => {
	const dispatch = useDispatch();
	// return <button onClick={()=>{GetData(children)}}   className="bg-green-400 px-6 rounded py-1 text-white hover:bg-green-500 font-ralewayRegular">Excel</button>
	if(children?.tipo == "suma" || children?.tipo == "fila"){
		return <button onClick={()=>{GetData(children,dispatch)}}   className="bg-green-400 px-6 rounded py-1 text-white hover:bg-green-500 font-ralewayRegular">Excel</button>
	}else{
		return <button onClick={()=>{GetData(children,dispatch)}}  disabled  className="bg-gray-400 px-6 rounded py-1 text-white cursor-not-allowed  font-ralewayRegular">Excel</button>
	}
	
}

const DescargarExcelUnaSolaHoja = (ReactExcelData, downloadData) => {

    // Filas que dan informacion sobre filtros usados
    // const worksheetData = [
    //     ["Filtros específicos"], // Título
    //     [],
    //     ["Producto", "Rango de Campaña", "Macroregiones"], // Encabezados de filtros
    //     ["dfsdf", "sdfsdf", "sdfsdf"], // Valores de filtros
    //     [],
    //     ["Año Castigo", "Moneda", "Estado de Cuenta"],
    //     ["2024", "sol", "Invalida"],
    //     [],
    //     ["Mes Castigo", "Prioridad", "Rango de Edad"],
    //     ["Febrero", "Alta", "30-32"],
    //     [],
    //     [], // Espacio en blanco entre filtros y tabla
    //     ["Datos de cuentas del generadas para el"], // Título de la tabla
    //     [],
    //     ["Tipo de documento", "Número de documento", "Número de cuenta", "Capital", "Rango de Campaña", "Campaña"], // Encabezados de la tabla

    //     // Añadir más filas de datos aquí según sea necesario
    // ];

	let worksheetData = [
        ["Datos usados para la Descarga de registros"], // Título
        [],
		["Fecha: ", downloadData.Fecha],
		["Entidad: ", downloadData.Entidad],
        ["Cartera: ", downloadData.Cartera], 
        ["Código de cartera: ", downloadData.CodigoDeCartera],
        ["Filtro: ",downloadData.Filtro],
        ["Fila: ",downloadData.Fila],
		[],
		[],
		["Tipo de documento", "Número de documento", "Número de cuenta", "Capital", "Rango de Campaña", "Campaña"],
    ];

	// worksheetData[0][2][1]=downloadData.Fecha; // Fecha
	// worksheetData[0][3][1]=downloadData.Entidad; // Entidad
	// worksheetData[0][4][1]=downloadData.Cartera; // Cartera
	// worksheetData[0][6][1]=downloadData.CodigoDeCartera // Código de cartera
	// worksheetData[0][7][1]=downloadData.Filtro; // Filtro
	// worksheetData[0][8][1]=downloadData.Fila; // Fila


	console.log("Datos de array: ", worksheetData);

    // Convertimos el array de objetos `data` a un array de arrays compatible con `worksheetData`
    const dataRows = ReactExcelData.map(row => [
        row["Tipo de documento"] || "-",
        row["Número de documento"] || "-",
        row["Número de cuenta"] || "-",
        row["Capital"] || "-",
        row["Rango de Campaña"] || "-",
        row["Campaña"] || "-"
    ]);

    // Unimos `worksheetData` con `dataRows`
    const combinedData = worksheetData.concat(dataRows);

    // Creamos la hoja
    const ws = XLSX.utils.aoa_to_sheet(combinedData);
    // const ws = XLSX.utils.json_to_sheet(ReactExcelData.data);

    // Ajustar el ancho de las columnas
    const columnWidths = [
        { wch: 16 }, // Ancho para la primera columna
        { wch: 18 }, // Ancho para la segunda columna
        { wch: 15 }, // Ancho para la tercera columna
        { wch: 15 }, // Ancho para la cuarta columna
        { wch: 15 }, // Ancho para la quinta columna
        { wch: 20 }, // Ancho para la sexta columna
        { wch: 10 }, // Ancho para la séptima columna
    ];

    // Insertamos la informacion de ancho de las columnas a la hoja
    ws['!cols'] = columnWidths;

    // Unir celdas y centrar el contenido - s(start), e(end), r(row), c(col)
    // ws['!merges'] = [
    //     { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }, // Unir celdas para "Filtros específicos"
    //     { s: { r: 10, c: 0 }, e: { r: 10, c: 2 } }, // Unir celdas para "Datos de cuentas del generadas para el"
    // ];

    // Aplicar estilos a los encabezados
    // const headerStyle = {
    //     font: { bold: true },
    //     fill: { fgColor: { rgb: "D3D3D3" } }, // Color gris claro de fondo
    //     alignment: { horizontal: "center" }
    // };

    // // Verificación y aplicación de estilos
    // const headerCells = ['A3', 'B3', 'C3', 'A11', 'B11', 'C19', 'D19', 'E19', 'F19', 'G19'];
    // headerCells.forEach(cell => {
    //     if (ws[cell]) {
    //         ws[cell].s = headerStyle;
    //     }
    // });


    // Crear un nuevo libro de Excel
    const wb = XLSX.utils.book_new();

    // Añadimos la hola al libro
    XLSX.utils.book_append_sheet(wb, ws, "Hoja 1");

    // Creamos el archivo para exportar (wbout es un excel en formato binario) || Exportar el libro a un archivo
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    // Descargamos propiamente el archivo
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'export.xlsx');
}

// Convierte cadena binaria a un ArrayBuffer
function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

const formatValue = (value) => {
    return value === null ? "Vacío" : value;
};

const ErrorToken = (error, dispatch) => {

    if (!error) {
      return null; // No renderiza nada si no hay error
    }
  
    if (error.message === 'Token expired') {
      swal({
        title: "Sesión Expirada",
        text: "Su sesión ha expirado. Por favor, inicie sesión nuevamente para continuar.",
        icon: "warning",
        button: "OK"
      }).then(() => {
        dispatch(unauthenticatedUser());
      });
    } else {
      swal({
        title: "Error de consulta",
        text: "Hubo un error al obtener los datos, por favor vuelva a realizar su consulta.",
        icon: "warning",
        button: "OK"
      });
    }
  
    return null; // Aquí se retorna JSX
};



