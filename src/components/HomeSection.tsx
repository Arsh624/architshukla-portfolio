import GenerativeBackground from './GenerativeBackground';

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

const HomeSection = ({ onSectionChange }: HomeSectionProps) => {
  const sections = [
    { id: 'projects', label: 'Projects' },
    { id: 'info', label: 'About Me' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' }
  ];

  return (
    <div className="relative h-screen flex flex-col p-6 fade-in">
      <GenerativeBackground />
      <div className="absolute inset-6 border border-foreground pointer-events-none" />
      
      <div className="relative z-10 h-full flex flex-col p-8">
        <div className="mb-8">
          <h1 className="font-display text-5xl font-light text-foreground mb-2 stagger-in">
            Archit Shukla
          </h1>
          <p className="text-lg text-muted-foreground stagger-in">
            Machine Learning Engineer & Software Developer
          </p>
        </div>

        <nav className="mb-auto stagger-in">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionChange(section.id)}
                  className="nav-link text-lg text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

<div className="flex justify-end"> <div className="text-right text-sm text-muted-foreground leading-relaxed font-mono max-w-xs stagger-in"> <div className="space-y-1"> <p>Code</p> <p>can do more</p> <p>than just run.</p> <br /> <p>It solves problems,</p> <p>tells stories,</p> <p>and connects people.</p> <br /> <p>Turning data and ideas</p> <p>into tools that are</p> <p>simple, useful,</p> <p>and meaningful.</p> <br /> <p>Building,</p> <p>testing,</p> <p>and exploring new approaches</p> <p>every day.</p> </div> </div> </div>
      </div>
    </div>
  );
};

export default HomeSection;
