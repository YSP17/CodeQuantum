
import React from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { Award, Briefcase, Book } from "lucide-react";

export function AboutSection() {
  const certifications = [
    "AWS Certified Cloud Practitioner - Amazon Web Services",
    "Scrum Alliance Certified Scrum Master - Scrum Alliance",
    "Advanced Terraform - LinkedIn Learning",
    "Advanced BigQuery - LinkedIn Learning",
    "Prompt Design in Vertex AI - Google",
    "Prompting Essentials – Google",
    "Generative AI Fundamentals – Databricks",
    "Lakehouse Fundamentals – Databricks",
    "Career Essentials in Generative AI – Microsoft and LinkedIn"
  ];

  const experiences = [
    {
      title: "Data Analyst",
      company: "Community Dreams Foundation",
      period: "Mar 2025 - Present",
      location: "Florida, US",
      description: "Responsibilities: Leading AI-powered cloud-native platform development for the housing sector. Architecting microservices infrastructure and implementing ML models for real-time analytics.",
    },
    {
      title: "Marketing Analyst",
      company: "Proskill Learning LLP",
      period: "May 2020 - Mar 2022",
      location: "Chennai, IND",
      description: "Responsibilities: Conducted data-driven customer segmentation analysis, optimized marketing strategies, and improved data accessibility, leading to 30% increase in user engagement.",
    },
  ];

  const research = [
    {
      title: "Crack Detection by integrating image fusion techniques",
      description: "Engineered an innovative machine learning model utilizing advanced computer vision techniques for the precise detection of surface cracks, achieving 14% improved accuracy over industry-standard algorithms.",
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
          <AnimateOnScroll className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            <p className="text-gray-300">
              I'm a Data Science graduate who genuinely loves digging into data and turning it into something useful. Whether it's building machine learning models, cleaning messy datasets, or deploying solutions on the cloud, I enjoy the entire process of shaping raw information into clear insights that actually make a difference.
            </p>
            <p className="text-gray-300">
              Most days you'll find me working with Python, SQL, TensorFlow, PyTorch, and Scikit-learn, and I've had hands-on experience getting models live on AWS, Google BigQuery, and Databricks. Along the way, I became an AWS Certified Cloud Practitioner and a Certified Scrum Master, which means I know how to balance technical depth with agile, practical delivery.
            </p>
            <p className="text-gray-300">
              What excites me most is the blend of AI and analytics — whether it's designing smarter prompts, scaling machine learning workflows, or automating systems end-to-end. I enjoy working with small, cross-functional teams, where I can be hands-on, solve problems fast, and make data come alive in ways that are both impactful and fun.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-3">Certifications</h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <AnimateOnScroll key={cert} delay={index * 100}>
                    <div className="glassmorphism rounded-md py-2 px-4 text-gray-300">
                      {cert}
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
                <h3 className="text-xl font-semibold text-white">Work Experience</h3>
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
