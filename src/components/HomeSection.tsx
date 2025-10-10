import LiquidChrome from './LiquidChrome';

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

const HomeSection = ({ onSectionChange }: HomeSectionProps) => {
  const sections = [
    { id: 'projects', label: 'Projects' },
    { id: 'info', label: 'About Me' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' },
  ];

  return (
    <div className="relative h-screen flex flex-col p-6 fade-in overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LiquidChrome 
          baseColor={[0.1, 0.1, 0.1]}
          speed={0.59}
          amplitude={0.29}
          interactive={false}
        />
      </div>
      <div className="absolute inset-6 border border-white pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col p-8">
        <div className="absolute bottom-8 right-8 hidden md:block">
          <div className="text-right text-sm text-white leading-relaxed font-mono max-w-xs stagger-in pr-2 md:pr-4 lg:pr-6">
            <div className="space-y-1">
              <p>Code isn't just logic</p>
              <p>It's expression</p>
              <br />
              <p>It connects thoughts</p>
              <p>builds tools</p>
              <p>solves problems</p>
              <br />
              <p>Each bug a lesson</p>
              <p>each project a story</p>
              <br />
              <p>Don't just code</p>
              <p>Design experiences</p>
              <p>that matter</p>
            </div>
          </div>
        </div>

        <div className="pt-20 pl-2 md:pt-52 md:pl-52">
          <div className="mb-8">
            <h1 className="font-montserrat text-5xl md:text-7xl font-medium text-white mb-2 stagger-in">
              Archit Shukla
            </h1>
            <p className="text-lg text-white stagger-in">
              Machine Learning Engineer & Software Developer
            </p>
          </div>

          <nav className="mb-auto stagger-in">
            <ul className="space-y-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => onSectionChange(section.id)}
                    className="nav-link text-lg text-white hover:text-gray-200 transition-colors duration-300"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </div>
  );
};

export default HomeSection;
