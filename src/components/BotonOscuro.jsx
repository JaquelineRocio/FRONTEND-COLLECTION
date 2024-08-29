const BotonOscuro = ({layout = "INGRESE NOMBRE", className="null", onClick=null}) => {
    return(
        <>
            <button className={`
              bg-buttonColor-0
              text-white h-10
                flex
                justify-center
                items-center 
                active:bg-[#001862]
                px-2
                py-7
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