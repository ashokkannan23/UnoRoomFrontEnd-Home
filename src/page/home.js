import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeNavBarwithSearch from '../Components/homenavbarwithsearch';

import Footer from '../Components/footer';
import axios from 'axios';


const containerFluidStyle = {
    paddingRight: '0px',
    paddingLeft: '0px'

}

class YourComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid" style={containerFluidStyle}>
                    <HomeNavBarwithSearch />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <Link to="/gotoabout">GoTo About</Link>
                        </div>
                        <div className="col-md-6 text-center">
                            <Link to="/gotosearch">GoTo Search</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <button onClick={this.create}>Create</button>
                </div>
                <Footer />
            </div>
        );
    }

    create = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            "id": 1,
            "title": "test123",
            "body": "testing"
        })
            .then(response => {
                console.log(response.data);
            })
    }
}

export default YourComponent;