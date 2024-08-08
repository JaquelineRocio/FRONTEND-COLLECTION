import { Link, useLocation } from "react-router-dom";

const ListItem = ({src=null, open=true, name='Ingrese nombre de link', to=''}) => {
    let location = useLocation();
    let secondSegment = null;
    const segments = location.pathname.split('/').filter(Boolean); // Filtra segmentos vacíos
    secondSegment = segments[1] || ""; // Obtiene el segundo segmento o un mensaje si no existe

    return(
        <>
            <Link to={to}>
                <li className={`h-12 hover:bg-sidebarColor-1 flex flex-row items-center ${open?'':'justify-center'} ${secondSegment == to?'bg-sidebarColor-1':''}`}>
                    {/* <div className={`${secondSegment == to?'bg-orange-500 h-full min-w-1':''} ${open?'':''} `}></div> */}
                    <img src={src} className={`text-white ${open?'ml-4':''}`}/>
                    <h3 className={`ml-5 font-ralewayMedium text-white ${open?'':'hidden'}`}>
                        {name}
                    </h3>
                </li>
            </Link>
        </>
    )
}

export default ListItem