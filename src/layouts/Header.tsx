import React from "react";

import '../css/Header.css';
import logo from '../images/logo.png'
import {SocialBar} from "../components/SocialBar";


function Header(){
    return (
        <div className="Header">
            <img className="Headerlogo" src={logo}  alt={"Nie dziala"}></img>
            <SocialBar></SocialBar>
        </div>
    );
}

export default Header
