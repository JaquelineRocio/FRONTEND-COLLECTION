

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
				{convertirNuloEnVacio(row.desCartera)}
			</div>
		),
		width: "120px"
		
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.clientes)} /></div>,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.cuentas)} /></div>,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => <div className='px-2'> {convertirNuloEnVacio(row.porcentajeCuentas)} </div>,
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.capitalMN)} /></div>,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCapital)}
			</div>
		),
		width: "80px"
	},
	{
		name: <div>%CTC</div>,	
		selector: row => row.porcentajeCtc,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCtc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCtc)} /></div>,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCd)} /></div>,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// cell: row => <CustomRowCD row={row} />,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeCd)}</div>,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPDP)} /></div>,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.montoPDP)} /></div>,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intTotal)} /></div>,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intAgente)} /></div>,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCTC)} /></div>,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCD)} /></div>,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPagos)} /></div>,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.solesPagos)} /></div>,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeEficiencia)}</div>
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.ticketCapital)} /></div>,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <div className='px-2'><AdicionaComas value={row.ticketPago} /></div>,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeCalidadPDP)}</div>,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.cob)}</div>,
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <div className='px-2'><DownloadExcel>{row}</DownloadExcel></div>,
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
				{convertirNuloEnVacio(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.clientes)} /></div>,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.cuentas)} /></div>,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => <div className='px-2'> {convertirNuloEnVacio(row.porcentajeCuentas)} </div>,
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.capitalMN)} /></div>,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCapital)}
			</div>
		),
		width: "80px"
	},
	{
		name: <div>%CTC</div>,	
		selector: row => row.porcentajeCtc,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCtc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCtc)} /></div>,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCd)} /></div>,
		width: "60px"
	},
	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => <CustomRowCD row={row} />,
		width: "80px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPDP)} /></div>,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.montoPDP)} /></div>,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intTotal)} /></div>,
		cell: row => <PorcentajeIntTotal value={row}/>,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intAgente)} /></div>,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCTC)} /></div>,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCD)} /></div>,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		// cell: row => <AdicionaComas value={convertirNuloEnVacio(row.numPagos)} />,
		cell: row => <TresColoresNumPagos value={row}/>,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		// cell: row => <AdicionaComas value={convertirNuloEnVacio(row.solesPagos)} />,
		cell: row => <TresColoresSolesPagos value={row} />,
		
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		// cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeEficiencia)}</div>
		cell: row => <CustomRowPercentageEficiencia row={row}/>
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.ticketCapital)} /></div>,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <div className='px-2'><AdicionaComas value={row.ticketPago} /></div>,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeCalidadPDP)}</div>,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.cob)}</div>,
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <div className='px-2'><DownloadExcel>{row}</DownloadExcel></div>,
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
				{convertirNuloEnVacio(row.codTipo)}
			</div>
		),
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.clientes)} /></div>,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.cuentas)} /></div>,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => <div className='px-2'> {convertirNuloEnVacio(row.porcentajeCuentas)} </div>,
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.capitalMN)} /></div>,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCapital)}
			</div>
		),
		width: "80px"
	},
	{
		name: <div>%CTC</div>,	
		selector: row => row.porcentajeCtc,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCtc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCtc)} /></div>,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCd)} /></div>,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPDP)} /></div>,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.montoPDP)} /></div>,
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intTotal)} /></div>,
		cell: row => <PorcentajeIntTotal value={row}/>,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intAgente)} /></div>,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCTC)} /></div>,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCD)} /></div>,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		// cell: row => <AdicionaComas value={convertirNuloEnVacio(row.numPagos)} />,
		cell: row => <TresColoresNumPagos value={row}/>,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		// cell: row => <AdicionaComas value={convertirNuloEnVacio(row.solesPagos)} />,
		cell: row => <TresColoresSolesPagos value={row} />,
		
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		// cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeEficiencia)}</div>
		cell: row => <CustomRowPercentageEficiencia row={row}/>
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.ticketCapital)} /></div>,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <div className='px-2'><AdicionaComas value={row.ticketPago} /></div>,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeCalidadPDP)}</div>,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.cob)}</div>,
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <div className='px-2'><DownloadExcel>{row}</DownloadExcel></div>,
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
				{convertirNuloEnVacio(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.clientes)} /></div>,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.cuentas)} /></div>,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => <div className='px-2'> {convertirNuloEnVacio(row.porcentajeCuentas)} </div>,
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.capitalMN)} /></div>,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCapital)}
			</div>
		),
		width: "80px"
	},
	{
		name: <div>%CTC</div>,	
		selector: row => row.porcentajeCtc,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCtc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCtc)} /></div>,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCd)} /></div>,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPDP)} /></div>,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.montoPDP)} /></div>,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intTotal)} /></div>,
		cell: row => <PorcentajeIntTotal value={row}/>,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intAgente)} /></div>,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCTC)} /></div>,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCD)} /></div>,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		// cell: row => <AdicionaComas value={convertirNuloEnVacio(row.numPagos)} />,
		cell: row => <TresColoresNumPagos value={row}/>,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		// cell: row => <AdicionaComas value={convertirNuloEnVacio(row.solesPagos)} />,
		cell: row => <TresColoresSolesPagos value={row} />,
		
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		// cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeEficiencia)}</div>
		cell: row => <CustomRowPercentageEficiencia row={row}/>
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.ticketCapital)} /></div>,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <div className='px-2'><AdicionaComas value={row.ticketPago} /></div>,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeCalidadPDP)}</div>,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.cob)}</div>,
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <div className='px-2'><DownloadExcel>{row}</DownloadExcel></div>,
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
				{convertirNuloEnVacio(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.clientes)} /></div>,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.cuentas)} /></div>,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => <div className='px-2'> {convertirNuloEnVacio(row.porcentajeCuentas)} </div>,
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.capitalMN)} /></div>,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCapital)}
			</div>
		),
		width: "80px"
	},
	{
		name: <div>%CTC</div>,	
		selector: row => row.porcentajeCtc,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCtc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCtc)} /></div>,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCd)} /></div>,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		cell: row => <CustomRowCD row={row} />,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPDP)} /></div>,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.montoPDP)} /></div>,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intTotal)} /></div>,
		cell: row => <PorcentajeIntTotal value={row}/>,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intAgente)} /></div>,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCTC)} /></div>,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCD)} /></div>,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		// cell: row => <AdicionaComas value={convertirNuloEnVacio(row.numPagos)} />,
		cell: row => <TresColoresNumPagos value={row}/>,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		// cell: row => <AdicionaComas value={convertirNuloEnVacio(row.solesPagos)} />,
		cell: row => <TresColoresSolesPagos value={row} />,
		
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		// cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeEficiencia)}</div>
		cell: row => <CustomRowPercentageEficiencia row={row}/>
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.ticketCapital)} /></div>,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <div className='px-2'><AdicionaComas value={row.ticketPago} /></div>,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeCalidadPDP)}</div>,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.cob)}</div>,
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <div className='px-2'><DownloadExcel>{row}</DownloadExcel></div>,
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
				{convertirNuloEnVacio(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.clientes)} /></div>,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.cuentas)} /></div>,
		cell: row => <PorcentajeCuentasDos>{row}</PorcentajeCuentasDos>,
		width: "100px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => <PorcentajeCuentas>{row}</PorcentajeCuentas>,
		width: "100px"
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.capitalMN)} /></div>,
		cell: row => <PorcentajeCapitalDos>{row}</PorcentajeCapitalDos>,

		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		// cell: row => (<div title={row.porcentajeCapital} className='px-2'>	{convertirNuloEnVacio(row.porcentajeCapital)}</div>
		cell: row => <PorcentajeCapital>{row}</PorcentajeCapital>,
		
		width: "120px"
	},
	{
		name: <div>%CTC</div>,	
		selector: row => row.porcentajeCtc,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCtc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCtc)} /></div>,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCd)} /></div>,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// cell: row => <CustomRowCD row={row} />,
		// cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeCd)}</div>,
		cell: row => <TresColoresPorcentajeCD value={row}/>,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPDP)} /></div>,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.montoPDP)} /></div>,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intTotal)} /></div>,
		cell: row => <TresColoresPorcentajeIntTotal>{row}</TresColoresPorcentajeIntTotal>,
		
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intAgente)} /></div>,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCTC)} /></div>,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCD)} /></div>,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPagos)} /></div>,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.solesPagos)} /></div>,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		// cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeEficiencia)}</div>
		cell: row => <TresColoresporcentajeEficiencia value={row}/>
		

		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.ticketCapital)} /></div>,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <div className='px-2'><AdicionaComas value={row.ticketPago} /></div>,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeCalidadPDP)}</div>,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.cob)}</div>,
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <div className='px-2'><DownloadExcel>{row}</DownloadExcel></div>,
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
				{convertirNuloEnVacio(row.codTipo)}
			</div>
		),
		width: "140px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.clientes)} /></div>,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.cuentas)} /></div>,
		cell: row => <PorcentajeCuentasDos>{row}</PorcentajeCuentasDos>,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		// cell: row => <div className='px-2'> {convertirNuloEnVacio(row.porcentajeCuentas)} </div>,
		cell: row => <PorcentajeCuentas>{row}</PorcentajeCuentas>,
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.capitalMN)} /></div>,
		cell: row => <PorcentajeCapitalDos>{row}</PorcentajeCapitalDos>,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		// cell: row => (
		// 	<div title={row.porcentajeCapital} className='px-2'>
		// 		{convertirNuloEnVacio(row.porcentajeCapital)}
		// 	</div>
		// ),
		cell: row => <PorcentajeCapital>{row}</PorcentajeCapital>,
		width: "120px"
	},
	{
		name: <div>%CTC</div>,	
		selector: row => row.porcentajeCtc,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCtc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCtc)} /></div>,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCd)} /></div>,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// cell: row => <CustomRowCD row={row} />,
		cell: row => <div className='px-2'>{row.porcentajeCd}</div>,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPDP)} /></div>,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.montoPDP)} /></div>,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intTotal)} /></div>,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intAgente)} /></div>,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCTC)} /></div>,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCD)} /></div>,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPagos)} /></div>,
		cell: row => <PorcentajeNumPagos value={row}/>,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		// cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.solesPagos)} /></div>,
		cell: row => <PorcentajeSolesPagos value={row}/>,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		// cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeEficiencia)}</div>
		cell: row => <CustomRowPercentageEficiencia row={row}/>
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.ticketCapital)} /></div>,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <div className='px-2'><AdicionaComas value={row.ticketPago} /></div>,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeCalidadPDP)}</div>,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.cob)}</div>,
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <div className='px-2'><DownloadExcel>{row}</DownloadExcel></div>,
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
				{convertirNuloEnVacio(row.codTipo)}
			</div>
		),
		width: "120px"
	},
	{
		name: <div>CLIENTES</div>,	
		selector: row => row.clientes,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.clientes)} /></div>,
		width: "80px"
	},
	{
		name: <div>CUENTAS</div>, 
		selector: row => row.cuentas,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.cuentas)} /></div>,
		width: "80px"
	},
	{
		name: <div>%CUENTAS</div>,
		selector: row => row.porcentajeCuentas,
		cell: row => <div className='px-2'> {convertirNuloEnVacio(row.porcentajeCuentas)} </div>,
		// sortable: true,
	},
	{
		name: <div>CAPITAL</div>,
		selector: row => row.capitalMN,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.capitalMN)} /></div>,
		width: "120px"
	},
	{
		name: <div>%CAPITAL</div>,
		selector: row => row.porcentajeCapital,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCapital} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCapital)}
			</div>
		),
		width: "80px"
	},
	{
		name: <div>%CTC</div>,	
		selector: row => row.porcentajeCtc,
		// sortable: true,
		cell: row => (
			<div title={row.porcentajeCtc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeCtc)}
			</div>
		),
		width: "60px"
	},
	{
		name: <div># CTC</div>,	
		selector: row => row.numCtc,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCtc)} /></div>,
		width: "60px"
	},
	{
		name: <div># CD</div>,	
		selector: row => row.numCd,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numCd)} /></div>,
		width: "60px"
	},

	{
		name: <div>%CD</div>,
		selector: row => row.porcentajeCd,
		// cell: row => <CustomRowCD row={row} />,
		cell: row => <div className='px-2'>{row.porcentajeCd}</div>,
		width: "70px"
	},
	{
		name: <div>%TC</div>,
		selector: row => row.porcentajeTc,
		cell: row => (
			<div title={row.porcentajeTc} className='px-2'>
				{convertirNuloEnVacio(row.porcentajeTc)}
			</div>
		),
		width: "80px"
	},
	{
		name: '# PDP',
		selector: row => row.numPDP,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPDP)} /></div>,
		width: "80px"
	},
	{
		name: 'MONTO PDP',
		selector: row => row.montoPDP,
		cell: row => <AdicionaComas value={convertirNuloEnVacio(row.montoPDP)} />,
		width: "130px"
	},
	{
		name: <div>INT TOTAL</div>, // hecho
		selector: row => row.intTotal,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intTotal)} /></div>,
		width: "80px"
	},
	{
		name: 'INT AGENTE',
		selector: row => row.intAgente,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intAgente)} /></div>,
	},
	{
		name: <div>INT CTC</div>,
		selector: row => row.intCTC,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCTC)} /></div>,
		width: "60px"
	},
	{
		name: <div>INT CD</div>,
		selector: row => row.intCD,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.intCD)} /></div>,
		width: "60px"
	},
	{
		name: <div># PAGOS</div>,
		selector: row => row.numPagos,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.numPagos)} /></div>,
		width: "100px"
	},
	{
		name: <div>S/. PAGOS</div>,
		selector: row => row.solesPagos,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.solesPagos)} /></div>,
		width: "100px"
	},
	{
		name: '%EFICIENCIA',
		selector: row => row.porcentajeEficiencia,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeEficiencia)}</div>
		// sortable: true,
	},
	{
		name: <div>TICKET D. CAPITAL</div>,
		selector: row => row.ticketCapital,
		cell: row => <div className='px-2'><AdicionaComas value={convertirNuloEnVacio(row.ticketCapital)} /></div>,
		width: "80px"
	},
	{
		name: <div>TICKET PAGO</div>,
		selector: row => row.ticketPago,
		cell: row => <div className='px-2'><AdicionaComas value={row.ticketPago} /></div>,
		// sortable: true,
	},
	{
		name: <div>%CALIDAD PDP</div>,
		selector: row => row.porcentajeCalidadPDP,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.porcentajeCalidadPDP)}</div>,
		width: "80px"
		// sortable: true,
	},
	{
		name: <div>%COB</div>,
		selector: row => row.cob,
		cell: row => <div className='px-2'>{convertirNuloEnVacio(row.cob)}</div>,
		width: "60px"
		// sortable: true,
	},
	{
		name: <div>Descargar</div>,
		selector: row => <div className='px-2'><DownloadExcel>{row}</DownloadExcel></div>,
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
import PercentageBar from "./PercentageBar";
import { ChildFriendly, Rowing } from '@mui/icons-material';
import manageErrorAndSessionUtils from '../../../../../utils/manageErrorAndSessionUtils';
import useFetchApi from '../../../../../hooks/useFetchApi';

import ExcelJS from 'exceljs';
// import { saveAs } from 'file-saver';


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

const CustomRowCD = ({row}) => {
	const valor = convertirNuloEnVacio(row.porcentajeCd);
	// console.log("valores para la fila cd % ", row);
 return (
	
	<>	

		{
			row.tipo == "suma" && valor
		}

		{
			row.tipo === "fila" && <PercentageBar percentage={valor} show={valor}/>
		}

		{
			row.tipo == "total" && valor
		}

	</>	
)};

const CustomRowPercentageEficiencia = ({row}) => {
	const valor = convertirNuloEnVacio(row.porcentajeEficiencia);
	return(
	<>
		{
			row.tipo == "suma" && valor
		}

		{
			row.tipo === "fila" &&  <PercentageBar percentage={valor} show={valor}/>
			
		}

		{
			row.tipo === "total" && valor
		}
	</>	
	
)};

const AdicionaComas = ({ value }) => {
    if (value === undefined || value === null) {
        return '';
    }

    // Convertir a número si es una cadena
    const numero = typeof value === 'number' ? value : parseFloat(value.replace(/,/g, ''));

    // Verificar si la conversión fue exitosa
	// no es un numero? (devuelve value si el valor que entra en el if no es un numero)
    if (isNaN(numero)) {
        return value;
    }

    return numero.toLocaleString('en-US');
};



/**
 * Los valores que se ingrean son numero enteros, 
 */
const TresColores = ({valor, totalDeValor}) => {
	return(
		<>
		{valor != 0 ?  

		( 
			<>
			{/* Pinta cuando es menor al 0.2 porciento */}
			{
				valor/totalDeValor < 0.2 && <div className='bg-red-300  w-full h-full px-2 flex items-center justify-end'>{ <AdicionaComas value={convertirNuloEnVacio(valor)} /> }</div>
			}
			{/* Pinta cuando el valor es >= 0.2% y <0.29% */}
			{
				(valor/totalDeValor >= 0.2 && valor/totalDeValor < 0.29) && <div className='bg-yellow-300  w-full h-full px-2 flex items-center justify-end'>{<AdicionaComas value={convertirNuloEnVacio(valor)} />}</div>
			}
			{/* Pinta cuando es >0.29% */}
			{
				valor/totalDeValor >= 0.29 && <div className='bg-green-200 w-full h-full px-2 flex items-center justify-end'>{<AdicionaComas value={convertirNuloEnVacio(valor)} />}</div>
			}
			</>	
		): (<div className='bg-red-200 w-full h-full px-2 flex items-center justify-end'>{valor}</div> )

		}
		</>
	)
}
/**
 * se deben ingresa un valor porcentual. ejem: 50% no 50
 */
const TresColoresPorcentaje = ({value}) => {

	// console.log("valores de %cd :",value );
	//quita signo porcentual. ejem: 50% a 50
	const valorNumerico = parseFloat(value);

	//convierte a franccion. ejem 50 = 0.5
	const porcentajeFormatoFraccion = valorNumerico/100
	return(
		<>
		{porcentajeFormatoFraccion != 0 ?  

		( 
			<>
			{/* Pinta cuando es menor al 0.2 porciento */}
			{
				porcentajeFormatoFraccion < 0.2 && <div className='bg-red-300  w-full h-full px-2 flex items-center justify-end'>{ <AdicionaComas value={convertirNuloEnVacio(value)} /> }</div>
			}
			{/* Pinta cuando el valor es >= 0.2% y <0.29% */}
			{
				(porcentajeFormatoFraccion>= 0.2 && porcentajeFormatoFraccion < 0.29) && <div className='bg-yellow-300  w-full h-full px-2 flex items-center justify-end'>{<AdicionaComas value={convertirNuloEnVacio(value)} />}</div>
			}
			{/* Pinta cuando es >0.29% */}
			{
				porcentajeFormatoFraccion >= 0.29 && <div className='bg-green-200 w-full h-full px-2 flex items-center justify-end'>{<AdicionaComas value={convertirNuloEnVacio(value)} />}</div>
			}
			</>	
		): (<div className='bg-red-200 w-full h-full px-2 flex items-center justify-end'>{value}</div> )

		}
		</>
	)
}

//Crear una funaion para
const TresColoresNumPagos = ({value}) => {

		return(
			<>
			{
				value.tipo == "fila"? 
					<TresColores valor={value.numPagos} totalDeValor={value.totalNumPagos}/>
				: 	<AdicionaComas value={convertirNuloEnVacio(value.numPagos)} />

			}
			</>
		)
}

const TresColoresSolesPagos = ({value}) => {
		return(
			<>
			{
				value.tipo == "fila"? 
					<TresColores valor={value.solesPagos} totalDeValor={value.totalSolesPagos}/>
				: 	<AdicionaComas value={convertirNuloEnVacio(value.solesPagos)} />
			
			}			
			</>
		)
}

// El llenado es exclusicamente con una barra verde
const PorcentajeIntTotal = ({value}) => {
	const porcentaje = (value.intTotal/value.totalIntTotal)*100;
	// console.log("porcentaje", porcentaje, "valores de fila: ",value);
	
	return(
		<>
		{
			value.tipo == "fila"? 
				<PercentageBar percentage={porcentaje} show={value.intTotal}/>
			: 	
				<AdicionaComas value={convertirNuloEnVacio(value.intTotal)}/> 
		}			
		</>
	)
}

const PorcentajeCuentas = ({children}) => {
	return(
		<>
			{
				children.tipo == "fila"? <PercentageBar percentage={children.porcentajeCuentas} show={children.porcentajeCuentas}/>: <div className='w-full h-full px-2 flex items-center justify-end'>{convertirNuloEnVacio(children.porcentajeCuentas)}</div>
			}
		</>
	)
}

const PorcentajeCapital = ({children}) => {
	return(
		<>
			{
				children.tipo == "fila"? <PercentageBar percentage={children.porcentajeCapital} show={children.porcentajeCapital}/>: <div className='w-full h-full px-2 flex items-center justify-end'>{convertirNuloEnVacio(children.porcentajeCuentas)}</div>
			}
		</>
	)
}

// Imprime valores de la columna capital, este codigo no trabaja directamente con porcentaje. 
const PorcentajeCapitalDos = ({children}) => {
	const porcentaje = (children.capitalMN/children.totalCapitalMN)*100;
	const valor = <AdicionaComas value={convertirNuloEnVacio(children.capitalMN)}/>
	// console.log("porcentaje", porcentaje, "valores de fila: ",value);
	
	return(
		<>
		{
			children.tipo == "fila"? 
				<PercentageBar percentage={porcentaje} show={valor}/>
			: 	
			<div className='w-full h-full px-2 flex items-center justify-end'><AdicionaComas value={convertirNuloEnVacio(children.capitalMN)}/> </div>
		}			
		</>
	)
}

const PorcentajeCuentasDos = ({children}) => {
	const porcentaje = (children.cuentas/children.totalCuentas)*100;
	const valor = <AdicionaComas value={convertirNuloEnVacio(children.cuentas)}/>
	// console.log("este es el valor convertido de cuentas: ", valor);
	// console.log("porcentaje", porcentaje, "valores de fila: ",value);
	
	return(
		<>
		{
			children.tipo == "fila"? 
			<PercentageBar percentage={porcentaje} show={valor}/>
			: 	
			<div className='w-full h-full px-2 flex items-center justify-end'><AdicionaComas value={convertirNuloEnVacio(children.cuentas)}/> </div>
		}			
		</>
	)
}


// Pintar %cd, int total, y %eficiencia
const TresColoresPorcentajeCD = ({value}) => {


	return(
		<>
		{
			value.tipo == "fila"? 
				<TresColoresPorcentaje value={value.porcentajeCd}/>
			: 	convertirNuloEnVacio(value.porcentajeCd)

		}
		</>
	)
}

const TresColoresporcentajeEficiencia= ({value}) => {


	return(
		<>
		{
			value.tipo == "fila"? 
				<TresColoresPorcentaje value={value.porcentajeEficiencia}/>
			: 	convertirNuloEnVacio(value.porcentajeEficiencia)

		}
		</>
	)
}

// Imprime valores de la columna capital, este codigo no trabaja directamente con porcentaje. 
const TresColoresPorcentajeIntTotal = ({children}) => {
	const porcentaje = (children.intTotal/children.totalIntTotal)*100;
	const valor = <AdicionaComas value={convertirNuloEnVacio(children.intTotal)}/>
	// console.log("porcentaje", porcentaje, "valores de fila: ",value);
	
	return(
		<>
		{
			children.tipo == "fila"? 
				<PercentageBar percentage={porcentaje} show={valor}/>
			: 	
			<div className='w-full h-full px-2 flex items-center justify-end'><AdicionaComas value={convertirNuloEnVacio(children.intTotal)}/> </div>
		}			
		</>
	)
}


const PorcentajeNumPagos = ({value}) => {
const porcentaje = (value.numPagos/value.totalNumPagos)*100;
const valorParaMostrar = <AdicionaComas value={value.numPagos}/>
	return(
		<>
		{
			value.tipo == "fila"? 
				// <TresColores valor={value.numPagos} totalDeValor={value.totalNumPagos}/>
				<PercentageBar percentage={porcentaje} show={valorParaMostrar}/>
			: 	
			<div className='w-full h-full px-2 flex items-center justify-end'><AdicionaComas value={convertirNuloEnVacio(value.numPagos)} /></div>

		}
		</>
	)
}

const PorcentajeSolesPagos = ({value}) => {
	const porcentaje = (value.solesPagos/value.totalSolesPagos)*100;
	const valorParaMostrar = <AdicionaComas value={value.solesPagos}/>
		return(
			<>
			{
				value.tipo == "fila"? 
					// <TresColores valor={value.numPagos} totalDeValor={value.totalNumPagos}/>
					<PercentageBar percentage={porcentaje} show={valorParaMostrar}/>
				: 	
				<div className='w-full h-full px-2 flex items-center justify-end'><AdicionaComas value={convertirNuloEnVacio(value.solesPagos)} /></div>
	
			}
			</>
		)
}
	

const DownloadExcel = ({children}) => {

	const {loading, error, data, postMethod} = useFetchApi();
	const dispatch = useDispatch();
	

	const getData = async () => {

		// montamos el body para hacer la peticion de los datos y la informacion que ira en cada excel exportado ()
		const {excelDownloadDetails, bodyToDownloadExcel} = GetBodyForExcel(children);
		const {data, error} = await postMethod(bodyToDownloadExcel,`/admin/tablon/datos-descarga?entidad=${children.payloadUrl.selectEntidad}&mes=${formatDate(children?.payloadUrl?.selectFecha)}&carteras=${children.codCartera}`); 

		manageErrorAndSessionUtils(error,dispatch);
		if(!error){
			console.log("existen errores: ", error)
			DescargarExcelConEstilos(data?.data, excelDownloadDetails);
		}

	};


	// return <button onClick={()=>{GetBodyForExcel(children)}}   className="bg-green-400 px-6 rounded py-1 text-white hover:bg-green-500 font-ralewayRegular">Excel</button>
	if(children?.tipo == "suma" || children?.tipo == "fila"){
		
		// return <button onClick={()=>{GetBodyForExcel(children,dispatch)}}   className="bg-green-400 px-6 rounded py-1 text-white hover:bg-green-500 font-ralewayRegular active:bg-green-900 ">Excel</button>
		return <button onClick={getData}   className="bg-green-400 px-1 min-w-20 rounded py-1 text-white hover:bg-green-500 font-ralewayRegular active:bg-green-900 "> {loading? "Descargando": "Excel"}</button>
	}else{
		
		// return <button onClick={()=>{GetBodyForExcel(children,dispatch)}}  disabled  className="bg-gray-400 px-6 rounded py-1 text-white cursor-not-allowed  font-ralewayRegular active:bg-green-900 ">Excel</button>
		return <button onClick={getData}  disabled  className="bg-gray-400 px-1 min-w-20 rounded py-1 text-white cursor-not-allowed  font-ralewayRegular active:bg-green-900 ">{loading? "Descargando": "Excel"}</button>
	}
	
}

const GetBodyForExcel = (children) => {

	// Construimos el cuerpo para la descarga
	let bodyToDownloadExcel = {
		"producto": [], 
		"rangocampaña": [],    
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
	let excelDownloadDetails = {
		Fecha:"-",
		Entidad:"-",
        Cartera:"-",
        CodigoDeCartera:"-",
        Filtro:"-",
        Fila:"-",
	}

	// const fecha = new Date(children?.payloadUrl?.selectFecha);
	// const formattedFecha = fecha.toLocaleDateString('es-ES');
	// excelDownloadDetails.Fecha = formattedFecha;
	// console.log("valor de fecha: ",formattedFecha );

	
	// excelDownloadDetails.Fecha = formatDatechildren?.payloadUrl?.selectFecha?.format('MM-YYYY');
	excelDownloadDetails.Fecha = formatDate(children?.payloadUrl?.selectFecha);
	excelDownloadDetails.Entidad = children?.payloadUrl?.selectEntidad;
	excelDownloadDetails.Cartera = children?.desCartera;

	excelDownloadDetails.CodigoDeCartera = children?.codCartera;
	
	/**
	 * al iniciar todo el proceso, a cada fila se le dio el objeto "payloadBdoy", este 
	 * objeto contiene datos que se usaron para realizar la peticion de registros de todas las
	 * tablas. Estos mismos valores los necesitamos 
	 */
	console.log("Children", children);
	bodyToDownloadExcel.producto = structuredClone(children?.payloadBody?.producto);
	bodyToDownloadExcel.rangocampaña = structuredClone(children?.payloadBody?.rangocampaña);
	bodyToDownloadExcel.macroRegiones = structuredClone(children?.payloadBody?.macroRegiones);
	bodyToDownloadExcel.añoCastigo = structuredClone(children.payloadBody?.añoCastigo);
	bodyToDownloadExcel.moneda = structuredClone(children?.payloadBody?.moneda);
	bodyToDownloadExcel.estadoCuenta = structuredClone(children?.payloadBody?.estadoCuenta);
	bodyToDownloadExcel.mesCastigo = structuredClone(children?.payloadBody?.mesCastigo);
	bodyToDownloadExcel.prioridad = structuredClone(children?.payloadBody?.prioridad);
	bodyToDownloadExcel.rangoEdad = structuredClone(children?.payloadBody?.rangoEdad);
	bodyToDownloadExcel.tipo = structuredClone(children?.payloadBody?.tipo);



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

		excelDownloadDetails.Filtro = "Estado General de Cartera";
	}else if(children?.payloadBody?.tipo =="Prioridad"){
		excelDownloadDetails.Filtro = "Cartera Según Prioridad";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			
			// llenamos datos de filtros especificos
			bodyToDownloadExcel.prioridad = structuredClone(children.codTipo);
			excelDownloadDetails.Fila = structuredClone(children.codTipo);
			
		}

	}else if(children?.payloadBody?.tipo =="Maduracion"){
		excelDownloadDetails.Filtro = "Cartera Por Rango de Maduración";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			// llenamos datos de filtros especificos
			bodyToDownloadExcel.maduracion = structuredClone(children.codTipo);
			excelDownloadDetails.Fila = structuredClone(children.codTipo);
		}
	}else if(children?.payloadBody?.tipo =="AÑO_CASTIGO"){
		excelDownloadDetails.Filtro = "Cartera por Año y Mes de Castigo";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){

			// llenamos datos de filtros especificos
			const fechaYmes = children.codTipo.split(" - ");
			bodyToDownloadExcel.añoCastigo = structuredClone(fechaYmes[0]);
			bodyToDownloadExcel.mesCastigo = structuredClone(fechaYmes[1]);
			excelDownloadDetails.Fila = structuredClone(children.codTipo);
		}
	}else if(children?.payloadBody?.tipo =="RangoCampaña"){
		excelDownloadDetails.Filtro = "Cartera por Rango De Campaña";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			// llenamos datos de filtros especificos
			bodyToDownloadExcel.rangocampaña = []
			bodyToDownloadExcel.rangocampaña[0] = structuredClone(children.codTipo);
			excelDownloadDetails.Fila = structuredClone(children.codTipo); 
		}
	}else if(children?.payloadBody?.tipo =="CodProducto"){
		excelDownloadDetails.Filtro = "Cartera por Tipo de Producto";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			// llenamos datos de filtros especificos
			bodyToDownloadExcel.producto = []
			bodyToDownloadExcel.producto[0] = structuredClone(children.codTipo);
			excelDownloadDetails.Fila = children.codTipo;
		}
	}else if(children?.payloadBody?.tipo =="MacroRegiones"){
		excelDownloadDetails.Filtro = "Cartera por Zona";
		if(children.tipo == "suma"){
			// bodyToDownloadExcel.macroRegiones = [];
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			// llenamos datos de filtros especificos
			// Tomar en cuenta que el backend esta enviado archivos "sin info" que es un valor que no existe para hacer la busqueda.
			// probablemente esto genere errores en la consulta
			// bodyToDownloadExcel.macroRegiones[0] = structuredClone(children.codTipo);
			console.log("antes de insertar a la variable", bodyToDownloadExcel.macroRegiones);
			bodyToDownloadExcel.macroRegiones = []
			bodyToDownloadExcel.macroRegiones[0] = structuredClone(children.codTipo);
			console.log("despues de insertar a la variable", bodyToDownloadExcel.macroRegiones);
			excelDownloadDetails.Fila = children.codTipo;
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

	// let {data, error} = await testFetch.post(bodyToDownloadExcel,`/admin/tablon/datos-descarga?entidad=${children.payloadUrl.selectEntidad}&mes=${formatDate(children?.payloadUrl?.selectFecha)}&carteras=${children.codCartera}`); 
	
	// manageErrorAndSessionUtils(error,dispatch);
	// DescargarExcelUnaSolaHoja(data?.data, downloadData);
	// return null;
	return {excelDownloadDetails, bodyToDownloadExcel}
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


const DescargarExcelConEstilos = async (ReactExcelData, downloadData) => {
    // Crear un nuevo libro de trabajo
    const workbook = new ExcelJS.Workbook();

    // Agregar una hoja al libro
    const worksheet = workbook.addWorksheet('Hoja 1');

    // Definir columnas con encabezados y anchos
    worksheet.columns = [
        { header: 'Primera columna', key: 'primeraColumna', width: 30 },
        { header: 'Segunda columna', key: 'segundaColumna', width: 30 },
        { header: 'Tercera columna', key: 'terceraColumna', width: 30 },
        { header: 'Cuarta columna',  key: 'cuartaColumna',  width: 30 },
        { header: 'Quinta columna',  key: 'quintaColumna',  width: 30 },
        { header: 'Sexta columna',   key: 'sextaColumna',   width: 30 },
    ];

    // Agregar información de filtros usados
    worksheet.addRow([]);
	worksheet.addRow(['Filtros generales usados para la descarga']);
	worksheet.addRow(['Fecha:', downloadData.Fecha]);
    worksheet.addRow(['Entidad:', downloadData.Entidad]);
    worksheet.addRow(['Cartera:', downloadData.Cartera]);
    worksheet.addRow(['Código de Cartera:', downloadData.CodigoDeCartera]);
    worksheet.addRow(['Filtro:', downloadData.Filtro]);
    worksheet.addRow(['Fila:', downloadData.Fila]);

	const titulosPrimerGrupoCeldas = ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'];
	titulosPrimerGrupoCeldas.forEach((direccion) => {
		const celda = worksheet.getCell(direccion);
		celda.alignment = { horizontal: 'left', vertical: 'middle', indent: 1 };
	});

	const datosPrimerGrupoCeldas = ['B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9'];
	datosPrimerGrupoCeldas.forEach((direccion) => {
		const celda = worksheet.getCell(direccion);
		celda.alignment = { horizontal: 'left', vertical: 'middle', indent: 1 };
	});

	const terceraFila =  worksheet.getRow(3);
	terceraFila.height = 30;
	terceraFila.eachCell((cell)=>{
		cell.font = { bold: true, color: { argb: 'FF215967' } };
		cell.alignment = {vertical: 'middle' };
	})

    // Agregar una fila vacía para separar filtros de la tabla de datos
    worksheet.addRow([]);


    // Agregar encabezados de la tabla de datos
    const encabezados = [
        'Tipo de documento',
        'Número de documento',
        'Número de cuenta',
        'Capital',
        'Rango de Campaña',
        'Campaña',
    ];
    const encabezadoFila = worksheet.addRow(encabezados);

    // Aplicar estilos a los encabezados
    encabezadoFila.eachCell((cell) => {
		cell.border = {
			top: { style: 'thin' },
			left: { style: 'thin' },
			bottom: { style: 'thin' },
			right: { style: 'thin' },
		};
        cell.font = { bold: true, color: { argb: 'FF215967' } };
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFF2F2F2' }, // Azul oscuro
        };
		
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
    });

	// Establecer altura de la fila del encabezado
	encabezadoFila.height = 30; // Altura en puntos

    // Agregar datos de la tabla
    ReactExcelData.forEach((row) => {
        const nuevaFila = worksheet.addRow([
            row["Tipo de documento"] || '-',
            row["Número de documento"] || '-',
            row["Número de cuenta"] || '-',
            row["Capital"] || '-',
            row["Rango de Campaña"] || '-',
            row["Campaña"] || '-',
        ]);

		// Establecer la altura de la fila de datos
		nuevaFila.height = 30; // Altura en puntos
		nuevaFila.eachCell((cell) => {

			cell.border = {
				top: 	{ style: 'thin',  color: { argb: 'FFA6A6A6' }},
				left: 	{ style: 'thin',  color: { argb: 'FFA6A6A6' } },
				bottom: { style: 'thin',  color: { argb: 'FFA6A6A6' } },
				right: 	{ style: 'thin',  color: { argb: 'FFA6A6A6' } },
			};

			cell.font = { bold: false, color: { argb: 'FF595959' } };
			cell.alignment = { horizontal: 'center', vertical: 'middle' };
			// cell.alignment = { indent: 50 }; 
		});

		// Aplicar sangría a la columna 'Entidad' (columna 2) y 'Cartera' (columna 3)
		const celda = nuevaFila.getCell(4) // Sangría de 2 espacios
		celda.alignment = {  horizontal: 'right', vertical: 'middle', indent: 1 };


    });

    // Aplicar bordes y alineación a las filas de datos
    // worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
    //     if (rowNumber > 11) { // Asumiendo que las primeras 8 filas son filtros y encabezados
    //         row.eachCell((cell) => {
    //             cell.border = {
    //                 top: { style: 'thin' },
    //                 left: { style: 'thin' },
    //                 bottom: { style: 'thin' },
    //                 right: { style: 'thin' },
    //             };

				
	// 			cell.fill = {
	// 				type: 'pattern',
	// 				pattern: 'solid',
	// 				fgColor: { argb: 'FFF2F2F2' }, // Azul oscuro
	// 			};

	// 			cell.font = { bold: false, color: { argb: 'FF595959' } };
	// 			cell.alignment = { horizontal: 'center', vertical: 'middle' };
	// 			cell.alignment = { indent: 50 }; 
    //         });
    //     }
    // });

    // Combinar celdas para el título general
    worksheet.mergeCells('A1:F1');
	
	// Le damos una altura al titulo
	const titulo =  worksheet.getRow(1);
	titulo.height = 30;

    const formatoDetitulo = worksheet.getCell('A1');
    formatoDetitulo.value = 'Detalles de cuentas';
    formatoDetitulo.font = { size: 12, bold: true, color: { argb: 'FF901616' }  };
    formatoDetitulo.alignment = { horizontal: 'center', vertical: 'middle' };

    // Formatear la columna de Capital como moneda
    worksheet.getColumn('D').numFmt = '"S/."#,##0.00';

    // Generar el archivo Excel
    const buffer = await workbook.xlsx.writeBuffer();

    // Descargar el archivo
    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Detalles de cuentas.xlsx');
};


// Convierte cadena binaria a un ArrayBuffer
function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

// const convertirNuloEnVacio = (value) => {
//     return value === null ? "Vacío" : value;
// };

// si el valor que ingresa es undefined o es null se convertirá en la palabra "Vacio"
const convertirNuloEnVacio = (value) => {
    return value?? "Vacío";
};


// Convierte un strin a un objeto fecha
const formatDate = (selectFechaStr) => {
	// Verificar si se proporcionó una cadena de fecha
	if (!selectFechaStr) {
		// Manejar la ausencia de selectFecha según corresponda
		return null;
	}

	const fecha = new Date(selectFechaStr);

	// Verificar si la fecha es válida
	if (isNaN(fecha.getTime())) {
		// Manejar la fecha inválida según corresponda
		return null;
	}

	// Extraer mes y año
	const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // getMonth() devuelve 0-11
	const año = fecha.getFullYear();

	// Formatear la fecha como "MM-YYYY"
	return `${mes}-${año}`;
};


