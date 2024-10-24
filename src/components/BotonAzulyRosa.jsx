const BotonAzulyRosa = ({layout = "INGRESE NOMBRE", azul=true, className="null", onClick=null}) => {
    return(
        <>
            <button className={`
                ${azul?"bg-[#1061FF]":"bg-[#FF025D]"}
              
              text-white h-10
                flex
                justify-center
                items-center
                ${azul?"active:bg-[#1061FF]":"active:bg-[#FF025D]"} 
                px-7
                py-4
                font-ralewayBold 
                text-sm 
                rounded
                w-auto
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

export default BotonAzulyRosa;