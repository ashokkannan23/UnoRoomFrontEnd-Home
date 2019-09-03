import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../assets/css/footer.css';
// import UnoRoom from '../page/unoRoom';
// import GuestPolicies from '../page/faq';

const hrefLink = "#";

class Footer extends Component {
    render() {
        return (
            <footer id="myFooter">
                <div className="container-fluid">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.237977889195!2d77.59043831430424!3d12.956618218713714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15db39910de5%3A0xef2ec746c46cde75!2sOYO+1175+Hotel+Uno+In!5e0!3m2!1sen!2sin!4v1565185352460!5m2!1sen!2sin"
                        width="100%" height="300" title="Propery Map"  style={{border:'0',borderRadius:'10px',frameborder:'0'}} allowFullScreen></iframe>
                    <div className="row">
                        <div className="col-sm-2" id="footerLink">
                            <Link to="/gotoabout"><p>About Uno</p></Link>
                </div>
                        <div className="col-sm-2" id="footerLink">
                            <Link to=""><p>FAQ's</p></Link>
                </div>
                        <div className="col-sm-2" id="footerLink">
                            <Link to="/guestpolicies"><p>Guest Policies</p></Link>
                </div>
                        <div className="col-sm-2" id="footerLink">
                            <Link to=""><p>Privacy policy</p></Link>
                </div>
                        <div className="col-sm-2" id="footerLink">
                            <Link to=""><p>Terms of use</p></Link>
                </div>
                        <div className="col-sm-2" id="footerLink">
                            <Link to=""><p>Help Center</p></Link>
                </div>
                    </div>
                </div>
                <div className="social-networks">
                    <a href={hrefLink} className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href={hrefLink} className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href={hrefLink} className="google"><i className="fa fa-google-plus"></i></a>
                </div>
                <div className="footer-copyright">
                    <p>Unoroom © 2019 Copyright Text </p>
                </div>
                {/* <Switch>
                    <Route exact path="/gotoabout" component={UnoRoom} />
                    <Route path="/guestpolicies" component={GuestPolicies} />
                </Switch> */}
            </footer>

        );
    }
}

export default Footer;
