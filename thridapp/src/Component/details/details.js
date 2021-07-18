import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component {
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }

    render(){
        // let details = this.state.details;
        let {details} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.state.details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb}
                                style={{height:400, width:15000}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //api call on page load
    async componentDidMount(){
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        this.setState({details: response.data[0]})
    }
}

export default Details;