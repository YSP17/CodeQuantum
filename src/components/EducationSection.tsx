
import React from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Education</h2>
          <div className="h-1 w-20 bg-tech-blue mx-auto"></div>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {/* Masters Degree */}
          <AnimateOnScroll className="glassmorphism p-6 rounded-lg" animation="fade-in">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Rochester Institute of Technology (RIT)</h3>
              <p className="text-tech-blue font-semibold mb-1">Master of Science, Data Science</p>
              <p className="text-gray-400">August 2022 - December 2024</p>
            </div>
          </AnimateOnScroll>

          {/* Bachelors Degree */}
          <AnimateOnScroll className="glassmorphism p-6 rounded-lg" animation="fade-in" delay={200}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Vellore Institute of Technology (VIT)</h3>
              <p className="text-tech-purple font-semibold mb-1">Bachelor of Technology, Electronics and Computer Engineering</p>
              <p className="text-gray-400">August 2018 - May 2022</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
