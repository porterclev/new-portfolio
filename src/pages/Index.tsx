
import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFeaturedProjects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, PenTool, GitBranch, Laptop } from "lucide-react";

const Index = () => {
  // Update title when component mounts
  useEffect(() => {
    document.title = "Software Engineering Portfolio";
  }, []);

  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <ProjectGrid 
          title="Featured Projects" 
          initialProjects={featuredProjects} 
          showFilters={false}
        />

        <ProjectGrid title="All Projects" />
        
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/0 via-secondary/20 to-secondary/5 -z-10" />
          <div className="absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-primary/5 blur-2xl -z-10" aria-hidden="true" />
          
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Badge variant="outline" className="mb-3">About Me</Badge>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Passionate Software Engineer</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I'm a passionate software engineer with expertise in building web applications, 
                  machine learning systems, and mobile applications. My approach to software 
                  development focuses on creating elegant solutions to complex problems.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With experience across multiple programming languages including JavaScript, 
                  TypeScript, Python, and more, I enjoy tackling diverse technical challenges 
                  and continuously expanding my skillset.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/70 flex items-center justify-center">
                      <Code className="h-5 w-5 text-foreground/80" />
                    </div>
                    <div>
                      <h3 className="font-medium">Clean Code</h3>
                      <p className="text-sm text-muted-foreground">Writing maintainable, efficient code</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/70 flex items-center justify-center">
                      <PenTool className="h-5 w-5 text-foreground/80" />
                    </div>
                    <div>
                      <h3 className="font-medium">User Experience</h3>
                      <p className="text-sm text-muted-foreground">Creating intuitive interfaces</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/70 flex items-center justify-center">
                      <GitBranch className="h-5 w-5 text-foreground/80" />
                    </div>
                    <div>
                      <h3 className="font-medium">Collaboration</h3>
                      <p className="text-sm text-muted-foreground">Working effectively in teams</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/70 flex items-center justify-center">
                      <Laptop className="h-5 w-5 text-foreground/80" />
                    </div>
                    <div>
                      <h3 className="font-medium">Problem Solving</h3>
                      <p className="text-sm text-muted-foreground">Finding elegant solutions</p>
                    </div>
                  </div>
                </div>
                
                <a href="#projects" className="inline-flex items-center font-medium text-sm text-foreground hover:text-primary transition-colors">
                  View My Projects <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white shadow-sm rounded-lg p-6 border">
                  <h3 className="font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Node.js", "Python", "Django", 
                      "SQL", "MongoDB", "AWS", "Docker", "TensorFlow", "Git", "CI/CD", 
                      "RESTful APIs", "GraphQL"].map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs font-medium py-1 px-3 rounded-full bg-secondary/70 hover:bg-secondary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white shadow-sm rounded-lg p-6 border">
                  <h3 className="font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Master of Computer Science</p>
                      <p className="text-sm text-muted-foreground">Stanford University, 2018-2020</p>
                    </div>
                    <div>
                      <p className="font-medium">Bachelor of Science in Software Engineering</p>
                      <p className="text-sm text-muted-foreground">UC Berkeley, 2014-2018</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
