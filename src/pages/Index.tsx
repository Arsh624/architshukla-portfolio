import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import HomeSection from '../components/HomeSection';
import ProjectsList from '../components/ProjectsList';
import InfoSection from '../components/InfoSection';
import ContactSection from '../components/ContactSection';
import ResumeSection from '../components/ResumeSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleLoadingComplete = () => {
    setShowPortfolio(true);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onSectionChange={handleSectionChange} />;
      case 'projects':
        return <ProjectsList onSectionChange={handleSectionChange} />;
      case 'info':
        return <InfoSection onSectionChange={handleSectionChange} />;
      case 'contact':
        return <ContactSection onSectionChange={handleSectionChange} />;
      case 'resume':
        return <ResumeSection onSectionChange={handleSectionChange} />;
      default:
        return <HomeSection onSectionChange={handleSectionChange} />;
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  if (!showPortfolio) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-700 portfolio-enter ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Main Content */}
      <main className={activeSection === 'home' ? '' : 'px-6 py-16'}>
        <div className={activeSection === 'home' ? '' : 'max-w-4xl mx-auto'}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;