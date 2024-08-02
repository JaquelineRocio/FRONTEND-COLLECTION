import Select from 'react-select'
import { useRef, useEffect} from 'react';

export default function ComponentSelectOneOpcion({

        options,
        label='escoja una opcion', 
        // url,
        limpiar, 
        // realizarPeticion = true,
        // tipoDato, 
        setValor, 
        valor=null,
        loading=false, 
        // isMulti=true, 
        // closeMenuOnSelect=false

}){

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
                isLoading={loading}  
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

