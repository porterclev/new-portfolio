
import { useState, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
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
      {/* Enhanced background with gradient overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-background via-secondary/30 to-background/80 opacity-90"
        aria-hidden="true"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/3 h-40 w-40 rounded-full bg-secondary/10 blur-2xl -z-10" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-primary/5 blur-xl -z-10" aria-hidden="true" />
      
      <div className="container px-4 md:px-6 py-10 md:py-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className={cn(
            "transition-all duration-1000 ease-apple",
            isLoaded ? "opacity-100" : "opacity-0 translate-y-8"
          )}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm mb-6 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground font-medium">Software Engineering Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Bringing Ideas to 
              <span className="relative z-10 md:whitespace-nowrap px-2">
                <span className="absolute inset-x-0 bottom-[0.1em] h-3 bg-secondary/60 -z-10 rounded-sm transform skew-x-[-8deg]"></span>
                <span className="relative text-foreground">Life</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Showcasing innovative software solutions across multiple languages and technologies.
              From concept to deployment, each project represents my passion for elegant problem-solving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 ease-apple hover:bg-primary/90 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-primary/30"
                onClick={scrollToProjects}
              >
                View My Work
              </button>
              
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-all duration-200 ease-apple hover:bg-secondary/80 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-secondary/30"
              >
                Get in Touch
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
    </section>
  );
};

export default Hero;
