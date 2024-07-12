
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';



export default function ReactTable() {

    // Example use filter
    const arreglo = [1,2,3,4,5,6,7,8.9];
    const resultado = arreglo.filter(funcionFiltrador);
    function funcionFiltrador(number){
        return number%2;
    }

console.log(resultado);

const columns = [
	{
		name: 'Tddditle',
		selector: row => row.title,
        sortable: true
	},
	{
		name: 'Yessar',
		selector: row => row.year,
        sortable: true
	},
];



const data = [
    {
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
	},
	{
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
	},
	{
		id: 3,
		title: 'Peru',
		year: '1984',
	},
    {
		id: 4,
		title: 'Lima',
		year: '1984',
	},
    {
		id: 5,
		title: 'Lima',
		year: '1984',
	},
    {
		id: 6,
		title: 'Lima',
		year: '1984',
	},
    {
		id: 7,
		title: 'Lima',
		year: '1984',
	},
    {
		id: 8,
		title: 'Lima',
		year: '1984',
	},
    {
		id: 9,
		title: 'Lima',
		year: '1984',
	},
]

const [records, setRecords] = useState([]);
const [loading, setLoading] = useState(true);

const handleChange = (e) => {

    const filteredRecords = data.filter( record => {
        return record.title.toLowerCase().includes(e.target.value.toLowerCase())
    });

    setRecords(filteredRecords);
}

// const cargandoss = () => {
//     return(
//         <>
//             <h1>Cargando</h1>
//             <h3>Por favor espere..</h3>
//         </>
//     )
// }

function Cargando (){
    return <div>
            <h1>Cargando</h1>
            <h3>Por favor espere..</h3>
        </div>
    
}

useEffect(()=>{
    const timeout = setTimeout(()=>{
        setRecords(data);
        setLoading(false);
    },2000);
    // Garantizar buen funcionamiento de react
    return () => clearTimeout(timeout);
},[]);

	return (
        <>
        <input
            onChange={handleChange}
            type='text'
        >
        </input>

		<DataTable
            title="Datos de usuario"
			columns={columns}
			data={records}
            selectableRows  //cajas para seleccionar
            onSelectedRowsChange={ data => console.log(data)}

            pagination
            paginationPerPage={8}

            fixedHeader

            progressPending={loading}
            // progressComponent={<h1>Cargando datos.. por favor espere</h1>}
            progressComponent={<Cargando />}
		/>
        </>
	);
}