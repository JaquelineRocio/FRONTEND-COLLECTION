import { Link } from "react-router-dom";
import UserProfile from "../../Dashboard/Components/UserProfile";
import ButtonWithImage from "./Components/ButtonWithImage";
import { HomeViewCard } from "./Components/HomeViewCard";
import SecondHomeViewCard from "./Components/SecondHomeViewCard";
// import logoContactoEficaz from '../../../../../public/fondo.svg'


const SidebarHomeView = () => {
    return(
        <>
        <div className="p-5">
            {/* <div className="grid grid-cols-4 gap-4 p-6">
                <div className="bg-red-500 text-purple-50 p-5 border-2 col-span-4"><HomeViewCard/></div>
                <div className="bg-red-500 text-purple-50 p-5 w-96 "> <ButtonWithImage/> </div>
                <div className="bg-yellow-500 text-purple-50 p-5 ">3</div>
                <div className="bg-blue-500 text-purple-50 p-5 ">4</div>
                <div className="bg-green-500 text-purple-50 p-5 ">5</div>
                <div className="bg-green-500 text-purple-50 p-5 ">6</div>
                <div className="bg-pink-500 text-purple-50 p-5 ">7</div>
                <div className="bg-orange-500 text-purple-50 p-5 ">8</div>
                <div className="bg-black text-purple-50 p-5 ">9</div>

            </div> */}
            {/* <div className="m-6 flex">

                <div>
                    <h1 className="text-2xl font-bold">Hola, Supervisor</h1>
                    <p className="text-gray-500">¿Cómo está su gestión el día de hoy?</p>
                </div>
            </div> */}

            
            <div className="flex mb-5">
                    <div>
                        <h1 className="font-ralewaySemibold text-2xl">¿Hola, supervisor?</h1>
                        <h1 className="font-ralewayMedium text-base text-gray-500">¿Cómo está su gestión el día de hoy?</h1>
                    </div>
                </div>

            <div className="mb-6">
                <HomeViewCard/>
                {/* <div className="flex gap-6 mt-6 flex-wrap">
                    <div className="w-90 grow shrik-0"><ButtonWithImage/></div>
                    <div className="w-90 grow shrik-0"><ButtonWithImage/></div>
                    <div className="w-90 grow shrik-0"><ButtonWithImage/></div>
                </div> */}
                {/* <SecondHomeViewCard/> */}
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
                    <div className="w-90 grow shrik-0"><ButtonWithImage/></div>
                    <div className="w-90 grow shrik-0"><ButtonWithImage/></div>
                    <div className="w-90 grow shrik-0"><ButtonWithImage/></div>
                    {/* <div className="w-90 grow shrik-0"><ButtonWithImage/></div> */}
                    {/* <div className="w-90 grow shrik-0"><ButtonWithImage/></div>
                    <div className="w-90 grow shrik-0"><ButtonWithImage/></div>
                    <div className="w-90 grow shrik-0"><ButtonWithImage/></div>
                    <div className="w-90 grow shrik-0"><ButtonWithImage/></div>
                    <div className="w-90 grow shrik-0"><ButtonWithImage/></div>*/}
                    <div className="w-90 shrik-0"><ButtonWithImage/></div> 
                </div>


            </div>
            {/* <div className="w-full max-w-md mx-auto mb-12 flex items-center justify-center text-right">
            <img src={logoContactoEficaz} alt="Login Image" className="w-100 object-cover" />
            </div> */}
            {/* <ButtonWithImage/> */}
        </div>
        </>
    );
}

export default SidebarHomeView;
