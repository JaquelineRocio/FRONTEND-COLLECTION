// const Debug = () => {

//     const sumar = (a, b) => {

//         return a + b;
//     }

//     const imprimir = (valor) => {
//         return console.log(valor)
//     }

//     console.log(sumar(12, 2));

//     return(
//         <>
//             Este es un debug
//         </>
//     )
// }

// export default Debug;


// import{ useEffect, useState } from 'react';

// // Hook personalizado
// const useMiHook = () => {
//   const [estado, setEstado] = useState(null);

//   console.log('Ejecutando hook personalizado: antes del useEffect');

//   useEffect(() => {
//     console.log('useEffect dentro del hook personalizado ejecutado');
//     // Lógica del efecto
//     setEstado('Actualizado desde useEffect');
    
//     return () => {
//       console.log('Limpieza del useEffect en el hook personalizado');
//     };
//   }, []);

//   console.log('Ejecutando hook personalizado: después del useEffect');

//   function myFuncion(){
//     console.log("esta es mi funcion");
//     setEstado("boton presionado");
//   }

//   return {estado, myFuncion};
// };

// // Componente que utiliza el hook personalizado
// const Debug = () => {
//   const mihoook = useMiHook();

//   console.log('Renderizando MiComponente');

//   return (
//     <div>
//       <p className="bg-pink-200">Valor: {mihoook.estado}</p>
//       <button className="bg-blue-200" onClick={mihoook.myFuncion}>preiona para ver</button>
//     </div>
//   );
// };

// export default Debug;
