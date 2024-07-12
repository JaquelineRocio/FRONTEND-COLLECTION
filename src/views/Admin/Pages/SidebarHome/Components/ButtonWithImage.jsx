import barras from '../../../../../../public/barras.svg'
const ButtonWithImage = () => {

    return (
        <>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        {/* <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700"> */}
            <div role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <div className="grid mr-4 place-items-center">
                {/* <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" */}
                <img alt="candice" src={barras}
                className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
            </div>
            <div>
                <h6
                className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Dashboard de Gestión
                </h6>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                Iniciar búsqueda
                </p>
            </div>
            </div>
        {/* </nav> */}
        </div>

            {/* <div className="w-full max-w-md mx-auto mb-12 flex items-center justify-center text-right">
                <img src={barras} alt="Login Image" className="w-100 object-cover" />
            </div> */}
        </>
    )

}

export default ButtonWithImage;