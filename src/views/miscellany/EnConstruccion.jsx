
import enconstruccion from './../../../public/imgs/miscelania/enconstruccion.png'
const EnConstruccion = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img className="w-56" src={enconstruccion}></img>
            <div className="text-gray-800 p-6 rounded-lg  text-center">
                
                <h3 className="text-2xl font-bold mb-4">En Construcción</h3>
                <p className="text-lg">Estamos trabajando duro para traerte nuevas características. ¡Vuelve pronto!</p>
            </div>
        </div>
    );
};

export default EnConstruccion;