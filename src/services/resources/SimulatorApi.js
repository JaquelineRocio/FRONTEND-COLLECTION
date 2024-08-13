

// export default function SimulatorApi(value, setValue){
//     // const [data, setData] = useState(datos)
//     setTimeout(()=>{
//         // setData(data)
//         setValue(datos);
//     },5000);
   
// }

export default function SimulatorApi(time=2000, error=false){

    return new Promise((resolve, reject)=>{

        if(error){
            reject( new Error('Error simulado'))
        }
        setTimeout(()=>{
            resolve(datosVersionDos);
        },time);
    })
   
}


const datos = {
    "status": "success",
    "message": "Dashboard Prioridad",
    "data": {
        "registros": [
            {
                "cartera": "4",
                "subRegistros": [
                    {
                        "CodCartera": 4,
                        "DesCartera": "CASTIGO",
                        "Tipo": "1",
                        "Clientes": 8880,
                        "Cuentas": 44847,
                        "PorcentajeCuentasPorCartera": 1.0,
                        "SumatoriaCapitalMN": 370631782.8700,
                        "PorcentajeCapital": 1.0,
                        "PorcentajeCOB": 1.0,
                        "PorcentajeCTC": 1.0,
                        "#CTC": 44847,
                        "#CD": 44847,
                        "PorcentajeCD": 1.0,
                        "PorcentajeTC": 0.08658327201373558,
                        "#PDP": 3883,
                        "sumMontoPDP": null,
                        "IntTotal": 10.17,
                        "IntAgente": 10.17,
                        "IntCTC": 2.39,
                        "IntCD": 1.83,
                        "#PAGO": 0.0,
                        "SPAGO": 0.0,
                        "PorcentajeEficiencia": 0.0,
                        "TicketCapital": 8264.36,
                        "TicketPago": null,
                        "CalidadPDP": 0.0
                    }
                ],
                "total": [
                    {
                        "DesCartera": "CASTIGO",
                        "Clientes": 8880,
                        "Cuentas": 44847,
                        "porcentajeCuentas": "100%",
                        "capitalMN": 370631782.8700,
                        "PorcentajeCapital": "100%",
                        "COB": "100%",
                        "PorcentajeCTC": "100%",
                        "numCTC": 44847,
                        "numCD": 44847,
                        "PorcentajeCD": "100%",
                        "PorcentajeTC": "8.66%",
                        "numPDP": 3883,
                        "montoPDP": null,
                        "IntTotal": 10.17,
                        "IntAgente": 10.17,
                        "IntCTC": 2.39,
                        "IntCD": 1.83,
                        "numPagos": 0.0,
                        "solesPagos": 0.0,
                        "PorcentajeEficiencia": "0%",
                        "TicketCapital": 8264.36,
                        "TicketPago": null,
                        "porcentajeCalidadPDP": "0%"
                    }
                ]
            },
            {
                "cartera": "5",
                "subRegistros": [
                    {
                        "CodCartera": 5,
                        "DesCartera": "MIXTO",
                        "Tipo": "1",
                        "Clientes": 33,
                        "Cuentas": 195,
                        "PorcentajeCuentasPorCartera": 1.0,
                        "SumatoriaCapitalMN": 1673619.3100,
                        "PorcentajeCapital": 1.0,
                        "PorcentajeCOB": 1.0,
                        "PorcentajeCTC": 1.0,
                        "#CTC": 195,
                        "#CD": 195,
                        "PorcentajeCD": 1.0,
                        "PorcentajeTC": 0.2512820512820513,
                        "#PDP": 49,
                        "sumMontoPDP": null,
                        "IntTotal": 10.31,
                        "IntAgente": 10.31,
                        "IntCTC": 4.74,
                        "IntCD": 4.54,
                        "#PAGO": 0.0,
                        "SPAGO": 0.0,
                        "PorcentajeEficiencia": 0.0,
                        "TicketCapital": 8582.66,
                        "TicketPago": null,
                        "CalidadPDP": 0.0
                    }
                ],
                "total": [
                    {
                        "DesCartera": "MIXTO",
                        "Clientes": 33,
                        "Cuentas": 195,
                        "porcentajeCuentas": "100%",
                        "capitalMN": 1673619.3100,
                        "PorcentajeCapital": "100%",
                        "COB": "100%",
                        "PorcentajeCTC": "100%",
                        "numCTC": 195,
                        "numCD": 195,
                        "PorcentajeCD": "100%",
                        "PorcentajeTC": "25.13%",
                        "numPDP": 49,
                        "montoPDP": null,
                        "IntTotal": 10.31,
                        "IntAgente": 10.31,
                        "IntCTC": 4.74,
                        "IntCD": 4.54,
                        "numPagos": 0.0,
                        "solesPagos": 0.0,
                        "PorcentajeEficiencia": "0%",
                        "TicketCapital": 8582.66,
                        "TicketPago": null,
                        "porcentajeCalidadPDP": "0%"
                    }
                ]
            },
            {
                "cartera": "1011",
                "subRegistros": [
                    {
                        "CodCartera": 1011,
                        "DesCartera": "MONOPRODUCTO",
                        "Tipo": "1",
                        "Clientes": 2760,
                        "Cuentas": 17208,
                        "PorcentajeCuentasPorCartera": 1.0,
                        "SumatoriaCapitalMN": 134016827.5800,
                        "PorcentajeCapital": 1.0,
                        "PorcentajeCOB": 1.0,
                        "PorcentajeCTC": 1.0,
                        "#CTC": 17208,
                        "#CD": 17208,
                        "PorcentajeCD": 1.0,
                        "PorcentajeTC": 0.06462110646211065,
                        "#PDP": 1112,
                        "sumMontoPDP": null,
                        "IntTotal": 11.55,
                        "IntAgente": 11.55,
                        "IntCTC": 2.25,
                        "IntCD": 1.65,
                        "#PAGO": 0.0,
                        "SPAGO": 0.0,
                        "PorcentajeEficiencia": 0.0,
                        "TicketCapital": 7788.05,
                        "TicketPago": null,
                        "CalidadPDP": 0.0
                    }
                ],
                "total": [
                    {
                        "DesCartera": "MONOPRODUCTO",
                        "Clientes": 2760,
                        "Cuentas": 17208,
                        "porcentajeCuentas": "100%",
                        "capitalMN": 134016827.5800,
                        "PorcentajeCapital": "100%",
                        "COB": "100%",
                        "PorcentajeCTC": "100%",
                        "numCTC": 17208,
                        "numCD": 17208,
                        "PorcentajeCD": "100%",
                        "PorcentajeTC": "6.46%",
                        "numPDP": 1112,
                        "montoPDP": null,
                        "IntTotal": 11.55,
                        "IntAgente": 11.55,
                        "IntCTC": 2.25,
                        "IntCD": 1.65,
                        "numPagos": 0.0,
                        "solesPagos": 0.0,
                        "PorcentajeEficiencia": "0%",
                        "TicketCapital": 7788.05,
                        "TicketPago": null,
                        "porcentajeCalidadPDP": "0%"
                    }
                ]
            },
            {
                "cartera": "1012",
                "subRegistros": [
                    {
                        "CodCartera": 1012,
                        "DesCartera": "MULTIPRODUCTO",
                        "Tipo": "1",
                        "Clientes": 176,
                        "Cuentas": 1847,
                        "PorcentajeCuentasPorCartera": 1.0,
                        "SumatoriaCapitalMN": 13296534.6000,
                        "PorcentajeCapital": 1.0,
                        "PorcentajeCOB": 1.0,
                        "PorcentajeCTC": 1.0,
                        "#CTC": 1847,
                        "#CD": 1847,
                        "PorcentajeCD": 1.0,
                        "PorcentajeTC": 0.057390362750406064,
                        "#PDP": 106,
                        "sumMontoPDP": null,
                        "IntTotal": 10.28,
                        "IntAgente": 10.28,
                        "IntCTC": 1.18,
                        "IntCD": 0.86,
                        "#PAGO": 0.0,
                        "SPAGO": 0.0,
                        "PorcentajeEficiencia": 0.0,
                        "TicketCapital": 7198.99,
                        "TicketPago": null,
                        "CalidadPDP": 0.0
                    }
                ],
                "total": [
                    {
                        "DesCartera": "MULTIPRODUCTO",
                        "Clientes": 176,
                        "Cuentas": 1847,
                        "porcentajeCuentas": "100%",
                        "capitalMN": 13296534.6000,
                        "PorcentajeCapital": "100%",
                        "COB": "100%",
                        "PorcentajeCTC": "100%",
                        "numCTC": 1847,
                        "numCD": 1847,
                        "PorcentajeCD": "100%",
                        "PorcentajeTC": "5.74%",
                        "numPDP": 106,
                        "montoPDP": null,
                        "IntTotal": 10.28,
                        "IntAgente": 10.28,
                        "IntCTC": 1.18,
                        "IntCD": 0.86,
                        "numPagos": 0.0,
                        "solesPagos": 0.0,
                        "PorcentajeEficiencia": "0%",
                        "TicketCapital": 7198.99,
                        "TicketPago": null,
                        "porcentajeCalidadPDP": "0%"
                    }
                ]
            },
            {
                "cartera": "1023",
                "subRegistros": [],
                "total": []
            },
            {
                "cartera": "1024",
                "subRegistros": [
                    {
                        "CodCartera": 1024,
                        "DesCartera": "CASTIGO",
                        "Tipo": "1",
                        "Clientes": 984,
                        "Cuentas": 6279,
                        "PorcentajeCuentasPorCartera": 1.0,
                        "SumatoriaCapitalMN": 43010319.9600,
                        "PorcentajeCapital": 1.0,
                        "PorcentajeCOB": 1.0,
                        "PorcentajeCTC": 1.0,
                        "#CTC": 6279,
                        "#CD": 6279,
                        "PorcentajeCD": 1.0,
                        "PorcentajeTC": 0.061156235069278544,
                        "#PDP": 384,
                        "sumMontoPDP": null,
                        "IntTotal": 11.33,
                        "IntAgente": 11.33,
                        "IntCTC": 2.16,
                        "IntCD": 1.47,
                        "#PAGO": 0.0,
                        "SPAGO": 0.0,
                        "PorcentajeEficiencia": 0.0,
                        "TicketCapital": 6849.87,
                        "TicketPago": null,
                        "CalidadPDP": 0.0
                    }
                ],
                "total": [
                    {
                        "DesCartera": "CASTIGO",
                        "Clientes": 984,
                        "Cuentas": 6279,
                        "porcentajeCuentas": "100%",
                        "capitalMN": 43010319.9600,
                        "PorcentajeCapital": "100%",
                        "COB": "100%",
                        "PorcentajeCTC": "100%",
                        "numCTC": 6279,
                        "numCD": 6279,
                        "PorcentajeCD": "100%",
                        "PorcentajeTC": "6.12%",
                        "numPDP": 384,
                        "montoPDP": null,
                        "IntTotal": 11.33,
                        "IntAgente": 11.33,
                        "IntCTC": 2.16,
                        "IntCD": 1.47,
                        "numPagos": 0.0,
                        "solesPagos": 0.0,
                        "PorcentajeEficiencia": "0%",
                        "TicketCapital": 6849.87,
                        "TicketPago": null,
                        "porcentajeCalidadPDP": "0%"
                    }
                ]
            },
            {
                "cartera": "1025",
                "subRegistros": [],
                "total": []
            }
        ],
        "totalGeneral": [
            {
                "desCartera": "TOTAL GENERAL",
                "Clientes": 12783,
                "Cuentas": 70376,
                "porcentajeCuentas": "100%",
                "capitalMN": 562629084.3200,
                "PorcentajeCapital": "100%",
                "COB": 1.0,
                "PorcentajeCTC": "100%",
                "numCTC": 70376,
                "numCD": 70376,
                "PorcentajeCD": "100%",
                "PorcentajeTC": "7.86%",
                "numPDP": 5534,
                "montoPDP": null,
                "IntTotal": 10.61,
                "IntAgente": 10.61,
                "IntCTC": 2.31,
                "IntCD": 1.73,
                "numPagos": 0.0,
                "solesPagos": 0.0,
                "PorcentajeEficiencia": "0%",
                "TicketCapital": 7994.62,
                "TicketPago": null,
                "porcentajeCalidadPDP": "0%"
            }
        ]
    }
}

const datosVersionDos = {
    "status": "success",
    "message": "Dashboard Prioridad",
    "data": {
        "registros": [
            {
                "cartera": "4",
                "subRegistros": [
                    {
                        "codCartera": 1024,
                        "desCartera": "CASTIGO",
                        "codTipo": "1",
                        "clientes": 971,
                        "cuentas": 5916,
                        "porcentajeCuentas": "3.94%",
                        "capitalMN": 40371345.8400,
                        "porcentajeCapital": "3.67%",
                        "porcentajeCtc": "100.00%",
                        "numCtc": 5916,
                        "numCd": 5916,
                        "porcentajeCd": "100.00%",
                        "porcentajeTc": "6.29%",
                        "numPDP": 0,
                        "montoPDP": 0,
                        "intTotal": 11.47,
                        "intAgente": 11.47,
                        "intCTC": 2.23,
                        "intCD": 1.526369168356998,
                        "solesPagos": 591600.0,
                        "numPagos": 17748.0,
                        "porcentajeEficiencia": "1.47%",
                        "ticketCapital": 6824.09,
                        "ticketPago": 33.33,
                        "porcentajeCalidadPDP": "0.00%",
                        "cob": "100.00%"
                    }
                ],
                "total": [
                    {
                        "desCartera": "CASTIGO",
                        "clientes": 971,
                        "cuentas": 5916,
                        "porcentajeCuentas": "3.94%",
                        "capitalMN": 40371345.8400,
                        "porcentajeCapital": "3.67%",
                        "porcentajeCtc": "100.00%",
                        "numCtc": 971,
                        "numCd": 971,
                        "porcentajeCd": "100.00%",
                        "porcentajeTc": "0.00%",
                        "numPDP": 0,
                        "montoPDP": 0,
                        "intTotal": 1.0,
                        "intAgente": 0.06288032454361055,
                        "intCTC": 0,
                        "intCD": 0,
                        "numPagos": 11.46,
                        "solesPagos": 11.46,
                        "porcentajeEficiencia": "1146.00%",
                        "ticketCapital": 2.22,
                        "ticketPago": 1.526369168356998,
                        "porcentajeCalidadPDP": "59160000.00%",
                        "cob": "3.67%"
                    }
                ]
            },
            {
                "cartera": "5",
                "subRegistros": [
                    {
                        "codCartera": 1011,
                        "desCartera": "MONOPRODUCTO",
                        "codTipo": "1",
                        "clientes": 2756,
                        "cuentas": 17152,
                        "porcentajeCuentas": "11.43%",
                        "capitalMN": 133332496.5400,
                        "porcentajeCapital": "12.12%",
                        "porcentajeCtc": "100.00%",
                        "numCtc": 17152,
                        "numCd": 17152,
                        "porcentajeCd": "100.00%",
                        "porcentajeTc": "6.19%",
                        "numPDP": 0,
                        "montoPDP": 0,
                        "intTotal": 11.53,
                        "intAgente": 11.53,
                        "intCTC": 2.25,
                        "intCD": 1.6428987873134329,
                        "solesPagos": 1715200.0,
                        "numPagos": 51456.0,
                        "porcentajeEficiencia": "1.29%",
                        "ticketCapital": 7773.58,
                        "ticketPago": 33.33,
                        "porcentajeCalidadPDP": "0.00%",
                        "cob": "100.00%"
                    }
                ],
                "total": [
                    {
                        "desCartera": "MONOPRODUCTO",
                        "clientes": 2756,
                        "cuentas": 17152,
                        "porcentajeCuentas": "11.43%",
                        "capitalMN": 133332496.5400,
                        "porcentajeCapital": "12.12%",
                        "porcentajeCtc": "100.00%",
                        "numCtc": 2756,
                        "numCd": 2756,
                        "porcentajeCd": "100.00%",
                        "porcentajeTc": "0.00%",
                        "numPDP": 0,
                        "montoPDP": 0,
                        "intTotal": 1.0,
                        "intAgente": 0.061916977611940295,
                        "intCTC": 0,
                        "intCD": 0,
                        "numPagos": 11.52,
                        "solesPagos": 11.52,
                        "porcentajeEficiencia": "1152.00%",
                        "ticketCapital": 2.24,
                        "ticketPago": 1.6428987873134329,
                        "porcentajeCalidadPDP": "171520000.00%",
                        "cob": "12.12%"
                    }
                ]
            },
            {
                "cartera": "1011",
                "subRegistros": [
                    {
                        "codCartera": 1012,
                        "desCartera": "MULTIPRODUCTO",
                        "codTipo": "1",
                        "clientes": 145,
                        "cuentas": 826,
                        "porcentajeCuentas": "0.55%",
                        "capitalMN": 5343228.7600,
                        "porcentajeCapital": "0.49%",
                        "porcentajeCtc": "100.00%",
                        "numCtc": 826,
                        "numCd": 826,
                        "porcentajeCd": "100.00%",
                        "porcentajeTc": "8.84%",
                        "numPDP": 0,
                        "montoPDP": 0,
                        "intTotal": 10.59,
                        "intAgente": 10.59,
                        "intCTC": 1.2,
                        "intCD": 0.923728813559322,
                        "solesPagos": 82600.0,
                        "numPagos": 2478.0,
                        "porcentajeEficiencia": "1.55%",
                        "ticketCapital": 6468.8,
                        "ticketPago": 33.33,
                        "porcentajeCalidadPDP": "0.00%",
                        "cob": "100.00%"
                    }
                ],
                "total": [
                    {
                        "desCartera": "MULTIPRODUCTO",
                        "clientes": 145,
                        "cuentas": 826,
                        "porcentajeCuentas": "0.55%",
                        "capitalMN": 5343228.7600,
                        "porcentajeCapital": "0.49%",
                        "porcentajeCtc": "100.00%",
                        "numCtc": 145,
                        "numCd": 145,
                        "porcentajeCd": "100.00%",
                        "porcentajeTc": "0.00%",
                        "numPDP": 0,
                        "montoPDP": 0,
                        "intTotal": 1.0,
                        "intAgente": 0.08837772397094432,
                        "intCTC": 0,
                        "intCD": 0,
                        "numPagos": 10.59,
                        "solesPagos": 10.59,
                        "porcentajeEficiencia": "1059.00%",
                        "ticketCapital": 1.2,
                        "ticketPago": 0.923728813559322,
                        "porcentajeCalidadPDP": "8260000.00%",
                        "cob": "0.49%"
                    }
                ]
            },
            {
                "cartera": "1012",
                "subRegistros": [
                    {
                        "codCartera": 4,
                        "desCartera": "CASTIGO",
                        "codTipo": "1",
                        "clientes": 8879,
                        "cuentas": 44685,
                        "porcentajeCuentas": "29.79%",
                        "capitalMN": 369352605.1100,
                        "porcentajeCapital": "33.58%",
                        "porcentajeCtc": "100.00%",
                        "numCtc": 44685,
                        "numCd": 44685,
                        "porcentajeCd": "100.00%",
                        "porcentajeTc": "8.55%",
                        "numPDP": 0,
                        "montoPDP": 0,
                        "intTotal": 10.16,
                        "intAgente": 10.16,
                        "intCTC": 2.37,
                        "intCD": 1.8157099697885197,
                        "solesPagos": 4468500.0,
                        "numPagos": 134055.0,
                        "porcentajeEficiencia": "1.21%",
                        "ticketCapital": 8265.7,
                        "ticketPago": 33.33,
                        "porcentajeCalidadPDP": "0.00%",
                        "cob": "100.00%"
                    }
                ],
                "total": [
                    {
                        "desCartera": "CASTIGO",
                        "clientes": 8879,
                        "cuentas": 44685,
                        "porcentajeCuentas": "29.79%",
                        "capitalMN": 369352605.1100,
                        "porcentajeCapital": "33.58%",
                        "porcentajeCtc": "100.00%",
                        "numCtc": 8879,
                        "numCd": 8879,
                        "porcentajeCd": "100.00%",
                        "porcentajeTc": "0.00%",
                        "numPDP": 0,
                        "montoPDP": 0,
                        "intTotal": 1.0,
                        "intAgente": 0.08546492111446795,
                        "intCTC": 0,
                        "intCD": 0,
                        "numPagos": 10.15,
                        "solesPagos": 10.15,
                        "porcentajeEficiencia": "1015.00%",
                        "ticketCapital": 2.37,
                        "ticketPago": 1.8157099697885197,
                        "porcentajeCalidadPDP": "446850000.00%",
                        "cob": "33.58%"
                    }
                ]
            },
            {
                "cartera": "1023",
                "subRegistros": [],
                "total": []
            }
        ],
        "totalGeneral": [
            {
                "desCartera": "TOTAL GENERAL",
                "clientes": 12784,
                "cuentas": 68774,
                "porcentajeCuentas": "45.85%",
                "capitalMN": 550073295.5600,
                "porcentajeCapital": "50.01%",
                "porcentajeCtc": "100.00%",
                "numCtc": 68774,
                "numCd": 68774,
                "porcentajeCd": "100.00%",
                "porcentajeTc": "7.82%",
                "numPDP": 0,
                "montoPDP": 0,
                "intTotal": 10.62,
                "intAgente": 10.62,
                "intCTC": 2.32,
                "intCD": 1.744729112746096,
                "numPagos": 6877400.0,
                "solesPagos": 206322.0,
                "porcentajeEficiencia": "1.25%",
                "ticketCapital": 7998.27,
                "ticketPago": 33.33,
                "porcentajeCalidadPDP": "0.00%",
                "cob": "100.00%"
            }
        ]
}
}