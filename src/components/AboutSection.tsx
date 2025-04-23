
import React from "react";
import { CodeBlock } from "./CodeBlock";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function AboutSection() {
  // Simplified code snippet that's shorter but still visually appealing
  const aboutCode = `// About me
const aboutMe = {
  name: "Yeshwant",
  role: "Data Scientist",
  education: "MS in Data Science",
  skills: [
    "Machine Learning", 
    "Data Analysis",
    "Cloud Computing",
    "Statistical Modeling"
  ],
  interests: "Turning data into insights"
};`;

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">About Me</h2>
          <div className="h-1 w-20 bg-tech-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll className="space-y-6" animation="fade-in">
            <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            <p className="text-gray-300">
              I'm a passionate data scientist specializing in turning complex data into actionable insights. With a strong foundation in machine learning and statistical analysis, I enjoy creating elegant solutions that drive business decisions.
            </p>
            <p className="text-gray-300">
              My journey began with a Bachelor's in Electronics and Computer Engineering, followed by a Master's in Data Science at Rochester Institute of Technology.
            </p>
            <p className="text-gray-300">
              As a fresher in the field, I'm enthusiastic about applying my knowledge to real-world problems and continuously expanding my expertise in data science methodologies.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-3">Technologies I Work With</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Python", "R", "SQL", "AWS", "Tableau", "TensorFlow"].map((tech, index) => (
                  <AnimateOnScroll key={tech} delay={index * 100}>
                    <div className="glassmorphism rounded-md py-2 px-4 text-center text-gray-300">
                      {tech}
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scale-in" delay={200}>
            <CodeBlock code={aboutCode} animate={true} speed={30} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
