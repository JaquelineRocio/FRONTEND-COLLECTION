

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

	console.log("valores de %cd :",value );
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
	console.log("este es el valor convertido de cuentas: ", valor);
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
	



const GetData = async (children, dispatch) => {
	// const dispatch = useDispatch();
	console.log("datos por fila:", children);

	// Construimos el payload
	let payload = {
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
	


	payload.producto = children.payloadBody.producto;
	payload.rangocampaña = children.payloadBody.rangocampaña;
	payload.macroRegiones = children.payloadBody.macroRegiones;
	payload.añoCastigo = children.payloadBody.añoCastigo;
	payload.moneda = children.payloadBody.moneda;
	payload.estadoCuenta = children.payloadBody.estadoCuenta;
	payload.mesCastigo = children.payloadBody.mesCastigo;
	payload.prioridad = children.payloadBody.prioridad;
	payload.rangoEdad = children.payloadBody.rangoEdad;
	payload.tipo = children.payloadBody.tipo;



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
		// llenamos datos de filtros especificos
		payload.producto = children.payloadBody.producto;
		payload.rangocampaña = children.payloadBody.rangocampaña;
		payload.macroRegiones = children.payloadBody.macroRegiones;
		payload.añoCastigo = children.payloadBody.añoCastigo;
		payload.moneda = children.payloadBody.moneda;
		payload.estadoCuenta = children.payloadBody.estadoCuenta;
		payload.mesCastigo = children.payloadBody.mesCastigo;
		payload.prioridad = children.payloadBody.prioridad;
		payload.rangoEdad = children.payloadBody.rangoEdad;
		payload.tipo = children.payloadBody.tipo;

		downloadData.Filtro = "Estado General de Cartera";
	}else if(children?.payloadBody?.tipo =="Prioridad"){
		downloadData.Filtro = "Cartera Según Prioridad";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			
			// llenamos datos de filtros especificos
			payload.producto = children.payloadBody.producto;
			payload.rangocampaña = children.payloadBody.rangocampaña;
			payload.macroRegiones = children.payloadBody.macroRegiones;
			payload.añoCastigo = children.payloadBody.añoCastigo;
			payload.moneda = children.payloadBody.moneda;
			payload.estadoCuenta = children.payloadBody.estadoCuenta;
			payload.mesCastigo = children.payloadBody.mesCastigo;
			payload.prioridad = children.payloadBody.prioridad;
			payload.rangoEdad = children.payloadBody.rangoEdad;
			payload.tipo = children.payloadBody.tipo;

			// llenamos datos de filtros especificos
			payload.prioridad = children.codTipo;

			// "producto": [], 
			// "rangocampaña": [],    
			// "macroRegiones": [], 
			// "añoCastigo":  null,
			// "moneda": null,
			// "estadoCuenta": [],
			// "mesCastigo": null,
			// "prioridad": null,
			// "rangoEdad":[],
			// "tipo":null,
			// "maduracion": null ,



			downloadData.Fila = children.codTipo;
			

		}

	}else if(children?.payloadBody?.tipo =="Maduracion"){
		downloadData.Filtro = "Cartera Por Rango de Maduración";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			// llenamos datos de filtros especificos
			payload.producto = children.payloadBody.producto;
			payload.rangocampaña = children.payloadBody.rangocampaña;
			payload.macroRegiones = children.payloadBody.macroRegiones;
			payload.añoCastigo = children.payloadBody.añoCastigo;
			payload.moneda = children.payloadBody.moneda;
			payload.estadoCuenta = children.payloadBody.estadoCuenta;
			payload.mesCastigo = children.payloadBody.mesCastigo;
			payload.prioridad = children.payloadBody.prioridad;
			payload.rangoEdad = children.payloadBody.rangoEdad;
			payload.tipo = children.payloadBody.tipo;
			// llenamos datos de filtros especificos
			payload.maduracion = children.codTipo;
			downloadData.Fila = children.codTipo;
		}
	}else if(children?.payloadBody?.tipo =="AÑO_CASTIGO"){
		downloadData.Filtro = "Cartera por Año y Mes de Castigo";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			// llenamos datos de filtros especificos
			payload.producto = children.payloadBody.producto;
			payload.rangocampaña = children.payloadBody.rangocampaña;
			payload.macroRegiones = children.payloadBody.macroRegiones;
			payload.añoCastigo = children.payloadBody.añoCastigo;
			payload.moneda = children.payloadBody.moneda;
			payload.estadoCuenta = children.payloadBody.estadoCuenta;
			payload.mesCastigo = children.payloadBody.mesCastigo;
			payload.prioridad = children.payloadBody.prioridad;
			payload.rangoEdad = children.payloadBody.rangoEdad;
			payload.tipo = children.payloadBody.tipo;
			// llenamos datos de filtros especificos
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
			// llenamos datos de filtros especificos
			payload.producto = children.payloadBody.producto;
			payload.rangocampaña = children.payloadBody.rangocampaña;
			payload.macroRegiones = children.payloadBody.macroRegiones;
			payload.añoCastigo = children.payloadBody.añoCastigo;
			payload.moneda = children.payloadBody.moneda;
			payload.estadoCuenta = children.payloadBody.estadoCuenta;
			payload.mesCastigo = children.payloadBody.mesCastigo;
			payload.prioridad = children.payloadBody.prioridad;
			payload.rangoEdad = children.payloadBody.rangoEdad;
			payload.tipo = children.payloadBody.tipo;
			// llenamos datos de filtros especificos
			console.log("rango campaña fila");
			payload.rangocampaña[0] = children.codTipo;
			downloadData.Fila = children.codTipo; 
		}
	}else if(children?.payloadBody?.tipo =="CodProducto"){
		downloadData.Filtro = "Cartera por Tipo de Producto";
		console.log("entramos en - de producto")
		if(children.tipo == "suma"){
			console.log("entramos en suma de producto")
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			// llenamos datos de filtros especificos
			payload.producto = children.payloadBody.producto;
			payload.rangocampaña = children.payloadBody.rangocampaña;
			payload.macroRegiones = children.payloadBody.macroRegiones;
			payload.añoCastigo = children.payloadBody.añoCastigo;
			payload.moneda = children.payloadBody.moneda;
			payload.estadoCuenta = children.payloadBody.estadoCuenta;
			payload.mesCastigo = children.payloadBody.mesCastigo;
			payload.prioridad = children.payloadBody.prioridad;
			payload.rangoEdad = children.payloadBody.rangoEdad;
			payload.tipo = children.payloadBody.tipo;
			// llenamos datos de filtros especificos
			console.log("entramos en fila de producto")
			payload.producto[0] = children.codTipo;
			downloadData.Fila = children.codTipo;
		}
	}else if(children?.payloadBody?.tipo =="MacroRegiones"){
		downloadData.Filtro = "Cartera por Zona";
		if(children.tipo == "suma"){
			// Cuando el tipo es suma, e payload tiene que ser vacio, tal cual se muestra.
		}else if(children.tipo == "fila"){
			// llenamos datos de filtros especificos
			payload.producto = children.payloadBody.producto;
			payload.rangocampaña = children.payloadBody.rangocampaña;
			payload.macroRegiones = children.payloadBody.macroRegiones;
			payload.añoCastigo = children.payloadBody.añoCastigo;
			payload.moneda = children.payloadBody.moneda;
			payload.estadoCuenta = children.payloadBody.estadoCuenta;
			payload.mesCastigo = children.payloadBody.mesCastigo;
			payload.prioridad = children.payloadBody.prioridad;
			payload.rangoEdad = children.payloadBody.rangoEdad;
			payload.tipo = children.payloadBody.tipo;

			// llenamos datos de filtros especificos
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
	manageErrorAndSessionUtils(error,dispatch);
	DescargarExcelUnaSolaHoja(data?.data, downloadData);
	return null;
}

const DownloadExcel = ({children}) => {
	const dispatch = useDispatch();
	// return <button onClick={()=>{GetData(children)}}   className="bg-green-400 px-6 rounded py-1 text-white hover:bg-green-500 font-ralewayRegular">Excel</button>
	if(children?.tipo == "suma" || children?.tipo == "fila"){
		return <button onClick={()=>{GetData(children,dispatch)}}   className="bg-green-400 px-6 rounded py-1 text-white hover:bg-green-500 font-ralewayRegular active:bg-green-900 ">Excel</button>
	}else{
		return <button onClick={()=>{GetData(children,dispatch)}}  disabled  className="bg-gray-400 px-6 rounded py-1 text-white cursor-not-allowed  font-ralewayRegular active:bg-green-900 ">Excel</button>
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

// const convertirNuloEnVacio = (value) => {
//     return value === null ? "Vacío" : value;
// };

// si el valor que ingresa es undefined o es null se convertirá en la palabra "Vacio"
const convertirNuloEnVacio = (value) => {
    return value?? "Vacío";
};



