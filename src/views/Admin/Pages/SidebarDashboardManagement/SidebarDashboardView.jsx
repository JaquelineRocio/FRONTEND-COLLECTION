import { IoChevronBackCircle } from "react-icons/io5";
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
import MoonLoader from "react-spinners/MoonLoader";
import filtro from '../../../../../public/filtro.svg';
import ComponenteFecha from "../../../../components/ComponenteFecha";
import ComponenteFechaDos from "../../../../components/ComponenteFechaDos";
import BotonOscuro from "../../../../components/BotonOscuro";
import BotonClaro from "../../../../components/BotonClaro";
import ComponentSelectOneOpcion from "../../../../components/ComponentSelectOneOpcion";
import DatePickerCustomed from "../../../../components/DatePickerCustomed/DatePickerCustomed";
import SelectCustomed from "../../../../components/SelectCustomed/SelectCustomed";
import SelectMultipleCustomed from "../../../../components/SelectMultipleCustomed/SelectMultipleCustomed";
// import {useFetch} from "./../../../../hooks/useFetch";
import { testFetch } from "../../../../hooks/testFetch";


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



    const [selectEntidad, setSelectEntidad] = useState('');
    const [selectCartera, setSelectCartera] = useState([]);
    const [selectMes, setSelectMes] = useState('');
    const [selectFecha, setSelectFecha] = useState(null);

    const [selectPrioridad, setSelectPrioridad] = useState([]);
    const [selectMoneda, setSelectMoneda] = useState('');
    const [selectProducto, setSelectProducto] = useState('');



    const dispatch = useDispatch();
    const [limpiarSegundoSelect, setLimpiarSegundoSelect] = useState(false);
    const [urlSecondTable, setUrlSecondTable] = useState(false);

    const [limpiarComponentSelectOneOpcion, setLimpiarComponentSelectOneOpcion] = useState(false);
    const [loadingAllTable, setLoadingAllTable] = useState(false);
    const [loadingAllSelects, setLoadingAllSelects] = useState(false);
    const [loadingFiltroCartera,setLoadingFiltroCartera] = useState(false);
    // const { data, error, loading, fetchData } = testFetchGet();

    function handleOpen(){
        setOpen(open==true?false:true);

    }

    function mostrarValorDeFecha(){
        console.log("Esta es la fecha:", selectFecha?.format('MM-YYYY')); // Ajusta el formato según lo que necesites

        // setSelectFecha(null);
    }

    async function handleGroupTables(){
        console.log(selectPrioridad);
        setSpinnerShowGroupTables(true);
        setLoadingAllTable(true);
        if(!selectEntidad || !selectCartera || selectCartera.length === 0 || !selectFecha){
            console.log("hay parametros vacios");
                // alert("Tu sesión ha iniciado correctamente");
                Swal.fire({
                  position: "center",
                //   icon: "success",
                  title: "Necesario",
                  text: 'Debe seleccionar por lo menos un valor para "Entidad", "Cartera" y "Fecha".',
                  showConfirmButton: false,
                  timer: 3000
                });
                setSpinnerShowGroupTables(false);
                setLoadingAllTable(false);
            return true;
        }

        try{
            
            // const codCarteras = selectCartera?.map(item => item.value).join(',') || null;
            // const codPrioridad = selectPrioridad?.map(item => item.value).join(',') || null;
            let codPrioridad = selectPrioridad.join(",");
            codPrioridad = codPrioridad === "" ? null : codPrioridad

            // let codMoneda = selectMoneda?.join(",");
            let codMoneda = null;
            console.log("MONEDA",selectMoneda);
            codMoneda = selectMoneda == "" ? null : selectMoneda;

            let codProducto = null;
            codProducto = selectProducto == "" ? null : selectProducto
            // let codProducto = selectProducto.join(",");
            // codProducto = codProducto === "" ? null : codProducto

            


            const data = {
                "producto": codProducto,
                "campaña": null,
                "macroRegiones": null,
                "añoCastigo": null,
                "moneda": null,
                "estadoCuenta": null,
                "mesCastigo": null,
                "prioridad":codPrioridad,
                "rangoEdad":null
              }

            
            const response =  await Api.post(data,`/admin/tablon/dashboards?entidad=${selectEntidad}&mes=${selectFecha?.format('MM-YYYY')}&carteras=${selectCartera}`)
            // const response =  await Api.post(data,`/admin/tablon/dashboards?entidad=${selectEntidad}&mes=08&carteras=${codCarteras}`)

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
            }else{
                swal({
                    title: "Error de consulta",
                    text: "Hubo un error al obtener los datos, por favor vuelva a realizar su consulta.",
                    icon: "warning",
                    button: "OK"
                })
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
        setLoadingAllSelects(true);
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
          setLoadingAllSelects(false);
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


            }else{
                swal({
                    title: "Error de consulta",
                    text: "Hubo un error al obtener los datos, por favor vuelva a realizar su consulta.",
                    icon: "warning",
                    button: "OK"
                })
            }


        setLoadingAllSelects(false);
        }
    }



    useEffect(() => {
        loadSelects();
    }, []);

    async function getOptionsToCartera() {
        setLoadingFiltroCartera(true);
        setSelectCartera([]);
        const {data, error, loading} = await testFetch.get(`/cartera/entidad/${selectEntidad}`);        // const {data, error, loading} = useFetch(urlFetch);
        if (data && Array.isArray(data)) {
            const carteraOptions = data.map(option => ({
                value: option.codCartera.toString(),
                label: option.desCartera
            }));
            setOptionsCartera(carteraOptions);
        }
        setLoadingFiltroCartera(loading);
         console.log("valores cartera obtenidos", data);
         console.log("valores cartera obtenidos errores", error);
         console.log("valores cartera obtenidos loading", loading);
         console.log("estas son las opciones de cartera option", optionsCartera);
    }

    useEffect(() => {
        if(selectEntidad){
            console.log("se esta realizando la consulta", selectEntidad);
            getOptionsToCartera();
            
        }
    }, [selectEntidad]);

    function cleanSearch(){
        setSelectEntidad(''); 
        setSelectCartera([]); 
        setSelectMes('');     
        setSelectPrioridad([]);
        setSelectMoneda('');
        setSelectProducto('');
        setSelectFecha(null);
        setLimpiarSegundoSelect(limpiarSegundoSelect?false: true);
        setLimpiarComponentSelectOneOpcion(limpiarComponentSelectOneOpcion?false:true);
        setGroupOfTables(false);
        
    }
    // function mostrardatos(){


    //     console.log("Estos son los datos obtenidos. fecha: ", selectFecha);
    //     console.log("Estos son los datos obtenidos. Entidad: ", selectEntidad);
    //     console.log("Estos son los datos obtenidos. Cartera: ", selectCartera);
    // }

    return(
        <>
            {/* <button className="bg-red-300" onClick={mostrardatos}>presiona para ver datos</button> */}
            <div className="py-5 px-7 flex flex-col h-screen">

                <div className=" flex mb-5">
                    <Link to="/dashboard" className="pr-5 flex items-center"> <IoChevronBackCircle  className={`text-5xl text-[#1F263E]`}/> </Link>
                    <div>
                        <h1 className="font-ralewaySemibold text-2xl">Dashboard de Gestión</h1>
                        <h1 className="font-ralewayMedium text-base">Revisemos cómo ha ido la Gestión...</h1>
                    </div>
                </div>

                <div className=" border-2 border-gray-200 rounded-lg">


                    <div className=" bg-gray-200 text-blac pl-5 flex items-center font-ralewayBold text-base h-12">
                        FILTROS
                    </div>

                    <div className="bg-white p-5">

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-5 2xl:grid-cols-6 ">
                        
                        {/* <SelectElementSecondVersion className={` ${open==true?'hidden':''}`}  url={`https://poetic-tube-428221-a5.rj.r.appspot.com/prioridad`}    /> */}
                            
                            <h3 className="md:col-span-5 2xl:col-span-6 font-ralewaySemibold text-base text-gray-900">FILTROS GENERALES</h3>
                            <div><DatePickerCustomed valor={selectFecha} setValor={setSelectFecha} /></div>
                            <div><SelectCustomed label="Entidad *"    valor={selectEntidad}   setValor={setSelectEntidad} options={optionsEntidad} loading={loadingAllSelects}    /></div>
                            <div><SelectMultipleCustomed label="Cartera" valor={selectCartera}  setValor={setSelectCartera} options={optionsCartera} loading={loadingFiltroCartera}  requerido={true}/></div>
                            <div className={`${open==true?'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5':'hidden'}`} ><BotonClaro  className={`${open==true?'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5':'hidden'} `} layout="LIMPIAR BÚSQUEDA" onClick={cleanSearch}/></div>
                            <div className={`${open==true?'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6':'hidden'}`}><BotonOscuro className={`${open==true?'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6':'hidden'} `} layout="BUSCAR" onClick={handleGroupTables}/></div>
                            
                            <div className={`md:col-span-5 2xl:col-span-6 transition-colors text-gray-900 font-ralewaySemibold flex`} onClick={handleOpen}>  FILTROS ESPECÍFICOS <IoMdRemoveCircle className={`mt-0.5 ml-2 text-xl text-buttonColor-0  ${open==true?'hidden':''}`}/> <IoAddCircle className={`mt-0.5 ml-2 text-xl text-buttonColor-0  ${open==true?'':'hidden'}`}/> </div>

                            <div className={` ${open==true?'hidden':''}`}><SelectMultipleCustomed label="Prioridad" valor={selectPrioridad}  setValor={setSelectPrioridad} options={optionsPrioridad} loading={loadingAllSelects}  /></div>                               
                            <div className={` ${open==true?'hidden':''}`}><SelectCustomed  label="Moneda"    valor={selectMoneda}   setValor={setSelectMoneda} options={optionsMoneda} loading={loadingAllSelects}    /></div>                       
                            <div className={` ${open==true?'hidden':''}`}><SelectCustomed   label="Producto"    valor={selectProducto}   setValor={setSelectProducto} options={optionsProducto} loading={loadingAllSelects}    /></div>                       
                            <div className={` ${open==true?'hidden':'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5'} `}><BotonClaro  layout="LIMPIAR BÚSQUEDA" onClick={cleanSearch}/></div>
                            <div className={` ${open==true?'hidden':'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6'} `}><BotonOscuro  layout="BUSCAR" onClick={handleGroupTables}/></div>

                        </div>

                    </div>
                </div>

                        
                <div className={` ${groupOfTables==false?'hidden':''}`}>
                    {/* 1: Dashboard de Estado General de Cartera */}
                    <Accordion open={firstTableOpen} className="">
                        <AccordionHeader
                        onClick={handleFirstTable}
                        className={`border-b-0  transition-colors font-ralewayBold text-base text-tonosOscuros-1 ${
                            secondTableOpen? "hover:!text-blue-700 " : ""
                        }`}
                        >
                        {
                            selectFecha==null? ('ESTADO GENERAL DE CARTERA DEL MES'):(
                                `ESTADO GENERAL DE CARTERA DEL MES ${selectFecha?.format('MM')} Y AÑO ${selectFecha?.format('YYYY')}`
                            )
                        }

                        
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla01EstadoGeneralDeCartera
                                tableRows={registroPrimeraTabla}
                                loading={loadingAllTable}
                            />
                        </AccordionBody>
                    </Accordion>

                    {/* 2: Dashboard de situación de Cartera según prioridad */}
                    <Accordion open={secondTableOpen} className="">
                        <AccordionHeader
                        onClick={handleSecondTable}
                        className={`border-b-0  transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                            secondTableOpen? "hover:!text-blue-700" : ""
                        }`}
                        >
                        SITUACIÓN DE CARTERA SEGÚN PRIORIDAD
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
                    <Accordion open={fourthTableOpen} className="">
                        <AccordionHeader
                        onClick={handleFourthTable}
                        className={`border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                            secondTableOpen? "hover:!text-blue-700" : ""
                        }`}
                        >

                        CARTERA POR RANGO DE MADURACIÓN
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla04CarteraPorRangoDeMaduracion
                                tableRows={registroCuartaTabla}
                                loading={loadingAllTable}
                            />
                        </AccordionBody>
                    </Accordion>

                    {/* 5: Dashboard de cartera por año - mes de castigo*/}
                    <Accordion open={fifthTableOpen} className="">
                        <AccordionHeader
                        onClick={handleFifthTable}
                        className={`border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1   ${
                            secondTableOpen? "hover:!text-blue-700 " : ""
                        }`}
                        >
                        CARTERA POR AÑO - MES DE CASTIGO
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla05CarteraPorAnioMesDeCastigo
                                tableRows={registroQuintaTabla}
                                loading={loadingAllTable}
                            />
                        </AccordionBody>
                    </Accordion>

                    {/* 6: Dashboard por rango de campaña*/}
                    <Accordion open={sixthTableOpen} className="">
                        <AccordionHeader
                        onClick={handleSixthTable}
                        className={`border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                            secondTableOpen? "hover:!text-blue-700" : ""
                        }`}
                        >
                        DASHBOARD POR RANGO DE CAMPAÑA
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla06PorRangoDeCampanha
                                tableRows={registroSextaTabla}
                                loading={loadingAllTable}
                            />
                        </AccordionBody>
                    </Accordion>

                    {/* 7: Dashboard de cartera por tipo de producto*/}
                    <Accordion open={seventhTableOpen} className="">
                        <AccordionHeader
                        onClick={handleSeventhTable}
                        className={`border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                            secondTableOpen? "hover:!text-blue-700" : ""
                        }`}
                        >
                        CARTERA POR TIPO DE PRODUCTO
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla07CarteraPorTipoDeProducto
                                tableRows={registroSextaTabla}
                                loading={loadingAllTable}
                            />
                        </AccordionBody>
                    </Accordion>

                    {/* 8: Dashboard de cartera por zona*/}
                    <Accordion open={octaveTableOpen} className="">
                        <AccordionHeader
                        onClick={handleoctaveTable}
                        className={`border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                            secondTableOpen? "hover:!text-blue-700" : ""
                        }`}
                        >
                        CARTERA POR ZONA
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla08CarteraPorZona
                                tableRows={registroOctavaTabla}
                                loading={loadingAllTable}
                            />
                        </AccordionBody>
                    </Accordion>
                </div>

                <div className={`h-full  flex items-center justify-center ${groupOfTables==true?'hidden':''}`}>
                    <div className="h-20">
                        <div className={`py-8 ${spinnerShowGroupTables?'hidden':''}`}>                
                            <img src={filtro} alt="Portada" className="max-w-60 mx-auto "/>
                            <h3 className="font-ralewayBold text-base text-tonosOscuros-0 "> FILTRA PARA INICIAR BÚSQUEDA</h3>
                        </div>
                        <MoonLoader color="#1A237E" size={40} loading={spinnerShowGroupTables}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SidebarDashboardView;

// const [spinnerShowGroupTables , setSpinnerShowGroupTables] = useState(false);
