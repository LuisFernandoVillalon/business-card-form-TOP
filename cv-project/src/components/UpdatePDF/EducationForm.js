import React from "react";
import '../styles.css';

export default function EducationForm(props) {
    const {school, eduCity, degree, eduStartDate, eduEndDate} = props;
    return (
        <div>
            <h1>Education</h1>
            <form name="eduForm" className="flex-column">
                <input type="text" placeholder="Learning Institution" onChange={e => props.setSchool(e.target.value)} value={school}/>
                <input type="text" placeholder="City" onChange={e => props.setEduCity(e.target.value)} value={eduCity}/>
                <input type="text"  placeholder="Degree/Certificate" onChange={e => props.setDegree(e.target.value)} value={degree}/>
                <input type="text" placeholder="Start Date" onChange={e => props.setEduStartDate(e.target.value)} value={eduStartDate}/>
                <input type="text" placeholder="End Date" onChange={e => props.setEduEndDate(e.target.value)} value={eduEndDate}/>
            </form>
        </div>
    )
}