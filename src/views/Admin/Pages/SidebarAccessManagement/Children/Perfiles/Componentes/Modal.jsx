import { useState } from "react";
import { IoClose } from "react-icons/io5";

export const Modal = ({ isOpen, onClose, children, titulo="ingrese titulo" }) => {
    // console.log("modal abierto");
    if (!isOpen) return null;
    return(
        <div className="w-full h-full bg-black/50   fixed top-0 left-0 z-50 flex justify-center items-center" >
            <div className="bg-white rounded m-4">
                <div className="flex justify-between">
                    <div className="bg-gray-200 w-full p-4 rounded-t  font-ralewaySemibold text-xl flex justify-between">
                        <h3>{titulo}</h3>

                        <IoClose onClick={onClose} className="text-2xl hover:bg-gray-600 hover:text-white hover:rounded-full" />
                        {/* <button onClick={onClose}>Cerrar</button> */}
                    </div> 
                </div>

                {children}
                
            </div>
        </div>
    )
}

// export default Modal;

export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return {
        isModalOpen,
        openModal,
        closeModal,
    }
}

// src/components/Modal.js


// src/components/Modal.js

// import React from 'react';
// import { Dialog } from '@headlessui/react';
// import PropTypes from 'prop-types';

// const Modal = ({ isOpen, onClose, children }) => {
//     return (
//         <Dialog
//             open={isOpen}
//             onClose={onClose}
//             className="fixed inset-0 z-50 flex items-center justify-center"
//         >
//             {/* Fondo semitransparente */}
//             <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

//             {/* Contenido del modal */}
//             <div className="bg-white p-6 rounded shadow-lg z-10">
//                 {children}
//                 {/* Botón de cierre opcional */}
//                 {/* <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                     Cerrar
//                 </button> */}
//             </div>
//         </Dialog>
//     );
// };

// Modal.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired,
//     children: PropTypes.node.isRequired,
// };

// export default Modal;
