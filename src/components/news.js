import React, { Component } from 'react';
import news from './News.css';

function NewsList(props){
    return(
        <div>
         {props.newsLoaded ?
            <div  className = 'container'>
             <div className="row">
               <div className='col headline'>               
                <h4>{props.headline}</h4>
                {/* <h5 className = 'description'>{props.description}</h5> */}
              </div>
              <div>
                <img className = 'newsImage' src={props.img} alt={props.alt}/>
              </div>
                {/* <Button color="info" onClick={props.showMore}>Show More</Button> */}
             </div>
            </div>
            :
            <div>Getting Top News Articles...</div>
         }
         {/* {props.showMore ?
            <div> </div>
            :
            <Button color="info" onClick={() => { props.showMore(props.index) }}>Show More</Button>
         } */}
      </div>
    )
}

class News extends Component {

    constructor(props){
        super(props);
        // you have to have super(props); ... you might be able to use =>...but use super
        this.state = {
            newsLoaded: false,
            objResult: {},
            showMore: false,
            error: null
        }
        
        // without this binding, showClicked calling this.setState is not available
        // this.showMore = this.showMore.bind(this);

    }

    componentDidMount(){
        // lifecycle hook
        console.log('componentDidMount');
        // hit the news API
        this.getNews();
    }

    // showMore(){
    //     console.log('clicked view more news');
    //     this.setState({
    //         showResult: true
    //     })
    // }


    getNews(){
        console.log('getting news');
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d095b40dcf71448e9d92af671b8dc912')
        .then(res => res.json())
        .then(
            (result) => {
                console.log('result', result.articles);
                this.setState({
                    newsLoaded: true,
                    objResult: result.articles
                });
            },
            (error) => {
                this.setState({
                    newsLoaded: true,
                    error: error
                });
        });
    }



render(){
    const {error, newsLoaded, objResult} = this.state;
    
    if (error){
        return (
            <div>
                <div>Error: {error.message}</div>
            </div>
        )
    } else if (!newsLoaded){
        return (<div>Loading the Top News from NewsAPI.org...</div>)
    } else{
        let articles = objResult;
        let articleList = articles.map((article, index) => 
                <div className="newsList" key={index}>
                    <NewsList 
                    newsLoaded={newsLoaded} 
                    headline={article.title}
                    description={article.description}
                    img={article.urlToImage}
                    alt={article.description} />
                </div>
        )
        return(
           <div className="">
            {articleList}
           </div>
        )
    }
}
}

export default News;