// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: 'rgba(75, 192, 192, 0.6)',
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

// const ReactChart3 = () => (
//   <div>
//     <Bar data={data} options={options} />
//   </div>
// );

// export default ReactChart3;




import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { useEffect, useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

const ReactChart3 = () => {

  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
      const resizeObserver = new ResizeObserver(entries => {
          for (let entry of entries) {
              const { width, height } = entry.contentRect;
              chartInstanceRef.current.resize(width, height);
          }
      });

      if (chartContainerRef.current) {
          resizeObserver.observe(chartContainerRef.current);
      }

      return () => {
          if (chartContainerRef.current) {
              resizeObserver.unobserve(chartContainerRef.current);
          }
      };
  }, []);

  
  return(
    <div ref={chartContainerRef} style={{ height: '100%', width: '100%' }}>
    <Line ref={chartInstanceRef} data={midata} options={misoptions}></Line>
    </div>
  )

};

export default ReactChart3;

let beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

let midata = {
  labels: meses,
  datasets: [
    {
      label: 'Beneficios',
      data: beneficios,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(255,99,132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointRadius: 5,
      pointBorderColor: 'rgba(255, 99, 132)',
      pointBackgroundColor: 'rgba(255, 99, 132)'
    },
  ]
}

let misoptions = {
  maintainAspectRatio: true,
  responsive: true,
}