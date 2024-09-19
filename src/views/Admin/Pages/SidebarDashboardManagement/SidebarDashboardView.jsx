import { IoChevronBackCircle } from "react-icons/io5";
// import SelectTailwind from "../../../ExampleView/SelectTailwind";
import { IoAddCircle } from "react-icons/io5";
import { IoMdRemoveCircle } from "react-icons/io";
import { useEffect, useState} from "react";
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
// import TablaCarteraPorTramoDeImporte from "./components/Tabla03CarteraPorTramoDeImporte";

// import SelectElementSecondVersion from "./components/SelectElementSecondVersion";
// import GridLoader from "react-spinners/GridLoader";
import MoonLoader from "react-spinners/MoonLoader";
import filtro from '../../../../../public/filtro.svg';
// import ComponenteFecha from "../../../../components/ComponenteFecha";
// import ComponenteFechaDos from "../../../../components/ComponenteFechaDos";
import BotonOscuro from "../../../../components/BotonOscuro";
import BotonClaro from "../../../../components/BotonClaro";
// import ComponentSelectOneOpcion from "../../../../components/ComponentSelectOneOpcion";
import DatePickerCustomed from "../../../../components/DatePickerCustomed/DatePickerCustomed";
import SelectCustomed from "../../../../components/SelectCustomed/SelectCustomed";
import SelectCustomedForArray from "../../../../components/SelectCustomedForArray/SelectCustomedForArray";
import SelectMultipleCustomed from "../../../../components/SelectMultipleCustomed/SelectMultipleCustomed";
// import {useFetch} from "./../../../../hooks/useFetch";
import { testFetch } from "../../../../hooks/testFetch";
import SimulatorApi from "../../../../services/resources/SimulatorApi";
import useFetchApi from "../../../../hooks/useFetchApi";


import { 
    titulosParaTablaEstadoGeneralDeCartera,
    titulosParaTablaSituacionDeCarteraSegunPrioridad,
    // titulosParaTablaCarteraPorTramoDeImporte,
    titulosParaTablaCarteraPorRangoDeMaduracion,
    titulosParaTablaCarteraPorAnhoMesCastigo,
    titulosParaTablaRangoDeCampanha,
    titulosParaTablaCarteraPorTipoDeProducto,
    titulosParaTablaCarteraPorZona
 } from "./components/ColumnTitles";

 import TableCustomed from "./components/TableCustomed";
 import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
 import { MdOutlineMoveUp } from "react-icons/md";
 import { TbDragDrop } from "react-icons/tb";
 import { HiSquare2Stack } from "react-icons/hi2";

 import manageErrorAndSessionUtils from "../../../../utils/manageErrorAndSessionUtils";

const SidebarDashboardView = () => {

    const dispatch = useDispatch();

    /**
     * Título: Variable para reorganizar en grid de los botone buscar y limpiar busqueda 
     */
    const [open, setOpen] = useState(true);

    /**
     * Título: Variables para mostrar y ocultar las tablas
     */
    const [firstTableOpen, setFirstTableOpen] = useState(false);
    const [secondTableOpen, setSecondTableOpen] = useState(false);
    // const [thirdTableOpen, setThirdTableOpen] = useState(false);
    const [fourthTableOpen, setFourthTableOpen] = useState(false);
    const [fifthTableOpen, setFifthTableOpen] = useState(false);
    const [sixthTableOpen, setSixthTableOpen] = useState(false);
    const [seventhTableOpen, setSeventhTableOpen] = useState(false);
    const [octaveTableOpen, setOctaveTableOpen] = useState(false);

    /**
     * Título: Variable muestra todo el div contenedor de las tablas
     */
    const [showGroupOfTables, setShowGroupOfTables] = useState(false);

    const [spinnerShowGroupTables , setSpinnerShowGroupTables] = useState(false);

    /**
     * Título: Valores que se ingresan a cada una de las tablas
     * Descripción: Verificar si debe ingresarse un array o un objeto
     */
    const [registroPrimeraTabla, setRegistroPrimeraTabla] = useState({});
    const [registroSegundaTabla, setRegistroSegundaTabla] = useState({});
    // const [registroTerceraTabla, setRegistroTerceraTabla] = useState([]);
    const [registroCuartaTabla,  setRegistroCuartaTabla] = useState({});
    const [registroQuintaTabla,  setRegistroQuintaTabla] = useState({});
    const [registroSextaTabla,   setRegistroSextaTabla] = useState({});
    const [registroSetimaTabla,   setRegistroSetimaTabla] = useState({});
    const [registroOctavaTabla,   setRegistroOctavaTabla] = useState({});

    /**
     * 
     * Título: Variables que almacenan valor seleccioando por cada uno de los selects
     */
    // Filtros Generales
    const [selectFecha, setSelectFecha] = useState(null);
    const [selectEntidad, setSelectEntidad] = useState('');
    const [selectCartera, setSelectCartera] = useState([]);
    // Filtros Especifico
    const [selectProducto, setSelectProducto] = useState([]);
    const [selectRangoCampanha, setSelectRangoCampanha] = useState([]);
    const [selectMacroRegiones, setSelectMacroRegiones] = useState([]);
    const [selectAnhoCastigo, setSelectAnhoCastigo] = useState('');
    const [selectMoneda, setSelectMoneda] = useState('')
    const [selectEstadoCuenta, setSelectEstadoCuenta] = useState([]);
    const [selectMesCastigo, setSelectMesCastigo] = useState('');
    // const [selectPrioridad, setSelectPrioridad] = useState([]);
    const [selectPrioridad, setSelectPrioridad] = useState('');
    const [selectRangoEdad, setSelectRangoEdad] = useState([]);


    /**
     * Título: variables que almacenan todas las opciones que van a contener los selects (todos los filtros)
     */
    // Filtros Generales
    const [optionsEntidad, setOptionsEntidad] = useState([]);
    const [optionsCartera, setOptionsCartera] = useState([]);
    // Filtros Especificos
    const [optionsProducto,      setOptionsProducto] = useState([]);
    const [optionsRangoCampanha, setOptionsRangoCampanha] = useState([]);
    const [optionsMacroRegiones, setOoptionsMacroRegiones] = useState([]);
    const [optionsAnhoCastigo,   setOptionsAnhoCastigo] = useState([]);
    const [optionsMoneda,        setOptionsMoneda] = useState([]);
    const [optionsEstadoCuenta,  setOptionsEstadoCuenta] = useState([]);
    const [optionsMesCastigo,    setOptionsMesCastigo] = useState([]);
    const [optionsPrioridad,     setOptionsPrioridad] = useState([]);
    const [optionsRangoEdad,     setOptionsRangoEdad] = useState([]);

    /**
     * Título: variable para desactivar filtros especificos.
     * Descripción: los filtros especificos deben estar desactivados siempre y cuando uno de los
     * filtros principales no tenga un valor seleccionado
     */
    const [specificFiltersDisabled, setSpecificFiltersDisabled] = useState(false);


    /**
     * Título: Valores de loading para mostrar que tablas estan cargando datos
     */
    const [loadingFirstTable, setLoadingFirstTable] = useState(false);
    const [loadingSecondTable, setLoadingSecondTable] = useState(false);
    // const [loadingThirdTable, setLoadingThirdTable] = useState(false);
    const [loadingFourthTable, setLoadingFourthTable] = useState(false);
    const [loadingFifthTable, setLoadingFifthTable] = useState(false);
    const [loadingSixthTable, setLoadingSixthTable] = useState(false);
    const [loadingSeventhTable, setLoadingSeventhTable] = useState(false);
    const [loadingEighthTable, setLoadingEighthTable] = useState(false);

    /**
     * Título: valores de loadign para indicar que filtros (selects) se están cargando
     */
    const [loadingFiltroGeneral, setLoadingFiltroGeneral] = useState(false);
    const [loadingFiltroEspecifico, setLoadingFiltroEspecifico] = useState(false);
    const [loadingFiltroCartera,setLoadingFiltroCartera] = useState(false);

    /**
     * Título: esta variable guradar las opciones seleccionadas de todos los selects. 
     * Descripción: al presionar el boton buscar este configura un payload que se usa para realizar las peticiones al backend
     * pero cuando se limpia un select estos valores no pueden perderse devido a que las demas tablas deben cargar
     * datos cuanso estos se visualizan. Estos datos realizan su peticion con este payload. para mantener la consistencia
     * de datos que se esta mostrando en las tablas
     */
    let [bodyPayloadForIndividualTables, setBodyPayloadForIndividualTables] = useState({})
    let [urlPayloadForIndividualTables, setUrlPayloadForIndividualTables] = useState({})


    const debouncedSelectFecha = useDebounce(selectFecha, 1000);
    const debouncedSelectEntidad = useDebounce(selectEntidad, 1000);
    const debouncedSelectCartera = useDebounce(selectCartera, 1000);

    /**
     * Variable que indica la cantidad de columnas que deben mostrarse al momento de
     * reorganizar las tablas
     */
    const [numberOfColumns, setNumberOfColumns] = useState(1);
    
    const fetchToDate = useFetchApi();
    const fetchParaEntidad = useFetchApi();
    const fetchParaCartera= useFetchApi();

    //Variable para fecha, (se carga cuando enla primera carga de la vista)
    const [date, setDate] = useState({initial:null, end:null})


    function hideAllTables(){
        setFirstTableOpen(false);
        setSecondTableOpen(false);
        // setThirdTableOpen(false);
        setFourthTableOpen(false);
        setFifthTableOpen(false);
        setSixthTableOpen(false);
        setSeventhTableOpen(false);
        setOctaveTableOpen(false);
    }

    function clearSelectdValuesFromAllSelects(){
        setSelectFecha(null);
        setSelectEntidad(''); 
        setSelectCartera([]); 
        // setSelectMes('');
        setSelectProducto([]);
        setSelectRangoCampanha([]);
        setSelectMacroRegiones([]);
        setSelectAnhoCastigo('');     
        setSelectMoneda('');
        setSelectEstadoCuenta([]);
        setSelectMesCastigo('');
        // setSelectPrioridad([]);
        setSelectPrioridad('');
        setSelectRangoEdad([]);

         
    }

    // Limpia valores seleccionados de filtros especificos
    function clearSelectedValuesFromSpecificFilters(){
        setSelectProducto([]);
        setSelectRangoCampanha([]);
        setSelectMacroRegiones([]);
        setSelectAnhoCastigo('');     
        setSelectMoneda('');
        setSelectEstadoCuenta([]);
        setSelectMesCastigo('');
        setSelectPrioridad('');
        setSelectRangoEdad([]);
    }

    // Limpia valores seleccionados de filtros generales
    function clearSelectedValuesFromGeneralFilters(){
        setSelectFecha(null);
        setSelectEntidad(''); 
        // setSelectCartera([]); 
        // setSelectCartera(null);
    }

    // Eliminamos todos el contenido (filas) de todas las tablas
    function cleanDataFromAllTables(){
        setRegistroPrimeraTabla({});
        setRegistroSegundaTabla({});
        // setRegistroTerceraTabla({});
        setRegistroCuartaTabla({});
        setRegistroQuintaTabla({});
        setRegistroSextaTabla({});
        setRegistroSetimaTabla({});
        setRegistroOctavaTabla({});
    }

    // Elimina opciones que pueden ser seleccionado de todos los filtros
    function cleanOptionsFromAllFilter(){
        // setOptionsEntidad([]); // No se limpiará las opciones de entidad , pues ellas deben permanecer para que se pueda realizar otras busquedas
        setOptionsCartera([]);
        setOptionsProducto([]);
        setOptionsRangoCampanha([]);
        setOoptionsMacroRegiones([]);
        setOptionsAnhoCastigo([]);
        setOptionsMoneda([]);
        setOptionsEstadoCuenta([]);
        setOptionsMesCastigo([]);
        setOptionsPrioridad([]);
        setOptionsRangoEdad([]);
    }

    async function accionesDeBotonBuscar(){

        // console.log("opciones selecionas de select multiple ",selectCartera );
        if(!selectEntidad || !selectCartera || selectCartera.length === 0 || !selectFecha){
            alertas("camposVacios");
            return true;
        }

        // activamos spinner general
        setSpinnerShowGroupTables(true);
        
        // escondemos agrupador (div - grupo) de todas las tablas
        setShowGroupOfTables(false);

        // escondemos todas las tablas individualmente
        hideAllTables();

        // limpiamos todas las tablas
        cleanDataFromAllTables();



        // let codPrioridad = selectPrioridad.join(",");
        // codPrioridad = codPrioridad === "" ? null : codPrioridad


        // let codMoneda = null;
        // codMoneda = selectMoneda == "" ? null : selectMoneda;

        // let codProducto = null;
        // codProducto = selectProducto == "" ? null : selectProducto

        // let RangoCampanha = null;
        // RangoCampanha = selectRangoCampanha == "" ? null : selectRangoCampanha

        // let MacroRegiones = null;
        // MacroRegiones = selectMacroRegiones == "" ? null : selectMacroRegiones

        let ANHO_CASTIGO = null;
        ANHO_CASTIGO = selectAnhoCastigo == "" ? null : selectAnhoCastigo

        let CodMoneda = null;
        CodMoneda = selectMoneda == "" ? null : selectMoneda

        // let EstadoCuenta = null;
        // EstadoCuenta = selectEstadoCuenta == "" ? null : selectEstadoCuenta

        let MES_CASTIGO = null;
        MES_CASTIGO = selectMesCastigo == "" ? null : selectMesCastigo

        let CodPrioridad = null;
        CodPrioridad = selectPrioridad == "" ? null : selectPrioridad

        // let rangoEdad = null;
        // rangoEdad = selectRangoEdad == "" ? null : selectRangoEdad

        // const payload = {
        //     producto: codProducto,
        //     campaña: null,
        //     macroRegiones: null,
        //     añoCastigo: null,
        //     moneda: null,
        //     estadoCuenta: null,
        //     mesCastigo: null,
        //     prioridad:codPrioridad,
        //     rangoEdad:null,
        //     tipo: "General"
        // }

        const payload = {
            producto: selectProducto,
            rangocampaña: selectRangoCampanha,
            macroRegiones: selectMacroRegiones,
            añoCastigo: ANHO_CASTIGO,
            moneda: CodMoneda,
            estadoCuenta: selectEstadoCuenta,
            mesCastigo: MES_CASTIGO,
            prioridad:CodPrioridad,
            rangoEdad:selectRangoEdad,
            tipo: "General"
        }

        // Almacenamos en payload secundario datos para que tablas individuales aun puedan hacer consultas
        setBodyPayloadForIndividualTables({...payload});
        setUrlPayloadForIndividualTables({selectEntidad: selectEntidad, selectFecha:selectFecha, selectCartera:selectCartera });

        let {data, error} = await testFetch.post(payload,`/admin/tablon/dashboards?entidad=${selectEntidad}&mes=${selectFecha?.format('MM-YYYY')}&carteras=${selectCartera}`); 
        // let data = await SimulatorApi(1000,false);
        // let error = null;
        // console.log("data simulada", data);

        // Damos informacion del payload a las talbas
        if(data != null ){
            if(data.data != null){
                data.data.payloadBody = payload;
                data.data.payloadUrl = {selectEntidad:selectEntidad, selectFecha: selectFecha, selectCartera: selectCartera};
            }

        }

        // setRegistroPrimeraTabla(data?.data);
        setRegistroPrimeraTabla(data?.data ?? {});
        // Desactiva spinner de primera tabla
        setLoadingFirstTable(false);
         // Muestra div contenedor de todas las tablas
         setShowGroupOfTables(true);
        // // Desactiva spinner general
        setSpinnerShowGroupTables(false);
        // Muestra primera tabla
        setFirstTableOpen(true);

        manageErrorAndSessionUtils(error,dispatch);
    }

    function accionesDeBotonLimpiarBusqueda(){
        
        // escondemos agrupador (div - grupo) de todas las tablas
        setShowGroupOfTables(false);

        // escondemos todas las tablas individualmente
        hideAllTables();

        // // limpiamos todas las tablas
        // cleanDataFromAllTables();

        // Limpiamos filtros generales
        clearSelectedValuesFromGeneralFilters();

        // limpiamos valores seleccionados de todos los selects
        clearSelectdValuesFromAllSelects();

        // limpiamos lista de opciones que pueden ser seleccionados por los filtros
        cleanOptionsFromAllFilter();
    }

    // Obtiene datos para llenar filtro "Fecha"
    const getOptionToData = async () => {
        const body = {"mes":null, "entidad":null, "carteras":null}
        const url = "/admin/tablon/filtros-generales"
        const response = await fetchToDate.postMethod(body, url);
        procesarDatos(response, setDate, "setDate"  ,dispatch);
    }

    // Obtiene datos para llenar filtro "Entidad"
    const getOptionToEntidad = async () => {
        const body = {"mes":selectFecha?.format('MM-YYYY'), "entidad":null, "carteras":null}
        const url = "/admin/tablon/filtros-generales"

        // La condicion solo se ejcuta si hay algun valor para fecha, si no hay valor, la api devolverá fechas
        if(selectFecha){
            const response = await fetchParaEntidad.postMethod(body, url);
            procesarDatos(response, setOptionsEntidad, "setOptionsEntidad"  ,dispatch);
        }
    }

    // Obtiene datos para llenar filtro "Cartera"
    const getOptionToCartera = async () => {
        const body = {"mes":selectFecha?.format('MM-YYYY'), "entidad":selectEntidad, "carteras":null}
        const url = "/admin/tablon/filtros-generales"
        // La condicion solo se ejcuta si hay algun valor para fecha y si tambien hay un valor para entidad
        if(selectFecha && selectEntidad){
            const response = await fetchParaCartera.postMethod(body, url);
            procesarDatos(response, setOptionsCartera, "setOptionsCartera"  ,dispatch);
        }
    }

    // Carga contenido para selects secundarios (filtros especificos) - La carga de datos depende de los filtros generales
    async function loadSpecificFilters(){
        if(selectFecha != null && selectEntidad != '' && selectCartera.length != 0 ){
            setSpecificFiltersDisabled(false);
            // Añade indicativo de carga (loading) para filtros especificos
            setLoadingFiltroEspecifico(true);


            // const payload = {
            //     carteras: "4,1011",
            //     entidad:"2",
            //     mes:"02-2024"
            // }

            const payload = {
                carteras: selectCartera.join(", "),
                entidad: selectEntidad,
                mes: selectFecha?.format('MM-YYYY')
            }

            let {data, error} = await testFetch.post(payload,`/admin/tablon/filtros-especificos`); 
            // console.log("valores de selects obtenidos (data)", data);
            // console.log("valores de selects obtenidos (error)", error);


            // Modifica valores para Producto
            const Producto = data?.data?.DesProducto?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));


            // Modifica valores para RangoCampanha
            const RangoCampanha = data?.data?.RangoCampaña?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));


            // Modifica valores para Macro regiones
            const MacroRegiones = data?.data?.MacroRegiones?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));

            // Modifica valores para AnhoCastigo
            const AnhoCastigo = data?.data?.AÑO_CASTIGO?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));


            // Modifica valores para Moneda
            const Moneda = data?.data?.CodMoneda?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));

            // Modifica valores para EstadoCuenta
            const EstadoCuenta = data?.data?.EstadoCuenta?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));

            // Modifica valores para MesCastigo
            const MesCastigo = data?.data?.MES_CASTIGO?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));

            // Modifica valores para Prioridad
            const Prioridad = data?.data?.CodPrioridad?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));

            // Modifica valores para RangoEdad
            const RangoEdad = data?.data?.rangoEdad?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));

            // Limpia valores seleccionados de filtros especificos
            clearSelectedValuesFromSpecificFilters();

            // setOptionsProducto() --- valores dados en primera llamda de selects
            setOptionsProducto(Producto);
            setOptionsRangoCampanha(RangoCampanha);
            setOoptionsMacroRegiones(MacroRegiones);
            setOptionsAnhoCastigo(AnhoCastigo);
            setOptionsMoneda(Moneda);
            setOptionsEstadoCuenta(EstadoCuenta);
            setOptionsMesCastigo(MesCastigo);
            setOptionsPrioridad(Prioridad);
            setOptionsRangoEdad(RangoEdad);

            setLoadingFiltroEspecifico(false);

            // Verifica validad de token en cada peticion
            manageErrorAndSessionUtils(error, dispatch)
        }
        
    }



    // Obtiene datos a partir de tablas individuales -- Se realiza esta peticion cada vez que se presiona en "mostrar tabla"
    async function getDataFromIndividualTables(tipoTabla){
        bodyPayloadForIndividualTables = {...bodyPayloadForIndividualTables, tipo: tipoTabla};
        switch (tipoTabla) {
            case "General":{
                setLoadingFirstTable(true);
                // setRegistroPrimeraTabla({});
                if(!firstTableOpen &&  Object.keys(registroPrimeraTabla).length === 0 ){
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    // let data = await SimulatorApi(500,false);
                    if(!error){

                        if(data != null){
                            if(data.data != null){
                            data.data.payloadBody = bodyPayloadForIndividualTables;
                            data.data.payloadUrl = urlPayloadForIndividualTables;
                            }    
                        }
                        setRegistroPrimeraTabla(data?.data ?? {});
                    }
                    setShowGroupOfTables(true);
                    // setFirstTableOpen(true); 
                    setLoadingFirstTable(false);
                    manageErrorAndSessionUtils(error,dispatch);
                }
                setLoadingFirstTable(false);
                break;
            }
            case "Prioridad":{
                setLoadingSecondTable(true);
                // setRegistroSegundaTabla({})
                if(!secondTableOpen && Object.keys(registroSegundaTabla).length === 0){
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    if(!error){

                        if(data != null){
                            if(data.data != null){
                            data.data.payloadBody = bodyPayloadForIndividualTables;
                            data.data.payloadUrl = urlPayloadForIndividualTables;
                            }    
                        }

                        setRegistroSegundaTabla(data?.data ?? {});
                    }                
                    setLoadingSecondTable(false);
                    manageErrorAndSessionUtils(error,dispatch);
                }
                setLoadingSecondTable(false);
                break;
            }
            case "Maduracion":{
                setLoadingFourthTable(true);
                // setRegistroCuartaTabla({});
                if(!fourthTableOpen && Object.keys(registroCuartaTabla).length === 0){
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    if(!error){

                        if(data != null){
                            if(data.data != null){
                            data.data.payloadBody = bodyPayloadForIndividualTables;
                            data.data.payloadUrl = urlPayloadForIndividualTables;
                            }    
                        }

                        setRegistroCuartaTabla(data?.data ?? {});
                    }
                    setLoadingFourthTable(false);
                    manageErrorAndSessionUtils(error,dispatch);
                }
                setLoadingFourthTable(false);
                break;
            }
            case "AÑO_CASTIGO":{
                setLoadingFifthTable(true);
                // setRegistroQuintaTabla({});
                if(!fifthTableOpen && Object.keys(registroQuintaTabla).length === 0){
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    if(!error){

                        if(data != null){
                            if(data.data != null){
                            data.data.payloadBody = bodyPayloadForIndividualTables;
                            data.data.payloadUrl = urlPayloadForIndividualTables;
                            }    
                        }

                        setRegistroQuintaTabla(data?.data ?? {});
                    }
                    setLoadingFifthTable(false);
                    manageErrorAndSessionUtils(error,dispatch);
                }
                setLoadingFifthTable(false);
                break;
            }
            case "RangoCampaña":{
                setLoadingSixthTable(true);
                // setRegistroSextaTabla({});
                if(!sixthTableOpen && Object.keys(registroSextaTabla).length === 0){
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    if(!error){

                        if(data != null){
                            if(data.data != null){
                            data.data.payloadBody = bodyPayloadForIndividualTables;
                            data.data.payloadUrl = urlPayloadForIndividualTables;
                            }    
                        }
                        setRegistroSextaTabla(data?.data ?? {});
                    }
                    setLoadingSixthTable(false);
                    manageErrorAndSessionUtils(error,dispatch);
                }
                setLoadingSixthTable(false);
                break;
            }
            case "CodProducto":{
                setLoadingSeventhTable(true);
                // setRegistroSetimaTabla({});
                if(!seventhTableOpen && Object.keys(registroSetimaTabla).length === 0){
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    if(!error){
                        if(data != null){
                            if(data.data != null){
                            data.data.payloadBody = bodyPayloadForIndividualTables;
                            data.data.payloadUrl = urlPayloadForIndividualTables;
                            }    
                        }

                        setRegistroSetimaTabla(data?.data ?? {});                    
                    }
                    setLoadingSeventhTable(false);
                    manageErrorAndSessionUtils(error,dispatch);
                }
                setLoadingSeventhTable(false);
                break;
            }
            case "MacroRegiones":{
                setLoadingEighthTable(true);
                // setRegistroOctavaTabla({})
                if(!octaveTableOpen && Object.keys(registroOctavaTabla).length === 0){
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    if(!error){

                        if(data != null){
                            if(data.data != null){
                            data.data.payloadBody = bodyPayloadForIndividualTables;
                            data.data.payloadUrl = urlPayloadForIndividualTables;
                            }    
                        }

                        setRegistroOctavaTabla(data?.data ?? {});
                    }
                    setLoadingEighthTable(false);
                    manageErrorAndSessionUtils(error,dispatch);   
                }
                setLoadingEighthTable(false);
                break;
            }
            default:
                // console.log("No hay consulta solicitada");
        }

        setSpinnerShowGroupTables(false);
    }

    // Construye el objeto que sera iterado para formar todas las tablas

    const objetoDeDashboard = [
        {
            columnas: titulosParaTablaEstadoGeneralDeCartera,
            filas: registroPrimeraTabla,
            nombreDeTabla: "ESTADO GENERAL DE CARTERA",
            masInformacion: {setTableOpen:setFirstTableOpen, tableOpen:firstTableOpen, loading:loadingFirstTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "General"},
            id: 'dashboard-1',
            key:1
        },
        {
            columnas: titulosParaTablaSituacionDeCarteraSegunPrioridad,
            filas: registroSegundaTabla,
            nombreDeTabla: "CARTERA SEGÚN PRIORIDAD",
            masInformacion: {setTableOpen:setSecondTableOpen, tableOpen:secondTableOpen, loading:loadingSecondTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "Prioridad"},
            id: 'dashboard-2',
            key:2

        },
        {
            columnas: titulosParaTablaCarteraPorRangoDeMaduracion,
            filas: registroCuartaTabla,
            nombreDeTabla: "CARTERA POR RANGO DE MADURACIÓN",
            masInformacion: {setTableOpen:setFourthTableOpen, tableOpen:fourthTableOpen, loading:loadingFourthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "Maduracion"},
            id: 'dashboard-3',
            key:3
        },
        {
            columnas: titulosParaTablaCarteraPorAnhoMesCastigo,
            filas: registroQuintaTabla,
            nombreDeTabla: "CARTERA POR AÑO - MES DE CASTIGO",
            masInformacion: {setTableOpen:setFifthTableOpen, tableOpen:fifthTableOpen, loading:loadingFifthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "AÑO_CASTIGO"},
            id: 'dashboard-4',
            key:4
        },
        {
            columnas: titulosParaTablaRangoDeCampanha,
            filas: registroSextaTabla,
            nombreDeTabla: "CARTERA POR RANGO DE CAMPAÑA",
            masInformacion: {setTableOpen:setSixthTableOpen, tableOpen:sixthTableOpen, loading:loadingSixthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "RangoCampaña"},
            id: 'dashboard-5',
            key:5
        },
        {
            columnas: titulosParaTablaCarteraPorTipoDeProducto,
            filas: registroSetimaTabla,
            nombreDeTabla: "CARTERA POR TIPO DE PRODUCTO",
            masInformacion: {setTableOpen:setSeventhTableOpen, tableOpen:seventhTableOpen, loading:loadingSeventhTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "CodProducto"},
            id: 'dashboard-6',
            key:6
        },
        {
            columnas: titulosParaTablaCarteraPorZona,
            filas: registroOctavaTabla,
            nombreDeTabla: "CARTERA POR ZONA",
            masInformacion: {setTableOpen:setOctaveTableOpen, tableOpen:octaveTableOpen, loading:loadingEighthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "MacroRegiones"},
            id: 'dashboard-7',
            key:7
        },
    ]

    const objetoDeDashboardTwo = {
       'dashboard-1': {
            columnas: titulosParaTablaEstadoGeneralDeCartera,
            filas: registroPrimeraTabla,
            nombreDeTabla: "ESTADO GENERAL DE CARTERA",
            masInformacion: {setTableOpen:setFirstTableOpen, tableOpen:firstTableOpen, loading:loadingFirstTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "General"},
            id: 'dashboard-1',
            key:1
        },
       'dashboard-2': {
            columnas: titulosParaTablaSituacionDeCarteraSegunPrioridad,
            filas: registroSegundaTabla,
            nombreDeTabla: "CARTERA SEGÚN PRIORIDAD",
            masInformacion: {setTableOpen:setSecondTableOpen, tableOpen:secondTableOpen, loading:loadingSecondTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "Prioridad"},
            id: 'dashboard-2',
            key:2

        },
       'dashboard-3': {
            columnas: titulosParaTablaCarteraPorRangoDeMaduracion,
            filas: registroCuartaTabla,
            nombreDeTabla: "CARTERA POR RANGO DE MADURACIÓN",
            masInformacion: {setTableOpen:setFourthTableOpen, tableOpen:fourthTableOpen, loading:loadingFourthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "Maduracion"},
            id: 'dashboard-3',
            key:3
        },
       'dashboard-4': {
            columnas: titulosParaTablaCarteraPorAnhoMesCastigo,
            filas: registroQuintaTabla,
            nombreDeTabla: "CARTERA POR AÑO - MES DE CASTIGO",
            masInformacion: {setTableOpen:setFifthTableOpen, tableOpen:fifthTableOpen, loading:loadingFifthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "AÑO_CASTIGO"},
            id: 'dashboard-4',
            key:4
        },
       'dashboard-5': {
            columnas: titulosParaTablaRangoDeCampanha,
            filas: registroSextaTabla,
            nombreDeTabla: "CARTERA POR RANGO DE CAMPAÑA",
            masInformacion: {setTableOpen:setSixthTableOpen, tableOpen:sixthTableOpen, loading:loadingSixthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "RangoCampaña"},
            id: 'dashboard-5',
            key:5
        },
       'dashboard-6':{
            columnas: titulosParaTablaCarteraPorTipoDeProducto,
            filas: registroSetimaTabla,
            nombreDeTabla: "CARTERA POR TIPO DE PRODUCTO",
            masInformacion: {setTableOpen:setSeventhTableOpen, tableOpen:seventhTableOpen, loading:loadingSeventhTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "CodProducto"},
            id: 'dashboard-6',
            key:6
        },
       'dashboard-7': {
            columnas: titulosParaTablaCarteraPorZona,
            filas: registroOctavaTabla,
            nombreDeTabla: "CARTERA POR ZONA",
            masInformacion: {setTableOpen:setOctaveTableOpen, tableOpen:octaveTableOpen, loading:loadingEighthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "MacroRegiones"},
            id: 'dashboard-7',
            key:7
        },
    }
    
    const initialData = {
        // tasks: {
        //     'dashboard-1': {
        //         columnas: titulosParaTablaEstadoGeneralDeCartera,
        //         filas: registroPrimeraTabla,
        //         nombreDeTabla: "ESTADO GENERAL DE CARTERA",
        //         masInformacion: {setTableOpen:setFirstTableOpen, tableOpen:firstTableOpen, loading:loadingFirstTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "General"},
        //         id: 'dashboard-1',
        //         key:1
        //     },
        //     'dashboard-2': {
        //         columnas: titulosParaTablaSituacionDeCarteraSegunPrioridad,
        //         filas: registroSegundaTabla,
        //         nombreDeTabla: "SITUACIÓN DE CARTERA SEGÚN PRIORIDAD",
        //         masInformacion: {setTableOpen:setSecondTableOpen, tableOpen:secondTableOpen, loading:loadingSecondTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "Prioridad"},
        //         id: 'dashboard-2',
        //         key:2
    
        //     },
        //     'dashboard-3': {
        //         columnas: titulosParaTablaCarteraPorRangoDeMaduracion,
        //         filas: registroCuartaTabla,
        //         nombreDeTabla: "CARTERA POR RANGO DE MADURACIÓN",
        //         masInformacion: {setTableOpen:setFourthTableOpen, tableOpen:fourthTableOpen, loading:loadingFourthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "Maduracion"},
        //         id: 'dashboard-3',
        //         key:3
        //     },
        //     'dashboard-4': {
        //         columnas: titulosParaTablaCarteraPorAnhoMesCastigo,
        //         filas: registroQuintaTabla,
        //         nombreDeTabla: "CARTERA POR AÑO - MES DE CASTIGO",
        //         masInformacion: {setTableOpen:setFifthTableOpen, tableOpen:fifthTableOpen, loading:loadingFifthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "AÑO_CASTIGO"},
        //         id: 'dashboard-4',
        //         key:4
        //     },
        //     'dashboard-5': {
        //         columnas: titulosParaTablaRangoDeCampanha,
        //         filas: registroSextaTabla,
        //         nombreDeTabla: "DASHBOARD POR RANGO DE CAMPAÑA",
        //         masInformacion: {setTableOpen:setSixthTableOpen, tableOpen:sixthTableOpen, loading:loadingSixthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "RangoCampaña"},
        //         id: 'dashboard-5',
        //         key:5
        //     },
        //     'dashboard-6': {
        //         columnas: titulosParaTablaCarteraPorTipoDeProducto,
        //         filas: registroSetimaTabla,
        //         nombreDeTabla: "CARTERA POR TIPO DE PRODUCTO",
        //         masInformacion: {setTableOpen:setSeventhTableOpen, tableOpen:seventhTableOpen, loading:loadingSeventhTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "CodProducto"},
        //         id: 'dashboard-6',
        //         key:6
        //     },
        //     'dashboard-7': {
        //         columnas: titulosParaTablaCarteraPorZona,
        //         filas: registroOctavaTabla,
        //         nombreDeTabla: "CARTERA POR ZONA",
        //         masInformacion: {setTableOpen:setOctaveTableOpen, tableOpen:octaveTableOpen, loading:loadingEighthTable, getDataFromIndividualTables:getDataFromIndividualTables, typeOfRequest: "MacroRegiones"},
        //         id: 'dashboard-7',
        //         key:7
        //     },
        //     // 'dashboard-8': objetoDeDashboard[7],
        // },
    
        columns: {
            'column-1':{
                id: 'column-1',
                title: 'To do',
                taskIds: ['dashboard-1', 'dashboard-2', 'dashboard-3', 'dashboard-4','dashboard-5', 'dashboard-6', 'dashboard-7'],
            },
            'column-2':{
                id: 'column-2',
                title: 'In Progress',
                taskIds: [],
            },
            'column-3':{
                id: 'column-3',
                title: 'Done',
                taskIds: [],
            },
        },
    
        columnOrder: ['column-1'],
        // columnOrder: ['column-1'],   
    };

    const [state, setState] = useState(initialData);
    // setState(initialData);
    

    // Funciona que maneja el movimiento de elementos arrastrables
    
    const onDragEnd = (result) => {

        const {destination, source, draggableId} = result;

        // Si el elemento (dragable) no tiene un destino (llevamos a un lugar don de no puede ubicarse). devolvemos nada
        if(!destination){
            return;
        }

        // si llevamos el elemento al mismo lugar de donse salio, no debe ocurrir nada.
        if((destination.droppableId === source.droppableId) && (destination.index === source.index)){
            return;
        }


        /**
         *  Operaciones realizadas sobre elemento de origen
         */
        // Recuperamos la columna de donde movimos el elemento ( columna de origen)
        const start = state.columns[source.droppableId];
        // Recuperamos la columna donde vamos a colocar el elemento ( columna de origen)
        const finish = state.columns[destination.droppableId];

        // Verificamos si la columna de origen es la misma que la columna de destino
        if(start === finish){
            // Recuperamos la lista de elementos guardados en la columna
            const newTaskIds = Array.from(start.taskIds)
            // Eliminamos el indice (elemento dragable) que se movió de lugar
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds:newTaskIds,
            }

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                }
            }

            setState(newState);

            return;
        }

        // Hacemos una compia de todos os elemento que estan en el interior de la columna de origen
        const startTaskIds = Array.from(start.taskIds)

        // Eliminado de la copia el elmento que movemos (dragable)
        startTaskIds.splice(source.index,1);

        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        // Hacemos una copia de todos los elemento de la columna donde esamos colocando el elmento arrastrado
        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);

        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };


        // Creamos el objeto final que actualizara todo el json
        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        }

        setState(newState);
    }

    // useEffect(() => {
    //     console.log("valor de selectFecha:", selectFecha);
    //     console.log("valor de selectEntidad:", selectEntidad);
    //     console.log("valor de selectCartera:", selectCartera);
    //     loadSpecificFilters();
    // }, [selectFecha, selectEntidad, selectCartera]);
    const Column = ({column, tasks}) => {
        // console.log("las columnas", column);
        // console.log("los tasks",tasks );
        return(
            <div className="rounded overflow-hidden">
                {/* <h3>{column.title}</h3> */}
                <Droppable droppableId={column.id}>
                    {(provided, snapshot)=>{ return(
                        <div
                            className={`h-full ${numberOfColumns>1?'bg-tonosOscuros-0/10 px-4 pt-4':''} ${snapshot.isDraggingOver?'bg-tonosOscuros-0/20':''}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {tasks.map( (task,index)  => <Task key={task.id} task={task} index={index}></Task>)}
                            {provided.placeholder}
                        </div>
                    )}}
                </Droppable>
            </div>
        )
    }
    
    const Task = ({task, index}) => {
    
    
        // console.log("esto es lo que entra finalmente:", task);
        return( 
            <Draggable draggableId={task.id} index={index}>
                {(provided, snapshot)=>(
                    <div
                        {...provided.draggableProps}
                        className={`bg-white  border border-gray-300 rounded mb-4`}
                        // innerRef={provided.innerRef}
                        ref={provided.innerRef}
                        // isDragging={snapshot.isDragging}
                    >
                        <div>

                            <div className="flex h-10 justify-center items-center font-ralewaySemibold text-base text-tonosOscuros-1">

                                {/* Icono para arrastrar tabla */}
                                <div
                                    className="bg-white text-gray-700  p-1 ml-4 flex rounded-full hover:bg-sidebarColor-0 hover:text-white active:bg-sidebarColor-0 active:text-white"
                                    {...provided.dragHandleProps}
                                >
                                    {/* <MdOutlineMoveUp className="text-base"/> */}
                                    {/* <TbDragDrop className="text-sm"/> */}
                                    <HiSquare2Stack className="text-base "/>
                                </div>

                                {/* Título de tabla */}
                                <div className={` pl-2 w-full text-nowrap overflow-hidden text-ellipsis`}
                                    onClick={() => {
                                        task.masInformacion.setTableOpen(task.masInformacion.tableOpen ==true?false:true ); 
                                        task.masInformacion.getDataFromIndividualTables(task.masInformacion.typeOfRequest);
                                    }}
                                >
                                    {task.nombreDeTabla}
                                </div>
                            </div>
  

                            <div className={` ${task.masInformacion.tableOpen?"":"hidden"}`}>
                            <TableCustomed
                                key={task.key}
                                tableRows={task.filas}
                                tableColumns={task.columnas}
                                loading={task.masInformacion.loading}
                                nameOfTable={task.nombreDeTabla}
                            />
                            </div>

                        </div>



                                {/* <Accordion open={task.masInformacion.tableOpen} className="" key={`acordionkey${task.key}`} >
                                    <AccordionHeader
                                        onClick={() => {
                                            task.masInformacion.setTableOpen(task.masInformacion.tableOpen ==true?false:true ); 
                                            console.log("valores de ta",task);
                                            task.masInformacion.getDataFromIndividualTables(task.masInformacion.typeOfRequest);
                                        }}
                                        
                                        className={`hover:cursor-pointer border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                                            task.masInformacion.tableOpen? "hover:!text-blue-700" : ""
                                        }`}
                                    >
                                        {task.nombreDeTabla}
                                    </AccordionHeader>
        
                                    <AccordionBody className="pt-0 text-base font-normal">
                                        <TableCustomed
                                            key={task.key}
                                            tableRows={task.filas}
                                            tableColumns={task.columnas}
                                            loading={task.masInformacion.loading}
                                        />
                                    </AccordionBody>
                                </Accordion> */}

                    </div>
                )}
            </Draggable>       
        )
    }

    const modificarColumna = (data) => {

        if(data == "unaColumna"){
            const newColumn = {
                'column-1':{
                    id: 'column-1',
                    title: 'To do',
                    taskIds: ['dashboard-1', 'dashboard-2', 'dashboard-3', 'dashboard-4','dashboard-5', 'dashboard-6', 'dashboard-7'],
                },
                'column-2':{
                    id: 'column-2',
                    title: 'In Progress',
                    taskIds: [],
                },
                'column-3':{
                    id: 'column-3',
                    title: 'Done',
                    taskIds: [],
                },
            };
            const newColumnOrder = {...initialData, columns: newColumn, columnOrder: ['column-1']};
            setState(newColumnOrder);


            // state.columns
            // if( (state.columns?.['column-2']?.length || 0 ) === 0 && (state.columns?.['column-3']?.length || 0 )===0){
            //     // const newState = {
            //     //     ...
            //     // }
            //     console.log("escogimos una columna");
            // }
            setNumberOfColumns(1);
            
        }else if(data == "dosColumnas"){
            // if( (state.columns?.['column-1']?.length || 0 ) === 0 && (state.columns?.['column-3']?.length || 0 )===0){
                
            //     console.log("escogimos dos columna");
            // }
            const newColumn = {
                'column-1':{
                    id: 'column-1',
                    title: 'To do',
                    taskIds: ['dashboard-1', 'dashboard-2', 'dashboard-3', 'dashboard-4'],
                },
                'column-2':{
                    id: 'column-2',
                    title: 'In Progress',
                    taskIds: ['dashboard-5', 'dashboard-6', 'dashboard-7'],
                },
                'column-3':{
                    id: 'column-3',
                    title: 'Done',
                    taskIds: [],
                },
            };
            const newColumnOrder = {...initialData, columns: newColumn, columnOrder: ['column-1','column-2']};
            setState(newColumnOrder);
            
            setNumberOfColumns(2);
        }else if(data == "tresColumnas"){
            const newColumn = {
                'column-1':{
                    id: 'column-1',
                    title: 'To do',
                    taskIds: ['dashboard-1', 'dashboard-2', 'dashboard-3'],
                },
                'column-2':{
                    id: 'column-2',
                    title: 'In Progress',
                    taskIds: ['dashboard-4','dashboard-5', 'dashboard-6'],
                },
                'column-3':{
                    id: 'column-3',
                    title: 'Done',
                    taskIds: ['dashboard-7'],
                },
            };
            const newColumnOrder = {...initialData, columns: newColumn, columnOrder: ['column-1','column-2', 'column-3']};
            setState(newColumnOrder);

            // if( (state.columns?.['column-1']?.length || 0 ) === 0 && (state.columns?.['column-2']?.length || 0 )===0){
                
            //     console.log("escogimos tres columna");
            // }
            
            setNumberOfColumns(3);
        }
    }

    useEffect(() => {
        setSpecificFiltersDisabled(true);
        clearSelectedValuesFromSpecificFilters();
        if (debouncedSelectFecha && debouncedSelectEntidad && debouncedSelectCartera.length > 0) {
            loadSpecificFilters();
          }
    }, [debouncedSelectFecha, debouncedSelectEntidad, debouncedSelectCartera]);

    // Carga vaores para primer filtro "fecha"
    useEffect(() => {
        // loadGeneralFilters();
        getOptionToData();
    }, []);

    // Carga vaores para segundo filtro "Entidad" - depende de fecha
    useEffect(()=>{
        getOptionToEntidad();
    },[selectFecha])



    // Carga datos de select cartera cada vez que select entidad se modifica
    useEffect(() => {
        getOptionToCartera();
    }, [selectEntidad]);


    // Hook personalizado para Debounce
    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
    
        useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
    
        return () => {
            clearTimeout(handler);
        };
        }, [value, delay]);
    
        return debouncedValue;
    }

    return(
        <>
            <div className="py-5 px-7 flex flex-col h-screen">

                <div className=" flex mb-5">
                    <Link to="/dashboard" className="pr-5 flex items-center"> <IoChevronBackCircle  className={`text-5xl text-[#1F263E]`}/> </Link>
                    <div>
                        <h1 className="font-ralewaySemibold text-2xl">Dashboard de Gestión</h1>
                        <h1 className="font-ralewayMedium text-base">Revisemos cómo ha ido la Gestión...</h1>
                    </div>
                </div>



                <div className=" border-2 border-gray-200 rounded-lg mb-5 bg-purple-600">


                    <div className=" bg-gray-200 text-black pl-5 flex items-center font-ralewayBold text-base h-12">
                        FILTROS
                    </div>

                    <div className="bg-white p-5 ">

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-5 2xl:grid-cols-6 ">
                                               
                            <h3 className="md:col-span-5 2xl:col-span-6 font-ralewaySemibold text-base text-gray-900">FILTROS GENERALES</h3>
                            <div><DatePickerCustomed valor={selectFecha} setValor={setSelectFecha} requerido={true} loading={fetchToDate.loading} initalDate={date.initial} endDate={date.end}/></div>
                            <div><SelectCustomed label="Entidad *" valor={selectEntidad} setValor={setSelectEntidad} options={optionsEntidad} loading={fetchParaEntidad.loading} requerido={true}/></div>
                            <div><SelectMultipleCustomed label="Cartera" valor={selectCartera} setValor={setSelectCartera} options={optionsCartera} loading={fetchParaCartera.loading} requerido={true}/></div>
                            <div className={`${open==true?'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5':'hidden'}`} ><BotonClaro  className={`${open==true?'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5':'hidden'} `} layout="LIMPIAR BÚSQUEDA" onClick={accionesDeBotonLimpiarBusqueda}/></div>
                            <div className={`${open==true?'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6':'hidden'}`}><BotonOscuro className={`${open==true?'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6':'hidden'} `} layout="BUSCAR" onClick={accionesDeBotonBuscar}/></div>
                            
                            <div className={`md:col-span-5 2xl:col-span-6 transition-colors text-gray-900 font-ralewaySemibold flex`} onClick={()=>{setOpen(open==true?false:true);}}>  FILTROS ESPECÍFICOS <IoMdRemoveCircle className={`mt-0.5 ml-2 text-xl text-buttonColor-0  ${open==true?'hidden':''}`}/> <IoAddCircle className={`mt-0.5 ml-2 text-xl text-buttonColor-0  ${open==true?'':'hidden'}`}/> </div>

                            {/* <div className={` ${open==true?'hidden':''}`}><SelectMultipleCustomed label="Prioridad" valor={selectPrioridad}  setValor={setSelectPrioridad} options={optionsPrioridad} loading={loadingFiltroGeneral}  /></div>                               
                            <div className={` ${open==true?'hidden':''}`}><SelectCustomed  label="Moneda"    valor={selectMoneda}   setValor={setSelectMoneda} options={optionsMoneda} loading={loadingFiltroGeneral}    /></div>                       
                            <div className={` ${open==true?'hidden':''}`}><SelectCustomed   label="Producto"    valor={selectProducto}   setValor={setSelectProducto} options={optionsProducto} loading={loadingFiltroGeneral}    /></div> */}

                            <div className={`${open==true?'hidden':''}`}><SelectMultipleCustomed  desactivado={specificFiltersDisabled} label="Producto" valor={selectProducto} setValor={setSelectProducto} options={optionsProducto} loading={loadingFiltroEspecifico}/></div>
                            <div className={`${open==true?'hidden':''}`}><SelectMultipleCustomed desactivado={specificFiltersDisabled} label="Rango de campaña" valor={selectRangoCampanha} setValor={setSelectRangoCampanha} options={optionsRangoCampanha} loading={loadingFiltroEspecifico}/></div>
                            <div className={`${open==true?'hidden':''}`}><SelectMultipleCustomed desactivado={specificFiltersDisabled} label="Macroregiones" valor={selectMacroRegiones} setValor={setSelectMacroRegiones} options={optionsMacroRegiones} loading={loadingFiltroEspecifico}/></div>
                            <div className={`md:col-start-1 md:col-end-1 ${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Año de castigo" valor={selectAnhoCastigo} setValor={setSelectAnhoCastigo} options={optionsAnhoCastigo} loading={loadingFiltroEspecifico} /></div>
                            <div className={`md:col-start-2 md:col-end-2 ${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Moneda" valor={selectMoneda} setValor={setSelectMoneda} options={optionsMoneda} loading={loadingFiltroEspecifico}/></div>
                            <div className={`md:col-start-3 md:col-end-3 ${open==true?'hidden':''}`}><SelectMultipleCustomed desactivado={specificFiltersDisabled} label="Estado de cuenta" valor={selectEstadoCuenta} setValor={setSelectEstadoCuenta} options={optionsEstadoCuenta} loading={loadingFiltroEspecifico} /></div>
                            <div className={`md:col-start-1 md:col-end-1 ${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Mes castigo" valor={selectMesCastigo} setValor={setSelectMesCastigo} options={optionsMesCastigo} loading={loadingFiltroEspecifico} /></div>
                            <div className={`md:col-start-2 md:col-end-2 ${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Prioridad" valor={selectPrioridad} setValor={setSelectPrioridad} options={optionsPrioridad} loading={loadingFiltroEspecifico} /></div>
                            {/*<div className={`                         ${open==true?'hidden':''}`}><SelectMultipleCustomed desactivado={specificFiltersDisabled} label="Prioridad" valor={selectPrioridad} setValor={setSelectPrioridad} options={optionsPrioridad} loading={loadingFiltroGeneral} /></div>*/}
                            <div className={`md:col-start-3 md:col-end-3 ${open==true?'hidden':''}`}><SelectMultipleCustomed desactivado={specificFiltersDisabled} label="Rango de edad" valor={selectRangoEdad} setValor={setSelectRangoEdad} options={optionsRangoEdad} loading={loadingFiltroEspecifico}/></div>
                            <div className={`${open==true?'hidden':'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5'} `}><BotonClaro  layout="LIMPIAR BÚSQUEDA" onClick={accionesDeBotonLimpiarBusqueda}/></div>
                            <div className={`${open==true?'hidden':'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6'} `}><BotonOscuro  layout="BUSCAR" onClick={accionesDeBotonBuscar}/></div>

                        </div>

                    </div>
                </div>



                {
                    // objetoDeDashboard.map((item)=>(

                    //         <Accordion open={item.masInformacion.tableOpen} className="" key={item.key} >
                    //         <AccordionHeader
                    //             onClick={() => {
                    //                 item.masInformacion.setTableOpen(!item.masInformacion.tableOpen); 
                    //                 item.masInformacion.getDataFromIndividualTables(item.masInformacion.typeOfRequest);
                    //             }}
                    //             className={`hover:cursor-pointer border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                    //                 item.masInformacion.tableOpen? "hover:!text-blue-700" : ""
                    //             }`}
                    //         >
                    //             {item.nombreDeTabla}
                    //         </AccordionHeader>

                    //         <AccordionBody className="pt-0 text-base font-normal">
                    //             <TableCustomed
                    //                 key={item.key}
                    //                 tableRows={item.filas}
                    //                 tableColumns={item.columnas}
                    //                 loading={item.masInformacion.loading}
                    //             />
                    //         </AccordionBody>
                    //         </Accordion>

                    // ))
                }

                {/* <h3>-------------------------------------------------------------------------------------------------------------------------</h3> */}
                {
                showGroupOfTables && <div>
                <DragDropContext onDragEnd={onDragEnd}  >
                        <div className="flex gap-2 justify-end pr-5 mb-2">
                            <div onClick={()=>{modificarColumna("unaColumna")}} className="rounded-full bg-pink-100 px-3  h-8 pt-1.5 justify-center items-center text-sm font-ralewayBold    hover:cursor-pointer hover:bg-pink-700">
                                1
                            </div>
                            <div onClick={()=>{modificarColumna("dosColumnas")}} className="rounded-full bg-amber-100 px-3 h-8 pt-1.5 justify-center items-center text-sm font-ralewayBold hover:cursor-pointer hover:bg-amber-900">
                                2
                            </div>
                            <div onClick={()=>{modificarColumna("tresColumnas")}} className="rounded-full bg-blue-100 px-3 h-8 pt-1.5 justify-center items-center text-sm font-ralewayBold hover:cursor-pointer hover:bg-blue-900">
                                3
                            </div>
                        </div>
                        <div className={`${numberOfColumns==1?"grid-cols-1":""} ${numberOfColumns==2?"grid-cols-2":""} ${numberOfColumns==3?"grid-cols-3":""} grid gap-4 `}>
                            {
                                state.columnOrder.map( (columnId) =>{
                                    const column = state.columns[columnId];
                                    // const tasks = column.taskIds.map( taskId => initialData.tasks[taskId])
                                    // const tasks = column.taskIds.map( taskId => initialData.tasks[taskId])
                                    const tasks = column.taskIds.map( taskId => objetoDeDashboardTwo[taskId])
                                    return <Column key={column.id} column={column} tasks={tasks}/>
                                })
                            }
                        </div>
                    
                </DragDropContext>

                </div>
                }
                {/* <h3>-------------------------------------------------------------------------------------------------------------------------</h3> */}

                {
                //     showGroupOfTables && <div>

                //     <Accordion open={fourthTableOpen} className=""  >
                //         <AccordionHeader
                //             onClick={()=>{setFourthTableOpen(fourthTableOpen==true?false:true); getDataFromIndividualTables("Maduracion");}}
                //             className={`hover:cursor-pointer border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                //                 secondTableOpen? "hover:!text-blue-700" : ""
                //             }`}
                //         >
                //             CARTERA POR RANGO DE MADURACIÓN
                //         </AccordionHeader>

                //         <AccordionBody className="pt-0 text-base font-normal">
                //             <TableCustomed
                //                 tableRows={[]}
                //                 tableColumns={[]}
                //                 loading={false}
                //             />
                //             {/* <Tabla04CarteraPorRangoDeMaduracion
                //                 tableRows={registroCuartaTabla}
                //                 loading={loadingFourthTable}
                //             /> */}
                //         </AccordionBody>
                //     </Accordion>

                // </div>
                }


                
                {!showGroupOfTables &&               
                <div className={`h-full  flex items-center justify-center`}>
                    <div className="h-20">
                        {/* Icono filtro - se muestra cuando spinner esta desactivado */}
                        <div className={`py-8 ${spinnerShowGroupTables?'hidden':''}`}>                
                            <img src={filtro} alt="Portada" className="max-w-60 mx-auto "/>
                            <h3 className="font-ralewayBold text-base text-tonosOscuros-0 "> FILTRA PARA INICIAR BÚSQUEDA</h3>
                        </div>
                        {/* Espninner - se muestra cuando icono esta escondido */}
                        <MoonLoader color="#1A237E" size={40} loading={spinnerShowGroupTables}/>
                    </div>
                </div>
                }

            </div>
        </>
    )
}

export default SidebarDashboardView;

function alertas(opcion){

    if(opcion == "camposVacios"){
        return(
        Swal.fire({
            position: "center",
          //   icon: "success",
            title: "Necesario",
            text: 'Debe seleccionar por lo menos un valor para "Fecha", "Entidad" y "Cartera".',
            showConfirmButton: false,
            timer: 3000
          })
        )
    }

}
 

/**
 * @param {json}     response  - es la erspuesta obtenida de la peticoin a una api
 * @param {useState} setUseState - ingresa el hook de estado "useState"
 * @param {string}   condicion - indica que bloque de codigo se ejecutará
 * @param {function} dispatch - en necesario para interactuar con redux, exclusivamente para el login
 */
const procesarDatos = (response, setUseState, condicion, dispatch) => {

    // Si hay error, quiere decir que no hay data (data igual a null)
    // Si existe errores setData se deja como esta
    if(response.error){
        console.log("Existe errores");
        manageErrorAndSessionUtils(response.error, dispatch);
    }else{

        if(condicion == "setDate"){

            const initialDate = response.data?.data[0]
            const endDate = response.data?.data[response.data.data.length - 1]
            setUseState({initial:`${initialDate?.Year}-${initialDate?.Month}-01`, end:`${endDate?.Year}-${endDate?.Month}-01`});

        }else if(condicion == "setOptionsEntidad"){

            const entidadOptions = response.data?.data.map(option => ({
                value: option.CodEntidad,
                label: option.Entidad
            }));
            setUseState(entidadOptions);

        }else if(condicion == "setOptionsCartera"){

            const carteraOptions = response.data?.data.map(option => ({
                value: option.CodCartera,
                label: option.Cartera
            }));
            setUseState(carteraOptions);

        }else if(condicion == "jkl"){
            console.log(condicion);
        }else if(condicion == "mno"){
            console.log(condicion);
        }

    }
}

