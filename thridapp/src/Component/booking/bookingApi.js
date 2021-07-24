import React, {Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDetails';

const url = "http://localhost:9700/booking";

class ViewBooking extends Component {
    constructor(){
        super()

        this.state={
            booking:''
        }
    }
    render(){
        return(
            <div>
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    //call api 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({booking:res.data})})
    }
}

export default ViewBooking;