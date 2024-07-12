import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { TfiLayoutWidthDefaultAlt } from "react-icons/tfi";


export default function ItemList({name = 'ingrese nombre', to = '/', icon:Icon = TfiLayoutWidthDefaultAlt }){
    return(
        <>

{/* export default function SelectTailwind({label = "etiqueta", className = "w-full", options = defaultOptions}) */}
            <Link to={to}>
            <ListItem className="mb-1 hover:bg-gray-800 hover:text-white focus:bg-gray-300 active:bg-gray-900">
                <ListItemPrefix >
                    <Icon className="text-xl"></Icon>
                </ListItemPrefix>
                {name}
            </ListItem>
            </Link>

        </>
    )

}