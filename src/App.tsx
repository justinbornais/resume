import React from 'react';
import './App.css';
import resumeData from './data/resume.json';
import { ResumeData } from './types/resume';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

const data = resumeData as ResumeData;

function App() {
  return (
    <div className="resume-page">
      <div className="resume-columns">
        <LeftColumn data={data} />
        <RightColumn data={data} />
      </div>
    </div>
  );
}

export default App;
