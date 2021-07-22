import React, {Component} from "react";
import "./css/AddProject.css";

class AddProject extends Component{

    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            title: '',
            deadline: '',
        }
    }

    startProject = (_title, _deadline) => {
        console.log(_title, _deadline)
    }

    render(){
        return(
            <div className="AddProject">
                <h1>Add A Project</h1>
                <label>Project Title: </label>
                <input></input>

                <label>Project Deadline: </label>
                <input></input>
            </div>
        )
    }
}

export default AddProject;