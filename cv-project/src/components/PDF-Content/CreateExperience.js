import React from "react";
import '../styles.css';

export default function DisplayExperience(props) {
    const {position, company, city, startDate, endDate} = props;
    return (
        <div>
            <h3 className="pdf-title">Experience</h3>
            <div className="info-container">
                <div className="date-container">
                    <div>{startDate} - {endDate}</div>
                </div>
                <div className="job-container">
                    <div className="job-position">{position}</div>
                    <div>{company}, {city}</div>
                </div>
            </div>
        </div>
    )
}