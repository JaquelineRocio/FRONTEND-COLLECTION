import { useEffect, useMemo, useRef, useState } from "react";

const HooksReact = () => {
    console.log("actualizacion realizada en HooksReact");
    const [data, setData] = useState(0)


    return(
        <>       
        <Child/>
        <h3>{data}</h3>
        <button onClick={()=>{setData(data+1)}}>preionsa</button>
        </>
    )
}

export default HooksReact;



const Child = () => {

    // function aumentarNumero(){
    //     let num1 = 0;
    //     for(let i=0; i<10000; i++){
    //         console.log("useEffect ejecutandose en el child")
    //          num1 = i;
    //     }
    //     return num1;
    // }
    let num1 = 0;
    console.log("useEffect ejecutandose en el child")
    const num1memo = useMemo(()=>{
        
        for(let i=0; i<10000; i++){
             num1 = i;
             console.log(num1)
        }
        return num1;
    },[num1]);

    // const num1 = aumentarNumero();


    return(<>
        <h3>{num1memo}</h3>
    </>)
}