import React from "react";
import '../../styles.css'

const SkillsForm = ({ skills, onChange, onAdd, onDelete}) => {

    const skillItems = skills.map((skillItem) => (
        <SkillItem 
            key={skillItem.id}
            id={skillItem.id}
            skillItem={skillItem}
            onChange={onChange}
            onDelete={onDelete}
        />
));
    return (
        <div>
            {skillItems}
            <div className="add-btn-container">
                <button className="button-style" onClick={onAdd}>Add Skill</button>
            </div>
        </div>
    )
}



const SkillItem = ({ id, skillItem, onChange, onDelete }) => {
    return (
        <div>
                <input name="skill" type="text" placeholder="Skill" onChange={(e) => onChange(e, id)} value={skillItem.skill}/>
                <div className="delete-btn-container">
                    <button className="delete-btn-style" onClick={() => onDelete(id)}>Delete</button>
                </div>

        </div>
    )
}


export default SkillsForm;