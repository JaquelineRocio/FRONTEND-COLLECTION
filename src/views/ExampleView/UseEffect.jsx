import { useEffect } from "react";
const UseEffect = () => {
const miValor = null;

useEffect(()=>{

    if(false){
        console.log("componente Montado")
    }

},[miValor]);
    return(
        <h3>
            Estamo en analisis de funcionameitno de Useefect
        </h3>
    )

}

export default UseEffect;