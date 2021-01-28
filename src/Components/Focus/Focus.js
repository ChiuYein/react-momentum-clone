import React from 'react'
import './Focus.css'
import classNames from 'classnames';

class Focus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: "",
            completed: false,
            taskSubmitted: false,
        };

        //bind the function in order to use it
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    //Able to update the input
    handleInputChange(event) {
    //Save the target object for future reference
        const target = event.target;
    
    //Check if the target is the text input to save the value
        const value = target.type === "checkbox" ? target.checked : target.value;

    //Save the input value
        const name = target.name;
        //update the state
        this.setState({
            [name]: value
        });

    }

    //Able to submit the the input
    handleSubmit(event) {
        this.setState({
            taskSubmitted: true
        });
        event.preventDefault();
    }

    //Able to delete the input
    deleteTask(event) {
        this.setState({
            task: "",
            completed: false,
            taskSubmitted: false
        });
        event.preventDefault();
    }

    render() {
        let focusFormClass = classNames({
            "add-main-task-container": false,
            hidden: this.state.taskSubmitted
        });

        let mainTaskClass = classNames({
            "main-task-container": true,
            hidden: !this.state.taskSubmitted
        })

        return(
            <div className="focus-container">
                <div className={focusFormClass}>
                   <p className="focus-question">What is your main focus for today?</p> 
                    <form className="focus-form" onSubmit={this.handleSubmit}>
                        <input 
                         className="focus-form-input" 
                         type="text"
                         name="task"
                         onChange={this.handleInputChange}
                         value={this.state.task}
                        />
                    </form>
                </div>
                <div className= {mainTaskClass}> 
                    <p>Today</p>
                    <div className="main-task-form">
                        <span>
                            <input 
                                type="checkbox"
                                name="completed"
                                checked={this.state.completed}
                                onChange={this.handleInputChange}
                            />
                        </span>
                        {/* display the task  */}
                        <p>{this.state.task}</p>
                        <span>
                            <button onClick={this.deleteTask}>X</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Focus

