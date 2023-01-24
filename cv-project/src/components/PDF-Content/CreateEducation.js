import React from "react";
import '../styles.css';

export default function DisplayEducation(props) {
    const {school, eduCity, degree, eduStartDate, eduEndDate} = props;
    return (
        <div>
            <h3 className="pdf-title">Education</h3>
            <div className="info-container">
                <div className="date-container">
                        <div>{eduStartDate} - {eduEndDate}</div>
                </div>
                <div className="job-container">
                        <div className="job-position">{school}, {eduCity}</div>
                        <div>Degree: {degree}</div>
                </div>
            </div>
        </div>
    )
}