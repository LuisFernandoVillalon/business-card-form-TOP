import React, { useState } from "react";
import '../../styles.css'

const ExperienceForm = ({ experience, onChange, onAdd, onDelete }) => {
    const experienceItems = experience.map((experienceItem) => (
            <ExperienceItem 
                key={experienceItem.id}
                id={experienceItem.id}
                experienceItem={experienceItem}
                onChange={onChange}
                onDelete={onDelete}
            />
    ));
    return (
        <div>
            {experienceItems}
            <div className="add-btn-container">
                <button className="button-style" onClick={onAdd}>Add Experience</button>
            </div>
        </div>
    )
}

const ExperienceItem = ({ id, experienceItem, onChange, onDelete }) => {
    return (
        <div>
            <div className="flex-column">
                <input name="title" type="text" placeholder="Title" onChange={(e) => onChange(e, id)} value={experienceItem.title}/>
                <input name="company" type="text" placeholder="Company" onChange={(e) => onChange(e, id)} value={experienceItem.company}/>
                <input name="city" type="text"  placeholder="City" onChange={(e) => onChange(e, id)} value={experienceItem.city}/>
                <input name="startDate" type="text" placeholder="Start Date" onChange={(e) => onChange(e, id)} value={experienceItem.startDate}/>
                <input name="endDate" type="text" placeholder="End Date" onChange={(e) => onChange(e, id)} value={experienceItem.endDate}/>
                <textarea placeholder="Job Description" name="description" onChange={(e) => onChange(e, id)} value={experienceItem.description}></textarea>
                <div className="delete-btn-container">
                    <button className="delete-btn-style" onClick={() => onDelete(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}




export default ExperienceForm;

