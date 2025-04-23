
import React from "react";
import { CodeBlock } from "./CodeBlock";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function AboutSection() {
  const aboutCode = `// About me
const aboutMe = {
  background: "Computer Science graduate with 5+ years of experience",
  approach: "Problem solver with a passion for clean, efficient code",
  interests: [
    "Web Development", 
    "UI/UX Design", 
    "Cloud Architecture", 
    "Open Source"
  ],
  currentlyLearning: "Advanced TypeScript patterns & WebGL",
  goal: "Building software that makes a difference"
};

export default aboutMe;`;

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
              I'm a passionate software developer specializing in building exceptional digital experiences. With a strong foundation in full-stack development, I enjoy creating elegant solutions that prioritize user experience.
            </p>
            <p className="text-gray-300">
              My journey in tech began with a Computer Science degree, followed by professional experience across various domains including web applications, mobile development, and cloud infrastructure.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-3">Technologies I Work With</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["JavaScript", "TypeScript", "React", "Node.js", "HTML/CSS", "Git"].map((tech, index) => (
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
            <CodeBlock code={aboutCode} animate={true} speed={20} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
