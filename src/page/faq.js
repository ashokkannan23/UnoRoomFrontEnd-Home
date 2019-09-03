import React from 'react';

const containerstyle = {
    overflow: 'hidden',
    clear: 'both'
}

const h4style = {
    h4title: {
        color: '#2a91ff',
        textAlign: 'center',
        paddingTop: '20px'
    },
    h4subtitle: {
        paddingLeft: '20px',
        fontSize: '16px'
    }
}

function GuestPolicies() {
    return (
        <div className="container" style={containerstyle}>

            <div className="panel panel-default">
                <div className="panel-body">
                    <h4 style={h4style.h4title}>Guest Policies</h4>
                    <h4 style={h4style.h4subtitle}>General Terms and Conditions</h4>
                    <ul>

                        <li>
                            <p>
                                The primary guest must be at least 18 years of age to be able to check into the hotel.
                        </p>
                        </li>
                        <li>
                            <p>
                                It is mandatory for guests to present valid photo identification at the time of check-in.
                                According to government regulations, a valid Photo ID has to be carried by every person
                                above the age of 18 staying at the hotel. The identification proofs accepted are Aadhar
                                Card, Driving License, Voter ID Card, and Passport. Without Original copy of valid ID the
                                guest will not be allowed to check-in.
                        </p>
                        </li>
                        <li>
                            <p>
                                PAN card is not accepted as a valid ID card.
                        </p>
                        </li>
                        <li>
                            <p>
                                Stay of 1 child up to 5 years of age is complementary without the use of extra mattress.
                                Breakfast charges may be applicable for the child.
                        </p>
                        </li>
                        <li>
                            <p>
                                Extra mattress will be provided for triple occupancy bookings.
                        </p>
                        </li>
                        <li>
                            <p>
                                Pets are not allowed in the hotel premises.
                        </p>
                        </li>
                        <li>
                            <p>
                                Should any action by a guest be deemed inappropriate by the hotel, or if any inappropriate
                                behaviour is brought to the attention of the hotel, the hotel reserves the right, after the
                                allegations have been investigated, to take action against the guest.
                        </p>
                        </li>
                        <li>
                            <p>
                                Certain destinations may have different policies for specific times during the year.
                        </p>
                        </li>
                        <li>
                            <p>
                                Guests shall be liable for any damage, except normal wear and tear to Hotel asset. Guest
                                shall keep the Hotel room in a good condition and maintain hygiene and cleanliness.
                        </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default GuestPolicies;