const BotonOscuro = ({layout = "INGRESE NOMBRE", className="null", onClick=null}) => {
    return(
        <>
            <button className={`bg-tonosOscuros-1 text-white h-10 font-ralewayBold text-sm rounded  ${className}`} onClick={onClick}>
                {layout}
            </button>

        </>
    )
}

export default BotonOscuro;