import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectItem } from '../../types/resume';
import { renderInlineMarkup } from '../../utils/formatText';

interface Props {
  items: ProjectItem[];
}

export default function Projects({ items }: Props) {
  return (
    <section className="resume-section">
      <h2 className="section-heading">Projects</h2>
      {items.map((item, i) => (
        <div key={i} className="entry">
          <div className="entry-header">
            <div className="entry-left">
              {item.url ? (
                <a href={item.url} className="entry-title entry-link">
                  <FontAwesomeIcon className="icon" icon={faGithub} />
                  {item.name}
                </a>
              ) : (
                <span className="entry-title">
                  <FontAwesomeIcon className="icon" icon={faGithub} />
                  {item.name}
                </span>
              )}
              <span className="entry-tech">{item.techStack.join(' · ')}</span>
            </div>
          </div>
          <ul className="bullets">
            {item.bullets.map((bullet, j) => (
              <li key={j}>{renderInlineMarkup(bullet)}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
