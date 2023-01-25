import React from "react";
import '../styles.css';
import { Linkedin, Github } from 'react-bootstrap-icons';


export default function DisplayFooter() {
    return (
        <div>
            <Footer />
        </div>
    )
}

function Footer() {
    return  (
        <footer class="last-flex">
            <div> Copyright @ Luis F. Villalon</div>
            <div class="icon-container">
                ( <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/luis-villalon/"><Linkedin /></a>
                <a id="profile-link" rel="noopener noreferrer" target="_blank" href="https://github.com/LuisFernandoVillalon"><Github /></a> )
            </div>
        </footer>
    )
}