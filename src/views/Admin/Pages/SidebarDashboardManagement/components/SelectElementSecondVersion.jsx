import Select from 'react-select'
// import makeAnimated from 'react-select/animated'
import { useRef, useEffect, useMemo } from 'react';
import { useFetch } from '../../../../../hooks/useFetch';



// const animatedComponents = makeAnimated()

export default function SelectElementSecondVersion({
        url,
        limpiar, 
        realizarPeticion = true,
        label='escoja una opcion', 
        tipoDato, 
        setValor, 
        valor, 
        isMulti=true, 
        closeMenuOnSelect=false

}){

    let urlFetch = null;
    if(realizarPeticion){
        urlFetch = url;
    }

    const {data, error, loading} = useFetch(urlFetch);


    // Memoiza las opciones para evitar recalculaciones innecesarias
    const options = useMemo(() => transformData(data, tipoDato), [data, tipoDato]);

    const selectRef = useRef(null);

    useEffect(() => {
        if (selectRef.current) {
            selectRef.current.clearValue();
        }
    }, [data, limpiar]);

    return (
        <>
            <Select
                // key={valor ? `selected${llave}` : `empty${llave}`}
                isLoading={loading}  
                ref={selectRef}
                placeholder={label}
                options={options}
                closeMenuOnSelect={closeMenuOnSelect}           // Evita que se cierre el modal hasta que el usuario termine de seleccionar opciones
                // defaultValue={options[0]}                     // Esta es una opcion seleccionada por defecto
                // defaultValue={[options[0],options[1]]}       // Esta es varias opciones seleccionadas por defecto
                // components={animatedComponents}
                isMulti={isMulti}
                onChange={(val) => {setValor(val)}}
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
const transformData = (data, tipoDato) => {
    switch (tipoDato) {
        case 'cartera':
            return data?.map(option => ({
                value: option.codCartera.toString(),
                label: option.desCartera
            })) || [];
        case 'prioridad':
            return data?.map(option => ({
                value: option.codPrioridad.toString(),
                label: option.desPrioridad
            })) || [];
        default:
            return [];
    }
}