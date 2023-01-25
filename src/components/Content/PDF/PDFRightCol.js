import React from "react";
import '../../styles.css';
import CreateSkill from './CreateSkill.js';

const PDFRightCol = ({ personalInfo, skills }) => {
    const skillsItems = skills.map((skillItem) => (
        <CreateSkill key={skillItem.id} skillItem={skillItem} />
    ));
    return (
        <div className="personal-container">
            <img alt="profile pic" src={personalInfo.photo} />
            <h3 className="personal-title">Address:</h3>
            <div className="letter-spacing">{personalInfo.address}</div>
            <h3 className="personal-title">Phone Number:</h3>
            <div className="letter-spacing">{personalInfo.phoneNumber}</div>
            <h3 className="personal-title">Email:</h3>
            <div className="letter-spacing">{personalInfo.email}</div>
            <h2 className="skills-personal-title">Skills:</h2>
            {skillsItems}
            
        </div>
    )
}

export default PDFRightCol;