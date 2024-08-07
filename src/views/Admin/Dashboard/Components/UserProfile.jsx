
// const UserProfile = ({name, role}:any) => {
//     return (
//         <>
//               <li className="dropdown ml-3">
//                   <button type="button" className="dropdown-toggle flex items-center">
//                       <div className="flex-shrink-0 w-10 h-10 relative">
//                           <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
//                               <img className="w-8 h-8 rounded-full" src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg" alt=""/>
//                               <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
//                               <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
//                           </div>
//                       </div>
//                       <div className="p-2 md:block text-left">
//                           <h2 className="text-sm font-semibold text-gray-800">{name}</h2>
//                           <p className="text-xs text-gray-500">{role}</p>
//                       </div>                
//                   </button>
//                   <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
//                       <li>
//                           <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Profile</a>
//                       </li>
//                       <li>
//                           <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Settings</a>
//                       </li>
//                       <li>
//                           <form method="POST" action="">
//                               <a role="menuitem" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
//                                   // onclick="event.preventDefault();
//                                   // this.closest('form').submit();"
//                               >
//                                   Log Out
//                               </a>
//                           </form>
//                       </li>
//                   </ul>
//               </li>
//         </>
//     )
// }

// export default UserProfile


import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { unauthenticatedUser } from '../../../../store/authSlice';
import { unauthenticatedUser } from '../../../../store/authSlice';
import emptyAvatar from '../../../../../public/emptyAvatar.png'
import { Input } from '@material-tailwind/react';


const UserProfile = ({ name, role }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispach = useDispatch();
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseLeave = () => {
        setTimeout(()=>{setIsOpen(!isOpen);}, 200)
        
    };

    return (
        <>
            {/* <div className="relative flex w-24 gap-2 md:w-max">
                <Input
                    type="search"
                    placeholder="Search"
                    containerProps={{
                        className: "min-w-[288px]",
                    }}
                    className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300 w-24 md:w-full"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
                <div className="!absolute left-3 top-[13px]">
                    <svg
                        width="13"
                        height="14"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                        fill="#CFD8DC"
                        />
                        <path
                        d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                        stroke="#CFD8DC"

                        />
                    </svg>
                </div>
            </div> */}

            <div className="dropdown ml-3 relative">

                <button
                    type="button"
                    className="dropdown-toggle flex items-center"
                    onClick={toggleDropdown}
                    onBlur={handleMouseLeave}
                    
                >
                    <div className="p-2 md:block text-left">
                        <h2 className="text-xl font-ralewayBold text-tonosOscuros-0 ">{name}</h2>
                        <p className="text-sm font-ralewayBold text-tonosClaros-0">{role}</p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 relative">
                        <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                            <img
                                className="w-8 h-8 rounded-full"
                                // src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                                src={emptyAvatar}
                                alt="avatar"
                            />
                          
                            {/* <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div> */}
                            {/* <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div> */}
                        </div>
                    </div>

                </button>
                <ul
                
                    className={`dropdown-menu shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px] absolute ${isOpen ? 'block' : 'hidden'}`}
                >
                    <li>
                        <a href="#" className="flex items-center font-ralewayMedium text-sm py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Profile</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center font-ralewayMedium text-sm py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Settings</a>
                    </li>
                    <li>
                        <form method="POST" action="">
                            <a
                                role="menuitem"
                                className="flex items-center font-ralewayMedium text-sm py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    // Aquí puedes añadir la lógica para cerrar sesión
                                    dispach(unauthenticatedUser());
                                    console.log('Logging out');
                                }}
                            >
                                Log Out
                            </a>
                        </form>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default UserProfile;
