const BotonClaro = ({layout = "INGRESE NOMBRE", className=null, onClick=null}) => {
    return(
        <>
            <button className = {`   
              border-tonosOscuros-1
              text-tonosOscuros-1 h-10

                px-2
                font-ralewayBold
                text-sm
                rounded 
                border-2 
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

export default BotonClaro;

// whitespace-nowrap