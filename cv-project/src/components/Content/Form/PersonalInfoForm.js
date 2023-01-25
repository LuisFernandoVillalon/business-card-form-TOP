import React, {useState} from "react";
import '../../styles.css'

const PersonalInfoForm = ({ personalInfo, onChange}) => {

    return (

        <div>
            <h1>Personal Information</h1>
            <div className="flex-column">
                <input type="text" placeholder="First Name" name="firstName" onChange={(e) => onChange(e)} value={personalInfo.firstName}/>
                <input type="text" placeholder="Last Name" name="lastName" onChange={(e) => onChange(e)} value={personalInfo.lastName}/>
                <input type="text" placeholder="Current/Former Title" name="title" onChange={(e) => onChange(e)} value={personalInfo.title}/>
                <input type="file" accept="image/*" label="Profile Photo"name="photo" onChange={(e) => onChange(e)} />
                <input type="street" placeholder="Address" name="address" onChange={(e) => onChange(e)} value={personalInfo.address}/>
                <input type="tel" placeholder="Phone Number" name="phoneNumber" onChange={(e) => onChange(e)} value={personalInfo.phoneNumber}/>
                <input type="email" placeholder="Email" name="email" onChange={(e) => onChange(e)} value={personalInfo.email}/>
                <textarea placeholder="Description" name="description" onChange={(e) => onChange(e)} value={personalInfo.description}></textarea>
            </div>
        </div>
    )
}

export default PersonalInfoForm;