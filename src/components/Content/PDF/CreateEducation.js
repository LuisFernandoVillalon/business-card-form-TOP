import React from "react";
import '../../styles.css';

const EducationItem = ({ educationItem }) => {
    return (
        <div>
            <div className="edu-container">
                <div className="date-container">
                        <div>{educationItem.eduStartDate} - {educationItem.eduEndDate}</div>
                </div>
                <div className="job-container">
                        <div className="job-position">{educationItem.school}, {educationItem.eduCity}</div>
                        <div className="degree-title">Degree: {educationItem.degree}</div>
                </div>
            </div>
        </div>
    )
}

export default EducationItem;