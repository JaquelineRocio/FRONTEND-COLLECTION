import SelectTailwind from "../../../ExampleView/SelectTailwind";
import { IoAddCircle } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";
import { useEffect, useState, createRef  } from "react";
import { useDispatch } from "react-redux";
import { unauthenticatedUser } from "../../../../store/authSlice";
import swal from "sweetalert";
import Swal from 'sweetalert2';

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
// import TableTailwind from "../../../ExampleView/TableTailwind";
import { Api } from "../../../../services/Api";
import { Link } from "react-router-dom";
import TablaCarteraPorTramoDeImporte from "./components/Tabla03CarteraPorTramoDeImporte";
import Tabla01EstadoGeneralDeCartera from "./components/Tabla01EstadoGeneralDeCartera";
import Tabla02SituacionDeCarteraSegunPrioridad from "./components/Tabla02SituacionDeCarteraSegunPrioridad";
import Tabla03CarteraPorTramoDeImporte from "./components/Tabla03CarteraPorTramoDeImporte";
import Tabla04CarteraPorRangoDeMaduracion from "./components/Tabla04CarteraPorRangoDeMaduracion";
import Tabla05CarteraPorAnioMesDeCastigo from "./components/Tabla05CarteraPorAnioMesDeCastigo";
import Tabla06PorRangoDeCampanha from "./components/Tabla06PorRangoDeCampanha";
import Tabla07CarteraPorTipoDeProducto from "./components/Tabla07CarteraPorTipoDeProducto";
import Tabla08CarteraPorZona from "./components/Tabla08CarteraPorZona";

import SelectElementSecondVersion from "./components/SelectElementSecondVersion";
import GridLoader from "react-spinners/GridLoader";
import filtro from '../../../../../public/filtro.svg';
import ComponenteFecha from "../../../../components/ComponenteFecha";
import ComponenteFechaDos from "../../../../components/ComponenteFechaDos";




const SidebarDashboardView = () => {
    const [open, setOpen] = useState(true);
    const [firstTableOpen, setFirstTableOpen] = useState(false);
    const [secondTableOpen, setSecondTableOpen] = useState(false);
    const [thirdTableOpen, setThirdTableOpen] = useState(false);
    const [fourthTableOpen, setFourthTableOpen] = useState(false);
    const [fifthTableOpen, setFifthTableOpen] = useState(false);
    const [sixthTableOpen, setSixthTableOpen] = useState(false);
    const [seventhTableOpen, setSeventhTableOpen] = useState(false);
    const [octaveTableOpen, setOctaveTableOpen] = useState(false);

    const [groupOfTables, setGroupOfTables] = useState(false);
    const [spinnerShowGroupTables , setSpinnerShowGroupTables] = useState(false);
    const [response, setResponse] = useState([]);

    const [registroPrimeraTabla, setRegistroPrimeraTabla] = useState([]);
    const [registroSegundaTabla, setRegistroSegundaTabla] = useState([]);
    const [registroTerceraTabla, setRegistroTerceraTabla] = useState([]);
    const [registroCuartaTabla,  setRegistroCuartaTabla] = useState([]);
    const [registroQuintaTabla,  setRegistroQuintaTabla] = useState([]);
    const [registroSextaTabla,   setRegistroSextaTabla] = useState([]);
    const [registroSetimaTabla,   setRegistroSetimaTabla] = useState([]);
    const [registroOctavaTabla,   setRegistroOctavaTabla] = useState([]);

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
    const [limpiarSegundoSelect, setLimpiarSegundoSelect] = useState(false);
    const [urlSecondTable, setUrlSecondTable] = useState(false);
    const [loadingAllTable, setLoadingAllTable] = useState(false);


    function handleOpen(){
        setOpen(open==true?false:true);
    }

    async function handleGroupTables(){
        console.log(selectPrioridad);
        setSpinnerShowGroupTables(true);
        setLoadingAllTable(true);
        if(!selectEntidad || !selectCartera || selectCartera.length === 0 || !selectMes){
            console.log("hay parametros vacios");
                // alert("Tu sesión ha iniciado correctamente");
                Swal.fire({
                  position: "top-end",
                //   icon: "success",
                  title: "Necesario",
                  text: 'Debe seleccionar por lo menos un valor para "Entidad", "Cartera" y "Mes".',
                  showConfirmButton: false,
                  timer: 3000
                });
                setSpinnerShowGroupTables(false);
                setLoadingAllTable(false);
            return true;
        }

        try{
            
            const codCarteras = selectCartera?.map(item => item.value).join(',') || null;
            const codPrioridad = selectPrioridad?.map(item => item.value).join(',') || null;


            const data = {
                "producto": null,
                "campaña": null,
                "macroRegiones": null,
                "añoCastigo": null,
                "moneda": null,
                "estadoCuenta": null,
                "mesCastigo": null,
                "prioridad":codPrioridad,
                "rangoEdad":null
              }




            // const registroPrimeraTabla = await Api.get(`/admin/tablon/dashboard?carteras=${codCarteras}&entidad=${selectEntidad}&mes=${selectMes}`)
            // const registroSegundaTabla = await Api.get(`/admin/tablon/dashboard-especifico?tipo=CodPrioridad&valoresTipo=${codPrioridad}&carteras=${codCarteras}&entidad=${selectEntidad}&mes=${selectMes}`)
            // setRegistroPrimeraTabla(registroPrimeraTabla);
            // setRegistroSegundaTabla(registroSegundaTabla);

            // const response =  await Api.get(`/admin/tablon/dashboards?entidad=1&mes=11&carteras=1,2 &prioridad=null&moneda=null&producto=null`)
            const response =  await Api.post(data,`/admin/tablon/dashboards?entidad=${selectEntidad}&mes=${selectMes}&carteras=${codCarteras}`)
            console.log("valores de data",data);
            console.log('Respuesta tablas', response);
            // registroPrimeraTabla
            setRegistroPrimeraTabla(response.data.dashboardGeneral);
            // setRegistroPrimeraTabla([]);
            setRegistroSegundaTabla(response.data.dashboardPrioridad);
            setRegistroTerceraTabla();
            setRegistroCuartaTabla(response.data.dashboardMaduracion);
            setRegistroQuintaTabla(response.data.dashboardFechaCastigo);
            setRegistroSextaTabla(response.data.dashboardRangoCampaña);
            setRegistroSetimaTabla(response.data.dashboardProducto);
            setRegistroOctavaTabla(response.data.dashboardZona);


            setGroupOfTables(true);     // Mostramos grupo de tablas
            setFirstTableOpen(true);
            setLoadingAllTable(false);
            setSpinnerShowGroupTables(false);
        }catch(error){
            setLoadingAllTable(false);
            setSpinnerShowGroupTables(false);
            console.log(error);
            if (error.message === 'Token expired') {
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
        setFirstTableOpen(firstTableOpen==true?false:true);
    }
    function handleSecondTable(){
        setSecondTableOpen(secondTableOpen==true?false:true);
    }
    function handleThirdTable(){
        setThirdTableOpen(thirdTableOpen==true?false:true);
    }
    function handleFourthTable(){
        setFourthTableOpen(fourthTableOpen==true?false:true);
    }
    function handleFifthTable(){
        setFifthTableOpen(fifthTableOpen==true?false:true);
    }
    function handleSixthTable(){
        setSixthTableOpen(sixthTableOpen==true?false:true);
    }
    function handleSeventhTable(){
        setSeventhTableOpen(seventhTableOpen==true?false:true);
    }
    function handleoctaveTable(){
        setOctaveTableOpen(octaveTableOpen==true?false:true);
    }



    async function loadSelects() {
        try {
          const [entidadResponse, prioridadResponse, productoResponse, monedaResponse] = await Promise.all([
            Api.get('/entidad'),
            Api.get('/prioridad'),
            Api.get('/producto'),
            Api.get('/moneda')
          ]);
      
          const entidadOptions = entidadResponse.map(option => ({
            value: option.codEntidad.toString(),
            label: option.desEntidad
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

        } catch (error) {
            if (error.message === 'Token expired') {
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
        setLimpiarSegundoSelect(limpiarSegundoSelect? false: true);
        
    }
    

    return(
        <>
            <code>
                {urlSecondTable}
            </code>
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
                        {/* <div className="bg-red-400 h-10"> */}

                        <ComponenteFechaDos/>
                        {/* </div> */}
                        
                        {/* <ComponenteFecha/> */}
                        <SelectTailwind label="Seleccione un mes *"      llave="3" options={optionsMes}       valor={selectMes}  setValor={setSelectMes} />
                        <SelectTailwind label="Seleccione Una entidad *" llave="1" options={optionsEntidad}   valor={selectEntidad} setValor={setSelectEntidad}/>
                        <SelectElementSecondVersion realizarPeticion={selectEntidad? true : false} url={`https://poetic-tube-428221-a5.rj.r.appspot.com/cartera/entidad/${selectEntidad}`} label="Seleccione una Cartera *" tipoDato="cartera" valor={selectCartera} setValor={setSelectCartera}/>
                        {/* <SelectElementSecondVersion url={`https://cf0f-201-240-244-251.ngrok-free.app/cartera/entidad/${selectEntidad}`} label="Seleccione una Cartera *" tipoDato="cartera" valor={selectCartera} setValor={setSelectCartera}/> */}
                        {/* <SelectTailwind label="Seleccione una Cartera" llave="2" options={optionsCartera}   valor={selectCartera} setValor={setSelectCartera}/> */}
                        {/* <SelectElement  label="Seleccione una Cartera" llave="2" options={optionsCartera}   valor={selectCartera} setValor={setSelectCartera}/> */}
                    </div>

                    <div className={` border-b-0 mb-4 mt-4 transition-colors text-indigo-900 hover:text-blue-700 text-md font-bold flex `} onClick={handleOpen}>
                        Filtros Específicos
                        <IoMdRemoveCircle className={`mt-0.5 ml-2 text-xl ${open==true?'hidden':''}`}/>
                        <IoAddCircle className={`mt-0.5 ml-2 text-xl  ${open==true?'':'hidden'}`}/>
                    </div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2   mb-4 text-base font-normal text-gray-700 ${open==true?'hidden':''}`}>
                        <SelectElementSecondVersion limpiar={limpiarSegundoSelect} url={`https://poetic-tube-428221-a5.rj.r.appspot.com/prioridad`} tipoDato="prioridad" label="Seleccione prioridad"  valor={selectPrioridad} setValor={setSelectPrioridad}/>
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
                            // className="mr-2 border-1 border-gray-500 shadow-md shadow-black/30 align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-6 rounded-lg bg-gray-[#f1f5f9] text-gray shadow-md shadow-gray-[#f1f5f9]/10 hover:shadow-lg hover:shadow-[#f1f5f9]-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                            className="mr-2 border-solid border-2 border-indigo-900 py-3 px-6 rounded font-sans text-center text-sm text-indigo-900"
                            type="button"
                            onClick={cleanSearch}
                        >
                            Limpiar búsqueda
                        </button>
                       
                        <button
                            className="align-middle border-solid border-2 border-indigo-900 select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-6 rounded bg-indigo-900 text-white shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button"
                            onClick={handleGroupTables}
                        >
                            Buscar
                        </button>
                    </div>
                    
                </div>

            </div>
                        
            <div className={`bg-white border border-gray-100 shadow-md rounded-md  shadow-black/5 m-6 ${groupOfTables==false?'hidden':''}`}>
                {/* 1: Dashboard de Estado General de Cartera */}
                <Accordion open={firstTableOpen} className="mb-2 px-4">
                    <AccordionHeader
                    onClick={handleFirstTable}
                    className={`border-b-0 transition-colors text-3xl font-bold   ${
                        secondTableOpen? "hover:!text-blue-700 text-3xl " : ""
                    }`}
                    >
                    Estado General de Cartera del mes X
                    </AccordionHeader>

                    <AccordionBody className="pt-0 text-base font-normal">
                        <Tabla01EstadoGeneralDeCartera
                            tableRows={registroPrimeraTabla}
                            loading={loadingAllTable}
                        />
                    </AccordionBody>
                </Accordion>

                {/* 2: Dashboard de situación de Cartera según prioridad */}
                <Accordion open={secondTableOpen} className="mb-2 px-4">
                    <AccordionHeader
                    onClick={handleSecondTable}
                    className={`border-b-0 transition-colors text-3xl font-bold   ${
                        secondTableOpen? "hover:!text-blue-700 text-3xl " : ""
                    }`}
                    >
                    Situación de Cartera según prioridad
                    </AccordionHeader>

                    <AccordionBody className="pt-0 text-base font-normal">
                        <Tabla02SituacionDeCarteraSegunPrioridad
                            tableRows={registroSegundaTabla}
                            loading={loadingAllTable}
                        />
                    </AccordionBody>
                </Accordion>

                {/* 3: Dashboard de cartera por tramo de importe*/}
                {/* <Accordion open={thirdTableOpen} className="mb-2 px-4">
                    <AccordionHeader
                    onClick={handleThirdTable}
                    className={`border-b-0 transition-colors text-3xl font-bold   ${
                        secondTableOpen? "hover:!text-blue-700 text-3xl " : ""
                    }`}
                    >
                    Cartera por tramo de importe
                    </AccordionHeader>

                    <AccordionBody className="pt-0 text-base font-normal">
                        <TablaCarteraPorTramoDeImporte
                            tableRows={registroTerceraTabla}
                            loading={loadingAllTable}
                        />
                        
                    </AccordionBody>
                </Accordion> */}

                {/* 4: Dashboard de cartera por rango de maduración*/}
                <Accordion open={fourthTableOpen} className="mb-2 px-4">
                    <AccordionHeader
                    onClick={handleFourthTable}
                    className={`border-b-0 transition-colors text-3xl font-bold   ${
                        secondTableOpen? "hover:!text-blue-700 text-3xl " : ""
                    }`}
                    >
                    Cartera por rango de maduración
                    </AccordionHeader>

                    <AccordionBody className="pt-0 text-base font-normal">
                        <Tabla04CarteraPorRangoDeMaduracion
                            tableRows={registroCuartaTabla}
                            loading={loadingAllTable}
                        />
                    </AccordionBody>
                </Accordion>

                {/* 5: Dashboard de cartera por año - mes de castigo*/}
                <Accordion open={fifthTableOpen} className="mb-2 px-4">
                    <AccordionHeader
                    onClick={handleFifthTable}
                    className={`border-b-0 transition-colors text-3xl font-bold   ${
                        secondTableOpen? "hover:!text-blue-700 text-3xl " : ""
                    }`}
                    >
                    Cartera por año - mes de castigo
                    </AccordionHeader>

                    <AccordionBody className="pt-0 text-base font-normal">
                        <Tabla05CarteraPorAnioMesDeCastigo
                            tableRows={registroQuintaTabla}
                            loading={loadingAllTable}
                        />
                    </AccordionBody>
                </Accordion>

                {/* 6: Dashboard por rango de campaña*/}
                <Accordion open={sixthTableOpen} className="mb-2 px-4">
                    <AccordionHeader
                    onClick={handleSixthTable}
                    className={`border-b-0 transition-colors text-3xl font-bold   ${
                        secondTableOpen? "hover:!text-blue-700 text-3xl " : ""
                    }`}
                    >
                    Dashboard por rango de campaña
                    </AccordionHeader>

                    <AccordionBody className="pt-0 text-base font-normal">
                        <Tabla06PorRangoDeCampanha
                            tableRows={registroSextaTabla}
                            loading={loadingAllTable}
                        />
                    </AccordionBody>
                </Accordion>

                {/* 7: Dashboard de cartera por tipo de producto*/}
                <Accordion open={seventhTableOpen} className="mb-2 px-4">
                    <AccordionHeader
                    onClick={handleSeventhTable}
                    className={`border-b-0 transition-colors text-3xl font-bold   ${
                        secondTableOpen? "hover:!text-blue-700 text-3xl " : ""
                    }`}
                    >
                    Cartera por tipo de producto
                    </AccordionHeader>

                    <AccordionBody className="pt-0 text-base font-normal">
                        <Tabla07CarteraPorTipoDeProducto
                            tableRows={registroSextaTabla}
                            loading={loadingAllTable}
                        />
                    </AccordionBody>
                </Accordion>

                {/* 8: Dashboard de cartera por zona*/}
                <Accordion open={octaveTableOpen} className="mb-2 px-4">
                    <AccordionHeader
                    onClick={handleoctaveTable}
                    className={`border-b-0 transition-colors text-3xl font-bold   ${
                        secondTableOpen? "hover:!text-blue-700 text-3xl " : ""
                    }`}
                    >
                    Cartera por zona
                    </AccordionHeader>

                    <AccordionBody className="pt-0 text-base font-normal">
                        <Tabla08CarteraPorZona
                            tableRows={registroOctavaTabla}
                            loading={loadingAllTable}
                        />
                    </AccordionBody>
                </Accordion>
            </div>

            <div className={`bg-white border border-gray-100 shadow-md rounded-md  shadow-black/5 m-6 ${groupOfTables==true?'hidden':''}`}>

                {/* <div style={{ padding: '50px', textAlign: 'center' }}> */}
                    {/* <GridLoader color="#0076B1" size={20} loading={true}/> */}
                {/* </div> */}
                {/* <div style={{ padding: '50px', textAlign: 'center' }}> */}
                <div className="text-center">
                    <div className={`py-8 ${spinnerShowGroupTables?'hidden':''}`}>                
                    
                        <img src={filtro} alt="Portada" className="max-w-60 mx-auto "/>
                        <h3 className="pt-4"> Filtra para iniciar búsqueda</h3>

                    </div>

                    <GridLoader color="#1A237E" size={20} loading={spinnerShowGroupTables}/>
                </div>

            </div>

        </>
    )
}

export default SidebarDashboardView;

// const [spinnerShowGroupTables , setSpinnerShowGroupTables] = useState(false);
