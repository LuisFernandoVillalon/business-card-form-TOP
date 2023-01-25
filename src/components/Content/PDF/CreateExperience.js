import React from "react";
import '../../styles.css';

const ExperienceItem = ({ experienceItem }) => {
    console.log({experienceItem});
    return (
        <div>
            <div className="info-container">
                <div className="job-title-date-container">
                    <div className="date-container">
                        <div>{experienceItem.startDate} - {experienceItem.endDate}</div>
                    </div>
                    <div className="job-container">
                        <div className="job-position">{experienceItem.title}</div>
                        <div className="job-company">{experienceItem.company}, {experienceItem.city}</div>
                    </div>
                </div>
                <div>
                    <li className="job-description">{experienceItem.description}</li>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem;