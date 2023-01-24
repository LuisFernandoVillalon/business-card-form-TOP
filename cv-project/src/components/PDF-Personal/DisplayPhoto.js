import React, {useState}  from "react";
import myImg from "./empty_avatar.png";
import '../styles.css';

export default function DisplayPhoto(props) {
    const {profilePicture} = props;
    let imgURL = profilePicture;
    return (
        <div>
            <img alt="profile pic" src={imgURL} />
        </div>
    )
}

