
// Percentage, es el valor para hacer los calculos y show es lo que se va a mostrar
const PercentageBar  = ({ percentage, show }) => {

    const Intensity = (percentage) => {
        const porcentajeNumero = parseFloat(percentage);
        
        if(Number.isNaN(porcentajeNumero)){
            return percentage;
        }
        return porcentajeNumero;
    }

    const firstPercentage  = Intensity(percentage) - 5 ;
    const secondPercentage = Intensity(percentage) + 5;

    const fp = firstPercentage.toString();
    const sp = secondPercentage.toString();

    const barStyles = {
        height: '100%',
        width: '100%',  // La barra siempre tendrá el ancho completo
        // backgroundColor: getColorIntensity(percentage),
        // background: `linear-gradient(to right, ${greenInit} 40%, ${greenEnd} 50%)`, // Aplica un degradado
        background: `linear-gradient(to right, ${greenInit} ${fp}%, ${greenEnd} ${sp}%)`, // Aplica un degradado
        // borderRadius: '5px',
        transition: 'background-color 0.5s ease',
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'end', // Asegura que el contenido esté centrado
        textAlign: 'center', // Centrar el texto
        alignItems: 'center',  // Centra verticalmente el contenido
        padding: '0 8px 0 0',  
        // border: `2px solid ${greenBorder}`,	
    };

    return (
        <div style={barStyles}>{show}</div>
    );
};

// const PercentageBar = () => {
//     const porcentaje = '10%';
//     return(
//         <ColorBar percentage={porcentaje} hijo={<div>{porcentaje}</div>}/>
//     )
// }

export default PercentageBar;

const greenInit = 'rgba(75, 205, 192, 0.9)';
const greenEnd  = 'rgba(255, 255, 255, 0.9)';
const greenBorder = 'rgb(75, 192, 192)'; 





// const PercentageBar  = ({ percentage }) => {

//     const Intensity = (percentage) => {
//         const porcentajeNumero = parseFloat(percentage);
        
//         if(Number.isNaN(porcentajeNumero)){
//             return percentage;
//         }
//         return porcentajeNumero;
//     }

//     const firstPercentage  = Intensity(percentage) - 5 ;
//     const secondPercentage = Intensity(percentage) + 5;

//     const fp = firstPercentage.toString();
//     const sp = secondPercentage.toString();

//     const barStyles = {
//         height: '100%',
//         width: '100%',  // La barra siempre tendrá el ancho completo
//         // backgroundColor: getColorIntensity(percentage),
//         // background: `linear-gradient(to right, ${greenInit} 40%, ${greenEnd} 50%)`, // Aplica un degradado
//         background: `linear-gradient(to right, ${greenInit} ${fp}%, ${greenEnd} ${sp}%)`, // Aplica un degradado
//         // borderRadius: '5px',
//         transition: 'background-color 0.5s ease',
//         // backgroundColor: 'red',
//         display: 'flex',
//         justifyContent: 'end', // Asegura que el contenido esté centrado
//         textAlign: 'center', // Centrar el texto
//         alignItems: 'center',  // Centra verticalmente el contenido
//         // padding: '0px 0',  
//         // border: `2px solid ${greenBorder}`,	
//     };

//     return (
//         <div style={barStyles}>{percentage}</div>
//     );
// };

// // const PercentageBar = () => {
// //     const porcentaje = '10%';
// //     return(
// //         <ColorBar percentage={porcentaje} hijo={<div>{porcentaje}</div>}/>
// //     )
// // }

// export default PercentageBar;

// const greenInit = 'rgba(75, 205, 192, 0.9)';
// const greenEnd  = 'rgba(255, 255, 255, 0.9)';
// const greenBorder = 'rgb(75, 192, 192)'; 


