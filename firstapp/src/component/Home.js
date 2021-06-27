import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor() {
        super()

        this.state={
            news: JSON,
            filtered: JSON
        }
    }

    /*
        var a = [3,4,5,7,6,3,2,8]
        a.filter((data) => {return data>5})
    */
    filterNews = (userInput) => {
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })

        this.setState({filtered:output})
    }

    render(){
        return(
            <React.Fragment>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDisplay newsData={this.state.filtered}/>
                <Footer year="2021" month="June"/>
            </React.Fragment>
        )
    }
    
}

export default Home;
