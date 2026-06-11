interface ResumeSectionProps {
  onSectionChange: (section: string) => void;
}

const ResumeSection = ({ onSectionChange }: ResumeSectionProps) => {
  const resumeFile = "/Resume_ML.pdf";

  return (
    <div className="fade-in p-6 min-h-screen" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <div className="flex items-center mb-8">
        <button
          onClick={() => onSectionChange("home")}
          className="mr-4 p-2 text-white hover:text-gray-200 transition-colors duration-300"
          aria-label="Back to home"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h2 className="text-3xl font-light text-white stagger-in">Resume</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <div className="aspect-[8.5/11] w-full max-h-[80vh] overflow-hidden">
            <iframe
              src={resumeFile}
              title="Resume"
              width="100%"
              height="100%"
              className="border rounded-lg"
            />
          </div>
          <div className="text-center mt-4">
            <a
              href={resumeFile}
              download
              className="inline-block text-sm text-blue-400 hover:underline"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
