import { useState } from 'react';
import ProjectsList from './ProjectsList';

interface WorkSectionProps {
  onSectionChange: (section: string) => void;
}

const experience = [
  {
    title: 'Software Development Intern, Backend Platform',
    org: 'EcoServants · Remote',
    period: 'Aug 2026 – Present',
    bullets: [
      "Built backend features across an environmental nonprofit's PHP/MySQL platform with coding agents, gating every agent-written patch behind mutation testing that caught 13 of 13 injected faults across 310+ automated checks.",
      "Owned proposal autosave with versioned MySQL revisions and HMAC-signed unsubscribe tokens, rechecking state under the queue worker's lock so no draft is lost and no race slips through.",
      'Validated a classifier that sorts errors into 7 categories, so retryable ones no longer fail permanently.',
    ],
  },
  {
    title: 'Open Source Contributor, AI & ML Infrastructure',
    org: 'sqlfluff · prime-rl · vLLM · DSPy · docling-core · LangChain Deep Agents',
    period: '2026 – Present',
    bullets: [
      'Active in six open source repos, with fixes merged into sqlfluff (LT01 no longer joins two words when removing whitespace) and prime-rl (skip NUMA binding when the GPU has no sysfs numa_node, found on WSL2).',
      'Opened pull requests across LLM serving, prompt-programming, RL-training, and document-processing codebases: a vLLM frontend bugfix for run-batch request validation, a prime-rl trainer fix for RL step loss logging, a DSPy XMLAdapter list round-tripping fix, and a docling-core WebVTT fix for whitespace-only lines.',
      'Filed reproducible bug reports against Deep Agents, including CRLF line endings being rewritten to LF and a Windows startup failure.',
    ],
  },
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
    title: 'Graduate Researcher, Distributed Systems & Infrastructure',
    org: 'Peleg Lab, BioFrontiers Institute · Boulder, CO',
    period: 'Aug 2025 – Jan 2026',
    bullets: [
      'Architected distributed AI inference pipelines in Python and multithreaded C++ across multinode Linux GPU clusters on GCP, overlapping data staging with compute to lift evaluation throughput 35% and reclaim 400+ GPU hours per release cycle.',
      'Containerized vLLM inference on Kubernetes with test-gated rollouts, running 300+ sweeps with zero failures.',
      'Isolated concurrency faults in C++ inference workers with GDB and Valgrind, shrinking failure diagnosis time 40%.',
      'Profiled kernel launch and data transfer stalls with Nsight Systems, cutting a 9 hour training run to 3.5 hours.',
      'Engineered PyTorch fine-tuning for Cellpose on biologist annotations, lifting instance F1 from 0.71 to 0.89.',
    ],
  },
  {
    title: 'Software Engineering Intern, Backend & Data Systems',
    org: 'CodeClause · Bangalore, India',
    period: 'June 2024 – July 2024',
    bullets: [
      'Rebuilt REST microservices and their SQL query paths behind connection pooling, index tuning, and async non-blocking I/O, pulling p95 latency from 310ms to 180ms at thousands of requests per day.',
      'Hardened API error handling and added Pytest regression suites, cutting bug diagnosis from 40 minutes to 26.',
      'Shipped containerized deploys on Jenkins and GitHub Actions, moving release failures from 1 in 6 builds to 1 in 24.',
    ],
  },
  {
    title: 'Software Engineer Intern, Cloud Infrastructure & Backend',
    org: 'Adflix Media · Pune, India',
    period: 'Apr 2023 – Sep 2023',
    bullets: [
      'Scaled Kafka consumers and Spark ETL jobs across Dockerized AWS services, landing 5M+ records daily into warehouse tables with offset tracking and idempotent writes that ended manual reprocessing.',
      'Wired Prometheus and Grafana alerts on throughput and consumer lag, holding p99 lag under 90 seconds at peak.',
      'Trimmed recovery time 27% by routing each alert to its owning service with a linked runbook.',
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
