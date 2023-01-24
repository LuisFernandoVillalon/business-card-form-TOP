import React, {useState} from "react";
import '../styles.css'

export default function PersonalInfoForm(props) {

    const {firstName, lastName, jobTitle, profilePicture, address, phoneNumber, email, description} = props;

    return (
        <div>
            <h1>Personal Information</h1>
            <form name="pinfoForm" className="flex-column">
                <input type="text" placeholder="First Name" onChange={e => props.setFirstName(e.target.value)} value={firstName}/>
                <input type="text" placeholder="Last Name" onChange={e => props.setLastName(e.target.value)} value={lastName}/>
                <input type="text" placeholder="Current/Former Title" onChange={e => props.setJobTitle(e.target.value)} value={jobTitle}/>
                <input type="file" accept="image/*" onChange={e => {
                    const file = e.target.files[0];
                    let imgURL = URL.createObjectURL(file);
                    props.setProfilePicture(imgURL);
                    }} />
                <input type="street" placeholder="Address" onChange={e => props.setAddress(e.target.value)} value={address}/>
                <input type="tel" placeholder="Phone Number" onChange={e => props.setPhoneNumber(e.target.value)} value={phoneNumber}/>
                <input type="email" placeholder="Email" onChange={e => props.setEmail(e.target.value)} value={email}/>
                <textarea placeholder="Description" onChange={e => props.setDescription(e.target.value)} value={description}></textarea>
            </form>
        </div>
    )
}