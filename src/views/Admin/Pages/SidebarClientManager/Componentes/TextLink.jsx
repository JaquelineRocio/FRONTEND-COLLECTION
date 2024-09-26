const TextLink = ({text="ingrese texto"}) => {

    return(
    <div className="group">
        <h1 className="font-ralewayMedium hover:font-ralewaySemibold text-base hover:text-[#1061FF]">{text}</h1>
        <div className="bg-blue-500 h-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    )
}
export default TextLink;
