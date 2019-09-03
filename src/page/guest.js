import React from 'react';
import NavBar from '../Components/navbar';
import FooterTitle from '../Components/footerTitle';

import Footer from '../Components/footer';

const containerFluidStyle = {
    paddingRight: '0px',
    paddingLeft: '0px'

}

function GuestPolicies() {
    return (
        <div>
            <div className="container-fluid" style={containerFluidStyle}>
                <NavBar />
                <div className="container">
                    <FooterTitle />
                </div>
                
            <Footer />
            </div>
        </div>
    );
}

export default GuestPolicies;
