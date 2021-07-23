import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./css/Navbar.css";

class Navbar extends Component{

    render(){
        return(
            <div className="Navbar">
                <ul className="navbar-links">
                    <div className="logo">
                        <Link className="link" to="/">Home</Link>
                    </div>

                    <div className="left-nav">
                        
                        <Link className="link" to="/list/">Project List</Link>
                        <Link className="link" to="/add-project/">Add a project</Link>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navbar;