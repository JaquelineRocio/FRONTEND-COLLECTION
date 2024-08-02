const BotonOscuro = ({layout = "INGRESE NOMBRE", className="null", onClick=null}) => {
    return(
        <>
            <button className={`
                bg-tonosOscuros-1 
                text-white h-10
                 
                px-2
                font-ralewayBold 
                text-sm 
                rounded
                w-full
                text-nowrap
                overflow-clip
                text-ellipsis   
                ${className}
            `} 
                title={`${layout}`}
                onClick={onClick}
            >
                {layout}
            </button>

        </>
    )
}

export default BotonOscuro;