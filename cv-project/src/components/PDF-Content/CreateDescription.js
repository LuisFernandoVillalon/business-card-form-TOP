import React from "react";
import '../styles.css';

export default function DisplayDescription(props) {
    const {description} = props;
    return (
        <div>
            <h3 className="pdf-title">Description</h3>
            <div className="pdf-description">{description}</div>
        </div>
    )
}