
import React from "react";
import { SkillCard } from "./SkillCard";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-tech-blue mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A diverse skill set honed through academic rigor and hands-on project experience, enabling me to tackle complex challenges and deliver innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimateOnScroll animation="fade-in">
            <SkillCard title="Data Engineering & Analytics" description="Expertise in building scalable data pipelines and performing in-depth analysis to extract actionable insights." />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={100}>
            <SkillCard title="Machine Learning & AI" description="Proficient in developing and deploying machine learning models for predictive analytics and intelligent automation." />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={200}>
            <SkillCard title="Cloud Computing" description="Experience with cloud platforms like AWS, enabling scalable and cost-effective solutions." />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={300}>
            <SkillCard title="Data Visualization" description="Skilled in creating compelling visualizations that communicate complex data insights effectively." />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in">
            <SkillCard title="Programming Languages" description="Proficient in Python, SQL, and JavaScript, enabling versatile development capabilities." />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={100}>
            <SkillCard title="Databases" description="Experience with relational and NoSQL databases, ensuring efficient data storage and retrieval." />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={200}>
            <SkillCard title="Agile Methodologies" description="Experienced in Agile and Scrum frameworks, promoting iterative development and collaboration." />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={300}>
            <SkillCard title="Big Data Technologies" description="Knowledge of big data tools like Spark and Hadoop for processing large datasets." />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
