import React from "react"

import './Clock.css'

class Clock extends React.Component {
    constructor() {
        super()
        this.state = {
            time: " ",
        };
    }

    //update the time every second
    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }
    
    tick() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var clock = `${hours} : ${minutes}`

        //set hours to am and pm
        // if (hours >= 12 && hours < 24) {
        //     var timeOfDay = "pm";
        // } else {
        //     var timeOfDay = "am";
        // }

        //convert hour from 24hour to 12hour
        if (hours > 12) {
            hours = hours - 12;
        }
       
        //update the time
        this.setState({ time: clock });
    }

    render() {
        return (
           <div className="Clock">
               <div className="clock-time">
                   { this.state.time}
               </div>
           </div> 
        )
    }
}

export default Clock