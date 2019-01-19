import React from "react";
import config from "../../doc-config";
import SideBar from "../SideBar";
import Main from "../Main";
import { BrowserRouter as Router } from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <SideBar config={config}/>
                    <Main config={config} />
                </div>
            </Router>
        );
    }
}

export default Home;