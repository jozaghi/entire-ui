import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const getActieveClass= (name,current)=> name.toLowerCase()===current.toLowerCase()?"sidenav__item--active":"";


const renderLinks=(config,current)=>
    config.map((item,i)=>(
        <div className={`sidenav__item ${getActieveClass(item.name,current)} `} key={i}>
            <Link to={item.name}>{item.name}</Link>
        </div>
    ));


const SideBar = (props)=>{
    let pathName=props.location.pathname.replace("/","");
    return (
        <aside className="sidebar">
           <nav className="sidenav">
            {renderLinks(props.config,pathName)}
           </nav> 
        </aside>
    );
}
export default withRouter(props=><SideBar {...props}/>);