
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for e-commerce platforms with real-time analytics and inventory management.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      githubUrl: "#",
      projectUrl: "#",
    },
    {
      id: 2,
      title: "Weather Forecast App",
      description: "Modern weather application with detailed forecasts, interactive maps, and location-based services.",
      tags: ["React", "Node.js", "API Integration", "Geolocation"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      githubUrl: "#",
      projectUrl: "#",
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative project management tool with task assignments, progress tracking, and team communication.",
      tags: ["React", "Redux", "Firebase", "Material UI"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "#",
      projectUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-tech-blue mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A selection of my recent work. Each project showcases different skills and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 200}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                projectUrl={project.projectUrl}
              />
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-tech-blue hover:underline"
          >
            <span>View All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
