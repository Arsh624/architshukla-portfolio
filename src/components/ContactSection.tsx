interface ContactSectionProps {
  onSectionChange: (section: string) => void;
}

const ContactSection = ({ onSectionChange }: ContactSectionProps) => {
  return (
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
        <h2 className="text-3xl font-light text-foreground stagger-in">Get In Touch</h2>
      </div>
      
      <div className="space-y-12 max-w-2xl">{/* Contact Info */}
      <section>
        <h2 className="text-xl font-light text-foreground mb-8 font-display">
          Let's Connect
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2 uppercase tracking-wider">
              Email
            </h3>
            <a 
              href="mailto:arsh9532@colorado.edu" 
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              arsh9532@colorado.edu
            </a>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2 uppercase tracking-wider">
              Social
            </h3>
            <div className="space-y-2">
              {/* <a 
                href="https://twitter.com/architshukla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a> */}
              <a 
                href="https://linkedin.com/in/archit-shukla06" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Arsh624" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.kaggle.com/archit258" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                Kaggle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section>
        <h3 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
          Availability
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          Actively seeking full-time Software Engineer (SWE) and Software Development Engineer (SDE) opportunities for a May or June 2026 startActively seeking full-time Software Engineer (SWE), Software Development Engineer (SDE), Machine Learning Engineer (MLE), and Data Scientist opportunities for a May or June 2026 start.
          
        </p>
      </section>

      {/* Location */}
      <section>
        <h3 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
          Location
        </h3>
        <p className="text-base text-muted-foreground">
          Boulder, Colorado<br />
          Available for relocation for Full-time work across US and also remote work worldwide.
        </p>
      </section>
      </div>
    </div>
  );
};

export default ContactSection;