import {SocialLogo} from "./SocialLogo";
import FacebookLogo from "../../assets/icons/facebook-icon.png";
import TwitterLogo from "../../assets/icons/twitter-icon.png";
import LinkedinLogo from "../../assets/icons/linkedin-icon.png";
import InstagramLogo from "../../assets/icons/instagram-icon.png";
import "../../assets/styles/SocialBar.css";


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
