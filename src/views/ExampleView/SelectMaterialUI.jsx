import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Autocomplete, TextField  } from '@mui/material';

const SelectMaterialUI = () => {
  const [value, setValue] = useState('10');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const handleChangeAutocomplete = (event, newValue) => {
    setValorSeleccionado(newValue);
  };

  const [valorSeleccionado, setValorSeleccionado] = useState([]);

  return (

    <div className='m-20 gap-5'>


    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Opción</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Opción"
        onChange={handleChange}
      >
        <MenuItem value="1">Juan</MenuItem>
        <MenuItem value="10">Opción 122</MenuItem>
        <MenuItem value={20}>Opción 2</MenuItem>
        <MenuItem value={30}>Opción 3</MenuItem>
      </Select>
    </FormControl>

    <Autocomplete
        multiple
      options={opciones}
      getOptionLabel={(option) => option.label}
    //   getOptionLabel={(option) => option.value.toString()}
      value={valorSeleccionado}
      onChange={handleChangeAutocomplete}
      renderInput={(params) => <TextField {...params} label="Selecciona una opción" variant="outlined" />}
    />
    </div>
  );
};

export default SelectMaterialUI;





const opciones = [
  { label: 'Opción 1', value: 1 },
  { label: 'Opción 2', value: 2 },
  { label: 'Opción 3', value: 3 }
];


