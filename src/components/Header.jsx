import React from "react";
import trollFaceLogo from "../images/troll-face.png"
import "../style.css"

export default function Header() {
    return (
        <nav className="header">
            <img className="header--logo" src={trollFaceLogo} alt="troll-face-logo"></img>
            <h2 className="header--logo-title">Meme Generator</h2>
            <h4 className="header--title">React Course - Project 3</h4>
        </nav>
    )
}