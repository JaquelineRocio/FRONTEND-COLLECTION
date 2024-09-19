import { Autocomplete, CircularProgress, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { styled } from "@mui/material/styles";


const CustomPaper = styled(Paper)({
    minWidth: "fit-content", // Asegura que el ancho se ajuste al contenido
    maxWidth: "100%",        // Evita que exceda el contenedor
  });

const SelectMultipleCustomed = ({
    label = "Ingrese su texto aquí",
    valor = [], 
    setValor = () => {},
    loading = false,
    options = [],
    requerido = false,
    desactivado = false,
}) => {
    const isAllSelected = options.length > 0 && valor.length === options.length;
    const optionsWithSelectAll = [{ value: 'select-all', label: 'Seleccionar todo' }, ...options];
    const [valuesSelected, setValuesSelected] = useState([]);

    const handleChange = (event, newValue) => {
        const isSelectAll = newValue.some(option => option.value === 'select-all');

        if (isSelectAll) {
            if (valor.length === options.length) {
                // Deseleccionar todos
                setValuesSelected([]);
                setValor([]);
            } else {
                // Seleccionar todos
                setValuesSelected(options);
                const claves = options.map(objeto => objeto.value);
                setValor(claves);
            }
        } else {
            // Actualizar normalmente
            const filteredValue = newValue.filter(option => option.value !== 'select-all');
            const claves = filteredValue.map(objeto => objeto.value);
            setValuesSelected(filteredValue);
            setValor(claves);
        }
    };

    const handleClear = () => {
        setValor([]);
    };

    const handleDisabled = () => {
        return desactivado || loading;
    };
    <div className="hover:bg-red-300"></div>
    useEffect(()=>{
        // const valueSelected = option


        // const paperElement = document.querySelector('.MuiPickersPopper-paper');
        // if (paperElement) {
        //   console.log('aria-hidden:', paperElement.getAttribute('aria-hidden'));
        //   console.log('Focused element:', document.activeElement);
        // }
        
        const valuesSelected = options.filter(option => valor.includes(option.value));
        
        setValuesSelected(valuesSelected);
        // console.log("valores seleccionados:", valuesSelected);
    },[valor])
    return (
        <FormControl fullWidth>

            <Autocomplete
                multiple
                options={optionsWithSelectAll}
                getOptionLabel={(option) => option.label}
                value={valuesSelected}
                disabled={desactivado || loading}
                onChange={handleChange}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                // limitTags={1} // Limita el número de chips visibles
                disableCloseOnSelect 
                // campo donde le usuari puede escribir
                PaperComponent={CustomPaper} 
                renderInput={(params) => 
                    <TextField {...params} 
                        style={{}}
                        label={
                            loading?
                            (
                                <div style={{  alignItems: 'center'}}>
                                <CircularProgress size={24} sx={{ marginRight: 2 }} />
                                
                                </div>
                            ) : (
                                
                                // <div className="bg-pink-400  mr-5 overflow-hidden">
                                // {label}
                                // </div>
                                label
                            )
                        } 
                        variant="outlined" 
                        required={loading?(null):(requerido)}
                        InputProps={{
                            ...params.InputProps,
                            style: {
                              height: "56px", // Altura fija para el campo de entrada
                              overflow: "hidden",
                            //   background: "yellow"
                            },
                        }}
                        sx={{
                            "& .MuiAutocomplete-inputRoot": {
                              height: "56px", // Altura fija
                              display: "flex",
                              flexWrap: "nowrap", // Evita que las etiquetas se envuelvan
                            //   background: "red",
                            },
                            "& .MuiInputBase-input": {
                              paddingTop: 0,
                              paddingBottom: 0,
                              width: "100%",
                            //   background: "blue",
                              overflow: "hidden",

                            },
                        }}
                    />
                    
                }

                renderOption={(props, option) => { 
                    
                    return (
                    <li {...props} key={option.value}>
                                  {option.value === 'select-all' 
                ? (isAllSelected ? "Limpiar seleccion" : "Seleccionar todo") 
                : option.label}
                    </li>
                    )
                }    
                }




                renderTags={(tagValue, getTagProps) => {
                    // Concatenar las etiquetas seleccionadas con comas
                    // console.log("contenido de tag value:", tagValue);
                    // console.log("contenido de tag getTagProps:", getTagProps);
                    const selectedLabels = tagValue.map((option) => option.label).join(", ");
          
                    return (
                      <span
                        // key={tagValue.value}
                        // {...getTagProps({ index: 0 })}
                        style={{
                          display: "block",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "100%", // Asegura que el span ocupe todo el ancho disponible
                        //   background: "pink",
                        }}
                      >
                        {selectedLabels}
                      </span>
                    );
                  }}





                // renderOption={(props, option, { selected }) => {
                // const isSelectAll = option.id === 'select-all';
                // const isIndeterminate = valor.length > 0 && valor.length < options.length;

                // return (
                //     <li {...props} key={option.id}>
                //         <Checkbox
                //             checked={isSelectAll ? valor.length === options.length : selected}
                //             indeterminate={isSelectAll ? isIndeterminate : undefined}
                //         />
                //         {option.label}
                //     </li>
                //     );
                // }}
            >

            </Autocomplete>
            <FormHelperText className={`${!requerido ? "hidden" : ''}`}>Requerido</FormHelperText>
        </FormControl>
    );
}

export default SelectMultipleCustomed;
