
import React from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { Award, Briefcase, Book } from "lucide-react";

export function AboutSection() {
  const certifications = [
    "Advanced Terraform - LinkedIn Learning",
    "Advanced BigQuery - LinkedIn Learning",
    "Scrum Alliance Certified Scrum Master - Scrum Alliance",
    "AWS Certified Cloud Practitioner - Amazon Web Services",
    "Prompt Design in Vertex AI - Google",
    "Generative AI Fundamentals – Databricks",
    "Lakehouse Fundamentals – Databricks",
    "Career Essentials in Generative AI – Microsoft and LinkedIn",
    "DevOps Fundamentals – Vellore Institute of Technology",
    "Introduction to Agile methodologies – Vellore Institute of Technology",
    "Foundations of Supply Chain Management – Vellore Institute of Technology"
  ];

  const experiences = [
    {
      title: "Executive Project Manager",
      company: "Community Dreams Foundation",
      period: "Mar 2025 - Present",
      location: "Florida, US",
      description: "Leading AI-powered cloud-native platform development for the housing sector. Architecting microservices infrastructure and implementing ML models for real-time analytics.",
    },
    {
      title: "Marketing Analyst",
      company: "Proskill Learning LLP",
      period: "May 2020 - Mar 2022",
      location: "Chennai, IND",
      description: "Conducted data-driven customer segmentation analysis, optimized marketing strategies, and improved data accessibility, leading to 30% increase in user engagement.",
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
              I'm a results-driven data science graduate with a passion for transforming data into intelligent, impactful solutions. With a strong foundation in data analytics, machine learning, and deep learning, I specialize in extracting insights from both structured and unstructured data.
            </p>
            <p className="text-gray-300">
              My toolkit includes Python, SQL, TensorFlow, PyTorch, and Scikit-learn, and I have hands-on experience building, evaluating, and deploying models across cloud platforms like AWS (S3, SageMaker, Lambda), Google BigQuery, and Databricks. I'm also a certified AWS Cloud Practitioner and a Scrum Master, skilled in delivering cloud-native solutions through CI/CD pipelines and agile workflows.
            </p>
            <p className="text-gray-300">
              From feature engineering and NLP to scalable AI model optimization, I'm driven by the challenge of solving real-world problems through data and innovation—with precision, clarity, and purpose.
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
