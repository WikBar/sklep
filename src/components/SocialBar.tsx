import {SocialLogo} from "./SocialLogo";
import FacebookLogo from "./../images/facebook-icon.png";
import TwitterLogo from "./../images/twitter-icon.png";
import LinkedinLogo from "./../images/linkedin-icon.png";
import InstagramLogo from "./../images/instagram-icon.png";
import "./SocialBar.css";


export function SocialBar(){
return (
    <div className={"socialBar"}>
        <SocialLogo  source={"https://facebook.com"} alt={"Facebook logo"} logo={FacebookLogo}></SocialLogo>
        <SocialLogo source={"https://twitter.com"} alt={"Twitter logo"} logo={TwitterLogo}></SocialLogo>
        <SocialLogo source={"https://linkedin.com"} alt={"LinkedIn logo"} logo={LinkedinLogo}></SocialLogo>
        <SocialLogo source={"https://instagram.com"} alt={"Instagram logo"} logo={InstagramLogo}></SocialLogo>
    </div>
)

}
