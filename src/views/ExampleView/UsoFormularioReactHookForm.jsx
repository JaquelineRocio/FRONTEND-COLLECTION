// import { useForm } from "react-hook-form";
// const UsoFormularioReactHookForm = () => {

//     // const {register, handleSubmit, formState} = useForm();
//     const {register, handleSubmit, formState:{errors}} = useForm();

//     const onSubmit = handleSubmit(data => {
//         console.log("mensaje enviado");
//         console.log(data);
//     })


//     console.log(errors)
//     const reglasNombre = {
//         // required: true
//         required:{value: true, message: "Nombre es requerido"},
//         minLength:{value: 2, message: "El nombre debe tener al menos 2 caracteres"},
//         maxLength:{value: 20, message: "El nombre debe tener menos de 20 caracteres"},
//     }

//     return (
//         <>
//         <form className="" onSubmit={onSubmit}>

//             <label
//             htmlFor="nombre">Nombre
//             </label>
//             <input type="text"
//             // con esto identificamos el input
//             {...register("nombre", {...reglasNombre})}
//             />
//             {errors.nombre && <span className="text-red-800 font-ralewayRegular">{errors.nombre.message}</span>}

//             <label
//             htmlFor="correo">Correo
//             </label>
//             <input type="email"
//             {...register("correo")}
//             />

//             <label
//             htmlFor="password">Password
//             </label>
//             <input type="password"
//             {...register("password")}
//             />

//             <label
//             htmlFor="confirmarPassword">Confirmar Password
//             </label>
//             <input type="password"
//             {...register("confirmarPassword")}
//             />

//             <button type="submit">
//                 Enviar
//             </button>

//         </form>
//         </>
//     )
// }

// export default UsoFormularioReactHookForm;

//------------------------------------------------------------------------------------------------------------------------------------------------------

// const UsoFormularioReactHookForm = () => {

//     // desestructuracion

//     const numeros = {uno:1, dos:2, tres: 3}
//     const {uno, dos, tres } = numeros;


//     // desestructuracion de objetos aninados
//     const persona = {personaUno:{nombre:"juan", apellido: "ayala"}, personaDos:{nombre: "jose", apellido: "quispe"}}
//     const {personaUno:{nombre}} = persona;
//     const {personaDos:{nombre:nombreDosEscogido}} = persona;    // aqui a parte de desesctructurar, tambien le estamos dando un alias
//     return (
//         <>

//             <h1>{uno}</h1>
//             <h1>{dos}</h1>
//             <h1>{tres}</h1>

//             <h1>----------</h1>
//             <h1>{nombre}</h1>
//             <h1>{nombreDosEscogido}</h1>
//         </>
//     )
// }

// export default UsoFormularioReactHookForm;


//------------------------------------------------------------------------------------------------------------------------------------------------------

// const url = "https://static.vecteezy.com/system/resources/thumbnails/022/645/069/small/illustration-painting-of-love-riding-on-bicycle-generate-ai-photo.jpg";
// const UsoFormularioReactHookForm = () => {


//     return (
//         <>
//             {/* <div style={{backgroundImage:url,}} className="w-96 h-96 bg-red-200"> */}
//             {/* <div style={`background-image: url(${url})`} className="w-96 h-96 bg-red-200"> */}
//             <div style={{
//                     backgroundImage: `url(${url})`
//                 }} className="w-96 h-96 bg-cover bg-center">
//                 este es undiv
//             </div>
//             <h3>-</h3>
//             <img src={url} className="w-96 h-96 object-cover"></img>
//         </>
//     )
// }

// export default UsoFormularioReactHookForm;


//------------------------------------------------------------------------------------------------------------------------------------------------------

// const url = "https://static.vecteezy.com/system/resources/thumbnails/022/645/069/small/illustration-painting-of-love-riding-on-bicycle-generate-ai-photo.jpg";
// import { css } from '@emotion/react';
// import styled from '@emotion/styled'
// const UsoFormularioReactHookForm = () => {
//     const color = 'white';

//     const Button = styled.button`
//     padding: 32px;
//     background-color: hotpink;
//     font-size: 24px;
//     border-radius: 4px;
//     color: black;
//     font-weight: bold;
//     &:hover {
//       color: white;
//     }
//   `
//     const Otro = styled.button`padding: 32px; background-color: hotpink; font-size: 12px; border-radius: 4px; color: black; font-weight: bold;  &:hover {   color: white; background-color: #234323;  } `

//     const style = css`
//     color: hotpink;
//   `;


//     return (<>
//         <Button>This my button component.</Button>
//         <Otro>ddddd</Otro>
//         <div css={style}>Styled with Emotion</div>
//         <div
//           css={css`
//             background-color: hotpink;
//             &:hover {
//               color: ${color};
//             }
//           `}
//         >
//           This has a hotpink background.
//         </div>

//         <div
//           css={css`
//             padding: 32px;
//             background-color: hotpink;
//             font-size: 24px;
//             border-radius: 4px;
//             &:hover {
//               color: ${color};
//             }
//           `}
//         >
//         Hover to change color.
//       </div>
//             </>
//     );
// }

// export default UsoFormularioReactHookForm;


//------------------------------------------------------------------------------------------------------------------------------------------------------

// const url = "https://static.vecteezy.com/system/resources/thumbnails/022/645/069/small/illustration-painting-of-love-riding-on-bicycle-generate-ai-photo.jpg";
// import { css } from '@emotion/react';

// const UsoFormularioReactHookForm = () => {

//     const style = css`
//     color: hotpink;
//     `;


//     return (<>
//         <div css={style}>Styled with Emotion</div>
//     </>
//     );
// }

// export default UsoFormularioReactHookForm;
//------------------------------------------------------------------------------------------------------------------------------------------------------
// import styled from '@emotion/styled';

// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
// import IconButton from '@mui/material/IconButton';

// const StyledDiv = styled.div`
//   color: hotpink;
// `;

// const StyledButton = styled(IconButton)(({ theme }) => ({
//   borderRadius: 4,
// }));

// const StyledDatePicker  = styled(DatePicker)`
//   & .MuiInputBase-root {
//     color: hotpink; // Cambia el color del texto en el input
//   }
//   & .MuiSvgIcon-root {
//     color: hotpink; // Cambia el color de los iconos, como el del calendario
//   }
//     & .MuiOutlinedInput-root {
//     height: 40px; // Esta regla asegura que el borde del input también tenga el alto deseado
//   }
//     & .css-1rtg91x-MuiDateCalendar-root {
//     //height: 100% !important;
//     height: 100%;
//   }
// `;

// function UsoFormularioReactHookForm() {
//   return (
//     <>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker 
//         label="Styled picker"
//         views={['year', 'month']}
//         slots={{
//           openPickerIcon: EditCalendarRoundedIcon,

//         }}/>


//       <StyledDatePicker 
//         label="estilizado"
//         views={['year', 'month']}
//         slots={{
//           // openPickerIcon: EditCalendarRoundedIcon,
//           // openPickerButton: StyledButton,

//         }}
//         slotProps={{
//           // openPickerIcon: { fontSize: 'large' },
//           openPickerButton: { color: 'secondary' },
//           textField: {
//             // variant: 'filled',
//             // focused: true,
//             color: 'secondary',
//           },
//           actionBar: {
//             actions: ['today', 'clear','cancel'],
//           },
//         }}
//       />
//       </LocalizationProvider>


//       <StyledDiv
      
//       >
//         Styled with Emotion
//       </StyledDiv>
//     </>
//   );
// }

// export default UsoFormularioReactHookForm;

//------------------------------------------------------------------------------------------------------------------------------------------------------
// import SimulatorApi from "../../services/resources/SimulatorApi";

// function UsoFormularioReactHookForm() {

//   function onClick(){
//     console.log("este es un mensaje ejecuto al presionar sobre el texto");
//   }

//   function render(){
//     return "hola este es un mensaje traido desde una funcion"
//   }

//   function complemento(){
//     return "este es un mensaje complemento"
//   }
//   const miMensaje =  complemento();

//   function SegundoComplemento(){
//     return <h3> Este es el mensaje del segundo complemento</h3>
//   }

//   function ComplementoDos(){
//     return "este es un mensaje complemento dos"
//   }
//   const miMensajeDos = <ComplementoDos/>
//   return (
//     <>
//         *****UNO****
//         <h3 onClick={onClick}>hola mundo</h3>
//         *****DOS****
//         <h3>{render()}</h3>
//         *****TRES****
//         <h3>{miMensaje}</h3>
//         *****CUATRO****
//         <SegundoComplemento/>
//         *****CINCO****
//         <h3>{miMensajeDos}</h3>
//         *****SEIS****<br></br>
//         <ComplementoDos/>
//         *****SIETE**** <br></br>
//         {ComplementoDos()}
//         *****OCHO****<br></br>
//         {SimulatorApi()}
//     </>
//   );
// }

// export default UsoFormularioReactHookForm;

//------------------------------------------------------------------------------------------------------------------------------------------------------
// import { useState } from "react";
// import SimulatorApi from "../../services/resources/SimulatorApi";
// import { testFetch } from "../../hooks/testFetch";
// import { useEffect } from "react";
// function UsoFormularioReactHookForm() {


//   // const [valor, setValor] = useState({});

//   async function getData(){
//     const result = await SimulatorApi(200, false);
//     console.log(result);
//   }

//   const valor00 = {};
//   if(valor00){
//     console.log("objeto vacio")
//   }

//   const valor01 = [];
//   if(valor01){
//     console.log("array vacio")
//   }

//   const valor02 = "a";
//   if(!valor02){
//     console.log("cadena vacia")
//   }

//   const valor03 = null;
//   if(valor03){
//     console.log("valor null")
//   }

//   async function obtenerDatos (){
//     const {data, loading, error}  = await testFetch.get('/cartera/entidad/1');
//     console.log(data);
//     console.log(loading);
//     console.log(error);
  
//   }

//   useEffect(()=>{
//     obtenerDatos();
//   }, [])
  
//   return (
//     <>
//         <button onClick={getData}>presiona para consumir api</button>
//     </>
//   );
// }

// export default UsoFormularioReactHookForm;

//------------------------------------------------------------------------------------------------------------------------------------------------------
import { useState } from "react";

function UsoFormularioReactHookForm() {

  const [user, setUser] = useState({name:"juan", apellido: "ayala"})
  let miValor = {};
  const getData = () => {
    let miObjeto = {name:"jose", apellido:"albert"}
    console.log("user-parte-uno: ", user);
    setUser(miObjeto);
    console.log("user-parte-dos: ", user);
  }

  const cambiarValor = () => {
    miValor = {nuevo: "este es otro valor"}
  }

  const verNuevoValor = () => {
    console.log("ver valor:", miValor);
  }
  
  return (
    <>  
        <p>{user.name}</p>
        <p>{user.apellido}</p>
        <button className="bg-yellow-400" onClick={getData}>presiona</button>
        <button className="bg-pink-400" onClick={cambiarValor}>presione para cambiar valor</button>
        <button className="bg-blue-400" onClick={verNuevoValor}>presione para ver nuevo valor</button>
    </>
  );
}

export default UsoFormularioReactHookForm;