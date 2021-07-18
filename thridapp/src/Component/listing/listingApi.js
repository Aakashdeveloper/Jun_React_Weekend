import React, {Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component {
    constructor(){
        super()

        this.state = {
            hotelList:''
        }
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    Filter
                </div>
                <div className="col-md-10">
                    <ListingDisplay listData={this.state.hotelList}/>
                </div>
            </div>
        )
    }

    //api call on page load
    componentDidMount(){
        let tripId = this.props.match.params.id;
        axios.get(`${url}/${tripId}`)
        .then((res) => {this.setState({hotelList: res.data})})
    }

}


export default Listing;