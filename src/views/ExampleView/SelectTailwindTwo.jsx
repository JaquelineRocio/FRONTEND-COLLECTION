// import Select from "react-select/async";
// import makeAnimated from "react-select/animated";
// import { Api } from "../../services/Api";


import { useEffect, useState } from "react";
import { Select , Option} from "@material-tailwind/react";
import { Api } from "../../services/Api";

// const SelectTailwindTwo = () => {
//   const defaultOptions = [
//     { value: '1', label: 'Opción 1' },
//     { value: '2', label: 'Opción 2' },
//     { value: '3', label: 'Opción 3' },
//     { value: '4', label: 'Opción 4' },
//     { value: '5', label: 'Opción 5' },
//     { value: '6', label: 'Opción 6' },
//     { value: '7', label: 'Opción 7' },
//     { value: '8', label: 'Opción 8' },
//     { value: '9', label: 'Opción 9' },
//   ];

//   const loadOptions = async (inputValue, callback) => {
//     try {
//       const response = await Api.post('/tablon/filtros', { search: inputValue });
//       const options = response.data.map(option => ({
//         value: option.codEntidad.toString(),
//         label: option.desEntidad
//       }));
//       callback(options);
//     } catch (error) {
//       console.error('Error en la petición:', error);
//       callback([]);
//     }
//   };

//   return (
//     <div style={{ width: "90%" }}>
//       <Select
//         components={makeAnimated()}
//         loadOptions={loadOptions}
//         // defaultOptions={defaultOptions}
//         onChange={(x) => {
//           console.log(x);
//         }}  
//       />
//     </div>
//   );
// };

// export default SelectTailwindTwo;


// import Select from "react-select/async";
// import makeAnimated from "react-select/animated";
// import { Api } from "../../services/Api";
// import { Option } from "@material-tailwind/react";
// import { useNavigate } from "react-router-dom";
// import { Select } from "@material-tailwind/react";



// const SelectTailwindTwo = () => {
//     const brands = [
//         { value: "1", label: "Option 1", id: "100" },
//         { value: "2", label: "Option 2", id: "200" },
//         { value: "3", label: "Option 3", id: "300" },
//       ]
//     const navigate = useNavigate()
//     const navigateOption = {
//       id: "400",
//       label: "Add Brand",
//       value: "4",
//       onClick: () => navigate("/add-brand"),
//     }
//     const myOptions = [navigateOption, ...brands]
//     // const myOptions = brands;

//   return (
//     <Select 
//         label="Brand" 
//         name="brandId" 
//         placeholder={"Select"}
//     >
//       {
//       myOptions.map((option) => (
//         <Option key={option.id} value={option.id} onClick={option.onClick}>
//           {option.label}
//         </Option>
//       ))
//       }
//     </Select>
//   );
// };

// export default SelectTailwindTwo;


// const Button = ({onClick, children}) => {
//     console.log("COMPONENTE BUTTON")
//     return(
//         <button onClick={onClick}> {children} </button>
//     )
// }

// const OtroComponente = () => {
//     console.log("ESTE ES OTRO COMPONENTE");
//     const [dato, setDato] = useState(0);
//     return(
//         <div onClick={()=>{setDato(dato+1)}} className="bg-orange-600">
//             Este es un nuevo componente
//         </div>
//     )
// }


// const SelectTailwindTwo = () => {
// console.log("COMPONENTE SELECT TAILWIND TWO")
// let [contador, setContador] = useState(0);
// const [myDiv, setMyDiv] = useState(0);
//   return (
//         <>
//         <div onClick={()=>{setMyDiv(myDiv+1)}} className="bg-pink-400">presiona el div{myDiv}</div>
//         <Button onClick={()=>{  setContador(contador+1);}} >{contador}</Button>
//         <OtroComponente></OtroComponente>
//         </>
//     );
// };

// export default SelectTailwindTwo;


const SelectTailwindTwo = () => {
console.log("COMPONENTE SELECT TAILWIND TWO");

const [dataToSelect, setDataToSelect] = useState([{"value": "1", "label": "PrimerValor"},{"value": "2", "label": "SegundoValor"}]);
const [seleccionado, setSeleccionado] = useState(null);
const [llave, setLlave] = useState('uno');

async function extraerDatos(){
    try{
        const data = await Api.get('/cartera');

        const dataProcesada = data.map(option => ({
            value: option.codCartera.toString(),
            label: option.desCartera
          }));
          setDataToSelect(dataProcesada);
          console.log(dataProcesada);
    }catch(error){
        console.log(error);
    }
}

useEffect(()=>{
    extraerDatos();
},[]);

function clear(){
    console.log("limpaar select");

    setSeleccionado(null);
    // setLlave(llave =='uno'? 'dos': 'uno');
    // extraerDatos();
}

  return (
        <>
            <MySelect key={llave} className="pt-6" valor={seleccionado} options={dataToSelect} setValor={setSeleccionado}></MySelect>
            <button className="bg-red-800" onClick={clear}>clear</button>
        </>
    );
};

export default SelectTailwindTwo;

function MySelect ({className = "w-full",  options = [], valor, setValor = null }) {
    const [seleccionado, setSeleccionado] = useState(valor);

    console.log("COMPONENTE SELECT")
    // const [value, setValue] = useState(null);
    // console.log('xxxx',options);
    // console.log(`selected${llave} yyyy empty${llave}`)
  return (
    <div className={className}>
        <Select
            label="Seleccione dato"
            value={null}
            // onChange={(val) => setValor(val)}
            onChange={(val) => {setSeleccionado(val); setValor(val)}}
            // key={valor}
        >
            {
                options.map((x)=>(<Option key={x.value} value={x.value} > {x.label || "Default Label"} </Option>))
            }
        </Select>
    </div>
  );
}



