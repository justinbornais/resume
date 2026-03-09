import React from 'react';
import { ResumeData } from '../types/resume';
import Header from './Header';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

interface Props {
  data: ResumeData;
}

export default function LeftColumn({ data }: Props) {
  return (
    <div className="left-column">
      <Header header={data.header} />
      <Experience items={data.experience} />
      <Projects items={data.projects} />
    </div>
  );
}
