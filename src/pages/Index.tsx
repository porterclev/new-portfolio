
import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import { getFeaturedProjects } from "@/data/projects";

const Index = () => {
  // Update title when component mounts
  useEffect(() => {
    document.title = "Porter Clevidence's Portfolio";
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
        <AboutMe />
        
      </main>

      <Footer />
    </div>
  );
};

export default Index;
