import React from "react";
import '../../styles.css';

const EducationForm = ({ education, onChange, onAdd, onDelete }) => {
    const educationItems = education.map((educationItem) => (
        <EducationItem 
            key={educationItem.id}
            id={educationItem.id}
            educationItem={educationItem}
            onChange={onChange}
            onDelete={onDelete}
        />
    ));
    return (
        <div>
            {educationItems}
            <div className="add-btn-container">
                <button className="button-style" onClick={onAdd}>Add Education</button>
            </div>
        </div>
    )
}

const EducationItem = ({ id, educationItem, onChange, onDelete})  => {
    return (
        <div className="flex-column">
            <input type="text" name="school" placeholder="Learning Institution" onChange={(e) => onChange(e, id)} value={educationItem.school}/>
            <input type="text" name="eduCity" placeholder="City" onChange={(e) => onChange(e, id)} value={educationItem.eduCity}/>
            <input type="text" name="degree"  placeholder="Degree/Certificate" onChange={(e) => onChange(e, id)} value={educationItem.degree}/>
            <input type="text" name="eduStartDate" placeholder="Start Date" onChange={(e) => onChange(e, id)} value={educationItem.eduStartDate}/>
            <input type="text" name="eduEndDate" placeholder="End Date" onChange={(e) => onChange(e, id)} value={educationItem.eduEndDate}/>
            <div className="delete-btn-container">
                    <button className="delete-btn-style" onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    )
}


export default EducationForm;