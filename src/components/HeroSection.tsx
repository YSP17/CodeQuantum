import React from "react";
import { Link } from "react-scroll";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with glowing effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-tech-blue/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-tech-purple/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Hello, I'm</span>
              <span className="block text-white mt-2">Yeshwant</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">Data Science Graduate & AWS Cloud Professional</h2>
            <p className="text-gray-400 max-w-md">
              Based in Boston, MA. Certified AWS Cloud Practitioner and Scrum Master passionate about transforming data into actionable insights.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link 
                to="projects" 
                spy={true}
                smooth={true}
                duration={500}
                className="px-6 py-3 bg-tech-blue text-white rounded-md hover:bg-tech-blue/80 transition-colors cursor-pointer"
              >
                View My Work
              </Link>
              <Link 
                to="contact" 
                spy={true}
                smooth={true}
                duration={500}
                className="px-6 py-3 border border-tech-purple text-tech-purple rounded-md hover:bg-tech-purple/10 transition-colors cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto bg-code/70 rounded-lg border border-white/10 p-4">
            <pre className="text-gray-300 text-sm">
              {`const Yeshwant = {
  identity: 'Yeshwant Santhanakrishnan Premanand',
  tags: ['Data Science Graduate', 'AWS Cloud Practitioner', 'Certified Scrum Master'],
  techStack: [
    'Data Engineering & Analytics',
    'Machine Learning & AI',
    'Visualization',
    'Databases & Cloud'
  ],
  goal: 'Decode data, deliver clarity.'
};`}
            </pre>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-gray-400"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </Link>
    </section>
  );
}
