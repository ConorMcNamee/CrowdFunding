import React, {Component} from "react";
import "./css/AddProject.css";

class AddProject extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            deadline: '',
            contract: null,
            account: null
        }       

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleDeadline = (e) => {
        this.setState({deadline: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this._startProject(this.state.title, this.state.deadline)
    }

    _startProject = (title, deadline) =>{
        alert(title + ", " + deadline)
    }

    render(){
        return(
            <div className="AddProject">
                <h1>Add A Project</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Project Title: </label>
                    <input 
                        className="add-title"
                        onChange={this.handleTitle}
                    />

                    <label>Project Deadline: </label>
                    <input 
                        className="add-deadline"
                        onChange={this.handleDeadline}
                        type="number"
                    />

                    <button type="submit" value="Submit">
                        Submit
                    </button>

                </form>
            </div>
        )
    }
}

export default AddProject;