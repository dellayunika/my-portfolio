import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Nature-Based Child Protection Service Website",
      description: "This is a modern single-page website for a nature-based child protection service in Norway. The project showcases seasonal activities (Summer, Autumn, Winter, Spring) through interactive sections, animations, and a clean futuristic UI. Built with Vite, React, and Tailwind CSS, it emphasizes performance and accessibility.",
      image: project1,
      category: "frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Github"],
      github: "https://github.com/dellayunika/sorenggard-project.git",
      demo: "https://soreng-gard.vercel.app/"
    },
    {
      id: 2,
      title: "Pink Pulse Showcase – Modern Futuristic Portfolio Website",
      description: "A modern and futuristic portfolio website featuring a dark theme with striking neon pink accents. Built with HTML, Tailwind CSS, and TypeScript powered by Vite, it delivers an interactive, responsive, and visually appealing experience across devices. The minimalist yet vibrant design makes it ideal for showcasing creative projects, personal branding, or as a sleek landing page.",
      image: project2,
      category: "frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Github"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "KopiNusa – Coffee Shop Company Profile Website",
      description: "This project was developed as a professional-grade website for a conceptual client, aiming to deliver a sleek, responsive, and user-friendly interface. It is built with React and TypeScript to ensure code reliability and maintainability, styled using Tailwind CSS for a modern and adaptive design, and powered by Vite to achieve exceptional development speed and performance. This project showcases my ability to combine design aesthetics with technical efficiency in creating scalable web solutions.",
      image: project3,
      category: "frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Github"],
      github: "https://github.com/dellayunika/kopinusa-main.git",
      demo: "https://kopinusa-main.vercel.app/"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Front-End <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            A selection of UI-focused work built with React and modern tooling
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`${
                  activeFilter === filter.id
                    ? "bg-neon-pink hover:bg-neon-pink-hover text-background"
                    : "border-neon-pink/50 text-neon-pink hover:bg-neon-pink hover:text-background"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card/30 backdrop-blur-sm border-neon-pink/20 hover:border-neon-pink/50 transition-all duration-300 glow-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-neon-pink/10 border border-neon-pink/30 rounded text-xs text-neon-pink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-neon-pink hover:text-neon-pink-glow transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-neon-pink hover:text-neon-pink-glow transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;