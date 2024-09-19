
import Select from 'react-select'
import SelectAsync from 'react-select/async'
import makeAnimated from 'react-select/animated'
import { useEffect, useState } from 'react'



const animatedComponents = makeAnimated()

export default function SelectComponent() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'mint', label: 'Mint' },
        { value: 'caramel', label: 'Caramel' },
        { value: 'coffee', label: 'Coffee' },
        { value: 'lemon', label: 'Lemon' },
        { value: 'mango', label: 'Mango' },
        { value: 'banana', label: 'Banana' },
        { value: 'coconut', label: 'Coconut' },
        // Agrega más opciones si es necesario
      ];

const optionsTwo = [
    { value: 'Juan', label: 'JuanLabel' },
    { value: 'Jaqueline', label: 'JaquelineLabel' },
    { value: 'Jose', label: 'JoseValue' }
]

// Opciones disponibles para seleccionar
const [opciones, setOpciones] = useState(options);

// Opciones seleccionadas
const [optionSelected, setOptionSelected] = useState([]);

// Opciones seleccionadas de componentte
const [selectedOption, setSelectedOption] = useState(null)


// const 

// const [optionsAsync, setOptionsAsync] = useState([]);

// const peticionSimulated = () => {
// console.log("funcion activada");
//   setTimeout(() => {
//     console.log("funcion activada dos");
//     setOptionsAsync(
//       [
//         { value: 'chocolate', label: 'Chocolate' },
//         { value: 'strawberry', label: 'Strawberry' },
//         { value: 'vanilla', label: 'Vanilla' }
//       ]
//     ) 
//   }, 600);

// }

// useEffect(()=>{peticionSimulated()},[]); 
const optionsAsync = (searchValue, callback) => {
    setTimeout(() => {
    callback(options);
    }, 600);
}

// Cada vez que se ingresen nuevas opciones se limpiará el componente
// useEffect(()=>{
//     setOptionSelected([]);
// },[opciones]);

return (
        <>
            <div className='w-1/2 bg-pink-200 overflow-hidden'>
                <Select 
                    options={opciones}
                    closeMenuOnSelect={false}                       // Evita que se cierre el modal hasta que el usuario termine de seleccionar opciones
                    // defaultValue={options[0]}                    // Esta es una opcion seleccionada por defecto
                    // defaultValue={[options[0],options[1]]}       // Esta es varias opciones seleccionadas por defecto
                    components={animatedComponents}
                    value={optionSelected}                          // esto anexa el componente select a las opciones, crea un vinculo, todo lo que esta aqui, se verá reflejado en la interfaz
                    isMulti
                    onChange={(value)=>{setOptionSelected(value)}} 
                />

                <SelectAsync
                    loadOptions={optionsAsync}
                    closeMenuOnSelect={false}                   // Evita que se cierre el modal hasta que el usuario termine de seleccionar opciones
                    // defaultValue={options[0]}                 // Esta es una opcion seleccionada por defecto
                    // defaultValue={[options[0],options[1]]}   // Esta es varias opciones seleccionadas por defecto
                    components={animatedComponents}
                    isMulti
                    onChange={(selectOption)=>{console.log(selectOption)}} 
                />
            </div>
            <button onClick={()=>{setOptionSelected([])}} className='bg-orange-800 p-2 mt-80 rounded'>
                limpiar
            </button>

            <button onClick={()=>{setOpciones(optionsTwo)}} className='bg-orange-800 p-2 mt-80 rounded'>
                cambiar
            </button>

            <ReactSelectComponent
                options={opciones}
                State={selectedOption}
                UseState={setSelectedOption}
            />
        </>
    )
}


export const ReactSelectComponent = ({options=[], State, UseState}) => {
    const [optionSelected, setOptionSelected] = useState([]);

    // Limpia cada vez que se ingresa nuevas opciones para seleccionar
    useEffect(()=>{
        setOptionSelected([]);
    },[options]);

    return(
        <Select 
            options={options}
            closeMenuOnSelect={false}                       // Evita que se cierre el modal hasta que el usuario termine de seleccionar opciones
            // defaultValue={options[0]}                    // Esta es una opcion seleccionada por defecto
            // defaultValue={[options[0],options[1]]}       // Esta es varias opciones seleccionadas por defecto
            components={animatedComponents}
            value={optionSelected}                          // esto anexa el componente select a las opciones, crea un vinculo, todo lo que esta aqui, se verá reflejado en la interfaz
            isMulti
            onChange={(value)=>{setOptionSelected(value), UseState(value)}} 
            styles={customStyles}
        />
    )


      

}

// const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       backgroundColor: 'lightblue',
//       borderColor: state.isFocused ? 'blue' : 'gray',
//       boxShadow: state.isFocused ? '0 0 0 1px blue' : null,
//       '&:hover': {
//         borderColor: 'blue',
//       },
//       display: 'flex',
//       overflow: 'hidden',
//       overflow: ''
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       backgroundColor: state.isFocused ? 'lightgray' : null,
//       color: 'black',
//       padding: 10,
//     }),
//     // Puedes personalizar más partes del componente
//   };


  const customStyles = {
    valueContainer: (provided) => ({
      ...provided,
      flexWrap: 'nowrap',
      overflow: 'hidden',
      background: 'black',
      width: "auto",
      overflowY: 'auto',  // Habilita la barra de desplazamiento vertical
    }),
    multiValue: (provided) => ({
      ...provided,
    //   maxWidth: '100%',
      background: 'pink',
      flexShrink: 0,           // Evita que las etiquetas se encojan
      maxWidth: 'none',        // Permite que las etiquetas usen su ancho completo
      minWidth: '100px',        // Permite que las etiquetas usen su ancho completo
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      flexShrink: 0,           // Evita que el texto se encoja
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      background: 'yellow'
    }),
    input: (provided) => ({
      ...provided,
      flexShrink: 0,           // Evita que el input se encoja
      margin: 0,
      background: 'orange',
      minWidth: '50px',
    }),
  };
  

/**
 * Caracteristicas que quiero del select
 * será un customhook.
 * le dare una url
 * hara peticion cuando ejecute una funcion
 * solo necesito la opcion seleccionada
 * necesito que se limpie cada vez que llamo a la funcion limpiar
 * 
 */

/**
 * getData("https://url...")
 * selected.
 * clear()
 * 
 */