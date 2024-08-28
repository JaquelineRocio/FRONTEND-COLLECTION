// import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import ReactExcelData from './ReactExcelData';

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

const dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remaining: 16
    },
    {
        name: "Josef",
        total: 25,
        remaining: 7
    }
];



// (01): Descarga excel en dos hojas
const DescargarExcelDosHojas = () => {

    // Creamos las hojas
    const ws1 = XLSX.utils.json_to_sheet(dataSet1);
    const ws2 = XLSX.utils.json_to_sheet(dataSet2);

    // Creamos un libro
    const wb = XLSX.utils.book_new();

    // Añadimos las hojas al libro
    XLSX.utils.book_append_sheet(wb, ws1, "Employees");
    XLSX.utils.book_append_sheet(wb, ws2, "Leaves");

    // Creamos el archivo para exportar (wbout es un excel en formato binario)
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    // Descargamos propiamente el archivo
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'export.xlsx');
}

// Convierte cadena binaria a un ArrayBuffer
function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

// (02): Descarga excel en una sola hoja
const DescargarExcelUnaSolaHoja = () => {

    // Filas que dan informacion sobre filtros usados
    const worksheetData = [
        ["Filtros específicos"], // Título
        [],
        ["Producto", "Rango de Campaña", "Macroregiones"], // Encabezados de filtros
        ["dfsdf", "sdfsdf", "sdfsdf"], // Valores de filtros
        [],
        ["Año Castigo", "Moneda", "Estado de Cuenta"],
        ["2024", "sol", "Invalida"],
        [],
        ["Mes Castigo", "Prioridad", "Rango de Edad"],
        ["Febrero", "Alta", "30-32"],
        [],
        [], // Espacio en blanco entre filtros y tabla
        ["Datos de cuentas del generadas para el"], // Título de la tabla
        [],
        ["Tipo de documento", "Número de documento", "Número de cuenta", "Capital", "Rango de Campaña", "Campaña"], // Encabezados de la tabla

        // Añadir más filas de datos aquí según sea necesario
    ];

    const data = [
        {
            "Tipo de documento": "DNI",
            "Número de documento": 100219,
            "Número de cuenta": "007617684205",
            "Capital": 3018.9200,
            "Rango de Campaña": "Otro",
            "Campaña": null
        },
        {
            "Tipo de documento": "DNI",
            "Número de documento": 65244,
            "Número de cuenta": "000001152802",
            "Capital": 2943.0900,
            "Rango de Campaña": "Otro",
            "Campaña": null
        },
        {
            "Tipo de documento": "DNI",
            "Número de documento": 85646,
            "Número de cuenta": "208883855276",
            "Capital": 4824.4200,
            "Rango de Campaña": "Otro",
            "Campaña": null
        },
    ]

    // Convertimos el array de objetos `data` a un array de arrays compatible con `worksheetData`
    // const dataRows = data.map(row => [
    const dataRows = ReactExcelData.data.map(row => [
        row["Tipo de documento"] || "-",
        row["Número de documento"] || "-",
        row["Número de cuenta"] || "-",
        row["Capital"] || "-",
        row["Rango de Campaña"] || "-",
        row["Campaña"] || "-"
    ]);

    // Unimos `worksheetData` con `dataRows`
    const combinedData = worksheetData.concat(dataRows);

    // Creamos la hoja
    const ws = XLSX.utils.aoa_to_sheet(combinedData);
    // const ws = XLSX.utils.json_to_sheet(ReactExcelData.data);

    // Ajustar el ancho de las columnas
    const columnWidths = [
        { wch: 20 }, // Ancho para la primera columna
        { wch: 25 }, // Ancho para la segunda columna
        { wch: 30 }, // Ancho para la tercera columna
        { wch: 20 }, // Ancho para la cuarta columna
        { wch: 15 }, // Ancho para la quinta columna
        { wch: 20 }, // Ancho para la sexta columna
        { wch: 20 }, // Ancho para la séptima columna
    ];

    // Insertamos la informacion de ancho de las columnas a la hoja
    ws['!cols'] = columnWidths;

    // Unir celdas y centrar el contenido - s(start), e(end), r(row), c(col)
    ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }, // Unir celdas para "Filtros específicos"
        { s: { r: 10, c: 0 }, e: { r: 10, c: 2 } }, // Unir celdas para "Datos de cuentas del generadas para el"
    ];

    // Aplicar estilos a los encabezados
    // const headerStyle = {
    //     font: { bold: true },
    //     fill: { fgColor: { rgb: "D3D3D3" } }, // Color gris claro de fondo
    //     alignment: { horizontal: "center" }
    // };

    // // Verificación y aplicación de estilos
    // const headerCells = ['A3', 'B3', 'C3', 'A11', 'B11', 'C19', 'D19', 'E19', 'F19', 'G19'];
    // headerCells.forEach(cell => {
    //     if (ws[cell]) {
    //         ws[cell].s = headerStyle;
    //     }
    // });


    // Crear un nuevo libro de Excel
    const wb = XLSX.utils.book_new();

    // Añadimos la hola al libro
    XLSX.utils.book_append_sheet(wb, ws, "Hoja 1");

    // Creamos el archivo para exportar (wbout es un excel en formato binario) || Exportar el libro a un archivo
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    // Descargamos propiamente el archivo
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'export.xlsx');
}


const ReactExcel = () => {
    return (
        <>
        <div className="hover:bg-gray-200 cursor-pointer p-4">
            <h3 onClick={DescargarExcelDosHojas}>Excel - Dos hojas</h3>
        </div>
        <div className="hover:bg-gray-200 cursor-pointer p-4">
            <h3 onClick={DescargarExcelUnaSolaHoja}> Excel - Una Hoja </h3>
        </div>
        </>
    );
}

export default ReactExcel;