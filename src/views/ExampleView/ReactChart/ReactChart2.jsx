// PolarAreaChart.js
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const ReactChart2 = () => {
    const data = {
        labels: ['Rojo', 'Verde', 'Amarillo', 'Gris', 'Azul'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Area Poar ejemplo de uso',
            },
        },
    };

    return <PolarArea data={data} options={options} />;
};

export default ReactChart2;