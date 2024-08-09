
import pagenotfound from './../../../public/imgs/miscelania/pagenotfound.png'
const PageNotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img className="w-56" src={pagenotfound}></img>
            <div className="text-gray-800 p-6 rounded-lg  text-center">
                
                <h3 className="text-2xl font-bold mb-4">Página no encontrada</h3>
                <p className="text-lg">Lo sentimos. El artículo no ha sido encontrado.</p>
            </div>
        </div>
    );
};

export default PageNotFound;