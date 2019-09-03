import React from 'react';
import NavBarwithbluebg from '../Components/navbarwithbluebg';
import FooterTitle from '../Components/footerTitle';

import Footer from '../Components/footer';

const containerFluidStyle = {
    paddingRight: '0px',
    paddingLeft: '0px'

}

function About() {
    return (
        <div>
            <div className="container-fluid" style={containerFluidStyle}>
                <NavBarwithbluebg />
                <div className="container">
                    <FooterTitle />
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default About;
