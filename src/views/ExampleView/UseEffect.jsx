import React, { useState } from 'react';

export default function UseEffect({ initialCount = 0}) {
    const [count, setCount] = useState(0);

    // Intento incorrecto de establecer el estado directamente en el cuerpo del componente
    // if (count !== initialCount) {
    //     setCount(initialCount); // Esto es incorrecto
    // }
    console.log("renderizados");
    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}





// UseEffect

// import React, { useState, useEffect } from 'react';

// export default function UseEffect({ initialCount = 0}) {
//     const [count, setCount] = useState(0);

//     // Usar useEffect para manejar actualizaciones basadas en props
//     useEffect(() => {
//         if (count !== initialCount) {
//             setCount(initialCount);
//         }
//     }, [initialCount]); // Dependencia en initialCount para ejecutar el efecto solo cuando cambie

//     console.log("renderizados");

//     return (
//         <div>
//             <p>Contador: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Incrementar</button>
//         </div>
//     );
// }