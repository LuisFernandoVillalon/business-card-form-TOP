import React from "react";
import '../styles.css';
import CreateDescription from '../PDF-Content/CreateDescription.js';
import CreateExperience from '../PDF-Content/CreateExperience.js';
import CreateEducation from '../PDF-Content/CreateEducation.js';
import DisplayPhoto from '../PDF-Personal/DisplayPhoto.js';
import DisplayPersonalInfo from '../PDF-Personal/DisplayPersonalInfo.js';

export default function DisplayPDF(props) {

    const {firstName, lastName, jobTitle, profilePicture, address, phoneNumber, email, description,
        position, company, city, startDate, endDate,
        school, eduCity, degree, eduStartDate, eduEndDate
    } = props;

    return (
        <div className="center-pdf">
            <CreatePDF 
            firstName={firstName}
            lastName={lastName} 
            jobTitle={jobTitle} 
            profilePicture={profilePicture} 
            address={address} 
            phoneNumber={phoneNumber} 
            email={email} 
            description={description} 
            
            position={position}
            company={company}
            city={city}
            startDate={startDate}
            endDate={endDate}

            school={school} 
            eduCity={eduCity} 
            degree={degree} 
            eduStartDate={eduStartDate} 
            eduEndDate={eduEndDate} 

            />
        </div>
    )
}

function CreatePDF(props) {

    const {firstName, lastName, jobTitle, profilePicture, address, phoneNumber, email, description,
        position, company, city, startDate, endDate,
        school, eduCity, degree, eduStartDate, eduEndDate
    } = props;


    return (
        <div className="pdf-container">
            <CreatePDFHeader 
            firstName={firstName}
            lastName={lastName} 
            jobTitle={jobTitle} 
            />
            <div className="pdf-content-container">
                <CreatePDFContent 
                description={description}
                position={position}
                company={company}
                city={city}
                startDate={startDate}
                endDate={endDate}

                school={school} 
                eduCity={eduCity} 
                degree={degree} 
                eduStartDate={eduStartDate} 
                eduEndDate={eduEndDate} 
                />
                <CreatePDFPersonalInfo 
                profilePicture={profilePicture}
                address={address} 
                phoneNumber={phoneNumber}
                email={email}
                />
            </div>
        </div>
    )
}

function CreatePDFHeader(props) {
    const {firstName, lastName, jobTitle} = props;
    return (
        <div className="pdf-header">
            <div className="pdf-title-container">
                <h1 className="fullName">{firstName + " " + lastName}</h1>
                <h2 className="jobTitle">{jobTitle}</h2>
            </div>
        </div>
    )
}

function CreatePDFContent(props) {
    const {description, position, company, city, startDate, endDate,
        school, eduCity, degree, eduStartDate, eduEndDate
    } = props;
    return (
        <div className="information-container">
             <CreateDescription 
             description={description}
             />
             <CreateExperience 
             position={position}
             company={company}
             city={city}
             startDate={startDate}
             endDate={endDate}
             />
             <CreateEducation 
             school={school} 
             eduCity={eduCity} 
             degree={degree} 
             eduStartDate={eduStartDate} 
             eduEndDate={eduEndDate} 
             />

        </div>
    )
}

function CreatePDFPersonalInfo(props) {
    const {profilePicture, address, phoneNumber, email} = props;
    return (
        <div className="personal-container">
            <DisplayPhoto 
            profilePicture={profilePicture}
            />
            <DisplayPersonalInfo
            address={address}
            phoneNumber={phoneNumber} 
            email={email}
            />
        </div>
    )
}