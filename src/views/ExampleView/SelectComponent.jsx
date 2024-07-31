
import Select from 'react-select'
import SelectAsync from 'react-select/async'
import makeAnimated from 'react-select/animated'
import { useEffect, useState } from 'react'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const animatedComponents = makeAnimated()

export default function SelectComponent() {
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
  return (
    <>
        <div style={{width: "60%"}}>
            <Select 
                options={options}
                closeMenuOnSelect={false}   // Evita que se cierre el modal hasta que el usuario termine de seleccionar opciones
                //defaultValue={options[0]}   // Esta es una opcion seleccionada por defecto
                defaultValue={[options[0],options[1]]}   // Esta es varias opciones seleccionadas por defecto
                components={animatedComponents}
                isMulti
                onChange={(selectOption)=>{console.log(selectOption)}} 
            />

            <SelectAsync
                loadOptions={optionsAsync}
                closeMenuOnSelect={false}   // Evita que se cierre el modal hasta que el usuario termine de seleccionar opciones
                //defaultValue={options[0]}   // Esta es una opcion seleccionada por defecto
                defaultValue={[options[0],options[1]]}   // Esta es varias opciones seleccionadas por defecto
                components={animatedComponents}
                isMulti
                onChange={(selectOption)=>{console.log(selectOption)}} 
            />
        </div>
    </>
  )
}



