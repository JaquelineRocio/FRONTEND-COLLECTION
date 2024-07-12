import ButtonWithImage from "../Admin/Pages/SidebarHome/Components/ButtonWithImage";

const FlexTailwind = () => {
    return(
        <>
            {/* <div className="flex place-content-between p-4"> */}
            {/* <div className="flex place-content-around flex-wrap"> maantiene el ancho de los elementos */}
            <div className="flex gap-4 flex-wrap">
                <div className="bg-red-500 text-purple-50 w-90 border-2 border-red-600 grow shrik-0"><ButtonWithImage/></div>
                <div className="bg-red-500 text-purple-50 w-90 border-2 border-red-600 grow shrik-0"><ButtonWithImage/></div>
                <div className="bg-red-500 text-purple-50 w-90 border-2 border-red-600 grow shrik-0"><ButtonWithImage/></div>
                <div className="bg-red-500 text-purple-50 w-90 border-2 border-red-600 grow shrik-0"><ButtonWithImage/></div>
                <div className="bg-red-500 text-purple-50 w-90 border-2 border-red-600 grow shrik-0"><ButtonWithImage/></div>
                <div className="bg-red-500 text-purple-50 w-90 border-2 border-red-600 grow shrik-0"><ButtonWithImage/></div>
                <div className="bg-red-500 text-purple-50 w-90 border-2 border-red-600 grow shrik-0"><ButtonWithImage/></div>
                <div className="bg-red-500 text-purple-50 w-90 border-2 border-red-600 grow shrik-0"><ButtonWithImage/></div>
                <div className="bg-red-500 text-purple-50 w-90 border-2 border-red-600 shrik-0"><ButtonWithImage/></div>
            </div>

            {/* <div className="flex gap-4">
                <div className="bg-red-500 text-purple-50 p-5 w-40 h-40 border-2 border-red-600 basis-1/4"></div>
                <div className="bg-red-500 text-purple-50 p-5 w-40 h-40 border-2 border-red-600 basis-1/4">2</div>
                <div className="bg-red-500 text-purple-50 p-5 w-40 h-40 border-2 border-red-600 basis-1/4">3</div>
                <div className="bg-red-500 text-purple-50 p-5 w-40 h-40 border-2 border-red-600 basis-1/4">4</div>
                <div className="bg-red-500 text-purple-50 p-5 w-40 h-40 border-2 border-red-600 basis-1/4">5</div>
                <div className="bg-red-500 text-purple-50 p-5 w-40 h-40 border-2 border-red-600 basis-1/4">6</div>
                <div className="bg-red-500 text-purple-50 p-5 w-40 h-40 border-2 border-red-600 basis-1/4">7</div>
                <div className="bg-red-500 text-purple-50 p-5 w-40 h-40 border-2 border-red-600 basis-1/4">8</div>
                <div className="bg-red-500 text-purple-50 p-5 w-40 h-40 border-2 border-red-600 basis-1/4">9</div>
            </div> */}
        </>
    )
}

export default FlexTailwind;