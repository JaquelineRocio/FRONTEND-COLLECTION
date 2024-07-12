

import SelectTailwind from "../../../ExampleView/SelectTailwind";
// import CustomAccordionElement from "./components/CustomAccordionElement";
import { IoAddCircle } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { unauthenticatedUser } from "../../../../store/authSlice";
import swal from "sweetalert";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    // Select,
    // Option,
  } from "@material-tailwind/react";
import TableTailwind from "../../../ExampleView/TableTailwind";
import { Api } from "../../../../services/Api";
import { Link } from "react-router-dom";
// import SelectTailwindTwo from "../../../ExampleView/SelectTailwindTwo";


const SidebarDashboardView = () => {
    const [open, setOpen] = useState(true);
    const [firstTableOpen, setFirstTableOpen] = useState(false);
    const [secondTableOpen, setSecondTableOpen] = useState(false);
    const [groupOfTables, setGroupOfTables] = useState(false);
    const [response, setResponse] = useState([]);
    // const [firstTableData, setFirstTableData] = useState([]);

    const [optionsEntidad, setOptionsEntidad] = useState([]);
    const [optionsCartera, setOptionsCartera] = useState([]);
    const [optionsMes, setOptionsMes] = useState([]);
    const [optionsPrioridad, setOptionsPrioridad] = useState([]);
    const [optionsMoneda, setOptionsMoneda] = useState([]);
    const [optionsProducto, setOptionsProducto] = useState([]);

    const [selectEntidad, setSelectEntidad] = useState(null);
    const [selectCartera, setSelectCartera] = useState(null);
    const [selectMes, setSelectMes] = useState(null);

    const [selectPrioridad, setSelectPrioridad] = useState(null);
    const [selectMoneda, setSelectMoneda] = useState(null);
    const [selectProducto, setSelectProducto] = useState(null);
    const dispatch = useDispatch();


    function handleOpen(){
        setOpen(open==true?false:true);
    }

    async function handleGroupTables(){
        const data = {
            codEntidad: selectEntidad,    // Filtro funcionando    
            codCartera: selectCartera,    // Filtro funcionando
            mesAsignacion: selectMes,     // Envia dato a backend pero no filtra
            codPrioridad: selectPrioridad,// Filtro funcionando
            codMoneda: selectMoneda,      // No existe tabla
            codProducto: selectProducto,  // No existe tabla
          };
        // setFirstTableData(Data);

        console.log("Datos de primera tabla:",data);
        try{
            const response = await Api.post(data,'/admin/tablon/filtros')
            setResponse(response);
            setGroupOfTables(true);     // Mostramos grupo de tablas
            setFirstTableOpen(true);
            console.log('SUCCESS_SDW02');
        }catch(error){
            console.error('ERROR_SDV02', error);
            if (error.message === 'Token expired') {
                // swal("Su sesión ha expirado. Por favor, inicie sesión nuevamente para continuar.");
                // dispatch(unauthenticatedUser());
                swal({
                    title: "Sesión Expirada",
                    text: "Su sesión ha expirado. Por favor, inicie sesión nuevamente para continuar.",
                    icon: "warning",
                    button: "OK"
                }).then(() => {
                    dispatch(unauthenticatedUser());
                });
            }
        }

        setGroupOfTables(true);

    }


    function handleFirstTable(){
        // setFirstTableOpen(valorEntrante==tableOneOpen?0:valorEntrante);
        setFirstTableOpen(firstTableOpen==true?false:true);
    }

    function handleSecondTable(){
        // setTableOneOpen(valorEntrante==tableOneOpen?0:valorEntrante);
        setSecondTableOpen(secondTableOpen==true?false:true);
    }

    // async function loadSelects(){

    //     try{
    //         const response = await Api.get('/entidad')
    //         const renamedOptions = response.map(option => ({
    //             value: option.codEntidad.toString(),
    //             label: option.desEntidad
    //           }));
    //           setOptionsEntidad(renamedOptions);

    //     }catch(error){
    //         console.error('Error en la petición:', error);
    //     }

    //     // try{
    //     //     const response = await Api.get('/cartera')
    //     //     const renamedOptions = response.map(option => ({
    //     //         value: option.codCartera.toString(),
    //     //         label: option.desCartera
    //     //       }));
    //     //     setOptionsCartera(renamedOptions);

    //     // }catch(error){
    //     //     console.error('Error en la petición:', error);
    //     // }

    //     // try{
    //     //     const response = await Api.get('/prioridad')
    //     //     const renamedOptions = response.map(option => ({
    //     //         value: option.codPrioridad.toString(),
    //     //         label: option.desPrioridad
    //     //       }));
    //     //       setOptionsPrioridad(renamedOptions);
    //     // }catch(error){
    //     //     console.error('Error en la petición:', error);
    //     // }

    //     // try{
    //     //     const response = await Api.get('/prioridad')
    //     //     const renamedOptions = response.map(option => ({
    //     //         value: option.codPrioridad.toString(),
    //     //         label: option.desPrioridad
    //     //       }));
    //     //       setOptionsPrioridad(renamedOptions);
    //     // }catch(error){
    //     //     console.error('Error en la petición:', error);
    //     // }

    //     // try{
    //     //     const response = await Api.get('/producto')
    //     //     const renamedOptions = response.map(option => ({
    //     //         value: option.codProducto.toString(),
    //     //         label: option.desProducto
    //     //       }));
    //     //       setOptionsProducto(renamedOptions);
    //     // }catch(error){
    //     //     console.error('Error en la petición:', error);
    //     // }

    //     setOptionsMes([
    //     { value: '1', label: 'Enero' },
    //     { value: '2', label: 'Febrero' },
    //     { value: '3', label: 'Marzo' },
    //     { value: '4', label: 'Abril' },
    //     { value: '5', label: 'Mayo' },
    //     { value: '6', label: 'Junio' },
    //     { value: '7', label: 'Julio' },
    //     { value: '8', label: 'Agosto' },
    //     { value: '9', label: 'Setiembre' },
    //     { value: '10', label: 'Octubre' },
    //     { value: '11', label: 'Noviembre' },
    //     { value: '12', label: 'Diciembre' },
    //     ]);
    // }

    async function loadSelects() {
        try {
          const [entidadResponse, carteraResponse, prioridadResponse, productoResponse, monedaResponse] = await Promise.all([
            Api.get('/entidad'),
            Api.get('/cartera'),
            Api.get('/prioridad'),
            Api.get('/producto'),
            Api.get('/moneda')
          ]);
      
          const entidadOptions = entidadResponse.map(option => ({
            value: option.codEntidad.toString(),
            label: option.desEntidad
          }));
      
          const carteraOptions = carteraResponse.map(option => ({
            value: option.codCartera.toString(),
            label: option.desCartera
          }));
      
          const prioridadOptions = prioridadResponse.map(option => ({
            value: option.codPrioridad.toString(),
            label: option.desPrioridad
          }));
      
          const productoOptions = productoResponse.map(option => ({
            value: option.codProducto.toString(),
            label: option.desProducto
          }));

          const monedaOptions = monedaResponse.map(option => ({
            value: option.codMoneda.toString(),
            label: option.desMoneda
          }));
      
          setOptionsEntidad(entidadOptions);
          setOptionsCartera(carteraOptions);
          setOptionsPrioridad(prioridadOptions);
          setOptionsProducto(productoOptions);
          setOptionsMoneda(monedaOptions);
      
          setOptionsMes([
            { value: '1', label: 'Enero' },
            { value: '2', label: 'Febrero' },
            { value: '3', label: 'Marco' },
            { value: '4', label: 'Abril' },
            { value: '5', label: 'Mayo' },
            { value: '6', label: 'Junio' },
            { value: '7', label: 'Julio' },
            { value: '8', label: 'Agosto' },
            { value: '9', label: 'Setiembre' },
            { value: '10', label: 'Octubre' },
            { value: '11', label: 'Noviembre' },
            { value: '12', label: 'Diciembre' },

          ]);
          console.log('SUCCESS_SDW01');
        } catch (error) {
          console.error('ERROR_SDV01', error);
            if (error.message === 'Token expired') {
                // swal("Su sesión ha expirado. Por favor, inicie sesión nuevamente para continuar.");
                // dispatch(unauthenticatedUser());
                swal({
                    title: "Sesión Expirada",
                    text: "Su sesión ha expirado. Por favor, inicie sesión nuevamente para continuar.",
                    icon: "warning",
                    button: "OK"
                }).then(() => {
                    dispatch(unauthenticatedUser());
                });
            }
        }
    }

    useEffect(() => {
        loadSelects();
    }, []);

    function cleanSearch(){
        setSelectEntidad(null); 
        setSelectCartera(null); 
        setSelectMes(null);     
        setSelectPrioridad(null);
        setSelectMoneda(null);
        setSelectProducto(null);
    }
    

    return(
        <>

            <div className="m-6 flex">
                <div className="text-blue-600 p-2 mr-2 font-bold place-content-center transition-colors hover:text-blue-900 hover:bg-blue-100/50 rounded">
                    {/* <a href="#">Volver</a> */}
                    <Link to="/">Volver</Link>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Dashboard de Gestión</h1>
                    <p className="text-gray-500">Revisemos cómo ha ido la Gestión...</p>
                </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-md rounded-md  shadow-black/5 m-6">
                <div className="pt-2 rounded border-b-0 mb-4 mt-4 text-gray-900 text-md flex justify-center font-bold">
                    Filtros
                </div>


                <div className="mb-2  px-4">

                    <div className={`border-b-0 mb-4 mt-4 transition-colors text-indigo-900 hover:text-blue-700 text-md font-bold`}>
                    Filtros generales
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2   mb-4 text-base font-normal text-gray-700">
                    {/* <SelectTailwind option={optionsEntidad}  valor={valor} setValor={setValor} /> */}

                    {/* <button  className="bg-red-400" onClick={handleOptions}>presiona</button> */}
                        <SelectTailwind label="Seleccione Una entidad" llave="1" options={optionsEntidad}   valor={selectEntidad} setValor={setSelectEntidad}/>
                        <SelectTailwind label="Seleccione una Cartera" llave="2" options={optionsCartera}   valor={selectCartera} setValor={setSelectCartera}/>
                        <SelectTailwind label="Seleccione un mes"      llave="3" options={optionsMes}       valor={selectMes}  setValor={setSelectMes} />


                    </div>

                    <div className={` border-b-0 mb-4 mt-4 transition-colors text-indigo-900 hover:text-blue-700 text-md font-bold flex `} onClick={handleOpen}>
                        Filtros Específicos
                        <IoMdRemoveCircle className={`mt-0.5 ml-2 text-xl ${open==true?'hidden':''}`}/>
                        <IoAddCircle className={`mt-0.5 ml-2 text-xl  ${open==true?'':'hidden'}`}/>
                    </div>


                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2   mb-4 text-base font-normal text-gray-700 ${open==true?'hidden':''}`}>
                    <SelectTailwind label="Seleccione Prioridad"    llave="4" options={optionsPrioridad} valor={selectPrioridad}  setValor={setSelectPrioridad} />
                        <SelectTailwind label="Seleccione Moneda"   llave="5" options={optionsMoneda}    valor={selectMoneda}  setValor={setSelectMoneda} />
                        <SelectTailwind label="Seleccione Producto" llave="6" options={optionsProducto}  valor={selectProducto}  setValor={setSelectProducto} />
                        {/* <SelectTailwind label="Seleccione Una entidad"/>
                        <SelectTailwind label="Seleccione una Cartera"/>
                        <SelectTailwind label="Seleccione un mes"/>
                        <SelectTailwind label="Seleccione una Cartera"/>
                        <SelectTailwind label="Seleccione una Cartera"/>
                        <SelectTailwind label="Seleccione una Cartera"/> */}
                    </div>


                    <div className="mt-8  mb-4 text-gray-700 gap-2 text-right">
                        <button
                            className="mr-2 border-1 border-gray-500 shadow-md shadow-black/30 align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-6 rounded-lg bg-gray-[#f1f5f9] text-gray shadow-md shadow-gray-[#f1f5f9]/10 hover:shadow-lg hover:shadow-[#f1f5f9]-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                            type="button"
                            onClick={cleanSearch}
                        >
                            Limpiar búsqueda
                        </button>
                        <button
                            className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-6 rounded-lg bg-indigo-900 text-white shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button"
                            onClick={handleGroupTables}
                        >
                            Buscar
                        </button>
                    </div>
                    
                </div>

            </div>
            {/* <div className={`border-b-0 mb-4 mt-4 transition-colors text-indigo-900 hover:text-blue-700 text-md font-bold`}> */}
                         
            <div className={`bg-white border border-gray-100 shadow-md rounded-md  shadow-black/5 m-6 ${groupOfTables==false?'hidden':''}`}>
            <Accordion open={firstTableOpen} className="mb-2 px-4">
                <AccordionHeader
                onClick={handleFirstTable}
                className={`border-b-0 transition-colors text-indigo-900 text-md ${
                    firstTableOpen ? "text-blue-900 hover:!text-blue-700 text-md" : ""
                }`}
                >
                Dashboard de Estado General de Cartera del mes X
                </AccordionHeader>

                <AccordionBody className="pt-0 text-base font-normal">
                    <TableTailwind
                    tableRows={response}
                    />
                </AccordionBody>
            </Accordion>

            <Accordion open={secondTableOpen} className="mb-2 px-4">
                <AccordionHeader
                onClick={handleSecondTable}
                className={`border-b-0 transition-colors text-indigo-900 text-md ${
                    secondTableOpen? "text-blue-900 hover:!text-blue-700 text-md" : ""
                }`}
                >
                Dashboard de Situación de Cartera Según Prioridad
                </AccordionHeader>

                <AccordionBody className="pt-0 text-base font-normal">
                    <TableTailwind/>
                </AccordionBody>
            </Accordion>
            </div>

        </>
    )
}

export default SidebarDashboardView;


