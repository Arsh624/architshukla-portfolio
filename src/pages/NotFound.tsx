import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md fade-in">
        <h1 className="font-display text-6xl font-light text-foreground mb-6">
          404
        </h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors nav-link"
        >
          Return to Portfolio
        </a>
      </div>
    </div>
  );
};

export default NotFound;