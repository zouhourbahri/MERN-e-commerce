import React, { useState } from "react";
import './SideBar.css';
const SideBar = () => {
const [drop, setDrop] = useState(true)
return (
    <ul className="nav sidebar-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#team">Team</a></li>
        <li className="dropdown">
            <a href="#works" onClick= {()=> {setDrop(!drop)}}>
                Works 
                <span style={{marginLeft:'20px'}}>
                <span className="caret"></span>
                </span>
            </a>
        <ul className={drop? "dropDownBar is-closed" : "dropDownBar is-open"}>
            <li><a href="#pictures">Pictures</a></li>
            <li><a href="#videos">Videeos</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#art">Art</a></li>
            <li><a href="#awards">Awards</a></li>
            </ul>
            </li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#followme">Follow me</a></li>
        </ul>
);
};

export default SideBar;
