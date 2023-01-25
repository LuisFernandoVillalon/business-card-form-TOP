import React, {useState} from "react";
import '../../styles.css';
import PersonalInfoForm from './PersonalInfoForm.js';
import ExperienceForm from './ExperienceForm.js';
import EducationForm from './EducationForm.js';
import SkillForm from './SkillForm.js'

const ResumeForm = ({
    resume,
    onChangePersonal,
    onChangeExperience,
    onAddExperience,
    onDeleteExperience,
    onChangeEducation,
    onAddEducation,
    onDeleteEducation,
    onChangeSkill,
    onAddSkill,
    onDeleteSkill,
    onLoadExample,
    onReset,
    onPrint,
}) => {

    return (
            <div className="form-container">
                <PersonalInfoForm 
                    personalInfo={resume.personalInfo} 
                    onChange={onChangePersonal}
                />
                <h1>Skills</h1>
                <SkillForm
                    skills={resume.skills}
                    onChange={onChangeSkill}
                    onAdd={onAddSkill}
                    onDelete={onDeleteSkill}
                />
                <h1>Experience</h1>
                <ExperienceForm
                    experience={resume.experience}
                    onChange={onChangeExperience}
                    onAdd={onAddExperience}
                    onDelete={onDeleteExperience}
                />
                <h1>Education</h1>    
                <EducationForm 
                   education={resume.education}
                   onChange={onChangeEducation}
                   onAdd={onAddEducation}
                   onDelete={onDeleteEducation}
                />
                <div className="upper-btn-container">
                    <button className="upper-button-style" onClick={onReset}>Reset</button>
                    <button className="upper-button-style" onClick={onLoadExample}>Load Example</button>
                    <button className="upper-button-style" onClick={onPrint}>Convert to PDF</button>
                </div>
            </div>
    );
}

export default ResumeForm;