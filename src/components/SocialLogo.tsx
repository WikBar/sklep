
type SocialLogoProps={
    source:string,
    alt:string,
    logo: string,
}

export function SocialLogo (props:SocialLogoProps){

    return <div>
        <a href={props.source}>
            <img src={props.logo} alt={props.alt}/>
        </a>
    </div>
}
