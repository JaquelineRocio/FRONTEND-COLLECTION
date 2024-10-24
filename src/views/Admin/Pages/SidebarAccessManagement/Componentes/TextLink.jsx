import { Link } from "react-router-dom";

const TextLink = ({text="ingrese texto", to=""}) => {

    return(
    <Link to={to}>
        <div className=" bg-orange-400 p-3  text-center" >
            <h1 className="font-ralewayMedium hover:font-ralewaySemibold text-base hover:text-[#1061FF]">{text}</h1>
            <div className="bg-blue-500 h-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    </Link>
    )
}
export default TextLink;
