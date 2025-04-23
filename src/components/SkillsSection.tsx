
import React from "react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { Database, Code, Cloud, ChartBar, FileCode, GitBranch, Server } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType;
  skills: string[];
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: [
        "SQL",
        "Oracle APEX",
        "MongoDB",
        "Neo4j",
        "Google BigQuery",
        "Databricks",
        "AWS (S3, EC2, Lambda)",
        "Vertex AI"
      ]
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        "Python",
        "Java",
        "R",
        "XML"
      ]
    },
    {
      title: "Data Engineering & Analytics",
      icon: Server,
      skills: [
        "Pandas",
        "NumPy",
        "Database Design",
        "Query Optimization",
        "ER Diagrams",
        "Data Migration",
        "Process Automation"
      ]
    },
    {
      title: "Visualization",
      icon: ChartBar,
      skills: [
        "Tableau",
        "Power BI",
        "Dash",
        "R-Shiny",
        "Excel",
        "Matlab"
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: FileCode,
      skills: [
        "Time Series Forecasting",
        "Random Forest",
        "XGBoost",
        "SVM",
        "LSTM",
        "NLP",
        "Generative AI",
        "Prompt Engineering"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      skills: [
        "Docker",
        "MLflow",
        "Git",
        "GitHub",
        "CI/CD Pipelines",
        "Agile",
        "DevOps"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-tech-blue mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimateOnScroll 
              key={category.title} 
              delay={categoryIndex * 100}
              className="h-full"
            >
              <div className="glassmorphism rounded-lg p-6 h-full transition-all duration-300 hover:border-tech-blue">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-6 h-6 text-tech-blue" />
                  <h3 className="text-lg font-medium text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
