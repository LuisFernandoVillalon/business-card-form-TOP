import React from "react";
import CreateEducation from "./CreateEducation.js"
import CreateExperience from "./CreateExperience.js"
import '../../styles.css';




const PDFLeftCol = ({ personalInfo, experience, education }) => {
    const experienceItems = experience.map((experienceItem) => (
        <CreateExperience key={experienceItem.id} experienceItem={experienceItem} />
    ));
    const educationItems = education.map((educationItem) => (
        <CreateEducation key={educationItem.id} educationItem={educationItem} />
    ));

    return (
        <div className="information-container">

            <h3 className="pdf-title">Description</h3>
            <div className="pdf-description">{personalInfo.description}</div>
            <h3 className="pdf-title">Experience</h3>
                {experienceItems}
            <h3 className="pdf-title">Education</h3>
                {educationItems}

        </div>
    )
}

export default PDFLeftCol;