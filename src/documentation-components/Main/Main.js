import React from "react";
import Example from "../Example";
import { withRouter } from "react-router-dom";




const getDocConfig=(configs,key)=>configs.filter(item=>item.name.toLowerCase()===key.toLowerCase());




const Main = (props)=>{
    
    let pathName=props.location.pathname.replace("/","");
    let docConfig=getDocConfig(props.config,pathName);
    
    return(
        <main className="main">
        { docConfig && docConfig.length>0 && <Example config={docConfig[0]}/> }  
        </main>
    );
}

export default withRouter(props=><Main {...props}/>);