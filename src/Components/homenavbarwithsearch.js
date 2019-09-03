import React, { Component } from 'react';
import './src/../../assets/css/homenavbarwithsearch.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import NavBar from './navbar';
import Example from '../Components/datepicker';
import axios from 'axios';
import '../scripts/api';

class HomeNavBarwithSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyname: [],
            buildingtype: [],
            amenitiesdata: [],
            uiRoomType: {
                "SingleBedRoom": "Single Bed Room",
                "DoubleBedRoom": "Double Bed Room",
                "OneBHKApartment": "One BHK Apartment",
                "TwoBHKApartment": "Two BHK Apartment",
                "ThreeBHKApartment": "Three BHK Apartment",
            },

            amenitiesUiMap: {
                "AirConditioning": {
                    "img": "<i className=\"fas fa-snowflake\"></i>",
                    "name": "Air Conditioning"
                },
                "AirportTransfer": {
                    "img": "<i className=\"fa fa-plane\" aria-hidden=\"true\"></i>",
                    "name": "Airport Transfer"
                },
                "Balcony": {
                    "img": "<i className=\"fas fa-dungeon\"></i>",
                    "name": "Balcony"
                },
                "Bathtub": {
                    "img": "<i className=\"fa fa-bath\" aria-hidden=\"true\"></i>",
                    "name": "Bathtub"
                },
                "BusinessFriendly": {
                    "img": "<i className=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>",
                    "name": "Business Friendly"
                },
                "CarPark": {
                    "img": "<i className=\"fa fa-car\" aria-hidden=\"true\"></i>",
                    "name": "Car Park"
                },
                "CoffeeMaker": {
                    "img": "<i className=\"fa fa-coffee\" aria-hidden=\"true\"></i>",
                    "name": "Coffee Maker"
                },
                "DisableFriendly": {
                    "img": "<i className=\"fas fa-wheelchair\"></i>",
                    "name": "Disable Friendly"
                },
                "FrontDesk": {
                    "img": "<i className=\"fa fa-desktop\" aria-hidden=\"true\"></i>",
                    "name": "Front Desk"
                },
                "FullyFurnished": {
                    "img": "<i className=\"fas fa-couch\"></i>",
                    "name": "Fully Furnished"
                },
                "Gym": {
                    "img": "<i className=\"fas fa-dumbbell\"></i>",
                    "name": "Gym"
                },
                "Heating": {
                    "img": "<i className=\"fas fa-water\"></i>",
                    "name": "Heater"
                },
                "Internet": {
                    "img": "<i className=\"fa fa-wifi\" aria-hidden=\"true\"></i>",
                    "name": "WiFi"
                },
                "Kitchen": {
                    "img": "<i className=\"fas fa-utensils\"></i>",
                    "name": "Kitchen"
                },
                "Nightclub": {
                    "img": "<i className=\"fas fa-glass-cheers\"></i>",
                    "name": "Nightclub"
                },
                "NonSmoking": {
                    "img": "<i className=\"fas fa-smoking-ban\"></i>",
                    "name": "Non Smoking"
                },
                "PetsAllowed": {
                    "img": "<i className=\"fas fa-dog\"></i>",
                    "name": "Pets Allowed"
                },
                "PrivatePool": {
                    "img": "<i className=\"fas fa-swimming-pool\"></i>",
                    "name": "Private Pool"
                },
                "Refrigerator": {
                    "img": "<i className=\"fas fa-door-closed\"></i>",
                    "name": "Refrigerator"
                },
                "Restaurant": {
                    "img": "<i className=\"fas fa-bread-slice\"></i>",
                    "name": "Restaurant"
                },
                "Sauna": {
                    "img": "<i className=\"fas fa-hot-tub\"></i>",
                    "name": "Sauna"
                },
                "SemiFurnished": {
                    "img": "<i className=\"fas fa-chair\"></i>",
                    "name": "Semi Furnished"
                },
                "Smoking": {
                    "img": "<i className=\"fas fa-smoking\"></i>",
                    "name": "Smoking"
                },
                "SmokingArea": {
                    "img": "<i className=\"fas fa-smoking\"></i>",
                    "name": "Smoking Area"
                },
                "Spa": {
                    "img": "<i className=\"fas fa-spa\"></i>",
                    "name": "Spa"
                },
                "SwimmingPool": {
                    "img": "<i className=\"fas fa-swimmer\"></i>",
                    "name": "Swimming Pool"
                },
                "TV": {
                    "img": "<i className=\"fa fa-television\" aria-hidden=\"true\"></i>",
                    "name": "TV"
                },
                "Terrace": {
                    "img": "<i className=\"fas fa-dungeon\"></i>",
                    "name": "Terrace"
                },
                "WashingMachine": {
                    "img": "<i className=\"fas fa-dumpster\"></i>",
                    "name": "Washing Machine"
                }
            }
        }
    }


    componentDidMount() {
        axios.all([
            axios.get(`/facility`),
            axios.get(`/meta/roomtypes?buildingtype=Hotel`),
            axios.get(`/facility`)
        ])
            .then(axios.spread((propertyname, buildingtype, amenitiesdata) => {
                console.log(propertyname.data[0].name, buildingtype.data);
                this.setState({
                    propertyname: propertyname.data[0].name,
                    buildingtype: buildingtype.data,
                    amenitiesdata: amenitiesdata.data[0].amenities

                });
            }))
            .catch(error => console.log(error));
    }



    render() {
        const { propertyname, buildingtype, amenitiesdata, uiRoomType, amenitiesUiMap } = this.state;
        return (
            <div className="jumbotron-fluid">
                <div className="container-fluid">
                    <NavBar />
                </div>
                <div className="container-fluid" style={{ paddingBottom: '40px', paddingTop: '60px' }}>

                    <div className="center">
                        <span style={{ fontSize: '18px' }}>Hotel</span>
                        <div className="form-inline" id="form" action="">
                            <button type="" id="propertyname">{propertyname}</button>
                            <select name="roomtype" id="roomType" placeholder="Room Type">
                                {buildingtype.map((roomtype, index) => (
                                    <option key={index} value={roomtype}>{uiRoomType[roomtype]}</option>
                                ))}
                            </select>
                            <Example />
                            <select name="adults" id="" placeholder="Adults">
                                <option value="1adult">1 adult</option>
                                <option value="2adults">2 adults</option>
                                <option value="3adults">3 adults</option>
                                <option value="4 adults">4 adults</option>
                            </select>
                            <button id="search" type="submit">Search</button>
                        </div>
                        <div className="row">
                            {amenitiesdata.map((amenities, index) => (
                                <div key={index} className="col-lg-4 col-md-4">
                                    <p className="icon-hover">{amenitiesUiMap[amenities].img + '' + amenitiesUiMap[amenities].name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default HomeNavBarwithSearch;