
import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFeaturedProjects } from "@/data/projects";

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
        
        <section id="about" className="py-16 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate software engineer with expertise in building web applications, 
                  machine learning systems, and mobile applications. My approach to software 
                  development focuses on creating elegant solutions to complex problems.
                </p>
                <p className="text-muted-foreground mb-4">
                  With experience across multiple programming languages including JavaScript, 
                  TypeScript, Python, and more, I enjoy tackling diverse technical challenges 
                  and continuously expanding my skillset.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing my knowledge through technical writing.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white shadow-soft rounded-lg p-6 border">
                  <h3 className="font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Node.js", "Python", "Django", 
                      "SQL", "MongoDB", "AWS", "Docker", "TensorFlow", "Git", "CI/CD", 
                      "RESTful APIs", "GraphQL"].map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs font-medium py-1 px-2 rounded-full bg-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white shadow-soft rounded-lg p-6 border">
                  <h3 className="font-semibold mb-4">Education</h3>
                  <div>
                    <p className="font-medium">Master of Computer Science</p>
                    <p className="text-sm text-muted-foreground">Stanford University, 2018-2020</p>
                  </div>
                  <div className="mt-3">
                    <p className="font-medium">Bachelor of Science in Software Engineering</p>
                    <p className="text-sm text-muted-foreground">UC Berkeley, 2014-2018</p>
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
