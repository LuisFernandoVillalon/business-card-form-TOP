import React from "react";
import '../../styles.css';

const SkillItem = ({ skillItem }) => {
    return (
        <div className="bullets">
            <li className="skill-bullet">{skillItem.skill}</li>
        </div>
    )
}

export default SkillItem;