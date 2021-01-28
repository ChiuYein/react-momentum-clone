import React from "react"

import './Greeting.css'

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showGreeting: this.showGreeting(),
            user: ""
        }
    }

    componentDidMount(){
        this.setState({ user: "Chiu Yein" })
    }

    showGreeting() {
        var hours = new Date().getHours();
        if 
        //12am - 11:59am
        (hours >= 0 && hours < 12) {
            return "Morning";
        } else if 
        //12pm - 5.59pm
        (hours >= 12 && hours < 18) {
            return "Afternoon"
        } else if 
        //6pm - 10:59pm
        (hours >= 18 && hours < 23) {
            return "Evening"
        } else {
            return "Hello"
        }
    }

    updateGreeting() {
        this.setState({ showGreeting: this.showGreeting() });
    }

    render() {
        return (
            <div className="Greeting">
                <div className="show-greeting">
                    Good { this.state.showGreeting }, {this.state.user}
                </div>
            </div>
        )
    }
}

export default Greeting