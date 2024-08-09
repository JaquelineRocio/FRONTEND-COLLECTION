import { Link } from "react-router-dom";
import ButtonWithImage from "./Components/ButtonWithImage";
import { HomeViewCard } from "./Components/HomeViewCard";

const SidebarHomeView = () => {
    return(
        <>
            <div className="py-5 px-7">            
                <div className="flex mb-6">
                    <div>
                        <h1 className="font-ralewaySemibold text-2xl">¿Hola, supervisor?</h1>
                        <h1 className="font-ralewayMedium text-base text-gray-500">¿Cómo está su gestión el día de hoy?</h1>
                    </div>
                </div>

                <div className="mb-6 grid lg:grid-cols-5">
                    <div className="col-span-4">
                        <HomeViewCard/>
                    </div>

                    
                </div>
                

                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
                <Link to='gestiondashboard' >   <div className="w-90 grow shrik-0"><ButtonWithImage/></div></Link>
                </div>

            </div>
        </>
    );
}

export default SidebarHomeView;
