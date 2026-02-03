
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-500 ease-apple bg-white border shadow-soft h-full flex flex-col transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-apple",
            isHovered && "scale-105"
          )}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.languages.map((language) => (
            <span
              key={language}
              className="text-xs font-medium py-1 px-2 rounded-full bg-secondary/70"
            >
              {language}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold tracking-tight mb-2">{project.title}</h3>

        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

        <div className="flex items-end justify-between mt-auto pt-2">
          <Link
            to={`/project/${project.id}`}
            className="text-sm font-medium flex items-center transition-all duration-200 hover:text-primary/80 group"
          >
            View details
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <div className="flex items-center space-x-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors duration-200 hover:bg-secondary"
                aria-label="GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors duration-200 hover:bg-secondary"
                aria-label="Showcase"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* {project.featured && (
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded-full shadow-sm">
          Featured
        </div>
      )} */}
    </div>
  );
};

export default ProjectCard;
