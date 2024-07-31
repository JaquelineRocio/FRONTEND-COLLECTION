import React from 'react';

const ColorBar  = ({ percentage, hijo }) => {

    const Intensity = (percentage) => {
        const porcentajeNumero = parseFloat(percentage, 10);  
        return porcentajeNumero;
    }

    const firstPercentage  = Intensity(percentage);
    const secondPercentage = Intensity(percentage) + 10;

    const fp = firstPercentage.toString();
    const sp = secondPercentage.toString();

    const barStyles = {
        height: '20px',
        width: '100%',  // La barra siempre tendrá el ancho completo
        // backgroundColor: getColorIntensity(percentage),
        // background: `linear-gradient(to right, ${greenInit} 40%, ${greenEnd} 50%)`, // Aplica un degradado
        background: `linear-gradient(to right, ${greenInit} ${fp}%, ${greenEnd} ${sp}%)`, // Aplica un degradado
        borderRadius: '5px',
        transition: 'background-color 0.5s ease',
        display: 'flex',
        justifyContent: 'center', // Asegura que el contenido esté centrado
        textAlign: 'center', // Centrar el texto
        alignItems: 'center',  // Centra verticalmente el contenido
        padding: '10px 0',  // Añade padding vertical
        border: `2px solid ${greenBorder}`,	
    };

    return (
        <div style={barStyles}>{hijo}</div>
    );
};

const ReactChart5 = () => {
    const porcentaje = '10%';
    return(
        <ColorBar percentage={porcentaje} hijo={<div>{porcentaje}</div>}/>
    )
}

export default ReactChart5;

const greenInit = 'rgba(75, 205, 192, 0.9)';
const greenEnd  = 'rgba(225, 242, 242, 0.9)';
const greenBorder = 'rgb(75, 192, 192)'; 


const backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(75, 192, 192, 0.2)',  // Verde
    'rgba(255, 205, 86, 0.2)',
    'rgba(201, 203, 207, 0.2)',
    'rgba(54, 162, 235, 0.2)',
]
const borderColor = [
    'rgb(255, 99, 132)',
    'rgb(75, 192, 192)',        // verde
    'rgb(255, 205, 86)',
    'rgb(201, 203, 207)',
    'rgb(54, 162, 235)',
]

// --------------------------------------

// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ColorIntensityBar = ({ percentage }) => {
//     const data = {
//         labels: ['Intensidad del Color'],
//         datasets: [
//             {
//                 label: 'Porcentaje',
//                 data: [percentage],
//                 backgroundColor: `hsl(${percentage * 1.2}, 100%, 50%)`, // Cambia de rojo a verde
//             }
//         ]
//     };

//     const options = {
//         indexAxis: 'y',  // Hace que la barra sea horizontal
//         plugins: {
//             legend: {
//                 display: false,  // Oculta la leyenda
//             },
//             tooltip: {
//                 enabled: false,  // Deshabilita los tooltips
//             }
//         },
//         scales: {
//             x: {
//                 display: false,  // Oculta la escala horizontal
//                 suggestedMax: 100  // Asegura que la escala máxima es 100
//             },
//             y: {
//                 display: false  // Oculta la escala vertical
//             }
//         },
//         maintainAspectRatio: false,  // Mantiene la barra completamente a lo largo del contenedor
//         responsive: true,
//     };

//     return (
//         <div style={{ width: '300px', height: '50px' }}>
//             <Bar data={data} options={options} />
//         </div>
//     );
// };

// // export default ColorIntensityBar;


// // import React from 'react';
// // import ColorIntensityBar from './ColorIntensityBar'; // Asegúrate de importar correctamente el componente

// const ReactChart5 = () => {
//     return (
//         <div>
//             <h3>Color Intensity Bar: 10%</h3>
//             <ColorIntensityBar percentage={10} />
//         </div>
//     );
// };

// export default ReactChart5;