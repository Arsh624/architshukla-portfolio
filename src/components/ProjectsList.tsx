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
  previewImage?: string;
}

const projects: Project[] = [
  {
    id: 11,
    title: "Kith – Multi-Agent AI Platform",
    previewImage: "/projects/kith.webp",
    url: "https://kith-1a3z.onrender.com/",
    date: "2026",
    role: "AI Engineering / Full Stack",
    description: "Multi-agent relationship intelligence platform that extracts, enriches, and organizes contacts into a live knowledge graph, served through a provider-agnostic inference gateway.",
    highlights: [
      "Built a multimodal pipeline extracting and organizing 1,000+ entities from emails, documents, business cards, and meeting notes into a live Neo4j knowledge graph, with LangGraph agents for contact extraction, relationship mapping, and follow-up generation.",
      "Delivered a provider-agnostic inference gateway in async FastAPI fronting hosted APIs and a local vLLM endpoint, with a Redis token-bucket rate limiter and circuit breaker that completed 99.2% of agent runs during simulated provider outages.",
      "Benchmarked speculative decoding in vLLM, pairing a small draft model with an 8B target on the same prompts, lifting decode throughput 2.2x over standard decoding.",
      "Raised extraction F1 from 0.74 to 0.91 by adding Langfuse tracing and an LLM-judge eval harness to every LangGraph node, catching retrieval regressions before deploy.",
      "Shipped a React and TypeScript workspace behind JWT auth, with tool calling and RAG over Qdrant, backed by PostgreSQL and deployed with Docker on AWS.",
    ],
    githubUrl: "https://github.com/Arsh624/Kith-Multi-Agent-Relationship-Intelligence-Platform",
  },
  {
    id: 12,
    title: "Kube-Op-Lite – GPU Benchmark & Workload Operator",
    date: "2026",
    role: "Cloud-Native Infrastructure / GPU Systems",
    description: "Kubernetes operator in Go that keeps GPU workloads at desired state and benchmarks them with baseline regression analysis.",
    highlights: [
      "Designed a Kubernetes operator in Go with Kubebuilder, defining a GpuWorkload CRD and an idempotent reconciliation loop that detects drift and restores failed GPU pods to desired state in under 30 seconds with no manual action.",
      "Enforced rollout safety with validating and defaulting admission webhooks plus a Helm chart, rejecting replicas under 1, empty images, and GPU counts over 8, and cut cluster bring-up from 45 minutes to 8.",
      "Added a BenchmarkRun CRD with GPU telemetry and baseline analysis, catching 17 of 20 injected regressions with no false alarms on clean runs.",
      "Traced thermal throttling on a laptop GPU across 42 runs with a telemetry sidecar sampling clocks, temperature, and power every second.",
      "Exported reconcile latency and workqueue depth as Prometheus metrics with alert rules on stuck loops.",
    ],
    githubUrl: "https://github.com/Arsh624/kube-op-lite",
  },
  {
    id: 1,
    title: "TripSync – AI Multi-Agent Travel Planning System",
    previewImage: "/projects/Tripsync.png",
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
      "Multi-agent reinforcement learning framework that routes between specialist PPO agents by market regime.",
    highlights: [
      "Built three specialist PPO agents for calm, shaky, and crisis markets, each trained with a regime-specific reward (Sortino, Differential Sharpe, risk parity), routed each day by a 3-state HMM regime detector.",
      "Raised Sharpe from 0.82 to 1.41 (a 72% improvement) and cut max drawdown from 29.6% to 16.2% on 9 sector ETFs over a 2018–2022 test window that includes the COVID crash, beating mean-variance optimization (Sharpe 0.14) and equal weight (0.74).",
      "Owned the full RL side: Gymnasium environment, reproduction of a published single-agent baseline (Sharpe 0.82 vs 0.83), reward design, and the router. Built with a teammate who built the HMM regime detector. Written up as a paper.",
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
    title: "RepoGraph V2 – Flaky Test Localization & Repair",
    url: undefined,
    date: "2025",
    role: "Distributed Systems / LLM Agents",
    description:
      "Graph-based distributed system that localizes flaky tests across large repositories and repairs them with LLM agents.",
    highlights: [
      "Modeled a distributed Python and C++ backend on Linux that builds call and dependency graphs over 100K+ LOC repositories, localizing order-dependent flaky tests caused by shared state under multiprocess load.",
      "Slashed inter-service data transfer 70–85% by scoping retrieval to each call graph and switching to a tighter serialization format.",
      "Built an LLM repair loop (detect, localize, patch, verify) that accepts a fix only if the test stays stable across many randomized orders; paired with iPFlakies it raised order-dependent flaky test coverage from 33% to 56.6% on a 537-test corpus, fixing 129 tests rule-based repair could not touch.",
      "Graph-guided localization lifted LLM repairs from 21.4% to 33.5% and shrank prompts 30–40%, with zero regressions on GPT-5. Written up as a paper with a teammate.",
    ],
    githubUrl: "https://github.com/Arsh624/Repograph-V2",
  },
  {
    id: 5,
    title: "Real-Time MLOps Pipeline for Anomaly Detection",
    previewImage: "/projects/mlops-anomaly.png",
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
    previewImage: "/projects/Loansphere.png",
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
    previewImage: "/projects/gesture.png",
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
  embedded?: boolean;
}

const ProjectsList = ({ onSectionChange, embedded = false }: ProjectsListProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="fade-in p-6" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
        {!embedded && (
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
        )}
        
        <div className="grid grid-cols-1 gap-4">{projects.map((project, index) => (
          <div
            key={project.id}
            className="group border border-white/10 rounded-lg overflow-hidden hover:border-white/25 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s`, backgroundColor: '#222222' }}
          >
            {project.previewImage && (
              <button
                onClick={() => setSelectedProject(project)}
                className="block w-full overflow-hidden"
              >
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  className="w-full h-44 object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </button>
            )}

            <div className="p-5">
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
                <p className="text-sm text-white/70 leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>
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
