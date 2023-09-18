import React from "react";

import '../css/Header.css';
import logo from "../images/logo.jpg";

function Header(){
    return (
        <div className="Header">
            <img className="Headerlogo" src={logo}  alt={"Nie dziala"}></img>

        </div>
    );
}

export default Header
