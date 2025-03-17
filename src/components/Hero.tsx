
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background to-secondary/20 opacity-70"
        aria-hidden="true"
      />
      
      <div className="container px-4 md:px-6 py-10 md:py-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className={cn(
            "transition-all duration-1000 ease-apple",
            isLoaded ? "opacity-100" : "opacity-0 translate-y-8"
          )}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Software Engineering 
              <span className="relative z-10 md:whitespace-nowrap">
                <span className="relative px-1">
                  <span className="absolute inset-x-0 bottom-0 h-3 bg-secondary/50 -z-10 rounded-sm transform -rotate-1"></span>
                  Portfolio
                </span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Showcasing innovative software solutions across multiple languages and technologies.
              Explore my projects below to see my technical expertise and problem-solving skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary"
                onClick={scrollToProjects}
              >
                View Projects
              </button>
              
              <a 
                href="#contact" 
                className="btn-secondary"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
      
      {/* Background decorative shapes */}
      <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/3 h-40 w-40 rounded-full bg-secondary/10 blur-2xl -z-10" aria-hidden="true" />
    </section>
  );
};

export default Hero;
