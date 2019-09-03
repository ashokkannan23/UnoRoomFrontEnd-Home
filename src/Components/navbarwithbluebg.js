import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './src/../../assets/css/navBarwithbluebg.css';
import unoLogo from './src/../../assets/image/Room_logo.png';
import axios from 'axios';
import '../scripts/api';

const imgstyle = {
    width: '120px',
    height: '50px'

}

class NavBarwithbluebg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyAddressline1: '',
            propertyAddressline2: '',
            propertyphoneno: ''
        }
    }
    componentDidMount() {
        axios.get(`/facility`)
            .then(response => {
                this.setState({
                    propertyAddressline1: response.data[0].address.line1,
                    propertyAddressline2: response.data[0].address.line2,
                    propertyphoneno: response.data[0].phonenumber1
                });
            })
    }

    render() {
        const { propertyAddressline1, propertyAddressline2, propertyphoneno } = this.state;
        return (
            <nav className="navbar navbar-expand-lg navbar-light" id="NavBarwithbluebg">
                <Link to="/" className="navbar-brand"><img src={unoLogo} style={imgstyle} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <form className="form-inline my-2 my-lg-0" id="Address">
                        <li>
                            {propertyAddressline1}<br />
                            {propertyAddressline2} <br />
                            <span className="contact">Phone no: +91 {propertyphoneno}</span>
                        </li>
                    </form>
                </div>
            </nav>
        );
    }
}


export default NavBarwithbluebg;