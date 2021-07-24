import React, {Component} from 'react';
const url = "http://localhost:9700/booking"

class PlaceBooking extends Component {
    constructor(props) {
        super(props);

        this.state={
            id:Math.floor(Math.random()*1000000),
            hotel_name: this.props.match.params.hotel_name,
            cost:sessionStorage.getItem('cost'),
            name:'',
            email:'',
            phone:''
        };
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = () => {
        console.log(this.state)
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(this.props.history.push('/viewBooking'))
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Place Booking
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>OrderId</label>
                            <input className="form-control" readonly name="id" value={this.state.id}/>
                        </div>
                        <div className="form-group">
                            <label>Hotel Name</label>
                            <input className="form-control" readonly name="hotel_name" value={this.state.hotel_name}/>
                        </div>
                        <div className="form-group">
                            <label>Cost in INR</label>
                            <input className="form-control" readonly name="cost" value={this.state.cost}/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-success"
                        type="submit" onClick={this.handleSubmit}>
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default PlaceBooking