import { useState } from 'react';
import ProjectsList from './ProjectsList';

interface WorkSectionProps {
  onSectionChange: (section: string) => void;
}

const experience = [
  {
    title: 'Graduate Teaching Assistant, Lab Systems',
    org: 'University of Colorado Boulder · Boulder, CO',
    period: 'Jan 2026 – May 2026',
    bullets: [
      'Led 3 lab sections (55+ students), resolving application, networking, and system issues to ensure reliable lab operations.',
      'Analyzed workflow data using R to identify bottlenecks and drive process improvements across lab support and instruction.',
    ],
  },
  {
    title: 'Graduate Researcher, Distributed Systems Engineering',
    org: 'Peleg Lab, BioFrontiers Institute · Boulder, CO',
    period: 'Aug 2025 – Jan 2026',
    bullets: [
      'Increased evaluation throughput by 35% and eliminated hundreds of GPU-hours per cycle by architecting parallel AI pipelines in Python/C++ on GCP, enabling scalable distributed experimentation.',
      'Built containerized GPU-backed environments to improve reproducibility, orchestration, and reliability for large-scale AI workloads.',
      'Reduced failure diagnosis time by 40% through GDB/Valgrind debugging and performance profiling, improving fault isolation and system stability.',
    ],
  },
  {
    title: 'Software Engineering Intern, Backend & Data Systems',
    org: 'CodeClause · Bangalore, India',
    period: 'June 2024 – July 2024',
    bullets: [
      'Increased backend throughput by 20% and reduced API latency by optimizing Flask REST services, SQL queries, and request workflows, supporting thousands of daily requests across concurrent workloads.',
      'Reduced release failures by 25% through enhancing CI/CD pipelines with Jenkins, GitHub, and containerized deployments.',
      'Decreased issue diagnosis time by 35% through implementing unit testing, structured logging, monitoring, and API debugging, strengthening observability and production stability.',
    ],
  },
  {
    title: 'Software Engineer Intern, Big Data Infrastructure',
    org: 'Adflix Media · Pune, India',
    period: 'Apr 2023 – Sep 2023',
    bullets: [
      'Processed 5M+ records daily by scaling SQL-driven ETL pipelines and Dockerized microservices, improving throughput, reliability, and service communication across distributed cloud workloads.',
      'Reduced issue detection time by 30% through building Grafana dashboards for latency, throughput, infrastructure, and network monitoring.',
      'Cut recovery time by 25% by implementing structured logging, cloud monitoring, automated alerting, and access-controlled operational workflows.',
    ],
  },
];

const WorkSection = ({ onSectionChange }: WorkSectionProps) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'experience' | 'education'>('projects');

  return (
    <div className="fade-in p-6" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => onSectionChange('home')}
          className="mr-4 p-2 text-white hover:text-gray-200 transition-colors duration-300"
          aria-label="Back to home"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h2 className="text-3xl font-light text-white stagger-in">My Work</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b border-white/10">
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-5 py-2 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px ${
            activeTab === 'projects'
              ? 'border-white text-white'
              : 'border-transparent text-white/40 hover:text-white/70'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab('experience')}
          className={`px-5 py-2 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px ${
            activeTab === 'experience'
              ? 'border-white text-white'
              : 'border-transparent text-white/40 hover:text-white/70'
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`px-5 py-2 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px ${
            activeTab === 'education'
              ? 'border-white text-white'
              : 'border-transparent text-white/40 hover:text-white/70'
          }`}
        >
          Education
        </button>
      </div>

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <ProjectsList onSectionChange={onSectionChange} embedded />
      )}

      {/* Education Tab */}
      {activeTab === 'education' && (
        <div className="space-y-6 max-w-3xl">
          <div className="border border-white/10 rounded-lg p-6" style={{ backgroundColor: '#222222' }}>
            <h3 className="text-base font-semibold text-white mb-1">Masters of Science, Computer Science</h3>
            <p className="text-xs text-white/50 font-mono mb-4">University of Colorado Boulder · Boulder, CO &nbsp;·&nbsp; Aug 2024 – May 2026 &nbsp;·&nbsp; GPA 3.9/4.0</p>
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              Relevant Coursework: Generative AI for Software Development, Machine Learning, Computer Vision, Design and Analysis of Algorithms, Operating Systems, Big Data Architecture, NLP, User-Centered Design and Development
            </p>
          </div>

          <div className="border border-white/10 rounded-lg p-6" style={{ backgroundColor: '#222222' }}>
            <h3 className="text-base font-semibold text-white mb-1">Bachelor of Technology, Computer Science &amp; Engineering</h3>
            <p className="text-xs text-white/50 font-mono mb-4">SRM Institute of Science &amp; Technology · Chennai, India &nbsp;·&nbsp; Aug 2020 – May 2024 &nbsp;·&nbsp; GPA 3.81/4.0</p>
          </div>
        </div>
      )}

      {/* Experience Tab */}
      {activeTab === 'experience' && (
        <div className="space-y-8 max-w-3xl">
          {experience.map((role, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg p-6"
              style={{ backgroundColor: '#222222' }}
            >
              <h3 className="text-base font-semibold text-white mb-1">{role.title}</h3>
              <p className="text-xs text-white/50 font-mono mb-4">
                {role.org} &nbsp;·&nbsp; {role.period}
              </p>
              <ul className="space-y-2">
                {role.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-white/75 leading-relaxed">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-white/30" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkSection;
