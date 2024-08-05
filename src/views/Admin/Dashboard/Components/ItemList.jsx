import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";
import { useLocation } from "react-router-dom";
import { useState } from "react";


export default function ItemList({name = 'ingrese nombre', to = '/', icon:Icon = TfiLayoutWidthDefaultAlt, description = "" }){
    let location = useLocation();
    let secondSegment = null;

    const segments = location.pathname.split('/').filter(Boolean); // Filtra segmentos vacíos
    secondSegment = segments[1] || null; // Obtiene el segundo segmento o un mensaje si no existe

    if(to=="/" && secondSegment == null){
        secondSegment = "/";
    }

    if(secondSegment == to ){
        console.log("boton seleccionado ", secondSegment);
        // setActiveUrl(true);
    }
    
    return(
        <>

{/* export default function SelectTailwind({label = "etiqueta", className = "w-full", options = defaultOptions}) */}

            <Link to={to}>
            {/* <ListItem className={`font-ralewaySemibold text-[#455A64] mb-1 rounded hover:bg-gray-400  ${ secondSegment == to? ' focus:text-[#3499C2] text-[#3d9fc6] font-ralewayBold text-[16px] focus:bg-white':'' } `}> */}
            <ListItem className={`font-ralewaySemibold text-[#455A64] mb-1 rounded hover:bg-gray-400  ${ secondSegment == to? ' focus:text-[#3499C2] text-[#3d9fc6] font-ralewayBold text-[16px] focus:bg-white':'' } `}>
                <ListItemPrefix className="pr-2">
                    <Icon className="text-2xl "></Icon>
                </ListItemPrefix>
                <div>
                <div>{name}</div>
                <div className="text-blue-gray-600 text-xs">{description}</div>
                </div>

                
            </ListItem>
            </Link>

        </>
    )

}