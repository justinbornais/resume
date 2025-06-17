import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink, faPhone, faWindowMaximize, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    return <>
        <header className="header">
            <div className="face">
                <img src="/me.webp" alt="Justin Bornais" height="120px" width="120px" className="me" />
            </div>
            <div className="details">
                <h1>Justin Bornais</h1>
                <div className="details-fields">
                    <DetailsField icon={faEnvelope} url="mailto:justin.bornais@gmail.com" text="justin.bornais@gmail.com" />
                    <DetailsField icon={faPhone} url="tel:2263461753" text="(226) 346 - 1753" />
                    <DetailsField icon={faWindowMaximize} url="https://justinbornais.ca" text="justinbornais.ca" />
                    <DetailsField icon={faGithub} url="https://github.com/justinbornais/" text="justinbornais" />
                    <DetailsField icon={faLinkedin} url="https://www.linkedin.com/in/justin-bornais/" text="justin-bornais" />
                </div>
            </div>
        </header>
    </>
}

function DetailsField({icon, url, text}: {icon: IconDefinition, url: string, text: string}) {
    return <a href={url}>
        <FontAwesomeIcon className="icon" icon={icon} />
        {text}
    </a>
}