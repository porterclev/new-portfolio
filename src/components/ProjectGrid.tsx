
import { useState, useEffect } from "react";
import { filterProjects, getAllLanguages, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import LanguageFilter from "./LanguageFilter";
import { Search } from "lucide-react";

interface ProjectGridProps {
  title?: string;
  initialProjects?: Project[];
  showFilters?: boolean;
}

const ProjectGrid = ({
  title = "Projects",
  initialProjects,
  showFilters = true
}: ProjectGridProps) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects || []);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLanguages(getAllLanguages());
      
      if (!initialProjects) {
        setProjects(filterProjects());
      }
      
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [initialProjects]);

  useEffect(() => {
    if (!initialProjects) {
      setProjects(filterProjects(selectedLanguage, undefined, searchQuery || undefined));
    }
  }, [selectedLanguage, searchQuery, initialProjects]);

  const handleLanguageSelect = (language: string | null) => {
    setSelectedLanguage(language);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="py-16 w-full" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-8">{title}</h2>
        
        {showFilters && (
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white/70 backdrop-blur-sm text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-transparent"
              />
            </div>
            
            <LanguageFilter
              languages={languages}
              selectedLanguage={selectedLanguage}
              onSelectLanguage={handleLanguageSelect}
            />
          </div>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="rounded-xl border bg-white/50 h-80 animate-pulse-soft"
              />
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedLanguage(null);
                setSearchQuery("");
              }}
              className="mt-4 text-sm font-medium text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
