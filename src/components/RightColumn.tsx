import React from 'react';
import { ResumeData } from '../types/resume';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Volunteering from './sections/Volunteering';

interface Props {
  data: ResumeData;
}

export default function RightColumn({ data }: Props) {
  return (
    <div className="right-column">
      <Skills categories={data.skills} />
      <Education items={data.education} />
      <Volunteering items={data.volunteering} />
    </div>
  );
}
