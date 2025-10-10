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
<p className="text-base text-white leading-relaxed mb-6">
  I'm a Machine Learning Engineer and Software Developer with a Master's in Computer Science 
  from the University of Colorado Boulder. I focus on building AI-powered applications and 
  production-ready MLOps pipelines that solve real-world problems.
</p>

<p className="text-base text-white leading-relaxed mb-6">
  My work spans sentiment analysis, computer vision, gesture recognition, real-time anomaly 
  detection, and loan approval systems. I enjoy working across the ML stack - from training 
  models to deploying them in the cloud.
</p>

<p className="text-base text-white leading-relaxed">
  Outside of that, I spend time exploring new ideas in AI, mentoring aspiring data scientists, 
  and building tools that make technology more intuitive and accessible.
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
                University of Colorado Boulder / 2024 - 2026 / GPA: 4.0/4.0
              </p>
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
    Technical Skills
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
        Programming Languages
      </h3>
      <ul className="space-y-2 text-sm text-white">
        <li>Python, JavaScript (ES6+), TypeScript, SQL</li>
        <li>Java, C++, Bash, R</li>
        <li>Scala, MATLAB</li>
      </ul>
    </div>
    <div>
      <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
        ML/AI & Data Science
      </h3>
      <ul className="space-y-2 text-sm text-white">
        <li>PyTorch, TensorFlow, HuggingFace Transformers</li>
        <li>Scikit-learn, XGBoost, LightGBM, OpenCV</li>
        <li>LangChain, NLTK, spaCy, Pandas, NumPy</li>
      </ul>
    </div>
    <div>
      <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
        Cloud & DevOps
      </h3>
      <ul className="space-y-2 text-sm text-white">
        <li>Google Cloud Platform (Vertex AI, BigQuery)</li>
        <li>AWS (EC2, S3, Lambda), Azure</li>
        <li>Docker, Kubernetes, GitHub Actions, Airflow</li>
      </ul>
    </div>
    <div>
      <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
        Data & Web Technologies
      </h3>
      <ul className="space-y-2 text-sm text-white">
        <li>Kafka, Spark, Hadoop, Snowflake</li>
        <li>MongoDB, PostgreSQL, Firebase, Supabase</li>
        <li>React.js, Node.js, Express, REST APIs</li>
      </ul>
    </div>
  </div>
</section>

<section>
  <h2 className="text-xl font-light text-white mb-6 font-display">
    Experience
  </h2>
  <div className="space-y-6">

    <div>
      <h3 className="text-base font-medium text-white">
        Software Engineering Intern – AI/ML Focus
      </h3>
      <p className="text-sm text-white font-mono mb-2">
        CodeClause / Bangalore, India / 2024
      </p>
      <p className="text-sm text-white leading-relaxed">
        Led development of sentiment analysis, handwritten digit recognition, autonomous drone navigation, and gesture recognition systems, achieving up to 92% improvement in model accuracy. Leveraged tools like TextBlob, TensorFlow, PyTorch, and OpenCV to optimize performance and usability. Contributed to reducing manual errors, increasing drone safety, and improving interface intuitiveness across multiple prototypes.
      </p>
    </div>

    <div>
      <h3 className="text-base font-medium text-white">
        Programming Instructor – Data Science/AI Track
      </h3>
      <p className="text-sm text-white font-mono mb-2">
        EdBhoomi / Bangalore, India / 2023
      </p>
      <p className="text-sm text-white leading-relaxed">
        Delivered a 60-hour training program over two months, mentoring students in core data science concepts with Python, NumPy, Pandas, Matplotlib, Seaborn, SQL, and machine learning. Covered advanced topics including CNNs, NLP, and statistical foundations. Achieved a 98% satisfaction rate by enhancing student understanding and project performance.
      </p>
    </div>

    <div>
      <h3 className="text-base font-medium text-white">
        Data Engineering Intern
      </h3>
      <p className="text-sm text-white font-mono mb-2">
        Adflix Media / Pune, India / 2023
      </p>
      <p className="text-sm text-white leading-relaxed">
        Engineered a dynamic HR analytics dashboard using Python and Pandas, improving operational efficiency by 85%. Enhanced NLP-based classification performance by 70% through integration of Deep Learning techniques and experimentation with Large Language Models (LLMs). Helped expand project scope while boosting reliability and interpretability.
      </p>
    </div>

  </div>
</section>

      </div>
    </div>
  );
};

export default InfoSection;