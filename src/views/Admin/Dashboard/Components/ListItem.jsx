import { Link, useLocation } from "react-router-dom";

const ListItem = ({src=null, open=true, name='Ingrese nombre de link', to=''}) => {
    let location = useLocation();
    let secondSegment = null;
    const segments = location.pathname.split('/').filter(Boolean); // Filtra segmentos vacíos
    secondSegment = segments[1] || ""; // Obtiene el segundo segmento o un mensaje si no existe

    return(
        <>
            <Link to={to}>
                <li className={`h-12 hover:bg-sidebarColor-1 flex flex-row items-center ${open?'':'justify-between'} ${secondSegment == to?'bg-sidebarColor-1':''}`}>
                {/* <div className=" shadow-[10px_0px_20px_0px_rgba(6,182,212,0.5)]">Subscribe</div> */}
                    <div className={`${secondSegment == to?'bg-[#50B8E4] shadow-[10px_0px_20px_0px_rgba(6,182,212,0.5)] h-full min-w-1':''} ${open?'':''} `}></div>
                    <img src={src} className={`text-white h-5 ${open?'ml-4 ':''} ${secondSegment == to?'h-6 ml-[8px] ':''}`}/>
                    <div className={`${secondSegment == to?' h-full min-w-1':''} ${open?'hidden':''} `}></div>

                    <h3 className={`ml-5 font-ralewayMedium  text-white ${open?'':'hidden'}  ${secondSegment == to?'text-base':'text-sm'}`}>
                        {name}
                    </h3>
                </li>
            </Link>
        </>
    )
}

export default ListItem