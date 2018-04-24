import React, { Component } from 'react';
import quote from './quote.css';

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
            <div id="quoteContainer" className='container'>
                <div id="quote" className ='row pl-5 mt-2'>
                     <h2 id="quoteHeader">Think about it</h2>
                </div>
                <div className="row pl-5 mb-2">
                    <p className="quote">
                        {quoteText} &mdash;{quoteAuthor}
                    </p>
                </div>
            </div>
        )
    }
}
}

export default Quote;