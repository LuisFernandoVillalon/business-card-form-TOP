import React from "react";
import '../styles.css';

export default function DisplayHeader() {
    return (
        <div>
            <Header />
        </div>
    )
}

function Header() {
    return  (
        <header className="page-title">
            <div>DIY-A-CV</div>
        </header>
    )
}