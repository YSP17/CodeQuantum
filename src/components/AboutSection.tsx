
import React from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { Award, Briefcase, Book } from "lucide-react";

export function AboutSection() {
  const experiences = [
    {
      title: "Executive Project Manager",
      company: "Community Dreams Foundation",
      period: "Mar 2025 - Present",
      description: "Leading AI-powered cloud-native platform development for the housing sector. Architecting microservices infrastructure and implementing ML models for real-time analytics.",
    },
    {
      title: "Marketing Analyst",
      company: "Proskill Learning LLP",
      period: "May 2020 - Mar 2022",
      description: "Conducted data-driven customer segmentation analysis, optimized marketing strategies, and improved data accessibility, leading to 30% increase in user engagement.",
    },
  ];

  const research = [
    {
      title: "Crack Detection by integrating image fusion techniques",
      description: "Engineered an ML model for precise surface crack detection, achieving 14% improved accuracy over industry-standard algorithms.",
    },
    {
      title: "Adolescent behavior in family purchase decision",
      description: "Analyzed data from 400+ families using advanced statistical methods in R to understand family decision-making dynamics.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">About Me</h2>
          <div className="h-1 w-20 bg-tech-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimateOnScroll className="space-y-6" animation="fade-in">
            <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            <p className="text-gray-300">
              I'm a Data Science graduate and AWS Cloud Practitioner with a passion for transforming complex data into actionable insights. My expertise spans machine learning, cloud computing, and data engineering.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-3">Core Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Python",
                  "AWS",
                  "Machine Learning",
                  "SQL",
                  "Data Analysis",
                  "Cloud Computing"
                ].map((tech, index) => (
                  <AnimateOnScroll key={tech} delay={index * 100}>
                    <div className="glassmorphism rounded-md py-2 px-4 text-center text-gray-300">
                      {tech}
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="space-y-8" animation="fade-in" delay={200}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="text-tech-blue" />
                <h3 className="text-xl font-semibold text-white">Experience</h3>
              </div>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="glassmorphism p-4 rounded-lg">
                    <h4 className="text-tech-purple font-semibold">{exp.title}</h4>
                    <p className="text-sm text-gray-400">{exp.company} | {exp.period}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Book className="text-tech-blue" />
                <h3 className="text-xl font-semibold text-white">Published Research</h3>
              </div>
              <div className="space-y-4">
                {research.map((item, index) => (
                  <div key={index} className="glassmorphism p-4 rounded-lg">
                    <h4 className="text-tech-purple font-semibold">{item.title}</h4>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
