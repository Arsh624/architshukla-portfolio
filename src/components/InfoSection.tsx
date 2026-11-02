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
  I’m a Computer Science graduate (M.S., University of Colorado Boulder, May 2026), fully authorized to work in the US, who enjoys building systems that actually work in the real world. Most of my interests sit at the intersection of LLM inference, GPU and distributed systems, and backend engineering.
</p>

<p className="text-base text-white leading-relaxed mb-6 text-justify">
  Lately I’ve been building multi-agent systems, a Kubernetes operator for GPU benchmarking, and backend platforms that integrate LLMs into real workflows, and contributing to open source projects like vLLM, DSPy, prime-rl, and LangChain Deep Agents. I enjoy working across the stack - designing APIs, building data pipelines, and making systems reliable once they move beyond prototypes and into production. I also actively use modern AI development tools to speed up repetitive work, while still focusing on strong coding fundamentals, reviewing code carefully, and improving systems through debugging and iteration.
</p>

<p className="text-base text-white leading-relaxed text-justify">
  Outside of my projects, I TAed three lab sections for about 55 undergraduate biology students at CU Boulder. Working with students from very different backgrounds has made me more adaptable and a much better communicator. I enjoy collaborating with teams, solving messy technical problems, and continuously learning new technologies as systems and tools evolve.
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
                Software Development Intern – Backend Platform
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                EcoServants • Remote • Aug 2026 – Present
              </p>
              <p className="text-sm text-white leading-relaxed text-justify">
                Building backend features on an environmental nonprofit's PHP/MySQL platform with coding agents, gating every agent-written patch behind mutation testing that caught 13 of 13 injected faults across 310+ automated checks. Owned proposal autosave with versioned MySQL revisions and HMAC-signed unsubscribe tokens, and validated a classifier that sorts errors into 7 categories, so retryable ones no longer fail permanently.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-white">
                Open Source Contributor – AI & ML Infrastructure
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                vLLM • DSPy • prime-rl • LangChain Deep Agents • 2026 – Present
              </p>
              <p className="text-sm text-white leading-relaxed text-justify">
                Contributing fixes to LLM serving, prompt-programming, and RL-training codebases: a vLLM frontend bugfix for run-batch request validation, a DSPy XMLAdapter fix for reading lists back correctly, a prime-rl trainer fix for RL step loss logging, and a reproducible CRLF line-ending bug report for Deep Agents.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-white">
                Teaching Assistant – Lab Systems
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                University of Colorado Boulder • Jan 2026 – May 2026
              </p>
              <p className="text-sm text-white leading-relaxed text-justify">
                Managed the end-to-end execution of 3 laboratory sections serving 55+ students, troubleshooting live technical issues and ensuring smooth operation of lab workflows. Applied data analysis in R to identify recurring failure patterns and improve lab processes. Regularly communicated complex scientific and technical concepts to students from diverse backgrounds, strengthening clarity, adaptability, and real-time problem-solving skills.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-white">
                Graduate Researcher – Distributed Systems & Infrastructure
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                BioFrontiers Institute, University of Colorado Boulder • 2025–2026
              </p>
              <p className="text-sm text-white leading-relaxed text-justify">
                Architected distributed AI inference pipelines in Python and multithreaded C++ across multinode Linux GPU clusters on GCP, overlapping data staging with compute to lift evaluation throughput 35% and reclaim 400+ GPU hours per release cycle. Containerized vLLM inference on Kubernetes with test-gated rollouts, running 300+ sweeps with zero failures, and isolated concurrency faults in C++ inference workers with GDB and Valgrind, shrinking failure diagnosis time 40%.
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
                Rebuilt REST microservices and their SQL query paths behind connection pooling, index tuning, and async non-blocking I/O, pulling p95 latency from 310ms to 180ms at thousands of requests per day. Hardened API error handling and added Pytest regression suites, cutting bug diagnosis from 40 minutes to 26. Shipped containerized deploys on Jenkins and GitHub Actions, moving release failures from 1 in 6 builds to 1 in 24.
              </p>
            </div>

            <div>
              <h3 className="text-base font-medium text-white">
                Software Engineer Intern – Cloud Infrastructure & Backend
              </h3>
              <p className="text-sm text-white font-mono mb-2">
                Adflix Media • Pune, India • 2023
              </p>
              <p className="text-sm text-white leading-relaxed text-justify">
                Scaled Kafka consumers and Spark ETL jobs across Dockerized AWS services, landing 5M+ records daily into warehouse tables with offset tracking and idempotent writes that ended manual reprocessing. Wired Prometheus and Grafana alerts on throughput and consumer lag, holding p99 lag under 90 seconds at peak, and trimmed recovery time 27% by routing each alert to its owning service with a linked runbook.
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
                Python, C++, Go, C, TypeScript, JavaScript (ES6+), Java, SQL, Bash, R
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                AI / Machine Learning Systems
              </h3>
              <p className="text-sm text-white leading-relaxed">
                PyTorch, TensorFlow, Hugging Face Transformers, vLLM, TensorRT, Speculative Decoding, Continuous Batching, KV Cache, Quantization, Latency Benchmarking, LangGraph, LangChain, DSPy, RAG Pipelines, LLM-as-Judge Evals, Langfuse, Reinforcement Learning (PPO, GRPO), Vector Search (Qdrant), Fine-Tuning (LoRA / QLoRA), Ollama, Amazon Bedrock
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                Distributed Systems & Backend
              </h3>
              <p className="text-sm text-white leading-relaxed">
                REST APIs, Microservices, Async/Event-Driven Systems, FastAPI, Flask, Spring Boot, Node.js, Apache Kafka, Apache Spark, Streaming Pipelines, Multithreaded C++, Graph Processing Workflows
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                Data & Databases
              </h3>
              <p className="text-sm text-white leading-relaxed">
                PostgreSQL, MySQL, Neo4j, Redis, MongoDB, DynamoDB, ETL Pipelines, Vector Databases (Qdrant), Query Optimization
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
                Cloud, Infrastructure & DevOps
              </h3>
              <p className="text-sm text-white leading-relaxed">
                Kubernetes, Kubebuilder, Helm, Docker, Prometheus, Grafana, OpenTelemetry, CI/CD, Linux, AWS (EC2, S3, IAM, Lambda, Bedrock), GCP (Compute Engine, Cloud Run, Vertex AI), CUDA, Nsight Systems, GDB, Valgrind
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