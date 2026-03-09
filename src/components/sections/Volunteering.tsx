import React from 'react';
import { VolunteerItem } from '../../types/resume';
import { renderInlineMarkup } from '../../utils/formatText';

interface Props {
  items: VolunteerItem[];
}

export default function Volunteering({ items }: Props) {
  return (
    <section className="resume-section">
      <h2 className="section-heading">Volunteering</h2>
      {items.map((item, i) => (
        <div key={i} className="entry">
          <div className="entry-header">
            <div className="entry-left">
              <span className="entry-title">{item.role}</span>
              <span className="entry-subtitle">{item.organization}</span>
            </div>
            <div className="entry-right">
              <span className="entry-dates">{item.startDate} – {item.endDate}</span>
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
