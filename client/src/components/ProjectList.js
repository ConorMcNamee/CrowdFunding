import React, {Component} from "react";
import "./css/ProjectList.css";

class ProjectList extends Component{

    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.projects);
        return(
            <div className="ProjectList-container">
                <h1>Project List</h1>
                {
                    this.props.projects.map((project) => {
                        return(
                            <div className="project-list">
                                <p className="projectName">{project.projectName},</p>
                                <p className="projectDeadline">{project.deadline}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ProjectList;