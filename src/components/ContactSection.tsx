interface ContactSectionProps {
  onSectionChange: (section: string) => void;
}

const ContactSection = ({ onSectionChange }: ContactSectionProps) => {
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
        <h2 className="text-3xl font-light text-white stagger-in">Hire Me</h2>
      </div>
      
      <div className="space-y-12 max-w-2xl">{/* Contact Info */}
      <section>
        <h2 className="text-xl font-light text-white mb-8 font-display">
          Let's Connect
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-white mb-2 uppercase tracking-wider">
              Email
            </h3>
            <div className="space-y-2">
              <a 
                href="mailto:Archit.Shukla@colorado.edu" 
                className="block text-base text-white hover:text-gray-200 transition-colors"
              >
                Archit.Shukla@colorado.edu
              </a>
              <a 
                href="mailto:architshukla546@gmail.com" 
                className="block text-base text-white hover:text-gray-200 transition-colors"
              >
                architshukla546@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-white mb-2 uppercase tracking-wider">
              Social
            </h3>
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/in/archit-shukla06/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-base text-white hover:text-gray-200 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Arsh624" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-base text-white hover:text-gray-200 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.kaggle.com/archit258" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-base text-white hover:text-gray-200 transition-colors"
              >
                Kaggle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section>
        <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
          Availability
        </h3>
        <p className="text-base text-white leading-relaxed">
          Actively seeking full-time roles starting May–June 2026 across Software Engineering (SWE/SDE), Machine Learning Engineering, AI Infrastructure/Systems, Cloud & Distributed Systems, and Embedded/Hardware-adjacent software.
        </p>
      </section>

      {/* Work Authorization */}
      <section>
        <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
          Work Authorization
        </h3>
        <p className="text-base text-white leading-relaxed">
          I’m on an F‑1 visa and fully authorized to work in the U.S. for up to 3 years through OPT/STEM OPT without requiring employer sponsorship during that period.
        </p>
      </section>

      {/* Location */}
      <section>
        <h3 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
          Location
        </h3>
        <p className="text-base text-white">
          Boulder, Colorado<br />
          Available for relocation for Full-time work across US and also remote work worldwide.
        </p>
      </section>
      </div>
    </div>
  );
};

export default ContactSection;