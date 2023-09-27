import React from "react";

import '../css/Header.css';
import logo from '../images/logo.png'
import {SocialBar} from "../components/SocialBar";
import "../css/Header.css"

function Header(){
    return (
        <div className="Header">
            <a className={"HeaderLogoRef"} href={"https://harley-parts.pl"}>
            <img className="Headerlogo" src={logo}  alt={"Harley Parts logo"} ></img>
            </a>
            <SocialBar></SocialBar>
        </div>
    );
}

export default Header
