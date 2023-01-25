import React, { Component } from "react";
import '../../styles.css';


import CreatePDFHeader from './PDFHeader.js';
import CreatePDFLeftCol from './PDFLeftCol.js';
import CreatePDFRightCol from './PDFRightCol.js';

class PDF extends Component {
    render() {
        const { resume } = this.props;

        return (
            <div className="center-pdf">
                <div className="pdf-container">
                    <CreatePDFHeader personalInfo={resume.personalInfo}/>
                    <div className="pdf-content-container">
                        <CreatePDFLeftCol 
                            personalInfo={resume.personalInfo}
                            experience={resume.experience}
                            education={resume.education}
                        />
                        <CreatePDFRightCol 
                        personalInfo={resume.personalInfo} 
                        skills={resume.skills}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default PDF;