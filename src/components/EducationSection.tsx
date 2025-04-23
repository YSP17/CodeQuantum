
import React from "react";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface Course {
  name: string;
  description: string;
  progress: number;
}

const mastersCourses: Course[] = [
  { name: "Machine Learning", description: "Advanced ML algorithms, deep learning, and practical applications", progress: 95 },
  { name: "Data Management", description: "Database systems, data warehousing, and ETL processes", progress: 90 },
  { name: "Business Intelligence", description: "Data visualization, reporting, and business analytics", progress: 92 },
  { name: "Statistics", description: "Statistical analysis, hypothesis testing, and predictive modeling", progress: 88 },
  { name: "Database Design", description: "Database architecture, normalization, and optimization", progress: 90 },
];

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
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Rochester Institute of Technology (RIT)</h3>
              <p className="text-tech-blue font-semibold mb-1">Master of Science, Data Science</p>
              <p className="text-gray-400">August 2022 - December 2024</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-3">Core Courses</h4>
              <div className="grid gap-4">
                {mastersCourses.map((course, index) => (
                  <HoverCard key={course.name}>
                    <HoverCardTrigger asChild>
                      <div className="cursor-pointer">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300">{course.name}</span>
                          <span className="text-tech-blue text-sm">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">{course.name}</h4>
                        <p className="text-sm text-gray-400">{course.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
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
