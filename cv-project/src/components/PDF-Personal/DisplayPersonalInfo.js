import React from "react";
import '../styles.css';

export default function DisplayPersonalDetails(props) {
    const {address, phoneNumber, email} = props;

    return (
        <div>
             <h3 className="pdf-title">Personal Details</h3>
             <DisplayAddress
             address={address}
             />
             <DisplayPhoneNumber 
             phoneNumber={phoneNumber}
             />
             <DisplayEmail 
             email={email}
             />
        </div>
    )
}

function DisplayAddress(props) {
    const {address} = props;
    return (
        <div>
            <h3 className="personal-title">Address:</h3>
            <div className="letter-spacing">{address}</div>
        </div>
    )
}

function DisplayPhoneNumber(props) {
    const {phoneNumber} = props;
    return (
        <div>
            <h3 className="personal-title">Phone Number:</h3>
            <div className="letter-spacing">{phoneNumber}</div>
        </div>
    )
}

function DisplayEmail(props) {
    const {email} = props;
    return (
        <div>
            <h3 className="personal-title">Email:</h3>
            <div className="letter-spacing">{email}</div>
        </div>
    )
}