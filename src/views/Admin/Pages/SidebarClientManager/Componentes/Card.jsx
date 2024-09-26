const Card = () => {

    return(

        <div className="border-[1px] border-gray-80 flex p-4 rounded-xl">

            <div className="bg-pink-50 rounded-full px-6 flex items-center text-white font-ralewayBold">
                    icono
            </div>

            <div className="bg-black  w-[1px] mx-4">

            </div>
            <div>
                <h3 className="font-ralewayBold text-xl mb-2 text-center ">Capital</h3>
                <h3 className="mb-2 text-light-blue-800">S/. 0,000.00</h3>
                <h3 className="text-light-blue-800">$ 0,000.00</h3>
            </div>

        </div>

    )
}

export default Card;