interface InfoSectionProps {
  onSectionChange: (section: string) => void;
}

const InfoSection = ({ onSectionChange }: InfoSectionProps) => {
  return (
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
        <h2 className="text-3xl font-light text-white stagger-in">About Me</h2>
      </div>
      
      <div className="space-y-12 max-w-4xl">
        {/* Bio Section with Photo */}
        <section className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-80 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
            <img
                src="/archit.jpeg"
                alt="Archit Shukla"
                className="w-full h-full object-cover"
              />
              
            </div>
          </div>
          
          {/* Bio Text */}
          <div className="flex-1">
            <div className="prose prose-sm max-w-none">
<p className="text-base text-white leading-relaxed mb-6 text-justify">
  I’m a Computer Science graduate student at the University of Colorado Boulder graduating in May 2026 and fully authorised to work in the US, who enjoys building systems that actually work in the real world. Most of my interests sit at the intersection of backend engineering, distributed systems, and practical AI applications.
</p>

<p className="text-base text-white leading-relaxed mb-6 text-justify">
  Lately I’ve been building things like multi-agent systems, RAG pipelines, and backend platforms that integrate LLMs into real workflows. I enjoy working across the stack - designing APIs, building data pipelines, and making systems reliable once they move beyond prototypes and into production. I also actively use modern AI development tools to speed up repetitive work, while still focusing on strong coding fundamentals, reviewing code carefully, and improving systems through debugging and iteration.
</p>

<p className="text-base text-white leading-relaxed text-justify">
  Outside of my projects, I teach three lab sections as a TA for about 55 undergraduate biology students. Working with students from very different backgrounds has made me more adaptable and a much better communicator. I enjoy collaborating with teams, solving messy technical problems, and continuously learning new technologies as systems and tools evolve.
</p>

            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-light text-white mb-6 font-display">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-medium text-white">
                Masters of Science, Computer Science
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                University of Colorado Boulder / 2024 - 2026 / GPA: 3.91/4.0
              </p>
              <div className="text-sm text-white mb-4">
                <span className="font-medium">Relevant Coursework:</span> Design and Analysis of Algorithms, Operating systems, Big Data Architecture, Generative AI for Software Development, Machine Learning, Computer Vision, User-Centered Design and Development, NLP
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium text-white">
                Bachelor of Technology, Computer Science & Engineering
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                SRM Institute of Science & Technology / 2020 - 2024 / GPA: 3.81/4.0
              </p>
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section>
          <h2 className="text-xl font-light text-white mb-6 font-display">
            Experience
          </h2>
          <div className="space-y-8">

            <div>
              <h3 className="text-base font-medium text-white">
                Teaching Assistant – Lab Systems
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                University of Colorado Boulder • 2026–Present
              </p>
              <p className="text-sm text-white leading-relaxed text-justify">
                Managed the end-to-end execution of 3 laboratory sections serving 50+ students, troubleshooting live technical issues and ensuring smooth operation of lab workflows. Applied data analysis in R to identify recurring failure patterns and improve lab processes. Regularly communicated complex scientific and technical concepts to students from diverse backgrounds, strengthening clarity, adaptability, and real-time problem-solving skills.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-white">
                Graduate Researcher – Distributed ML Systems
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                BioFrontiers Institute, University of Colorado Boulder • 2025–2026
              </p>
              <p className="text-sm text-white leading-relaxed text-justify">
                Worked on computational systems supporting biological research in the Peleg Lab, building distributed ML pipelines for large-scale image analysis. Increased model evaluation throughput by 35% by engineering parallel training and inference pipelines in Python/PyTorch on GPU-backed GCP environments. Accelerated experimentation cycles by 40% by designing containerized CUDA-enabled training environments with Docker and CI/CD, enabling reproducible large-scale experiments across heterogeneous compute systems. Contributed to debugging and performance optimization of ML workloads, improving reliability of long-running GPU jobs.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-white">
                Software Engineering Intern – Backend & Data Systems
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                CodeClause • Bangalore, India • 2024
              </p>
              <p className="text-sm text-white leading-relaxed text-justify">
                Built and optimized backend services supporting data-driven applications and analytics pipelines. Increased backend throughput by 20% and reduced production latency by optimizing Flask-based REST APIs and SQL queries in high-traffic environments. Reduced release failures by 25% by automating build, test, and deployment pipelines using Jenkins and GitHub CI/CD, improving release reliability. Improved system observability by implementing structured logging, monitoring, and unit testing, decreasing issue diagnosis time by 35% and stabilizing downstream services.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-white">
                Software Engineer Intern – Data Infrastructure
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                Adflix Media • Pune, India • 2023
              </p>
              <p className="text-sm text-white leading-relaxed text-justify">
                Worked on data infrastructure supporting analytics workflows processing 5M+ records daily. Scaled SQL-driven ETL pipelines using Dockerized services, ensuring consistent batch performance and low operational overhead. Improved system visibility by building Grafana monitoring dashboards tracking pipeline latency and throughput, reducing issue detection time by 30%. Decreased production recovery time by 25% through structured logging and cloud monitoring improvements across distributed data pipelines.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-white">
                Programming Instructor – Data Science & AI
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                EdBhoomi • Bangalore, India • 2023
              </p>
              <p className="text-sm text-white leading-relaxed text-justify">
                Delivered a 60+ hour training program mentoring students in data science and machine learning using Python, NumPy, Pandas, SQL, and visualization tools. Guided students through projects covering statistical modeling, NLP basics, and neural networks, helping them build practical intuition around data analysis and model development. Focused on simplifying complex concepts and improving student outcomes through hands-on project guidance.
              </p>
            </div>

          </div>
        </section>

        <section>
          <h2 className="text-xl font-light text-white mb-6 font-display">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                Programming Languages
              </h3>
              <p className="text-sm text-white leading-relaxed">
                Python, C/C++, Java, Go, JavaScript (ES6+), TypeScript, SQL, Bash, R
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                AI / Machine Learning Systems
              </h3>
              <p className="text-sm text-white leading-relaxed">
                PyTorch, TensorFlow, Hugging Face Transformers, RAG Pipelines, Graph-Augmented Retrieval, Multi-Agent Architectures, LangChain, Dify, vLLM, Ollama, Amazon Bedrock, Embedding Models, Vector Search (Qdrant), Fine-Tuning (LoRA / QLoRA), Model Evaluation, Inference Pipelines
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                Distributed Systems & Backend
              </h3>
              <p className="text-sm text-white leading-relaxed">
                REST APIs, Microservices, Async/Event-Driven Systems, Flask, FastAPI, Spring Boot, Node.js, Streaming Pipelines, Real-Time Inference Systems, Static Analysis Systems, Graph Processing Workflows
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                Data & Databases
              </h3>
              <p className="text-sm text-white leading-relaxed">
                PostgreSQL, MongoDB, DynamoDB, ETL Pipelines, Data Processing Pipelines, Vector Databases (Qdrant), Query Optimization
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                Cloud, Infrastructure & DevOps
              </h3>
              <p className="text-sm text-white leading-relaxed">
                Docker, CI/CD, Git, Linux, AWS (EC2, S3, IAM, Lambda, Bedrock), GCP (Compute Engine, Cloud Run, Vertex AI), GPU Workloads, CUDA-accelerated training environments
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                Frontend & Application Development
              </h3>
              <p className="text-sm text-white leading-relaxed">
                React.js, Next.js, Node.js, Express, API Integration, Full-Stack Prototyping
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                AI Development Tooling
              </h3>
              <p className="text-sm text-white leading-relaxed">
                GitHub Copilot, Codex, Antigravity, Cursor, Claude Code, AI-assisted software development workflows
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default InfoSection;