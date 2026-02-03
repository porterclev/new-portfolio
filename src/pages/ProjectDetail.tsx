
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Globe, Calendar, Tag } from "lucide-react";
import { getProjectById, Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Simulate loading delay
    const timer = setTimeout(() => {
      if (id) {
        const foundProject = getProjectById(id);
        if (foundProject) {
          setProject(foundProject);
        } else {
          // Project not found, redirect to 404
          navigate("/404");
        }
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-1/3 bg-secondary rounded-md"></div>
            <div className="h-12 w-3/4 bg-secondary rounded-md"></div>
            <div className="h-64 bg-secondary rounded-lg"></div>
            <div className="h-4 bg-secondary rounded-md"></div>
            <div className="h-4 bg-secondary rounded-md"></div>
            <div className="h-4 w-2/3 bg-secondary rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return null; // This should not happen due to the redirect, but just in case
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="space-y-8 animate-fade-up">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.languages.map((language) => (
                <span
                  key={language}
                  className="text-xs font-medium py-1 px-2 rounded-full bg-secondary/70"
                >
                  {language}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {project.title}
            </h1>

            <p className="text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{project.date}</span>
              </div>

              {project.tags.length > 0 && (
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{project.tags.join(", ")}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repository
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Showcase
                </a>
              )}
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="mb-4">Project Overview</h2>
            <p>{project.longDescription}</p>
          </div>

          <div className="h-full w-full rounded-xl overflow-hidden">
            <Carousel>
              <CarouselContent>
                {project.media?.map((m, index) => (
                  <CarouselItem key={index}>
                    <div className="absolute top-2 z-10 px-3 py-1 text-xs text-white bg-black/50 max-w-xs">
                      {project.mediaDescriptions?.[index] || ""}
                    </div>
                    <div className="relative w-full bg-secondary/30 rounded-xl overflow-hidden">
                      {m.toLowerCase().endsWith(".mov") || m.toLowerCase().endsWith(".mp4") ? (
                        <video
                          src={m}
                          controls
                          className="aspect-video w-full h-full object-contain"
                          onLoadedMetadata={() => setIsImageLoaded(true)}
                        />
                      ) : (
                        <img
                          src={m}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="aspect-video w-full h-full object-contain"
                          onLoad={() => setIsImageLoaded(true)}
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h2 className="text-xl font-semibold mb-4">Interested in this project?</h2>
            <p className="text-muted-foreground mb-6">
              Have questions or want to learn more about this project? Feel free to reach out.
            </p>
            <Link to="/#contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
