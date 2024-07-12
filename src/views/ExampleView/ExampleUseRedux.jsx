import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementByAmount  } from '../../store/authSlice';


const ExampleUseRedux = () => {
    const primervalor = useSelector((argumento) => argumento.auth.entero);
    const dispatch = useDispatch();
    // const primervalor = useSelector((argumento) => argumento.auth.entero);
    return(
        <>
            <h3>we stay in the page ExampleUseRedux</h3>
            <h3>{primervalor}</h3>
            <button
                className='bg-red-600'
                onClick={()=>dispatch(increment())}
            >
                presiona para aumentar
            </button>

            <button
                className='bg-green-600'
                onClick={()=>dispatch(incrementByAmount(10))}
            >
                presiona para aumentar por valor
            </button>
        </>
    )
}

export default ExampleUseRedux;