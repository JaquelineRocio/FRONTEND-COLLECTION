import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function GridTailwind() {


    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (newValue) => {
      setSelectedDate(newValue);
      console.log(newValue?.format('YYYY-MM')); // Ajusta el formato según lo que necesites
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
      views={['year', 'month']}
      value={selectedDate}
      onChange={handleDateChange}
      minDate={dayjs('2023-01-01')}
      maxDate={dayjs('2024-12-31')}
      />
    </LocalizationProvider>
  );
}