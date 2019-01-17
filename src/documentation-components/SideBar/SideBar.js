import React from "react";
import { Link } from "react-router-dom";
const renderLinks=config=>
    config.map((item,i)=>(<div key={i}>
        <Link to={item.name}>{item.name}</Link>
    </div>));


const SideBar = (props)=>{

    return (<section>
        {renderLinks(props.config)}
    </section>);
}
export default SideBar;