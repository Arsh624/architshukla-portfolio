import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ResumeSectionProps {
  onSectionChange: (section: string) => void;
}

const ResumeSection = ({ onSectionChange }: ResumeSectionProps) => {
  const [selectedRole, setSelectedRole] = useState<"swe" | "ml" | null>(null);

  const resumeFile =
    selectedRole === "swe"
      ? "/Resume_SWE.pdf"
      : selectedRole === "ml"
      ? "/Resume_ML.pdf"
      : null;

  return (
    <div className="fade-in p-6 min-h-screen">
      <div className="flex items-center mb-8">
        <button
          onClick={() => onSectionChange("home")}
          className="mr-4 p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label="Back to home"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M12 19L5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-light text-foreground stagger-in">Resume</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedRole ? (
            <motion.div
              key="role-select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-card rounded-lg p-8 shadow-sm border border-border"
            >
              <h3 className="text-xl font-light mb-4 text-muted-foreground">
                Choose a role
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button
                  onClick={() => setSelectedRole("swe")}
                  className="px-6 py-3 rounded-md text-sm font-medium bg-muted text-muted-foreground hover:bg-muted/70 transition-colors"
                >
                  Software Engineer
                </button>
                <button
                  onClick={() => setSelectedRole("ml")}
                  className="px-6 py-3 rounded-md text-sm font-medium bg-muted text-muted-foreground hover:bg-muted/70 transition-colors"
                >
                  Data & Machine Learning
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="resume-viewer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-lg p-8 shadow-sm border border-border"
            >
              <div className="text-center text-muted-foreground mb-6">
                <h3 className="text-xl font-light mb-2">
                  {selectedRole === "swe"
                    ? "Software Engineering Resume"
                    : "Data & ML Resume"}
                </h3>
                <p className="text-sm">
                  View, zoom, and download my resume below.
                </p>
              </div>

              <div className="aspect-[8.5/11] w-full max-h-[80vh] overflow-hidden">
                <iframe
                  src={resumeFile || ""}
                  title="Resume"
                  width="100%"
                  height="100%"
                  className="border rounded-lg"
                />
              </div>

              <div className="text-center mt-4">
                <a
                  href={resumeFile || "#"}
                  download
                  className="inline-block text-sm text-blue-500 hover:underline"
                >
                  Download PDF
                </a>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={() => setSelectedRole(null)}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  ← Back to role selection
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResumeSection;
