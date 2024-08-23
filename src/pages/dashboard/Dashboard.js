import "./dashboard.css";
import LinkList from "../../components/common/LinkList/LinkList"


let obj = {
    header: "Well Come React Course",
    contact: [
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





const Dashboard = ()=>{
    return (
        <div className="dashboard">
        <h1>{obj.header}</h1>
    

    <LinkList linkArr={obj.contact} containerclass={"btn-container"} linkClass="link"/>

       
    </div>
    )}
 export default Dashboard