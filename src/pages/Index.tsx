
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import { getFeaturedProjects } from "@/data/projects";
import { scrollToSection } from "@/lib/scrollToSection";

const Index = () => {
  const location = useLocation();

  // Update title when component mounts
  useEffect(() => {
    document.title = "Porter Clevidence's Portfolio";
  }, []);

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.slice(1);
    const timers: number[] = [];
    const attempts = [0, 150, 350, 700];

    attempts.forEach((delay) => {
      const timer = window.setTimeout(() => {
        scrollToSection(sectionId);
      }, delay);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [location.hash]);

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
