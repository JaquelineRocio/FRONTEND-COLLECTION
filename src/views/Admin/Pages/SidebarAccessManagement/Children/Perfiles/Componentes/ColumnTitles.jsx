export const titulosParaPerfiles = [
	{
		name: "N°",
		selector: row => row.id,
		// width: "50px",
	},
	{
		name: "Proveedor",
		selector: row => <h3>proveedor</h3>,
		// width: "50px",
	},
	{
		name: "Nombre del perfil",
		selector: row => row.name,
		// width: "50px",
	},
	{
		name: "Configuracion",
		selector: row => <h3>config</h3>,
		// width: "50px",
	},						
	{
		name: "Opciones",
		selector: row => <h3>...</h3>,
		// width: "50px",
	}	

];

export const titulosParaTablaCuentasDelCliente = [
{
	name: <div>ID</div>,
	selector: row => row.id,
	width: "50px"
},
{
	name: <div>Nombre del Cliente</div>,
	selector: row => row.nombreCliente,
	// width: "200px"
},
{
	name: <div>Tipo de Cuenta</div>,
	selector: row => row.tipoCuenta,
	// width: "150px"
},
{
	name: <div>Subtipo de Cuenta</div>,
	selector: row => row.subtipoCuenta,
	// width: "150px"
},
{
	name: <div>Número de Cuenta</div>,
	selector: row => row.numeroCuenta,
	// width: "150px"
},
{
	name: <div>Moneda</div>,
	selector: row => row.moneda,
	// width: "100px"
},
{
	name: <div>Saldo</div>,
	selector: row => row.saldo,
	// width: "120px"
},
{
	name: <div>Monto de Capital</div>,
	selector: row => row.montoCapital,
	// width: "150px"
},
{
	name: <div>Estado del Cliente</div>,
	selector: row => row.estadoCliente,
	// width: "150px"
},
{
	name: <div>Usuario Asignado</div>,
	selector: row => row.usuarioAsignado,
	// width: "150px"
},
{
	name: <div>Usuario Asignado</div>,
	selector: row => row.usuarioAsignado,
	// width: "150px"
},
{
	name: <div>Usuario Asignado</div>,
	selector: row => row.usuarioAsignado,
	// width: "150px"
},
// {
// 	name: <div>Usuario Asignado</div>,
// 	selector: row => row.usuarioAsignado,
// 	width: "150px"
// },
// {
// 	name: <div>Usuario Asignado</div>,
// 	selector: row => row.usuarioAsignado,
// 	width: "150px"
// },
];
  
export const registrosCuentasDelCliente = [
{
	id: 1,
	nombreCliente: "Carlos Martínez",
	tipoCuenta: "Ahorros",
	subtipoCuenta: "Ahorros Premium",
	numeroCuenta: "CTA-2023001",
	moneda: "USD",
	saldo: 5000.75,
	montoCapital: 15000.00,
	estadoCliente: "Activo",
	usuarioAsignado: "Ana Gómez"
},
{
	id: 2,
	nombreCliente: "Lucía Fernández",
	tipoCuenta: "Corriente",
	subtipoCuenta: "Corriente Básica",
	numeroCuenta: "CTA-2023002",
	moneda: "EUR",
	saldo: 3000.50,
	montoCapital: 10000.00,
	estadoCliente: "Inactivo",
	usuarioAsignado: "Pedro López"
},
{
	id: 3,
	nombreCliente: "Javier Rodríguez",
	tipoCuenta: "Ahorros",
	subtipoCuenta: "Ahorros Plus",
	numeroCuenta: "CTA-2023003",
	moneda: "GBP",
	saldo: 4500.00,
	montoCapital: 12000.00,
	estadoCliente: "Activo",
	usuarioAsignado: "María Pérez"
},
{
	id: 4,
	nombreCliente: "Sofía González",
	tipoCuenta: "Corriente",
	subtipoCuenta: "Corriente Premium",
	numeroCuenta: "CTA-2023004",
	moneda: "USD",
	saldo: 6000.25,
	montoCapital: 20000.00,
	estadoCliente: "Activo",
	usuarioAsignado: "Luis Hernández"
},
{
	id: 5,
	nombreCliente: "Miguel Sánchez",
	tipoCuenta: "Ahorros",
	subtipoCuenta: "Ahorros Básicos",
	numeroCuenta: "CTA-2023005",
	moneda: "EUR",
	saldo: 2500.00,
	montoCapital: 8000.00,
	estadoCliente: "Inactivo",
	usuarioAsignado: "Laura Ramírez"
},
{
	id: 6,
	nombreCliente: "Elena Díaz",
	tipoCuenta: "Corriente",
	subtipoCuenta: "Corriente Plus",
	numeroCuenta: "CTA-2023006",
	moneda: "JPY",
	saldo: 7000.80,
	montoCapital: 25000.00,
	estadoCliente: "Activo",
	usuarioAsignado: "Carlos Pérez"
},
{
	id: 7,
	nombreCliente: "Daniela Morales",
	tipoCuenta: "Ahorros",
	subtipoCuenta: "Ahorros VIP",
	numeroCuenta: "CTA-2023007",
	moneda: "CAD",
	saldo: 8200.60,
	montoCapital: 30000.00,
	estadoCliente: "Activo",
	usuarioAsignado: "Fernando Torres"
},
{
	id: 8,
	nombreCliente: "Andrés Jiménez",
	tipoCuenta: "Corriente",
	subtipoCuenta: "Corriente Estándar",
	numeroCuenta: "CTA-2023008",
	moneda: "USD",
	saldo: 1500.40,
	montoCapital: 5000.00,
	estadoCliente: "Inactivo",
	usuarioAsignado: "Patricia García"
},
{
	id: 9,
	nombreCliente: "Mariana Ruiz",
	tipoCuenta: "Ahorros",
	subtipoCuenta: "Ahorros Junior",
	numeroCuenta: "CTA-2023009",
	moneda: "EUR",
	saldo: 3800.00,
	montoCapital: 11000.00,
	estadoCliente: "Activo",
	usuarioAsignado: "Jorge Martínez"
},
{
	id: 10,
	nombreCliente: "Ricardo López",
	tipoCuenta: "Corriente",
	subtipoCuenta: "Corriente Empresarial",
	numeroCuenta: "CTA-2023010",
	moneda: "USD",
	saldo: 9200.75,
	montoCapital: 22000.00,
	estadoCliente: "Activo",
	usuarioAsignado: "Mónica Fernández"
},
];
