import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from 'react';
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
    const [isOpen, setIsOpen] = useState(true);


    const handleOpen = function(){
        setIsOpen(!isOpen);
    }

    return(
    <>
    {/* sidenav */}
    {/* <div className={`fixed bg-white left-0 top-0 w-[300px] h-full  p-4 z-50 sidebar-menu transition-transform ${isOpen ? '' : '-translate-x-full'} transition-all duration-300`}>
        <Sidebar/>
    </div> */}

    <div className={` fixed left-0 top-0 w-[300px] h-full  p-4 z-50 sidebar-menu transition-transform ${isOpen ? '' : '-translate-x-full md:-translate-x-[210px]'} transition-all `}>
        <Sidebar openSidebar={isOpen}/>
    </div>

    {/* Oscurece la pantalla (init) */}
    <div className={`fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden ${isOpen ? '':'hidden'} sidebar-overlay`} onClick={handleOpen}></div>
    {/* Oscurece la pantalla (end) */}
    {/* end sidenav */}

    {/* PARTE DOS */}
    {/* <main className={`${isOpen ? 'md:ml-[300px] md:w-[calc(100%-300px)] ' : 'md:ml-[100px] md:w-full '} w-full  bg-tonosClaros-4 min-h-screen transition-all main `}> */}
    <main className={`${isOpen ? 'md:ml-[300px] md:w-[calc(100%-300px)] ' : 'md:ml-[90px]  md:w-[calc(100%-90px)]'} w-full  bg-tonosClaros-4 min-h-screen transition-all main `}>
            {/* navbar */}
            <div className="bg-white py-2 px-6  flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30 ">
                {/* Amburguesa (init) */}
                <button type="button" onClick={handleOpen}>
                    {/* <i className="ri-menu-line"></i> */}
                    <HiOutlineMenuAlt1 className="text-2xl" />
                </button>
                {/* Amburguesa (end) */}

                <Header/>

            </div>
            {/* end navbar */}

            {/* Content */}
            {/* <div className="bg-yellow-500"> */}
            <Outlet/>
            {/* </div> */}
            {/* End Content */}
    </main>
    </>
    );
}

const MainLayout = () => {

    return(
    <>
        <Body/>
    </>
    );
};

export default MainLayout;