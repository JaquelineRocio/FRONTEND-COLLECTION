// import { Select , Option} from "@material-tailwind/react";


// export default function SelectTailwind({label = "ingrese etiqeuta", className = "w-full", llave,  options, valor, setValor }) {
//   return (
//     // <div className={className}>
//     <div className={`

//                 font-ralewayBold
//                 border-2 
//                 text-nowrap


//     `}>
//         <Select
//             key={valor ? `selected${llave}` : `empty${llave}`} 
//             label={label}
//             value={valor}
//             onChange={(val) => setValor(val)}
//             title={`${label}`}
//             className={`
                
//               bg-yellow-600
//                 whitespace-nowrap
//                 text-ellipsis
//                 overflow-hidden
//             `}
//         >
//             {
//                 options.map((x)=>(<Option key={x.value} value={x.value} > {x.label || "Default Label"} </Option>))
//             }
//         </Select>
//     </div>
//   );
// }


import Select from 'react-select'
// import makeAnimated from 'react-select/animated'
import { useRef, useEffect, useMemo } from 'react';
// import { useFetch } from '../../../../../hooks/useFetch';



// const animatedComponents = makeAnimated()
// export default function SelectTailwind({ llave,  options, valor, setValor }) {
export default function SelectTailwind({

        options,
        label='escoja una opcion', 
        // url,
        limpiar, 
        // realizarPeticion = true,
        // tipoDato, 
        setValor, 
        valor=null, 
        // isMulti=true, 
        // closeMenuOnSelect=false

}){

    // let urlFetch = null;
    // if(realizarPeticion){
    //     urlFetch = url;
    // }

    // const {data, error, loading} = useFetch(urlFetch);

    // let limpiar = false;
    // if(valor){
    //     limpiar = true;
    // }

    // console.log("el valor ingresado es",);

    // Memoiza las opciones para evitar recalculaciones innecesarias
    // const options = useMemo(() => transformData(data, tipoDato), [data, tipoDato]);

    const selectRef = useRef(null);

    useEffect(() => {
        if (selectRef.current) {
            selectRef.current.clearValue();
        }
    }, [limpiar]);

    return (
        <>
            <Select
                // key={valor ? `selected${llave}` : `empty${llave}`}
                // isLoading={loading}  
                ref={selectRef}
                placeholder={label}
                options={options}
                // closeMenuOnSelect={closeMenuOnSelect}           // Evita que se cierre el modal hasta que el usuario termine de seleccionar opciones
                // defaultValue={options[0]}                     // Esta es una opcion seleccionada por defecto
                // defaultValue={[options[0],options[1]]}       // Esta es varias opciones seleccionadas por defecto
                // components={animatedComponents}
                // isMulti={isMulti}
                onChange={(val) => {setValor(val?.value)}}
                styles={customStyles}
            />
        </>
    )
}

// Estilos personalizados para el componente Select
const customStyles = {
    container: (provided) => ({
        ...provided,
        // width: '60%',            // Puedes ajustar el ancho aquí
    }),
    control: (provided) => ({
        ...provided,
        borderColor: '#B0BEC5',     // Cambia el color del borde
        boxShadow: 'none',          // Elimina la sombra del borde
        borderRadius: '7px',        // Ajusta el radio de las esquinas
        minHeight: '40px',          // Asegura que la altura mínima sea suficiente
        '&:hover': {
            borderColor: 'black',   // Color del borde al pasar el ratón
        },
        whiteSpace: 'nowrap',       // Evita que el texto se envuelva a la siguiente línea
        overflow: 'hidden',         // Oculta el desbordamiento del texto
        textOverflow: 'ellipsis',   // Añade puntos suspensivos (...) al final del texto que se desborda

    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#78909C',           // Cambia el color del placeholder
        fontSize: '14.5px',         // Opcional: Ajusta el tamaño de letra del placeholder
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        fontSize: '12px',           // Ajusta el tamaño de letra del valor seleccionado
    }),
    option: (provided) => ({
        ...provided,
        fontSize: '12px',           // Ajusta el tamaño de letra de las opciones
        height: '40px',             // Ajusta la altura de cada opción
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: 9999,               // Asegúrate de que el menú se muestre sobre otros elementos
    }),
};

// Función para transformar los datos basados en el tipo
// const transformData = (data, tipoDato) => {
//     switch (tipoDato) {
//         case 'cartera':
//             return data?.map(option => ({
//                 value: option.codCartera.toString(),
//                 label: option.desCartera
//             })) || [];
//         case 'prioridad':
//             return data?.map(option => ({
//                 value: option.codPrioridad.toString(),
//                 label: option.desPrioridad
//             })) || [];
//         default:
//             return [];
//     }
// }