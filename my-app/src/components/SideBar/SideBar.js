import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import './SideBar.css';
const SideBar = () => {
const [side, setSide] = useState(true)
const [drop, setDrop] = useState(true)
return (
    <div id="wrapper">
        <nav className="navbar fixed-top" id={side? "sidebar-wrapper1" : "sidebar-wrapper"}>
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
                    <ul className={drop? "coloring is-closed" : "coloring is-open"}>
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
        </nav>
        <FaBars style={{ padding: "5px", width: "35px", height: "25px", marginTop: "50px" }}  onClick= {()=> {setSide(!side)}} className={side? "hamburger is-closed" : "hamburger is-open"}/>
    </div>
);
};

export default SideBar;
