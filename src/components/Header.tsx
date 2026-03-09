import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ContactIconKey, ResumeHeader } from '../types/resume';

const iconMap: Record<ContactIconKey, IconDefinition> = {
  email:    faEnvelope,
  phone:    faPhone,
  website:  faGlobe,
  github:   faGithub,
  linkedin: faLinkedin,
};

interface Props {
  header: ResumeHeader;
}

export default function Header({ header }: Props) {
  return (
    <header className="resume-header">
      <h1 className="resume-name">{header.name}</h1>
      {header.title && <p className="resume-title">{header.title}</p>}
      <div className="contact-links">
        {header.contacts.map((contact, i) => (
          <a key={i} href={contact.url} className="contact-link">
            <FontAwesomeIcon className="icon" icon={iconMap[contact.iconKey]} />
            {contact.label}
          </a>
        ))}
      </div>
    </header>
  );
}