
import ListItem from "./Components/ListItem";
import house from './../../../../public/imgs/sidebarIcons/house.svg';
import gestion from './../../../../public/imgs/sidebarIcons/gestion.svg';
import cliente from './../../../../public/imgs/sidebarIcons/cliente.svg';
import informacion from './../../../../public/imgs/sidebarIcons/informacion.svg';
import comunicacion from './../../../../public/imgs/sidebarIcons/comunicacion.svg';
import entidad from './../../../../public/imgs/sidebarIcons/entidad.svg';
import accesos from './../../../../public/imgs/sidebarIcons/accesos.svg';
import contactoeficazicono from './../../../../public/imgs/iconoscontactoeficaz/contactoeficazicono.svg';
import contactoeficazcompleto from './../../../../public/imgs/iconoscontactoeficaz/contactoeficazcompleto.svg';
import globalcorebankia from './../../../../public/imgs/miscelania/globalcorebankia.svg';

function Sidebar({openSidebar}){
    
    return(
        <>
            <div className={`flex flex-col justify-between bg-sidebarColor-0 fixed left-0 top-0 h-full w-[300px] z-50 overflow-y-auto ${openSidebar?'':' w-[90px] ml-[210px] transition-all'} style={{scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1'}} `}>
                    <ul>

                        <div className="flex flex-col items-center mt-6 mb-6">
                            <img src={contactoeficazcompleto} className={`w-40 ${openSidebar?'':'hidden'}`}/>
                            <img src={contactoeficazicono}      className={` w-8 ${openSidebar?'hidden':''}`}/>
                        </div>

                        <ListItem open={openSidebar} to=""                      src={house}        name="Home"/>
                        <ListItem open={openSidebar} to="gestiondashboard"      src={gestion}      name="Dashboard de gestión"/>
                        <ListItem open={openSidebar} to="gestiondecliente"      src={cliente}      name="Gestión de cliente"/>
                        <ListItem open={openSidebar} to="gestioninformacion"    src={informacion}  name="Gestión de información"/>                        
                        <ListItem open={openSidebar} to="gestioncomunicacion"   src={comunicacion} name="Gestión de comunicaciones"/>
                        <ListItem open={openSidebar} to="gestionentidades"      src={entidad}      name="Gestión de entidades"/>
                        <ListItem open={openSidebar} to="gestionaccesos"        src={accesos}      name="Gestión de accesos"/>
                       
                    </ul>
                    <div className="flex flex-col items-center mt-6 mb-6">
                            <img src={globalcorebankia} className={`w-14`}/>
                    </div>
            </div>
        </>
    )
}
export default Sidebar;