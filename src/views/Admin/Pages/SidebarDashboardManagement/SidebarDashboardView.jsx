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
import Tabla01EstadoGeneralDeCartera from "./components/Tabla01EstadoGeneralDeCartera";
import Tabla02SituacionDeCarteraSegunPrioridad from "./components/Tabla02SituacionDeCarteraSegunPrioridad";
// import Tabla03CarteraPorTramoDeImporte from "./components/Tabla03CarteraPorTramoDeImporte";
import Tabla04CarteraPorRangoDeMaduracion from "./components/Tabla04CarteraPorRangoDeMaduracion";
import Tabla05CarteraPorAnioMesDeCastigo from "./components/Tabla05CarteraPorAnioMesDeCastigo";
import Tabla06PorRangoDeCampanha from "./components/Tabla06PorRangoDeCampanha";
import Tabla07CarteraPorTipoDeProducto from "./components/Tabla07CarteraPorTipoDeProducto";
import Tabla08CarteraPorZona from "./components/Tabla08CarteraPorZona";

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
// import SimulatorApi from "../../../../services/resources/SimulatorApi";

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
    const [selectProducto, setSelectProducto] = useState('');
    const [selectRangoCampanha, setSelectRangoCampanha] = useState('');
    const [selectMacroRegiones, setSelectMacroRegiones] = useState('');
    const [selectAnhoCastigo, setSelectAnhoCastigo] = useState('');
    const [selectMoneda, setSelectMoneda] = useState('')
    const [selectEstadoCuenta, setSelectEstadoCuenta] = useState('');
    const [selectMesCastigo, setSelectMesCastigo] = useState('');
    // const [selectPrioridad, setSelectPrioridad] = useState([]);
    const [selectPrioridad, setSelectPrioridad] = useState('');
    const [selectRangoEdad, setSelectRangoEdad] = useState('');


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
        setSelectProducto('');
        setSelectRangoCampanha('');
        setSelectMacroRegiones('');
        setSelectAnhoCastigo('');     
        setSelectMoneda('');
        setSelectEstadoCuenta('');
        setSelectMesCastigo('');
        // setSelectPrioridad([]);
        setSelectPrioridad('');
        setSelectRangoEdad('');

         
    }

    // Limpia valores seleccionados de filtros especificos
    function clearSelectedValuesFromSpecificFilters(){
        setSelectProducto('');
        setSelectRangoCampanha('');
        setSelectMacroRegiones('');
        setSelectAnhoCastigo('');     
        setSelectMoneda('');
        setSelectEstadoCuenta('');
        setSelectMesCastigo('');
        setSelectPrioridad('');
        setSelectRangoEdad('');
    }

    // Limpia valores seleccionados de filtros generales
    function clearSelectedValuesFromGeneralFilters(){
        setSelectFecha(null);
        setSelectEntidad(''); 
        setSelectCartera([]); 
    }

    // Eliminamos todos los datos (filas) de todas las tablas
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

    async function accionesDeBotonBuscar(){
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

        let codProducto = null;
        codProducto = selectProducto == "" ? null : selectProducto

        let RangoCampanha = null;
        RangoCampanha = selectRangoCampanha == "" ? null : selectRangoCampanha

        let MacroRegiones = null;
        MacroRegiones = selectMacroRegiones == "" ? null : selectMacroRegiones

        let ANHO_CASTIGO = null;
        ANHO_CASTIGO = selectAnhoCastigo == "" ? null : selectAnhoCastigo

        let CodMoneda = null;
        CodMoneda = selectMoneda == "" ? null : selectMoneda

        let EstadoCuenta = null;
        EstadoCuenta = selectEstadoCuenta == "" ? null : selectEstadoCuenta

        let MES_CASTIGO = null;
        MES_CASTIGO = selectMesCastigo == "" ? null : selectMesCastigo

        let CodPrioridad = null;
        CodPrioridad = selectPrioridad == "" ? null : selectPrioridad

        let rangoEdad = null;
        rangoEdad = selectRangoEdad == "" ? null : selectRangoEdad

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
            producto: codProducto,
            campaña: RangoCampanha,
            macroRegiones: MacroRegiones,
            añoCastigo: ANHO_CASTIGO,
            moneda: CodMoneda,
            estadoCuenta: EstadoCuenta,
            mesCastigo: MES_CASTIGO,
            prioridad:CodPrioridad,
            rangoEdad:rangoEdad,
            tipo: "General"
        }

        // Almacenamos en payload secundario datos para que tablas individuales aun puedan hacer consultas
        setBodyPayloadForIndividualTables({...payload});
        setUrlPayloadForIndividualTables({selectEntidad: selectEntidad, selectFecha:selectFecha, selectCartera:selectCartera });

        let {data, error} = await testFetch.post(payload,`/admin/tablon/dashboards?entidad=${selectEntidad}&mes=${selectFecha?.format('MM-YYYY')}&carteras=${selectCartera}`); 

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

        ErrorToken(error,dispatch);
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

    }

    // Carga contenido para selects principales (filtros generales)
    async function loadGeneralFilters() {
        setLoadingFiltroGeneral(true);
        try {
        //   const [entidadResponse, prioridadResponse, productoResponse, monedaResponse] = await Promise.all([
          const [entidadResponse, productoResponse] = await Promise.all([
            Api.get('/entidad'),
            // Api.get('/prioridad'),
            Api.get('/producto'),
            // Api.get('/moneda')
          ]);
          
          // Obtenemos un array de objetos
          const entidadOptions = entidadResponse.map(option => ({
            value: option.codEntidad.toString(),
            label: option.desEntidad
          }));

          // Obtenemos un array de objetos
        //   const prioridadOptions = prioridadResponse.map(option => ({
        //     value: option.codPrioridad.toString(),
        //     label: option.desPrioridad
        //   }));
          
          // Obtenemos un array de objetos
          const productoOptions = productoResponse.map(option => ({
            value: option.codProducto.toString(),
            label: option.desProducto
          }));

          // Obtenemos un array de objetos
        //   const monedaOptions = monedaResponse.map(option => ({
        //     value: option.codMoneda.toString(),
        //     label: option.desMoneda
        //   }));


          setOptionsEntidad(entidadOptions);
        //   setOptionsPrioridad(prioridadOptions);
          setOptionsProducto(productoOptions);
        //   setOptionsMoneda(monedaOptions);
      
        setLoadingFiltroGeneral(false);
        } catch (error) {
            setLoadingFiltroGeneral(false);
            ErrorToken(error,dispatch);
        }
    }

    // Carga contenido para selects secundarios (filtros especificos) - La carga de datos depende de los filtros generales
    async function loadSpecificFilters(){
        console.log("entra a loadSpecificFilters");

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
            console.log("valores de selects obtenidos (data)", data);
            console.log("valores de selects obtenidos (error)", error);

            // Modifica valores para RangoCampanha
            const RangoCampanha = data?.data?.RangoCampaña?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));

            console.log("valore de RangoCampanha", RangoCampanha);


            // Modifica valores para Macro regiones
            const MacroRegiones = data?.data?.MacroRegiones?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));

            console.log("valore de MacroRegiones", MacroRegiones);
          
            // Modifica valores para AnhoCastigo
            const AnhoCastigo = data?.data?.AÑO_CASTIGO?.map(valor => ({
                value: valor, // Usar la misma valor como valor
                label: valor  // Y como etiqueta
            }));

            console.log("valore de AnhoCastigo", AnhoCastigo);

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
            ErrorToken(error, dispatch)
        }
        
    }

    // Carga contenido para selec cartera -- este select depende de entidad
    async function getOptionsToCartera() {
        setLoadingFiltroCartera(true);
        setSelectCartera([]);
        const {data, error} = await testFetch.get(`/cartera/entidad/${selectEntidad}`);        // const {data, error, loading} = useFetch(urlFetch);
        if (data && Array.isArray(data)) {
            const carteraOptions = data.map(option => ({
                value: option.codCartera.toString(),
                label: option.desCartera
            }));
            setOptionsCartera(carteraOptions);
        }
        setLoadingFiltroCartera(false);
        if(error){
            ErrorToken(error,dispatch);
        }

    }

    // Obtiene datos a partir de tablas individuales
    async function getDataFromIndividualTables(tipoTabla){
        bodyPayloadForIndividualTables = {...bodyPayloadForIndividualTables, tipo: tipoTabla};
        switch (tipoTabla) {
            case "General":{
                setLoadingFirstTable(true);
                // setRegistroPrimeraTabla({});
                console.log("datos de general ", registroPrimeraTabla);
                if(!firstTableOpen &&  Object.keys(registroPrimeraTabla).length === 0 ){
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    // let data = await SimulatorApi(500,false);
                    if(!error){
                        setRegistroPrimeraTabla(data?.data ?? {});
                    }
                    setShowGroupOfTables(true);
                    // setFirstTableOpen(true); 
                    setLoadingFirstTable(false);
                    ErrorToken(error,dispatch);
                }
                setLoadingFirstTable(false);
                break;
            }
            case "Prioridad":{
                setLoadingSecondTable(true);
                // setRegistroSegundaTabla({})
                if(!secondTableOpen && Object.keys(registroSegundaTabla).length === 0){
                    console.log("Integra datos para tabla 'Prioridad'");
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    if(!error){
                        setRegistroSegundaTabla(data?.data ?? {});
                    }                
                    setLoadingSecondTable(false);
                    ErrorToken(error,dispatch);
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
                        setRegistroCuartaTabla(data?.data ?? {});
                    }
                    setLoadingFourthTable(false);
                    ErrorToken(error,dispatch);
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
                        setRegistroQuintaTabla(data?.data ?? {});
                    }
                    setLoadingFifthTable(false);
                    ErrorToken(error,dispatch);
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
                        setRegistroSextaTabla(data?.data ?? {});
                    }
                    setLoadingSixthTable(false);
                    ErrorToken(error,dispatch);
                }
                setLoadingSixthTable(false);
                break;
            }
            case "CodProducto":{
                setLoadingSeventhTable(true);
                // setRegistroSetimaTabla({});
                console.log("interior codProducto", registroSetimaTabla);
                if(!seventhTableOpen && Object.keys(registroSetimaTabla).length === 0){
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    if(!error){
                        setRegistroSetimaTabla(data?.data ?? {});                    
                    }
                    setLoadingSeventhTable(false);
                    ErrorToken(error,dispatch);
                }
                setLoadingSeventhTable(false);
                break;
            }
            case "MacroRegiones":{
                setLoadingEighthTable(true);
                // setRegistroOctavaTabla({})
                console.log("interior macroregiones", registroOctavaTabla);
                if(!octaveTableOpen && Object.keys(registroOctavaTabla).length === 0){
                    let {data, error} = await testFetch.post(bodyPayloadForIndividualTables,`/admin/tablon/dashboards?entidad=${urlPayloadForIndividualTables.selectEntidad}&mes=${urlPayloadForIndividualTables.selectFecha?.format('MM-YYYY')}&carteras=${urlPayloadForIndividualTables.selectCartera}`); 
                    if(!error){
                        setRegistroOctavaTabla(data?.data ?? {});
                    }
                    setLoadingEighthTable(false);
                    ErrorToken(error,dispatch);   
                }
                setLoadingEighthTable(false);
                break;
            }
            default:
                console.log("No hay consulta solicitada");
        }

        setSpinnerShowGroupTables(false);
    }

    // useEffect(() => {
    //     console.log("valor de selectFecha:", selectFecha);
    //     console.log("valor de selectEntidad:", selectEntidad);
    //     console.log("valor de selectCartera:", selectCartera);
    //     loadSpecificFilters();
    // }, [selectFecha, selectEntidad, selectCartera]);

    useEffect(() => {
        setSpecificFiltersDisabled(true);
        clearSelectedValuesFromSpecificFilters();
        if (debouncedSelectFecha && debouncedSelectEntidad && debouncedSelectCartera.length > 0) {
            loadSpecificFilters();
          }
    }, [debouncedSelectFecha, debouncedSelectEntidad, debouncedSelectCartera]);

    useEffect(() => {
        loadGeneralFilters();
    }, []);

    // Carga datos de select cartera cada vez que select entidad se modifica
    useEffect(() => {
        if(selectEntidad){
            getOptionsToCartera();  
        }
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

            {/* <SelectCustomedForArray  label="Producto"    valor={selectProducto}   setValor={setSelectProducto} options={optionsProducto} loading={loadingFiltroGeneral}    />
            <SelectCustomedForArray  label="Rango de campaña"    valor={selectRangoCampanha}   setValor={setSelectRangoCampanha} options={optionsRangoCampanha} loading={loadingFiltroEspecifico}    />
            <SelectCustomedForArray  label="Macroregiones"    valor={selectMacroRegiones}   setValor={setSelectMacroRegiones} options={optionsMacroRegiones} loading={loadingFiltroEspecifico}    />
            <SelectCustomedForArray  label="Año de castigo"    valor={selectAnhoCastigo}   setValor={setSelectAnhoCastigo} options={optionsAnhoCastigo} loading={loadingFiltroEspecifico}    />
            <SelectCustomedForArray  label="Moneda"    valor={selectMoneda}   setValor={setSelectMoneda} options={optionsMoneda} loading={loadingFiltroEspecifico}    />
            <SelectCustomedForArray  label="Estado de cuenta"    valor={selectEstadoCuenta}   setValor={setSelectEstadoCuenta} options={optionsEstadoCuenta} loading={loadingFiltroEspecifico}    />
            <SelectCustomedForArray  label="Mes castigo"    valor={selectMesCastigo}   setValor={setSelectMesCastigo} options={optionsMesCastigo} loading={loadingFiltroEspecifico}    />
            <SelectCustomedForArray  label="Prioridad"    valor={selectMoneda}   setValor={setSelectMoneda} options={optionsMoneda} loading={loadingFiltroEspecifico}    />
            <SelectCustomedForArray  label="Rango de edad"    valor={selectRangoEdad}   setValor={setSelectRangoEdad} options={optionsRangoEdad} loading={loadingFiltroEspecifico}    /> */}

            <div className="py-5 px-7 flex flex-col h-screen">

                <div className=" flex mb-5">
                    <Link to="/dashboard" className="pr-5 flex items-center"> <IoChevronBackCircle  className={`text-5xl text-[#1F263E]`}/> </Link>
                    <div>
                        <h1 className="font-ralewaySemibold text-2xl">Dashboard de Gestión</h1>
                        <h1 className="font-ralewayMedium text-base">Revisemos cómo ha ido la Gestión...</h1>
                    </div>
                </div>


                {/* <div className=" border-2 border-gray-200 rounded-lg">


                    <div className=" bg-gray-200 text-blac pl-5 flex items-center font-ralewayBold text-base h-12">
                        FILTROS
                    </div>

                    <div className="bg-white p-5">

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-5 2xl:grid-cols-6 ">
                                               
                            <h3 className="md:col-span-5 2xl:col-span-6 font-ralewaySemibold text-base text-gray-900">FILTROS GENERALES</h3>
                            <div><DatePickerCustomed valor={selectFecha} setValor={setSelectFecha} requerido={true}/></div>
                            <div><SelectCustomed label="Entidad *"    valor={selectEntidad}   setValor={setSelectEntidad} options={optionsEntidad} loading={loadingFiltroGeneral}   requerido={true}/></div>
                            <div><SelectMultipleCustomed label="Cartera" valor={selectCartera}  setValor={setSelectCartera} options={optionsCartera} loading={loadingFiltroCartera}  requerido={true}/></div>
                            <div className={`${open==true?'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5':'hidden'}`} ><BotonClaro  className={`${open==true?'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5':'hidden'} `} layout="LIMPIAR BÚSQUEDA" onClick={accionesDeBotonLimpiarBusqueda}/></div>
                            <div className={`${open==true?'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6':'hidden'}`}><BotonOscuro className={`${open==true?'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6':'hidden'} `} layout="BUSCAR" onClick={accionesDeBotonBuscar}/></div>
                            
                            <div className={`md:col-span-5 2xl:col-span-6 transition-colors text-gray-900 font-ralewaySemibold flex`} onClick={()=>{setOpen(open==true?false:true);}}>  FILTROS ESPECÍFICOS <IoMdRemoveCircle className={`mt-0.5 ml-2 text-xl text-buttonColor-0  ${open==true?'hidden':''}`}/> <IoAddCircle className={`mt-0.5 ml-2 text-xl text-buttonColor-0  ${open==true?'':'hidden'}`}/> </div>

                            <div className={` ${open==true?'hidden':''}`}><SelectMultipleCustomed label="Prioridad" valor={selectPrioridad}  setValor={setSelectPrioridad} options={optionsPrioridad} loading={loadingFiltroGeneral}  /></div>                               
                            <div className={` ${open==true?'hidden':''}`}><SelectCustomed  label="Moneda"    valor={selectMoneda}   setValor={setSelectMoneda} options={optionsMoneda} loading={loadingFiltroGeneral}    /></div>                       
                            <div className={` ${open==true?'hidden':''}`}><SelectCustomed   label="Producto"    valor={selectProducto}   setValor={setSelectProducto} options={optionsProducto} loading={loadingFiltroGeneral}    /></div>                       
                            <div className={` ${open==true?'hidden':'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5'} `}><BotonClaro  layout="LIMPIAR BÚSQUEDA" onClick={accionesDeBotonLimpiarBusqueda}/></div>
                            <div className={` ${open==true?'hidden':'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6'} `}><BotonOscuro  layout="BUSCAR" onClick={accionesDeBotonBuscar}/></div>

                        </div>

                    </div>
                </div> */}



                <div className=" border-2 border-gray-200 rounded-lg">


                    <div className=" bg-gray-200 text-blac pl-5 flex items-center font-ralewayBold text-base h-12">
                        FILTROS
                    </div>

                    <div className="bg-white p-5">

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-5 2xl:grid-cols-6 ">
                                               
                            <h3 className="md:col-span-5 2xl:col-span-6 font-ralewaySemibold text-base text-gray-900">FILTROS GENERALES</h3>
                            <div><DatePickerCustomed valor={selectFecha} setValor={setSelectFecha} requerido={true}/></div>
                            <div><SelectCustomed label="Entidad *" valor={selectEntidad} setValor={setSelectEntidad} options={optionsEntidad} loading={loadingFiltroGeneral} requerido={true}/></div>
                            <div><SelectMultipleCustomed label="Cartera" valor={selectCartera} setValor={setSelectCartera} options={optionsCartera} loading={loadingFiltroCartera} requerido={true}/></div>
                            <div className={`${open==true?'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5':'hidden'}`} ><BotonClaro  className={`${open==true?'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5':'hidden'} `} layout="LIMPIAR BÚSQUEDA" onClick={accionesDeBotonLimpiarBusqueda}/></div>
                            <div className={`${open==true?'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6':'hidden'}`}><BotonOscuro className={`${open==true?'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6':'hidden'} `} layout="BUSCAR" onClick={accionesDeBotonBuscar}/></div>
                            
                            <div className={`md:col-span-5 2xl:col-span-6 transition-colors text-gray-900 font-ralewaySemibold flex`} onClick={()=>{setOpen(open==true?false:true);}}>  FILTROS ESPECÍFICOS <IoMdRemoveCircle className={`mt-0.5 ml-2 text-xl text-buttonColor-0  ${open==true?'hidden':''}`}/> <IoAddCircle className={`mt-0.5 ml-2 text-xl text-buttonColor-0  ${open==true?'':'hidden'}`}/> </div>

                            {/* <div className={` ${open==true?'hidden':''}`}><SelectMultipleCustomed label="Prioridad" valor={selectPrioridad}  setValor={setSelectPrioridad} options={optionsPrioridad} loading={loadingFiltroGeneral}  /></div>                               
                            <div className={` ${open==true?'hidden':''}`}><SelectCustomed  label="Moneda"    valor={selectMoneda}   setValor={setSelectMoneda} options={optionsMoneda} loading={loadingFiltroGeneral}    /></div>                       
                            <div className={` ${open==true?'hidden':''}`}><SelectCustomed   label="Producto"    valor={selectProducto}   setValor={setSelectProducto} options={optionsProducto} loading={loadingFiltroGeneral}    /></div> */}

                            <div className={`${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Producto" valor={selectProducto} setValor={setSelectProducto} options={optionsProducto} loading={loadingFiltroGeneral}/></div>
                            <div className={`${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Rango de campaña" valor={selectRangoCampanha} setValor={setSelectRangoCampanha} options={optionsRangoCampanha} loading={loadingFiltroEspecifico}/></div>
                            <div className={`${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Macroregiones" valor={selectMacroRegiones} setValor={setSelectMacroRegiones} options={optionsMacroRegiones} loading={loadingFiltroEspecifico}/></div>
                            <div className={`md:col-start-1 md:col-end-1 ${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Año de castigo" valor={selectAnhoCastigo} setValor={setSelectAnhoCastigo} options={optionsAnhoCastigo} loading={loadingFiltroEspecifico} /></div>
                            <div className={`md:col-start-2 md:col-end-2 ${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Moneda" valor={selectMoneda} setValor={setSelectMoneda} options={optionsMoneda} loading={loadingFiltroEspecifico}/></div>
                            <div className={`md:col-start-3 md:col-end-3 ${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Estado de cuenta" valor={selectEstadoCuenta} setValor={setSelectEstadoCuenta} options={optionsEstadoCuenta} loading={loadingFiltroEspecifico} /></div>
                            <div className={`md:col-start-1 md:col-end-1 ${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Mes castigo" valor={selectMesCastigo} setValor={setSelectMesCastigo} options={optionsMesCastigo} loading={loadingFiltroEspecifico} /></div>
                            <div className={`md:col-start-2 md:col-end-2 ${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Prioridad" valor={selectPrioridad} setValor={setSelectPrioridad} options={optionsPrioridad} loading={loadingFiltroEspecifico} /></div>
                            {/*<div className={`                         ${open==true?'hidden':''}`}><SelectMultipleCustomed desactivado={specificFiltersDisabled} label="Prioridad" valor={selectPrioridad} setValor={setSelectPrioridad} options={optionsPrioridad} loading={loadingFiltroGeneral} /></div>*/}
                            <div className={`md:col-start-3 md:col-end-3 ${open==true?'hidden':''}`}><SelectCustomedForArray desactivado={specificFiltersDisabled} label="Rango de edad" valor={selectRangoEdad} setValor={setSelectRangoEdad} options={optionsRangoEdad} loading={loadingFiltroEspecifico}/></div>
                            <div className={`${open==true?'hidden':'md:col-start-4 md:col-end-4 2xl:col-start-5 2xl:col-end-5'} `}><BotonClaro  layout="LIMPIAR BÚSQUEDA" onClick={accionesDeBotonLimpiarBusqueda}/></div>
                            <div className={`${open==true?'hidden':'md:col-start-5 md:col-end-5 2xl:col-start-6 2xl:col-end-6'} `}><BotonOscuro  layout="BUSCAR" onClick={accionesDeBotonBuscar}/></div>

                        </div>

                    </div>
                </div>





                {showGroupOfTables && <div>
                    {/* 1: Dashboard de Estado General de Cartera */}
                    <Accordion open={firstTableOpen} className=""  >
                        <AccordionHeader
                        onClick={()=>{setFirstTableOpen(firstTableOpen==true?false:true); getDataFromIndividualTables("General")}}
                        className={`hover:cursor-pointer border-b-0  transition-colors font-ralewayBold text-base text-tonosOscuros-1 ${
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
                                loading={loadingFirstTable}
                            />
                        </AccordionBody>
                    </Accordion>

                    {/* 2: Dashboard de situación de Cartera según prioridad */}
                    <Accordion open={secondTableOpen} >
                        <AccordionHeader
                         onClick={()=>{setSecondTableOpen(secondTableOpen==true?false:true);getDataFromIndividualTables("Prioridad");}}
                        className={`hover:cursor-pointer border-b-0  transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                            secondTableOpen? "hover:!text-blue-700" : ""
                        }`}
                        >
                        SITUACIÓN DE CARTERA SEGÚN PRIORIDAD
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla02SituacionDeCarteraSegunPrioridad
                                tableRows={registroSegundaTabla}
                                loading={loadingSecondTable}
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
                    <Accordion open={fourthTableOpen} className=""  >
                        <AccordionHeader
                        onClick={()=>{setFourthTableOpen(fourthTableOpen==true?false:true);getDataFromIndividualTables("Maduracion");}}

                        className={`hover:cursor-pointer border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                            secondTableOpen? "hover:!text-blue-700" : ""
                        }`}
                        >

                        CARTERA POR RANGO DE MADURACIÓN
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla04CarteraPorRangoDeMaduracion
                                tableRows={registroCuartaTabla}
                                loading={loadingFourthTable}
                            />
                        </AccordionBody>
                    </Accordion>

                    {/* 5: Dashboard de cartera por año - mes de castigo*/}
                    <Accordion open={fifthTableOpen} className=""  >
                        <AccordionHeader
                        onClick={()=>{setFifthTableOpen(fifthTableOpen==true?false:true); getDataFromIndividualTables("AÑO_CASTIGO");}}
                        className={`hover:cursor-pointer border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1   ${
                            secondTableOpen? "hover:!text-blue-700 " : ""
                        }`}
                        >
                        CARTERA POR AÑO - MES DE CASTIGO
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla05CarteraPorAnioMesDeCastigo
                                tableRows={registroQuintaTabla}
                                loading={loadingFifthTable}
                            />
                        </AccordionBody>
                    </Accordion>

                    {/* 6: Dashboard por rango de campaña*/}
                    <Accordion open={sixthTableOpen} className="" >
                        <AccordionHeader
                        onClick={()=>{setSixthTableOpen(sixthTableOpen==true?false:true); getDataFromIndividualTables("RangoCampaña");}}
                        className={`hover:cursor-pointer border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                            secondTableOpen? "hover:!text-blue-700" : ""
                        }`}
                        >
                        DASHBOARD POR RANGO DE CAMPAÑA
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla06PorRangoDeCampanha
                                tableRows={registroSextaTabla}
                                loading={loadingSixthTable}
                            />
                        </AccordionBody>
                    </Accordion>

                    {/* 7: Dashboard de cartera por tipo de producto*/}
                    <Accordion open={seventhTableOpen} className="" >
                        <AccordionHeader
                        onClick={()=>{setSeventhTableOpen(seventhTableOpen==true?false:true); getDataFromIndividualTables("CodProducto");}}
                        className={`hover:cursor-pointer border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                            secondTableOpen? "hover:!text-blue-700" : ""
                        }`}
                        >
                        CARTERA POR TIPO DE PRODUCTO
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla07CarteraPorTipoDeProducto
                                tableRows={registroSetimaTabla}
                                loading={loadingSeventhTable}
                            />
                        </AccordionBody>
                    </Accordion>

                    {/* 8: Dashboard de cartera por zona*/}
                    <Accordion open={octaveTableOpen} className="" >
                        <AccordionHeader
                        onClick={()=>{setOctaveTableOpen(octaveTableOpen==true?false:true); getDataFromIndividualTables("MacroRegiones");}}
                        className={`hover:cursor-pointer border-b-0 transition-colors font-ralewayBold text-base text-tonosOscuros-1  ${
                            secondTableOpen? "hover:!text-blue-700" : ""
                        }`}
                        >
                        CARTERA POR ZONA
                        </AccordionHeader>

                        <AccordionBody className="pt-0 text-base font-normal">
                            <Tabla08CarteraPorZona
                                tableRows={registroOctavaTabla}
                                loading={loadingEighthTable}
                            />
                        </AccordionBody>
                    </Accordion>
                </div>
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
            text: 'Debe seleccionar por lo menos un valor para "Entidad", "Cartera" y "Fecha".',
            showConfirmButton: false,
            timer: 3000
          })
        )
    }

    if(opcion == "TokenExpired"){
        console.log("funcion esperando a ser implementada");
    }
}

const ErrorToken = (error, dispatch) => {

    if (!error) {
      return null; // No renderiza nada si no hay error
    }
  
    if (error.message === 'Token expired') {
      swal({
        title: "Sesión Expirada",
        text: "Su sesión ha expirado. Por favor, inicie sesión nuevamente para continuar.",
        icon: "warning",
        button: "OK"
      }).then(() => {
        dispatch(unauthenticatedUser());
      });
    } else {
      swal({
        title: "Error de consulta",
        text: "Hubo un error al obtener los datos, por favor vuelva a realizar su consulta.",
        icon: "warning",
        button: "OK"
      });
    }
  
    return null; // Aquí se retorna JSX
};