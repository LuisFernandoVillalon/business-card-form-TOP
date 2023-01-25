import React from "react";
import '../../styles.css';

const ResumerHeader = ({personalInfo}) => {
    const {firstName, lastName, title} = personalInfo;
    return (
        <div className="pdf-header">
            <div className="pdf-title-container">
                <h1 className="fullName">{firstName + " " + lastName}</h1>
                <h2 className="jobTitle">{title}</h2>
            </div>
        </div>
    )
}

export default ResumerHeader;