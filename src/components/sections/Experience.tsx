import React from 'react';
import { ExperienceItem } from '../../types/resume';
import { renderInlineMarkup } from '../../utils/formatText';

interface Props {
  items: ExperienceItem[];
}

export default function Experience({ items }: Props) {
  return (
    <section className="resume-section">
      <h2 className="section-heading">Experience</h2>
      {items.map((item, i) => (
        <div key={i} className="entry">
          <div className="entry-header">
            <div className="entry-left">
              <span className="entry-title">{item.role}</span>
              <span className="entry-subtitle">{item.company}</span>
            </div>
            <div className="entry-right">
              <span className="entry-dates">{item.startDate} – {item.endDate}</span>
              <span className="entry-location">{item.location}</span>
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
