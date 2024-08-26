// import './../../styles/DatePickerStyles.css'; // Importante para estilos básicos
import { forwardRef, useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const ComponenteFecha = () => {
    const [date, setDate] = useState(new Date()); // Estado para la fecha seleccionada

    const renderMonthContent = (month, shortMonth, longMonth, day) => {
        const fullYear = new Date(day).getFullYear();
        const tooltipText = `Tooltip para el mes: ${longMonth} ${fullYear}`;
        return <span title={tooltipText}>{shortMonth}</span>;
    };

    const handleDateChange = (newDate) => {
        setDate(newDate);
        const formattedDate = format(newDate, 'yyyy-MM-dd'); // Formatea la fecha
        // console.log('Fecha seleccionada:', formattedDate); // Muestra la fecha en el console log
    };

    // Añade estilos personalizados para el input
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button
            className="w-full bg-red-400"
            onClick={onClick}
            ref={ref}
        >
            {value}
        </button>
    ));

    const minDate = new Date(2022, 0, 1); // 1 de enero de 2022
    const maxDate = new Date(2023, 11, 31); // 31 de diciembre de 2023

    return (
        <div className="bg-blue-50">
            <DatePicker
                selected={date}
                onChange={handleDateChange}
                renderMonthContent={renderMonthContent}
                showMonthYearPicker
                dateFormat="MM/yyyy"
                customInput={<CustomInput />}
                calendarClassName="rounded-lg shadow-lg" // Estilos para el calendario
                minDate={minDate} // Establece la fecha mínima
                maxDate={maxDate} // Establece la fecha máxima
            />
        </div>
    );
}

export default ComponenteFecha;




