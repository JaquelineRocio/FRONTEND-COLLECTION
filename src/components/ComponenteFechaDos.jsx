import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
// import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
// import { blue } from '@mui/material/colors';

export default function ComponenteFechaDos({valor, setValor}) {


    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (newValue) => {
      setSelectedDate(newValue);
      // console.log(newValue?.format('MM-YYYY')); // Ajusta el formato según lo que necesites
      setValor(newValue);
    };

    const useStyles = styled({
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    });
    const classes = useStyles();

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
      views={['year', 'month']}
      // value={selectedDate}
      value={valor}
      onChange={handleDateChange}
      minDate={dayjs('2022-01-01')}
      maxDate={dayjs('2024-12-31')}
      className={classes.root}
      renderInput={(params) => (
        <TextField 
        {...params} 
        InputProps={{
            style: { 
                height: '40spx', // Asegura que el input se expanda completamente dentro de su contenedor
                padding: '5px 14px' // Ajusta el padding para aumentar visualmente la altura
            },
            // placeholder: 'placeholdersdsdsdfsssd',
        }}
      />

      )}
      slotProps={{ textField: { size: 'small', } }}
      />
    </LocalizationProvider>

    </>
  );
}



