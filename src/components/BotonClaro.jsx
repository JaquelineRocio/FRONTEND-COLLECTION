const BotonClaro = ({layout = "INGRESE NOMBRE", className=null, onClick=null}) => {
    return(
        <>
            <button className = {`   
              border-buttonColor-0
              text-buttonColor-0 h-10
                 flex
                 justify-center
                 items-center
                 active:bg-[#f3f3f3] 
                 active:text-[#001862]
                 active:border-[#001862]
                px-2
                py-7
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