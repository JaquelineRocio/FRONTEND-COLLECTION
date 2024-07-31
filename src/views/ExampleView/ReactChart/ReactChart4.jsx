import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const ReactChart4 = () => {
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

    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [{
            label: 'Ejemplo de datos',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
    };

    return (
        <div ref={chartContainerRef} style={{ height: '400px', width: '100%' }}>
            <Bar ref={chartInstanceRef} data={data} options={options} />
        </div>
    );
};

export default ReactChart4;
