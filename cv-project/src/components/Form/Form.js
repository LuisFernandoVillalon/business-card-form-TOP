import React from "react";
import '../styles.css';
import PersonalInfoForm from '../UpdatePDF/PersonalInfoForm.js';
import ExperienceForm from '../UpdatePDF/ExperienceForm.js';
import EducationForm from '../UpdatePDF/EducationForm.js';

export default function DisplayForm(props) {
    const {firstName, lastName, jobTitle, profilePicture, address, phoneNumber, email, description,
            position, company, city, startDate, endDate,
            school, eduCity, degree, eduStartDate, eduEndDate
    } = props;

    return (
            <div className="form-container">
                <PersonalInfoForm 
                firstName={firstName} setFirstName={props.setFirstName}
                lastName={lastName} setLastName={props.setLastName}
                jobTitle={jobTitle} setJobTitle={props.setJobTitle}
                profilePicture={profilePicture} setProfilePicture={props.setProfilePicture}
                address={address} setAddress={props.setAddress}
                phoneNumber={phoneNumber} setPhoneNumber={props.setPhoneNumber}
                email={email} setEmail={props.setEmail}
                description={description} setDescription={props.setDescription}
                />
                <ExperienceForm
                position={position} setPosition={props.setPosition}
                company={company} setCompany={props.setCompany}
                city={city} setCity={props.setCity}
                startDate={startDate} setStartDate={props.setStartDate}
                endDate={endDate} setEndDate={props.setEndDate}
                />
                <EducationForm 
                school={school} setSchool={props.setSchool}
                eduCity={eduCity} setEduCity={props.setEduCity}
                degree={degree} setDegree={props.setDegree}
                eduStartDate={eduStartDate} setEduStartDate={props.setEduStartDate}
                eduEndDate={eduEndDate} setEduEndDate={props.setEduEndDate}
                />
            </div>
    );
}
