// <Select>
//    {options.map(option => (
//    <Select.Option key={option.value} value={option.value}>
//        {option.label}
//    </Select.Option>
//     ))}
// // </Select>

// El motivo por el cual el otpion tiene un selec a su izquierda es para indicar
// que la etiqueta option pertenece a la etiqueta select. hacer esto te da 
// libertad para no importar la etiqueta option directamente en el scrip

// import React, { useState } from "react";
import { Select , Option} from "@material-tailwind/react";
// import { LiaBatteryThreeQuartersSolid } from "react-icons/lia";


// const defaultOptions  = [
//   { value: '1', label: 'Opción 1' },
//   { value: '2', label: 'Opción 2' },
//   { value: '3', label: 'Opción 3' },
//   { value: '4', label: 'Opción 4' },
//   { value: '5', label: 'Opción 5' },
//   { value: '6', label: 'Opción 6' },
//   { value: '7', label: 'Opción 7' },
//   { value: '8', label: 'Opción 8' },
//   { value: '9', label: 'Opción 9' },
// ];

export default function SelectTailwind({label = "ingrese etiqeuta", className = "w-full", llave,  options, valor, setValor }) {
    // const [value, setValue] = useState(null);
    // console.log('Opciones:',options);
    // console.log(`selected${llave} yyyy empty${llave}`)
  return (
    <div className={className}>
        <Select
            key={valor ? `selected${llave}` : `empty${llave}`} 
            label={label}
            value={valor}
            onChange={(val) => setValor(val)}
        >
            {
                options.map((x)=>(<Option key={x.value} value={x.value} > {x.label || "Default Label"} </Option>))
            }
        </Select>
    </div>
  );
}