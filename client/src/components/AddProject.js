import React, {Component} from "react";
import "./css/AddProject.css";

class AddProject extends Component{

    constructor(props){
        super(props)

        this.state = props;
    }

    onChangeTitle = (e) => {
        this.setState({title: e.target.value })
        console.log(e.target.value);
    }

    onChangeDeadline = (e) => {
        this.setState({deadline: e.target.value })
        console.log(e.target.value);
    }

    startProject = (_title, _deadline) => {
        console.log("hello");
    }

    render(){
        return(
            <div className="AddProject">
                <h1>Add A Project</h1>
                <label>Project Title: </label>
                <input 
                    className="add-title"
                    onChange={this.onChangeTitle}
                />

                <label>Project Deadline: </label>
                <input 
                    className="add-deadline"
                    onChange={this,this.onChangeDeadline}
                    type="number"
                />

                <button onSubmit={this.startProject}>
                    Submit
                </button>
            </div>
        )
    }
}

export default AddProject;