import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";



const SelectCustomed = ({
    label = "Ingrese su texto aquí",
    valor = '', 
    setValor= '',
    loading = false,
    options = []
}) =>{

    // const [value, setValue] = useState(valor);
    // const [selectLoading, setSelectLoading] = useState(false);
    const handleChange = (date) => {
        console.log( "nuevo valor seleccionado", date);
        // setValue(date.target.value);
        setValor(date.target.value);
    }

    const handleClear = () => {
        setValor(''); // Establece el valor a vacío o null según lo que maneje mejor tu aplicación
    };

    // useEffect(()=>{
    //     // if(selectLoading){
    //         console.log("el valor es verdadero");
    //         // setValue('');
    //         setValor('');
    //     // }

    // },[loading])
    return(
    <>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"
            
            sx={{
                top: '-7px', // Ajusta esto según sea necesario para alinear correctamente la etiqueta
                backgroundColor: 'white', // Fondo para evitar que la línea corte el texto
                // paddingLeft: '5px', // Espacio a la izquierda del texto de la etiqueta
                // paddingRight: '5px' // Espacio a la derecha del texto de la etiqueta
                marginBottom: '20px'
            }}

            
            >
                {loading? <CircularProgress size={24} sx={{ marginRight: 2 }} /> : label}
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valor}
                label={label}
                onChange={handleChange}
                sx={{ 
                    // border: '5px solid red',
                    height: '40px', 
                    // size: 'small',
                    // borderRadius: '10px',
                    // fontSize: '0.875rem', // Tamaño de letra más pequeño
                    // fontFamily: ['Raleway-Bold'],  // Aplicando Raleway-Medium
                }}
                // slotProps={{ textField: { size: 'small', } }}
                disabled={loading}
                >
                    <MenuItem value="" onClick={handleClear}>
                        <em>Limpiar</em>
                    </MenuItem>
                    {/* <MenuItem key={0} value={"ninguno"}> ninguno </MenuItem> */}
                    {options.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}




                    {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
        </FormControl>
    </>
    )
}

export default SelectCustomed;


// ----------------------------------------------------------
// import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { useEffect, useState } from "react";



// const SelectCustomed = () =>{

//     const [value, setValue] = useState(10);

//     const handleChange = (date) => {
//         console.log( "nuevo valor seleccionado", date);
//         setValue(date.target.value);
//     }

//     const limpiar = () => {
//         setValue('');
//     }

//     return(
//     <>
//         <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label"
            
//             sx={{
//                 top: '-7px', // Ajusta esto según sea necesario para alinear correctamente la etiqueta
//                 backgroundColor: 'white', // Fondo para evitar que la línea corte el texto
//                 // paddingLeft: '5px', // Espacio a la izquierda del texto de la etiqueta
//                 // paddingRight: '5px' // Espacio a la derecha del texto de la etiqueta
//                 marginBottom: '20px'
//             }}

            
//             >
//                 {"adfasfasdfa"}
//             </InputLabel>
//             <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={value}
//                 label={"sdfsdf"}
//                 onChange={handleChange}
//                 sx={{ 
//                     // border: '5px solid red',
//                     height: '40px', 
//                     // size: 'small',
//                     // borderRadius: '10px',
//                     // fontSize: '0.875rem', // Tamaño de letra más pequeño
//                     fontFamily: ['Raleway-Bold'],  // Aplicando Raleway-Medium
//                 }}
//                 // slotProps={{ textField: { size: 'small', } }}

//                 >
//                     <MenuItem value="">
//                         <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//             </Select>
//         </FormControl>

//         <button onClick={limpiar}>
//             presione para limpiar
//         </button>
//     </>
//     )
// }

// export default SelectCustomed;