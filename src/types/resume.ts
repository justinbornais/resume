export type ContactIconKey = 'email' | 'phone' | 'website' | 'github' | 'linkedin';

export interface ContactLink {
  iconKey: ContactIconKey;
  url: string;
  label: string;
}

export interface ResumeHeader {
  name: string;
  title: string;
  contacts: ContactLink[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  url?: string;
  techStack: string[];
  bullets: string[];
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  details?: string[];
}

export interface VolunteerItem {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface ResumeData {
  header: ResumeHeader;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  volunteering: VolunteerItem[];
}
