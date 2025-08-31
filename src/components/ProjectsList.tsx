import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  url?: string;
  date: string;
  role: string;
  description?: string;
  fullDescription: string;
  githubUrl?: string; // <-- GitHub link added
}

const projects: Project[] = [
  
  {
    id: 1,
    title: "Real-Time MLOps Pipeline for Anomaly Detection",
    url: "https://serverless-adp-dashboard-747568909341.us-central1.run.app/",
    date: "2025",
    role: "ML",
    description:
      "Built a production-ready anomaly detection pipeline on GCP using Autoencoders, Pub/Sub, Firestore, and Cloud Run.",
    fullDescription:
      "Designed and deployed a real-time, serverless MLOps pipeline on Google Cloud to monitor data anomalies at scale. Implemented an Autoencoder model trained on normal patterns to flag outliers, with seamless integration across Pub/Sub for streaming ingestion, Firestore for real-time storage, and Streamlit for visualization. Users can dynamically adjust thresholds on a live dashboard deployed via Cloud Run.",
    githubUrl: "https://github.com/Arsh624/TS-anomaly-detection-pipeline", 
  },
  {
  id: 2,
  title: "Archit Shukla – Personal Portfolio",
  url: "https://architshukla-portfolio.vercel.app/", // use your deployed URL once it's live
  date: "2025",
  role: "Full Stack / Frontend",
  description:
    "Designed and developed my interactive portfolio using React, Vite, Tailwind CSS, and Three.js.",
  fullDescription:
    "This is a fully custom-built, responsive portfolio that highlights my work, background, and technical skills. It’s powered by React with TypeScript, styled using Tailwind CSS, and includes advanced UI/UX with animations, Three.js generative visuals, and smooth page transitions. Hosted on Vercel with a GitHub-based CI/CD pipeline.",
  githubUrl: "https://github.com/Arsh624/architshukla-portfolio" // replace with your actual repo
  },
  {
    id: 3,
    title: "Loan Sphere – Real-Time Loan Prediction Platform",
    url: "https://loansphere-ruby.vercel.app/",
    date: "2025",
    role: "Software Development/ML",
    description:
      "Built and deployed a loan approval prediction platform trained on 17M+ records, optimized for recall and fairness.",
    fullDescription:
      "Developed a real-time loan approval system using 17 million+ FFIEC records, addressing severe class imbalance with targeted threshold tuning and AUC-maximization. The backend Flask model, containerized with Docker and deployed on Cloud Run, supports high-accuracy predictions while abstracting complexity behind a clean UI. The tool empowers users to interactively test approval odds in a responsive, production-grade financial interface.",
    githubUrl: "https://github.com/Arsh624/loan-prediction-app", 
  },
  {
    id: 4,
    title: "Media Control Using Gesture Recognition",
    url: undefined,
    date: "2024",
    role: "Software Development/ ML",
    description:
      "Built a gesture-based media controller with real-time computer vision, achieving 95% accuracy.",
    fullDescription:
      "Created an interactive system to control music playback using only hand gestures, recognized via webcam in real time. Combined OpenCV, Mediapipe, and PyAutoGUI in Python to support intuitive controls like play, pause, next, and previous. Achieved over 95% recognition accuracy and significantly improved user experience by removing the need for physical input devices.",
    githubUrl: "https://github.com/Arsh624/Media-control-using-gesture-recognition", 
  },
  {
    id: 5,
    title: "Autism Sense – Early Detection via Facial Cues",
    url: undefined,
    date: "2023",
    role: "Research",
    description:
      "Developed a model to identify autism-related facial cues using computer vision, achieving 90% accuracy.",
    fullDescription:
      "A research-driven project aiming to detect early indicators of autism spectrum disorder in children using facial imagery. Trained an EfficientNet-B3 convolutional neural network on a curated dataset to recognize subtle facial patterns associated with ASD, reaching 90% classification accuracy. The tool is designed as a low-cost, non-invasive, early screening system to support pediatric evaluations.",
    githubUrl: "https://github.com/Arsh624/AutismSense-Early-Detection-and-Intervention", 
  },
  {
    id: 6,
    title: "Neuron Building and Implementation",
    url: undefined,
    date: "2023",
    role: "ML",
    description:
      "Built a custom neural network from scratch to classify skin cancer types with 92% accuracy—no ML libraries used.",
    fullDescription:
      "Designed and implemented an Artificial Neural Network from the ground up to classify benign and malignant skin cancer cells. Achieved 92% classification accuracy using only core Python libraries for numerical operations and visualization, avoiding frameworks like Scikit-learn, PyTorch, or TensorFlow. This project emphasized transparency in neural operations and improved interpretability of model behavior by over 80%.",
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
      <div className="fade-in p-6">
        <div className="flex items-center mb-8">
          <button
            onClick={() => onSectionChange('home')}
            className="mr-4 p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Back to home"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h2 className="text-3xl font-light text-foreground stagger-in">Projects</h2>
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
              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </button>
            
            <div className="mb-3">
              <p className="text-sm text-muted-foreground font-mono">
                {project.date} / {project.role}
              </p>
            </div>
            
            {project.description && (
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
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
                  <h2 className="text-2xl font-medium text-foreground mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-mono">
                    {selectedProject.date} / {selectedProject.role}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <p className="text-base text-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
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
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && selectedProject.githubUrl.length > 0 && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm font-medium hover:text-foreground transition-colors"
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
