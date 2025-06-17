import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    return <>
        <header className="header">
            <div className="face">
                <img src="/me.webp" alt="Justin Bornais" height="120px" width="120px" className="me" />
            </div>
            <div className="details">
                <h1>Justin Bornais</h1>
                <div className="details-fields">
                    <a href="mailto:justin.bornais@gmail.com">
                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                        justin.bornais@gmail.com
                    </a>
                    <a href="tel:2263461753">
                        <FontAwesomeIcon className="icon" icon={faPhone} />
                        (226) 346 - 1753
                    </a>
                    <a href="https://justinbornais.ca">
                        <FontAwesomeIcon className="icon" icon={faWindowMaximize} />
                        justinbornais.ca
                    </a>
                    <a href="https://github.com/justinbornais/">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                        justinbornais
                    </a>
                    <a href="https://www.linkedin.com/in/justin-bornais/">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                        justin-bornais
                    </a>
                </div>
            </div>
        </header>
    </>
}