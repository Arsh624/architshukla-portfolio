interface ContactSectionProps {
  onSectionChange: (section: string) => void;
}

const ContactSection = ({ onSectionChange }: ContactSectionProps) => {
  return (
    <div className="fade-in p-6" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <div className="flex items-center mb-10">
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

      <div className="flex flex-col lg:flex-row gap-16 max-w-5xl">

        {/* Left: contact details */}
        <div className="flex-1 space-y-10">
          <section>
            <h2 className="text-xl font-light text-white mb-8 font-display">Let's Connect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-medium text-white/50 mb-2 uppercase tracking-widest">Email</h3>
                <div className="space-y-2">
                  <a href="mailto:architshukla546@gmail.com" className="block text-base text-white hover:text-gray-300 transition-colors">
                    architshukla546@gmail.com
                  </a>
                  <a href="mailto:Archit.Shukla@colorado.edu" className="block text-base text-white hover:text-gray-300 transition-colors">
                    Archit.Shukla@colorado.edu
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-medium text-white/50 mb-2 uppercase tracking-widest">Social</h3>
                <div className="space-y-2">
                  <a href="https://www.linkedin.com/in/archit-shukla06/" target="_blank" rel="noopener noreferrer" className="block text-base text-white hover:text-gray-300 transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com/Arsh624" target="_blank" rel="noopener noreferrer" className="block text-base text-white hover:text-gray-300 transition-colors">
                    GitHub
                  </a>
                  <a href="https://www.kaggle.com/archit258" target="_blank" rel="noopener noreferrer" className="block text-base text-white hover:text-gray-300 transition-colors">
                    Kaggle
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-widest">Availability</h3>
            <p className="text-base text-white leading-relaxed">
              Actively seeking full-time roles starting May 2026 in Software Engineering, ML Engineering, AI Infrastructure, and Distributed Systems.
            </p>
          </section>

          <section>
            <h3 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-widest">Work Authorization</h3>
            <p className="text-base text-white leading-relaxed">
              F-1 visa, fully authorized to work in the US for up to 3 years via OPT/STEM OPT. No sponsorship required during that period.
            </p>
          </section>

          <section>
            <h3 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-widest">Location</h3>
            <p className="text-base text-white leading-relaxed">
              San Francisco Bay Area, CA<br />
              Open to relocation for full-time roles across the US and remote work worldwide.
            </p>
          </section>
        </div>

        {/* Right: photo + about me */}
        <div className="flex-shrink-0 lg:w-72 flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg border border-white/10">
            <img
              src="/archit.jpeg"
              alt="Archit Shukla"
              className="w-full object-cover"
              style={{ maxHeight: '340px', objectPosition: 'top' }}
            />
          </div>

          <div>
            <h3 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-widest">About Me</h3>
            <p className="text-sm text-white/80 leading-relaxed text-justify">
              CS grad from CU Boulder, fully authorized to work in the US. I build at the intersection of backend engineering, distributed systems, and practical AI. Most of my recent work is around multi-agent pipelines, RAG systems, and backend platforms that hold up once they leave prototype stage.
            </p>
            <p className="text-sm text-white/80 leading-relaxed text-justify mt-3">
              I genuinely enjoy customer-facing work and roles where I get to collaborate with new teams and people regularly. Whether it is translating technical ideas to non-technical stakeholders or figuring out what users actually need, that side of the job energizes me just as much as the code.
            </p>
            <p className="text-sm text-white/80 leading-relaxed text-justify mt-3">
              I tend to prefer depth over breadth. I would rather understand one system really well than skim across ten. Outside of projects, I TA lab sections for undergrads, which keeps me sharp on communication and real-time problem solving under pressure.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
