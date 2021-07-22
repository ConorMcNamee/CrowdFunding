import React, {Component} from "react";
import "./css/ProjectList.css";

class ProjectList extends Component{

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return(
            <div className="ProjectList">
                <h1>Project List</h1>
            </div>
        )
    }
}

export default ProjectList;