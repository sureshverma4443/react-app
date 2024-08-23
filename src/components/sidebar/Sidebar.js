import{Link} from 'react-router-dom'
import './sidebar.css'

let sidebardata = {
    header: "Menu",
    contact: [
      {
        key: "dashboard",
        label: "Dashboard",
      },
      {
        key: "profile",
        label: "Profile",
      },
      {
        key: "contuct_us",
        label: "Contuct us",
      },
      {
        key: "about_us",
        label: "About us ",
      },
      {
        key: "help",
        label: "Help",
      },
    ],
  };
 
 
 
 function Sidebar (){
   
    return (
        <aside id="sidebar">
            <h2>{sidebardata.header}</h2>
            <div className="btn-container">
                {sidebardata.contact.map((hd)=>{
                    return(
                        <Link to={hd.key} key={hd.key} className="button" >{hd.label}</Link>
                    )
                })}
            </div>




        </aside>
    )
 }
 export default Sidebar



