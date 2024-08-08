import { useForm } from "react-hook-form";
const UsoFormularioReactHookForm = () => {

    // const {register, handleSubmit, formState} = useForm();
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = handleSubmit(data => {
        console.log("mensaje enviado");
        console.log(data);
    })


    console.log(errors)
    const reglasNombre = {
        // required: true
        required:{value: true, message: "Nombre es requerido"},
        minLength:{value: 2, message: "El nombre debe tener al menos 2 caracteres"},
        maxLength:{value: 20, message: "El nombre debe tener menos de 20 caracteres"},
    }

    return (
        <>
        <form className="" onSubmit={onSubmit}>

            <label
            htmlFor="nombre">Nombre
            </label>
            <input type="text"
            // con esto identificamos el input
            {...register("nombre", {...reglasNombre})}
            />
            {errors.nombre && <span className="text-red-800 font-ralewayRegular">{errors.nombre.message}</span>}

            <label
            htmlFor="correo">Correo
            </label>
            <input type="email"
            {...register("correo")}
            />

            <label
            htmlFor="password">Password
            </label>
            <input type="password"
            {...register("password")}
            />

            <label
            htmlFor="confirmarPassword">Confirmar Password
            </label>
            <input type="password"
            {...register("confirmarPassword")}
            />

            <button type="submit">
                Enviar
            </button>

        </form>
        </>
    )
}

export default UsoFormularioReactHookForm;