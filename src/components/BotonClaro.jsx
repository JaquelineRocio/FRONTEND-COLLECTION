const BotonClaro = ({layout = "INGRESE NOMBRE", className=null, onClick=null}) => {
    return(
        <>
            <button className = {`w-full text-tonosOscuros-1 h-10 font-ralewayBold text-sm rounded border-2 border-tonosOscuros-1 ${className}`} onClick={onClick}>
                {layout}
            </button>

        </>
    )
}

export default BotonClaro;