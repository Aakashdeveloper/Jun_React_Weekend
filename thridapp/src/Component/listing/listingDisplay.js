import React from 'react';
import './listing.css';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {
    const renderList = ({listData})=>{
        if(listData){
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <div className="item">
                            <div className="row">
                                <div className="col-md-5">
                                    <img className="Image" src={item.thumb}/>
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${item._id}`}>{item.name}</Link>
                                        <div className="city_name">{item.city_name}</div>
                                        <div className="city_name">{item.locality}</div>
                                        <div className="city_name">Rs {item.cost}</div>
                                        <div>
                                            <span class="label label-primary">{item.tripType[0].name}</span>
                                            &nbsp;
                                            <span class="label label-success">{item.tripType[1].name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }else{
                return(
                    <div className="item">
                        <h1>No Data Found</h1>
                    </div>
                ) 
            }
        }else{
            return(
                <div className="item">
                    <img src="/images/loader.gif"/>
                </div>
            )
        }

    }
    return(
        <div className="container-fluid">
            <div className="main-heading">
                <div className="col-md-12">
                    {renderList(props)}
                </div>
            </div>
        </div>
    )
}

export default ListingDisplay;