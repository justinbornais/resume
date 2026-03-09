import React from 'react';
import { EducationItem } from '../../types/resume';
import { renderInlineMarkup } from '../../utils/formatText';

interface Props {
  items: EducationItem[];
}

export default function Education({ items }: Props) {
  return (
    <section className="resume-section">
      <h2 className="section-heading">Education</h2>
      {items.map((item, i) => (
        <div key={i} className="entry">
          <div className="entry-header">
            <div className="entry-left">
              <span className="entry-title">{item.degree}</span>
              <span className="entry-subtitle">{item.institution}</span>
            </div>
            <div className="entry-right">
              <span className="entry-dates">{item.startDate} – {item.endDate}</span>
            </div>
          </div>
          {item.details && item.details.length > 0 && (
            <ul className="bullets">
              {item.details.map((detail, j) => (
                <li key={j}>{renderInlineMarkup(detail)}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
