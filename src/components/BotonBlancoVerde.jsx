const BotonBlancoVerde = ({layout = "INGRESE NOMBRE", blanco=true, className="null", onClick=null}) => {
    return(
        <>
            <button className={`
                ${blanco?"bg-[#ffffff]":"bg-[#00C142]"}
                ${blanco?"text-[#FF025D]":"text-white"}
                ${blanco?"border-[#FF025D]":"border-[#00C142]"}
                border-2
                
                
                flex
                justify-center
                items-center
                ${blanco?"active:bg-[#FF025D]":"active:bg-[#ffffff]"} 
                ${blanco?"active:text-[#ffffff]":"active:text-[#00C142]"} 
                w-full
                py-4
                font-ralewayBold 
                text-sm 
                rounded
                overflow-hidden
                text-nowrap
                
                text-ellipsis   
                ${className}
            `
            
            } 
                title={`${layout}`}
                onClick={onClick}
            >
                {layout}
            </button>

        </>
    )
}

export default BotonBlancoVerde;