import React from 'react';

const containerstyle = {
    overflow: 'hidden',
    clear: 'both'
}
const h4style = {
    color: '#2a91ff',
    textAlign: 'center',
    paddingTop: '20px'
}

function UnoRoom() {
    return (
        <div className="container" style={containerstyle}>
            <div className="panel panel-default about">
                <h4 style={h4style}>About Unoroom</h4>
                <div className="panel-body">
                    <p><a href="https://www.uno-in.com" target={'_blank'}>Uno</a> "is one of the world’s fastest growing online hotels and apartments booking platform. From its beginnings as an e-commerce start-up based in Singapore in 2005, Uno has grown to offer
                        a global network of 2 million properties in more than 200 countries and territories worldwide. It provides less budgetg with easy access to a wide choice of luxury and budget hotels, apartments, homes, and villas to suit all budgets
                    and travel occasions."</p>
                    <p>Headquartered in Singapore, Uno is part of Booking Holdings (Nasdaq: BKNG) and employs more than 4,000 staff in more than 30 countries. uno-in.com and the uno tab app are available in 38 languages.
                </p>
                    <p><a href="https://www.uno-in.com" target={"_blank"}>Uno</a> "is one of the world’s fastest growing online hotels and apartments booking platform. From its beginnings as an e-commerce start-up based in Singapore in 2005, Uno has grown to offer
                        a global network of 2 million properties in more than 200 countries and territories worldwide. It provides less budgetg with easy access to a wide choice of luxury and budget hotels, apartments, homes, and villas to suit all budgets
                    and travel occasions."</p>
                    <p>Headquartered in Singapore, Uno is part of Booking Holdings (Nasdaq: BKNG) and employs more than 4,000 staff in more than 30 countries. uno-in.com and the uno tab app are available in 38 languages.
                </p>
                    <p><a href="https://www.uno-in.com" target={"_blank"}>Uno</a> "is one of the world’s fastest growing online hotels and apartments booking platform. From its beginnings as an e-commerce start-up based in Singapore in 2005, Uno has grown to offer
                    a global network of 2 million properties in more than 200 countries and territories worldwide. It provides less budgetg with easy access to a wide choice of luxury and budget hotels, apartments, homes, and villas to suit all budgets
            and travel occasions."</p>
                    <p>Headquartered in Singapore, Uno is part of Booking Holdings (Nasdaq: BKNG) and employs more than 4,000 staff in more than 30 countries. uno-in.com and the uno tab app are available in 38 languages.
                </p>
                </div>
            </div>
        </div>
    );
}


export default UnoRoom;