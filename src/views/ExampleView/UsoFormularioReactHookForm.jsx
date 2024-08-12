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
import styled from '@emotion/styled';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import IconButton from '@mui/material/IconButton';

const StyledDiv = styled.div`
  color: hotpink;
`;

const StyledButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 4,
}));

const StyledDatePicker  = styled(DatePicker)`
  & .MuiInputBase-root {
    color: hotpink; // Cambia el color del texto en el input
  }
  & .MuiSvgIcon-root {
    color: hotpink; // Cambia el color de los iconos, como el del calendario
  }
    & .MuiOutlinedInput-root {
    height: 40px; // Esta regla asegura que el borde del input también tenga el alto deseado
  }
    & .css-1rtg91x-MuiDateCalendar-root {
    //height: 100% !important;
    height: 100%;
  }
`;

function UsoFormularioReactHookForm() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
        label="Styled picker"
        views={['year', 'month']}
        slots={{
          openPickerIcon: EditCalendarRoundedIcon,

        }}/>


      <StyledDatePicker 
        label="estilizado"
        views={['year', 'month']}
        slots={{
          // openPickerIcon: EditCalendarRoundedIcon,
          // openPickerButton: StyledButton,

        }}
        slotProps={{
          // openPickerIcon: { fontSize: 'large' },
          openPickerButton: { color: 'secondary' },
          textField: {
            // variant: 'filled',
            // focused: true,
            color: 'secondary',
          },
          actionBar: {
            actions: ['today', 'clear','cancel'],
          },
        }}
      />
      </LocalizationProvider>


      <StyledDiv
      
      >
        Styled with Emotion
      </StyledDiv>
    </>
  );
}

export default UsoFormularioReactHookForm;