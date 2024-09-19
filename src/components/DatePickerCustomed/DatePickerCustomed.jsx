import styled from '@emotion/styled';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import IconButton from '@mui/material/IconButton';
import './DatePickerCustomed.css';
import dayjs from 'dayjs';
import { FormControl, FormHelperText } from '@mui/material';


// const StyledDatePicker  = styled(DatePicker)`
//   & .MuiInputBase-root {
//     color: hotpink; // Cambia el color del texto en el input
//   }
//   & .MuiSvgIcon-root {
//     color: hotpink; // Cambia el color de los iconos, como el del calendario
//   }
//     & .MuiOutlinedInput-root {
//     height: 40px; // Esta regla asegura que el borde del input también tenga el alto deseado
//   }
//     & .css-1rtg91x-MuiDateCalendar-root {
//     //height: 100% !important;
//     height: 100%;
//   }
// `;

function DatePickerCustomed({
  valor,
  setValor,
  requerido = false,
  initalDate = null,
  endDate = null,
  loading = false,
}) {

  const handleDateChange = (newValue) => {
    setValor(newValue);
  };

  const preventManualInput = (event) => {
    event.preventDefault();
  };


  return (
    <>
    <FormControl  fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        onChange={handleDateChange} 
        label={ loading? "Cargando.." : "Fecha"}
        views={['year', 'month']}
        slots={{
          openPickerIcon: EditCalendarRoundedIcon,

        }}
        value={valor}
        // minDate={dayjs('2022-01-01')}
        // maxDate={dayjs('2024-12-31')}
        minDate={initalDate ? dayjs(initalDate) : dayjs()}
        maxDate={endDate ? dayjs(endDate) : dayjs()}
        // slotProps={{ textField: { size: 'small', } }}

        disabled={loading}
        sx={{ 
            // border: '5px solid red',
            borderRadius: '10px',
            fontFamily: ['Raleway-Bold'],  // Aplicando Raleway-Medium
            width: '100%' 
          }}
        
          slotProps={{
            textField: {
              onKeyDown: preventManualInput, // Evitar la entrada manual
            },
          }}
        />


      {/* <StyledDatePicker 
        label="Ingrese valor para etiqueta"
        views={['year', 'month']}
        slots={{
          // openPickerIcon: EditCalendarRoundedIcon,
          // openPickerButton: StyledButton,

        }}
        slotProps={{
          // openPickerIcon: { fontSize: 'large' },
          openPickerButton: { color: 'secondary' },
          textField: {
            // variant: 'filled',
            // focused: true,
            color: 'secondary',
          },
          actionBar: {
            actions: ['today', 'clear','cancel'],
          },
        }}
      /> */}
      </LocalizationProvider>
      <FormHelperText className={`${!requerido?"hidden": ''}`}>Requerido</FormHelperText>
    </FormControl>
    </>
  );
}

export default DatePickerCustomed;