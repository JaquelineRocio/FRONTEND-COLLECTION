import { useState } from "react";

const SelectsAninados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");
    return (
        <>
        
        <SelectList title="estados" url="https://poetic-tube-428221-a5.rj.r.appspot.com/entidad" handleChange={(e)=>{console.log("ssss",e.target.value); setState(e.target.value)}}/>

        {
        state && (<SelectList title="municipios" url="" handleChange={(e)=>{console.log("ssss",e.target.value);  setTown(e.target.value)}}/>)
        }

        {
        town && (<SelectList title="colonias" url="" handleChange={(e)=>{setSuburb(e.target.value)}}/>)
        }
        
        <pre>
            <code>
                {state}-{town}-{suburb}
            </code>
        </pre>

        </>
    )

}

export default SelectsAninados;
// --------------------------------------------------
import { useFetch } from "../../hooks/useFetch";
function SelectList({title, url, handleChange}){
    const {data, error, loading} = useFetch(url);
    console.log("valores",data, error, loading);

    // hasta que no haya datos, no se cargara el select
    // if(!data) return null;

    // creamos un id
    let id = `select-${title}`

    // obtenemos especificamente el valor que queremos
    // let options = data.response[title];
    let options = data;
    // console.log("esta es la entiad",options[0].desEntidad);
    console.log("opcioens obtenidas de nueva peticion fetch", options);
    return(
        <div>
            <label htmlFor={id}>{title}</label>
            {loading && <h3>cargando..</h3>}
            <select name={id} id={id} onChange={handleChange}>
                <option value="">Elige un {title}</option>      {/* value es lo que se envia al servidor */}
                {data && options.map((valor)=> <option value={valor.codEntidad}>{valor.desEntidad}</option> )}

            </select>

        </div>
    )
}