import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

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

class Download extends React.Component {
    exportToExcel = () => {
        const ws1 = XLSX.utils.json_to_sheet(dataSet1);
        const ws2 = XLSX.utils.json_to_sheet(dataSet2);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws1, "Employees");
        XLSX.utils.book_append_sheet(wb, ws2, "Leaves");
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
        function s2ab(s) {
            const buf = new ArrayBuffer(s.length);
            const view = new Uint8Array(buf);
            for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'export.xlsx');
    }

    render() {
        return (
            <button onClick={this.exportToExcel}>Exportar Excel</button>
        );
    }
}

const ReactExcel = () => {
    return (
        <div>
            <h3>Estamos en exportacion de excel</h3>
            <Download />
        </div>
    );
}

export default ReactExcel;
