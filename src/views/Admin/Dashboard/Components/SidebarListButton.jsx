import { Link } from "react-router-dom"

const SidebarListButton = ({name, to, icon:Icon}) => {
    return (
        <>
            <div className="mb-1 group">

                <Link to={to} className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                {/* <a href="" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"> */}
                    {/* <i className='bx bx-user mr-3 text-lg'></i>                 */}
                    <Icon className='bx bx-user mr-3 text-lg'/>
                    <span className="text-sm">{name}</span>
                    {/* <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i> */}
                {/* </a> */}
                </Link>
                <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                    <li className="mb-4">
                        <a href="" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">All</a>
                    </li> 
                    <li className="mb-4">
                        <a href="" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Roles</a>
                    </li> 
                </ul>
            </div>
        </>
    )
}

export default SidebarListButton