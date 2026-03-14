import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  url?: string;
  date: string;
  role: string;
  description?: string;
  highlights: string[];
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "TripSync – AI Multi-Agent Travel Planning System",
    url: "https://trip-sync-ashen.vercel.app/",
    date: "2026",
    role: "AI Systems / Full Stack",
    description:
      "Multi-agent AI system that aggregates group preferences and generates optimized travel itineraries.",
    highlights: [
      "Collaborative travel planning platform that collects and aggregates group preferences using structured LLM workflows.",
      "Features an agent-based architecture where modular AI components coordinate reasoning, constraint handling, and itinerary generation.",
      "Demonstrates multi-input coordination to produce high-fidelity, structured travel plans for real-world tasks."
    ],
    githubUrl: "https://github.com/Arsh624/TripSync",
  },
  {
    id: 3,
    title: "Regime-Switching RL Model for Portfolio Optimization",
    url: undefined,
    date: "2026",
    role: "Reinforcement Learning / ML Systems",
    description:
      "Multi-agent reinforcement learning framework adapting to different market regimes.",
    highlights: [
      "Regime-aware reinforcement learning framework utilizing specialized PPO agents for bull, bear, and volatile market conditions.",
      "Dynamic policy switching based on statistical regime detection using volatility clustering and rolling features.",
      "Improved risk-adjusted performance by leveraging multi-agent architectures for specialized strategy execution."
    ],
    githubUrl: "https://github.com/Arsh624/Regime-switching-RL-model-for-Portfolio-Optimization",
  },
  {
    id: 4,
    title: "LLM4Jobs – JobPostTracker Intelligence Pipeline",
    url: undefined,
    date: "2026",
    role: "AI Infrastructure / Backend Systems",
    description:
      "Reliability-first job intelligence pipeline that tracks company career pages and extracts structured job data.",
    highlights: [
      "Production-oriented pipeline monitoring career pages and extracting structured metadata using Node.js, Puppeteer, and Python-based LLM extraction.",
      "Robust architecture featuring snapshot diffing, job queues, inference workers, and automated email digest generation.",
      "Engineered for high reliability with Chromium process management, concurrency controls, and watchdog timeouts."
    ],
    githubUrl: "https://github.com/Arsh624/llm4jobs",
  },
  {
    id: 2,
    title: "RepoGraph V2 – Distributed Debugging Platform",
    url: undefined,
    date: "2025",
    role: "Distributed Systems / Backend",
    description:
      "Graph-based distributed system to localize flaky tests across large repositories.",
    highlights: [
      "Distributed debugging platform using graph closures to analyze dependency graphs and shared state across 100K+ LOC repositories.",
      "Coordinated patching and verification workflows supported by versioned REST APIs for large-scale analysis.",
      "Optimized graph-scoped retrieval to significantly reduce inter-service data movement and improve concurrent pipeline throughput."
    ],
    githubUrl: "https://github.com/Arsh624/Repograph-V2",
  },
  {
    id: 5,
    title: "Real-Time MLOps Pipeline for Anomaly Detection",
    url: "https://serverless-adp-dashboard-747568909341.us-central1.run.app/",
    date: "2025",
    role: "ML Systems",
    description:
      "Production-ready anomaly detection pipeline on GCP using Autoencoders, Pub/Sub, and Cloud Run.",
    highlights: [
      "Serverless MLOps pipeline on Google Cloud utilizing Autoencoder models for real-time anomaly detection in streaming data.",
      "Seamless integration of Pub/Sub for ingestion, Firestore for state management, and Streamlit for live monitoring dashboards.",
      "Scalable deployment via Cloud Run supporting dynamic threshold adjustments and performance visualization."
    ],
    githubUrl: "https://github.com/Arsh624/TS-anomaly-detection-pipeline",
  },
  {
    id: 6,
    title: "Archit Shukla – Personal Portfolio",
    url: "https://architshukla-portfolio.vercel.app/",
    date: "2025",
    role: "Full Stack / Frontend",
    description:
      "Interactive portfolio built with React, Vite, Tailwind CSS, and Three.js.",
    highlights: [
      "Custom personal portfolio showcasing projects and research using React, Vite, and Tailwind CSS for rapid, clean rendering.",
      "Prioritizes component modularity and responsive design while integrating smooth animations and interactive UI elements.",
      "Engineered with a focus on maintainable code structure and optimized frontend performance."
    ],
    githubUrl: "https://github.com/Arsh624/architshukla-portfolio",
  },
  {
    id: 7,
    title: "LoanSphere – Real-Time Loan Prediction Platform",
    url: "https://loansphere-ruby.vercel.app/",
    date: "2025",
    role: "Software Development / ML",
    description:
      "Loan approval prediction platform trained on 17M+ financial records.",
    highlights: [
      "Predictive platform trained on 17M+ FFIEC records with optimized thresholding to handle severe class imbalance.",
      "Backend powered by a containerized Flask API and Docker for highly available real-time predictions.",
      "Responsive web interface enabling intuitive user interaction with complex financial modeling results."
    ],
    githubUrl: "https://github.com/Arsh624/loan-prediction-app",
  },
  {
    id: 8,
    title: "Media Control Using Gesture Recognition",
    url: undefined,
    date: "2024",
    role: "Computer Vision / ML",
    description:
      "Gesture-based media controller using real-time computer vision.",
    highlights: [
      "Interactive media interface leveraging OpenCV and Mediapipe to control playback via real-time hand gesture recognition.",
      "Supports core playback controls (play, pause, next, previous) with over 95% recognition accuracy.",
      "Eliminates the need for physical input devices through efficient real-time CV processing and PyAutoGUI integration."
    ],
    githubUrl: "https://github.com/Arsh624/Media-control-using-gesture-recognition",
  },
  {
    id: 9,
    title: "Autism Sense – Early Detection via Facial Cues",
    url: undefined,
    date: "2023",
    role: "Research / Computer Vision",
    description:
      "Computer vision model identifying autism-related facial cues with 90% accuracy.",
    highlights: [
      "Research project utilizing EfficientNet-B3 CNNs to identify subtle facial patterns associated with autism spectrum disorder.",
      "Achieved 90% classification accuracy on curated datasets, demonstrating the potential for non-invasive screening tools.",
      "Designed to support early pediatric diagnosis through low-cost, accessible computer vision technology."
    ],
    githubUrl: "https://github.com/Arsh624/AutismSense-Early-Detection-and-Intervention",
  },
  {
    id: 10,
    title: "Building a Neural Network from Scratch",
    url: undefined,
    date: "2023",
    role: "Machine Learning",
    description:
      "Custom neural network implemented from scratch for skin cancer classification.",
    highlights: [
      "Developed a complete neural network from scratch using core Python numerical libraries without high-level ML frameworks.",
      "Implements forward propagation, backpropagation, and custom gradient updates to classify skin cancer cells with 92% accuracy.",
      "Deep dive into fundamental ML mechanics to improve interpretability and transparency of neural operations."
    ],
    githubUrl: "https://github.com/Arsh624/Building-neural-network-for-skin-cancer-classification",
  }
];

interface ProjectsListProps {
  onSectionChange: (section: string) => void;
}

const ProjectsList = ({ onSectionChange }: ProjectsListProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="fade-in p-6" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
        <div className="flex items-center mb-8">
          <button
            onClick={() => onSectionChange('home')}
            className="mr-4 p-2 text-white hover:text-gray-200 transition-colors duration-300"
            aria-label="Back to home"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h2 className="text-3xl font-light text-white stagger-in">Projects</h2>
        </div>
        
        <div className="space-y-12">{projects.map((project, index) => (
          <div 
            key={project.id} 
            className="group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <button
              onClick={() => setSelectedProject(project)}
              className="project-link block text-left w-full"
            >
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200 transition-colors">
                {project.title}
              </h3>
            </button>
            
            <div className="mb-3">
              <p className="text-sm text-white font-mono">
                {project.date} / {project.role}
              </p>
            </div>
            
            {project.description && (
              <p className="text-sm text-white leading-relaxed max-w-2xl">
                {project.description}
              </p>
            )}
          </div>
        ))}
        </div>
      </div>

      {/* Project Detail Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-surface border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto project-popup">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-medium text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-white font-mono">
                    {selectedProject.date} / {selectedProject.role}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Highlights (Bullet Points) */}
              <div className="mb-8">
                <ul className="list-disc pl-5 space-y-3">
                  {selectedProject.highlights.map((highlight, i) => (
                    <li key={i} className="text-base text-white leading-relaxed text-justify">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    View Demo
                  </a>
                )}
                {selectedProject.githubUrl && selectedProject.githubUrl.length > 0 && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsList;
