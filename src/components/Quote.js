import React, { Component } from 'react';

class Quote extends Component {

    constructor(props){
        super(props);
        this.state = {
            quoteLoaded: false,
            objResult: {},
            quoteText: null,
            quoteAuthor: null,
            error: null
        }
    }

    componentDidMount(){
        // lifecycle hook
        console.log('quote component mounted');
        // hit the news API
        this.getQuote();
    }

    getQuote(){
        console.log('getting inspiration');
        fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        .then(res => res.json())
        .then(
            (result) => {
                console.log('quote: ', result);
                this.setState({
                    quoteLoaded: true,
                    objResult: result,
                    quoteText: result.quoteText,
                    quoteAuthor: result.quoteAuthor
                });
            },
            (error) => {
                this.setState({
                    newsLoaded: true,
                    error: `The quotes API call failed. Please try again.`
                });
        });
    }



render(){
    const {error, quoteLoaded, quoteAuthor, quoteText} = this.state;
    
    if (error){
        return (
            <div>
                <div>Error: {this.state.error}</div>
            </div>
        )
    } else if (!quoteLoaded){
        return (<div><p className="quote">Make it a great day or not...the choice is yours</p></div>)
    } else{
        
        return(
            <div>
                <p className="quote">
                    {this.state.quoteText} &mdash;{this.state.quoteAuthor}
                </p>
            </div>
        )
    }
}
}

export default Quote;