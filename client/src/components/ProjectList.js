import React, {Component} from "react";
import "./css/ProjectList.css";

class ProjectList extends Component{

    constructor(props){
        super(props)
        this.state = {
            projects: this.props.projects
        }
    }

    render(){
        console.log(this.state);
        return(
            <div className="ProjectList">
                <h1>Project List</h1>
            </div>
        )
    }
}

export default ProjectList;