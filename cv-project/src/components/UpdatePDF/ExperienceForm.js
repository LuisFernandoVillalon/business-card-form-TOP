import React from "react";
import '../styles.css'

export default function ExperienceForm(props) {

    const {position, company, city, startDate, endDate} = props;

    return (
        <div>
            <h1>Experience</h1>
            <form name="expForm" className="flex-column">
                <input type="text" placeholder="Position" onChange={e => props.setPosition(e.target.value)} value={position}/>
                <input type="text" placeholder="Company" onChange={e => props.setCompany(e.target.value)} value={company}/>
                <input type="text"  placeholder="City" onChange={e => props.setCity(e.target.value)} value={city}/>
                <input type="text" placeholder="Start Date" onChange={e => props.setStartDate(e.target.value)} value={startDate}/>
                <input type="text" placeholder="End Date" onChange={e => props.setEndDate(e.target.value)} value={endDate}/>
            </form>
            <div className="button-container">
                <button className="button-style">Add</button>
                <button className="button-style">Delete</button>
            </div>
        </div>
    )
}