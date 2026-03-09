import React from 'react';
import { SkillCategory } from '../../types/resume';

interface Props {
  categories: SkillCategory[];
}

export default function Skills({ categories }: Props) {
  return (
    <section className="resume-section">
      <h2 className="section-heading">Skills</h2>
      {categories.map((cat, i) => (
        <div key={i} className="skill-category">
          <span className="skill-label">{cat.label}: </span>
          <span className="skill-items">{cat.items.join(', ')}</span>
        </div>
      ))}
    </section>
  );
}
