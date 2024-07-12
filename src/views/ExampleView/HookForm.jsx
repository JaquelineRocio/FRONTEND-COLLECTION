import {useForm} from 'react-hook-form'
const HookForm = () => {
    const{register, handleSubmit, formState:{errors}} = useForm();
    console.log(errors);
    const onSubmit = handleSubmit((data)=>{
        console.log(data);
    });
    return(
        <form onSubmit={onSubmit}>
            <label htmlFor = "nombre">Nombre </label>
            <input 
                type="text"
                {...register("nombre", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                })}
            />
            {
                errors.nombre.required && <span>Nombre es requerido</span>
            }
                        {
                errors.nombre.minLength && <span>tamaño minimo no respetado</span>
            }

            <br></br>

            <label
            htmlFor = "correo"
            >
                Correo
            </label>
            <input 
                type="text"
                {...register("correo")}
            />

<br></br>

            <label
            htmlFor = "password"
            >
                Password
            </label>
            <input 
                type="text"
                {...register("password")}            
            />

<br></br>

            <button
                type='submit'
            >
                enviar
            </button>

        </form>
    )

}

export default HookForm;