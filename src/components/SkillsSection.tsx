
import React from "react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface TechSkill {
  name: string;
  icon: string;
  color: string;
  proficiency: number; // 0-100
}

export function SkillsSection() {
  const skills: TechSkill[] = [
    { name: "JavaScript", icon: "JS", color: "#f7df1e", proficiency: 90 },
    { name: "TypeScript", icon: "TS", color: "#3178c6", proficiency: 85 },
    { name: "React", icon: "⚛️", color: "#61dafb", proficiency: 90 },
    { name: "Node.js", icon: "🟢", color: "#339933", proficiency: 80 },
    { name: "HTML5", icon: "H", color: "#e34f26", proficiency: 95 },
    { name: "CSS3", icon: "C", color: "#1572b6", proficiency: 90 },
    { name: "Git", icon: "G", color: "#f05032", proficiency: 85 },
    { name: "Docker", icon: "🐳", color: "#2496ed", proficiency: 75 },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-tech-blue mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <AnimateOnScroll key={skill.name} delay={index * 100}>
              <SkillCard skill={skill} />
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["MongoDB", "PostgreSQL", "AWS", "GraphQL", "Next.js", "Redux", "Tailwind CSS", "Figma"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: TechSkill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="glassmorphism rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:border-glow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-white">{skill.name}</h3>
        <div
          className="flex items-center justify-center h-10 w-10 rounded-md"
          style={{ backgroundColor: `${skill.color}20` }}
        >
          <span
            className="text-lg font-bold"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </span>
        </div>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${skill.proficiency}%`,
            backgroundColor: skill.color,
          }}
        ></div>
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-400">
        <span>Proficiency</span>
        <span>{skill.proficiency}%</span>
      </div>
    </div>
  );
}
