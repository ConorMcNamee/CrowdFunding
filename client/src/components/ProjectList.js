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
                <h1>Add A Project</h1>
                <input></input>
            </div>
        )
    }
}

export default ProjectList;