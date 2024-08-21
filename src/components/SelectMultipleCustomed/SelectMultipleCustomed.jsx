import { IconButton } from "@material-tailwind/react";
import { CircularProgress, FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const SelectMultipleCustomed = ({
    label = "Ingrese su texto aquí",
    valor = [], 
    setValor= '',
    loading = false,
    options = [],
    requerido = false,
}) =>{

    console.log("Entrada de valores a select multiple", options);
    // const [value, setValue] = useState(valor);

    // const [selectLoading, setSelectLoading] = useState(false);
    const handleChange = (date) => {
        // console.log( "nuevo valor seleccionado", date);
        // setValue(date.target.value);
        setValor(date.target.value);
    }

    const handleClear = () => {
        setValor([]);
    }

    // useEffect(()=>{
    //     // if(selectLoading){
    //         console.log("el valor es verdadero");
    //         // setValue('');
    //         setValor('');
    //     // }

    // },[loading])
    return(
    <>
        <FormControl  fullWidth>
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
                multiple
                
                // input={
                //     <OutlinedInput
                //         className=""
                //         id="select-multiple-chip"
                //         label={label}
                //         endAdornment={
                //             <InputAdornment position="end" className="" >
                //                 {valor != ""? (
                //                     <IoMdCloseCircle onClick={handleClear} className="hover:text-blue-gray-900 hover:cursor-pointer text-xl"  />
                //                 ): ""}
                                
                //                 {/* <h3 onClick={handleClear} className="bg-red-300" >x</h3> */}
                //                 {/* <IconButton
                //                     aria-label="clear all"
                //                     onClick={handleClear}
                //                     edge="end"
                //                     size={"9px"}
                //                 >
                //                     <h3 onClick={handleClear} >x</h3>
                //                 </IconButton> */}
                //             </InputAdornment>
                            
                //         }
                //         style={{ paddingRight: '30px' }} // Ajusta esto para asegurar que el icono no cubra el texto
                        
                //         />
                // }
                
            


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
                    
                    {options?.map((item) => (
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
            <FormHelperText className={`${!requerido?"hidden": ''}`}>Requerido</FormHelperText>
        </FormControl>

    </>
    )
}

export default SelectMultipleCustomed;

