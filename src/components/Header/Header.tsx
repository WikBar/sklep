import React from "react";

import '../../assets/styles/Header.css';
import logo from '../../assets/images/logo.png'
import {SocialBar} from "../Socials/SocialBar";
import "../../assets/styles/Header.css"

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
