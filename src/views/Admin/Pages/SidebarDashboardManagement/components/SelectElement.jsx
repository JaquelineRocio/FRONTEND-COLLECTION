
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useRef, forwardRef } from 'react';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const animatedComponents = makeAnimated()

export default function SelectElement({label='escoja una opcion', llave, setValor, valor, options=options, isMulti=true, closeMenuOnSelect=false}) {
const selectRef = useRef(null);

const clearSelection = () => {
    if (selectRef.current) {
        selectRef.current.clearValue();
    }
};

  return (
    <>
        {/* <div style={{width: "60%"}}> */}
            <Select
                // key={valor ? `selected${llave}` : `empty${llave}`}  
                ref={selectRef}
                placeholder={label}
                options={options}
                closeMenuOnSelect={closeMenuOnSelect}   // Evita que se cierre el modal hasta que el usuario termine de seleccionar opciones
                //defaultValue={options[0]}   // Esta es una opcion seleccionada por defecto
                // defaultValue={[options[0],options[1]]}   // Esta es varias opciones seleccionadas por defecto
                // components={animatedComponents}
                isMulti={isMulti}
                onChange={(val) => {setValor(val)}}
                styles={{
                    container: (provided) => ({
                        ...provided,
                        // width: '60%',  // Puedes ajustar el ancho aquí
                    }),
                    control: (provided) => ({
                        ...provided,
                        borderColor: '#B0BEC5',  // Cambia el color del borde
                        boxShadow: 'none',    // Elimina la sombra del borde
                        borderRadius: '7px',  // Ajusta el radio de las esquinas
                        minHeight: '40px',  // Asegura que la altura mínima sea suficiente
                        '&:hover': {
                            borderColor: 'black',  // Color del borde al pasar el ratón
                        },
                    }),
                    placeholder: (provided) => ({
                        ...provided,
                        color: '#78909C',  // Cambia el color del placeholder
                        fontSize: '14.5px',  // Opcional: Ajusta el tamaño de letra del placeholder
                    }),
                    multiValueLabel: (provided) => ({
                        ...provided,
                        fontSize: '12px',  // Ajusta el tamaño de letra del valor seleccionado
                    }),
                    option: (provided) => ({
                        ...provided,
                        fontSize: '12px',  // Ajusta el tamaño de letra de las opciones
                        height: '40px',  // Ajusta la altura de cada opción
                    }),
                    menu: (provided) => ({
                        ...provided,
                        zIndex: 9999,  // Asegúrate de que el menú se muestre sobre otros elementos
                    }),
                }}
                // onChange={(selectOption)=>{console.log(selectOption)}} 
            />
            {/* <button onClick={clearSelection}>Limpiar</button> */}
        {/* </div> */}
    </>
  )
}



