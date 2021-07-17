import React, {Component} from 'react';
import './Search.css';

const cityUrl = "https://developerfunnel.herokuapp.com/location";
const hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component {
    constructor(props) {
        super(props);
        console.log(">>>>>inside constructor")
        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        } 
    }

    renderHotels = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality} 
                    </option>
                )
            })
        } 
    }

    handleCity = (event) => {
        console.log(event.target.value)
        const cityId = event.target.value
        fetch(`${hotelUrl}${cityId}`, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    render(){
        console.log(">>>>>inside render")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>-----SELECT CITY------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="hotelDropDown">
                        <option>-----SELECT HOTELS------</option>
                        {this.renderHotels(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    //call api on page load 
    componentDidMount(){
        console.log(">>>>>inside componentDidMount");
        // we will get the data and update state
        fetch(cityUrl, {method:'GET'})
        // return the promise here
        .then((res) => res.json())
        // resolve promise and get data
        .then((data) => { 
            // setting data in state
            this.setState({location:data})
        })
        // error handling
        .catch((err) => {
            console.log(err)
        })
    }
}

export default Search;