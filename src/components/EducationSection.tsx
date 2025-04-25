
import React from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function EducationSection() {
  const mastersClasses = [
    "Data Science & Analytics",
    "Database Design Implementation",
    "Software Construction",
    "SW Engineering for Data Sci.",
    "Data Analytics & Bus Intel",
    "Applied Statistics",
    "Data Driven Knowledge Discovery",
    "Data Management and Analytics",
  ];

  const undergradClasses = [
    "DATA STRUCTURES AND ALGORITHMS",
    "OBJECT ORIENTED PROGRAMMING",
    "DATABASE MANAGEMENT SYSTEMS",
    "OPERATING SYSTEMS",
    "MACHINE LEARNING ALGORITHMS",
    "DATA WAREHOUSING AND DATA MINING",
    "DISCRETE MATHEMATICS AND GRAPH THEORY",
    "INTRODUCTION TO BUSINESS COMMUNICATION",
    "CLOUD AND DISTRIBUTED COMPUTING",
    "SOFTWARE HARDWARE CO-DESIGN",
  ];

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
              <p className="text-gray-400 mb-4">August 2022 - December 2024</p>
              <p className="text-tech-purple font-semibold mb-2">CGPA: 3.97</p>
              <Select>
                <SelectTrigger className="w-full bg-background/50 border-tech-blue/30">
                  <SelectValue placeholder="View Coursework" />
                </SelectTrigger>
                <SelectContent>
                  {mastersClasses.map((course, index) => (
                    <SelectItem key={index} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </AnimateOnScroll>

          {/* Bachelors Degree */}
          <AnimateOnScroll className="glassmorphism p-6 rounded-lg" animation="fade-in" delay={200}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Vellore Institute of Technology (VIT)</h3>
              <p className="text-tech-purple font-semibold mb-1">Bachelor of Technology, Electronics and Computer Engineering</p>
              <p className="text-gray-400 mb-4">August 2018 - May 2022</p>
              <p className="text-tech-purple font-semibold mb-2">CGPA: 3.33</p>
              <Select>
                <SelectTrigger className="w-full bg-background/50 border-tech-purple/30">
                  <SelectValue placeholder="View Coursework" />
                </SelectTrigger>
                <SelectContent>
                  {undergradClasses.map((course, index) => (
                    <SelectItem key={index} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
