import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../assets/css/footerTitle.css';
import UnoRoom from '../page/unoRoom';
import GuestPolicies from '../page/faq';

const containerstyle = {
    paddingTop: '20px',
    overflow: 'hidden',
    clear: 'both'
}

function FooterTitle() {
    return (
        <Router>
            <div className="container" style={containerstyle}>
                <div className="row" id="width1200">
                    <div className="col-sm-2" id="footerLinks">
                        <Link to="/gotoabout"><p>About Uno</p></Link>
                    </div>
                    <div className="col-sm-2" id="footerLinks">
                        <Link to=""><p>FAQ's</p></Link>
                    </div>
                    <div className="col-sm-2" id="footerLinks">
                        <Link to="/guestpolicies"><p>Guest Policies</p></Link>
                    </div>
                    <div className="col-sm-2" id="footerLinks">
                        <Link to=""><p>Privacy policy</p></Link>
                    </div>
                    <div className="col-sm-2" id="footerLinks">
                        <Link to=""><p>Terms of use</p></Link>
                    </div>
                    <div className="col-sm-2" id="footerLinks">
                        <Link to=""><p>Help Center</p></Link>
                    </div>
                </div>
                <div className="row" id="width992">
                    <div className="col-sm-3" id="footerLinks">
                        <Link to="/unoRoom"><p>About Uno</p></Link>
                    </div>
                    <div className="col-sm-3" id="footerLinks">
                        <Link to=""><p>FAQ's</p></Link>
                    </div>
                    <div className="col-sm-3" id="footerLinks">
                        <Link to="/guestpolicies"><p>Guest Policies</p></Link>
                    </div>
                    <div className="col-sm-3" id="footerLinks">
                        <Link to=""><p>Privacy policy</p></Link>
                    </div>
                    <div className="col-sm-3" id="footerLinks">
                        <Link to=""><p>Terms of use</p></Link>
                    </div>
                    <div className="col-sm-3" id="footerLinks">
                        <Link to=""><p>Help Center</p></Link>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/gotoabout" component={UnoRoom} />
                    <Route path="/guestpolicies" component={GuestPolicies} />
                </Switch>
            </div>
        </Router>
    );
}


export default FooterTitle;