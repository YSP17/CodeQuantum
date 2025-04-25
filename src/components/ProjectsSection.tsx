import React from "react";
import { ProjectCard } from "./ProjectCard";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ProjectsSection() {
  const projects = [
    {
      id: 0,
      title: "Fake Job Posting Prediction",
      description: "Developed a sophisticated SVM classifier using NLP techniques to analyze word polarity and semantic context within job postings. The model achieved a 30% improvement over baseline in detecting fraudulent listings using Python, pandas, and scikit-learn.",
      tags: ["Python", "NLP", "Machine Learning", "SVM", "Scikit-learn", "Pandas"],
      imageUrl: "https://images.unsplash.com/photo-1568598035424-7070b67317d1",
      githubUrl: "#",
      projectUrl: "#",
    },
    {
      id: 1,
      title: "Data-Driven Analysis of Arrest Trends",
      description: "Applied advanced time series forecasting methods (LSTM, Prophet, TBATS, STL, SARIMAX) to analyze arrest trends. Conducted geospatial analysis to identify crime hotspots and examined demographic patterns across COVID-19 periods.",
      tags: ["Python", "Pandas", "Scikit-learn", "Tableau", "Time Series", "Geospatial Analysis"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "#",
      projectUrl: "#",
    },
    {
      id: 2,
      title: "Maternal Health Risk Prediction",
      description: "Designed and deployed a serverless cloud-based predictive model using AWS services (S3, Glue, SageMaker, Lambda) to detect pregnancy complications. Implemented automated data processing and real-time visualization.",
      tags: ["AWS", "Machine Learning", "Cloud Architecture", "Data Pipeline"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      githubUrl: "#",
      projectUrl: "#",
    },
    {
      id: 3,
      title: "Tesla Market Analysis - India",
      description: "Conducted market analysis using machine learning algorithms (K-Means, PCA) to simulate Tesla's pre-entry research into India. Achieved 90% accuracy in identifying target segments through predictive modeling.",
      tags: ["Python", "Machine Learning", "Market Analysis", "Data Science"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      githubUrl: "#",
      projectUrl: "#",
    },
    {
      id: 4,
      title: "Tech Reseller Inventory Management",
      description: "Developed a scalable database system using Oracle APEX for inventory management. Implemented real-time tracking, automated reordering, and predictive demand forecasting.",
      tags: ["Oracle APEX", "SQL", "Database Design", "Supply Chain"],
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      githubUrl: "#",
      projectUrl: "#",
    },
    {
      id: 5,
      title: "Code Refactoring Predictor",
      description: "Built an ML model using fastText and NLP techniques to predict code refactoring categories. Achieved 20% improvement in prediction accuracy through feature engineering and ensemble methods.",
      tags: ["Python", "NLP", "Machine Learning", "Code Analysis"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
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
            A collection of my key projects showcasing expertise in data science, machine learning, and cloud technologies.
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
      </div>
    </section>
  );
}
