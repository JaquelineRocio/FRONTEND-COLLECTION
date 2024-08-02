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


    // const classes = useStyles();

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


      slotProps={{ textField: { size: 'small', } }}
      />
    </LocalizationProvider>

    </>
  );
}



