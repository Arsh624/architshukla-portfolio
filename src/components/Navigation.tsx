import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'info', label: 'About Me' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' }
  ];

  return (
    <div className="h-full px-8 py-12 flex flex-col">
      {/* Header */}
      <div className="mb-16">
        <h1 className="font-display text-2xl font-light text-foreground mb-2">
          Archit Shukla
        </h1>
        <p className="text-sm text-muted-foreground">
          Designer & Developer
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-6">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionChange(section.id)}
                className={`nav-link text-sm ${
                  activeSection === section.id 
                    ? 'active text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="mt-auto">
        <p className="text-xs text-muted-foreground font-mono">
          © 2024 Archit Shukla
        </p>
      </div>
    </div>
  );
};

export default Navigation;