import React from 'react'
import './Quotes.css'
import Axios from 'axios'

class Quote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            quote: null,
            author: null
        };
    }

    componentDidMount = () => {
        this.getQuote();
    }

    getQuote = () => {
        const quotesApi = "https://api.quotable.io/random"

        Axios
         .get(quotesApi)
         .then(res => {
             console.log("Get Quotes", res);
             this.setState(
                 {
                    quote: res.data.content,
                    author: res.data.author
                 }
             )
         })
    }

    render() {
        return(
            <div className="quote-container">
                <p className="quote">
                    {this.state.quote}
                </p>
                <p className="quote-author">
                    {this.state.author}
                </p>
            </div>
        )
    }

}

export default Quote