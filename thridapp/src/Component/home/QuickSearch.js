import React, {Component} from 'react';
import QuickDisplay from './QuickDisplay';

const url = "https://developerfunnel.herokuapp.com/booking";

class QuickSearch extends Component {
    constructor(props) {
        super(props);

        this.state={
            tripType:''
        }
    }

    render(){
        return(
           <div>
               <QuickDisplay tripdata={this.state.tripType}/>
           </div>
        )
    }

    //api call on page load
    componentDidMount(){
        fetch(url, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({tripType: data})
        })
    }
}

export default QuickSearch;