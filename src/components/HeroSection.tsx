
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
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Hello, I'm</span>
              <span className="block text-white mt-2">Yeshwant</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">Data Science Graduate, AWS Cloud Practitioner, Scrum Master</h2>
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
            
            {/* Skills & Strengths Section */}
            <div className="bg-code/30 rounded-lg border border-white/10 p-6 mt-6">
              <h3 className="text-xl font-semibold text-tech-blue mb-4">Strengths & Skills</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Strengths:</h4>
                  <p className="text-gray-300 text-sm">Python, SQL, Machine Learning, Data Analytics & AWS</p>
                </div>
                
                <div className="h-px bg-white/10"></div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Other skills & tools:</h4>
                  <p className="text-gray-300 text-sm">Java, C, R, Automated Systems, API Integration, Prompt Engineering, Database Design, Tableau</p>
                </div>
                
                <div className="h-px bg-white/10"></div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Certifications:</h4>
                  <p className="text-gray-300 text-sm">AWS Certified Cloud Practitioner, Certified Scrum Master, Prompting Essentials – Google, Generative AI Fundamentals – Databricks</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="bg-code/30 rounded-lg border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-tech-purple mb-4">Experience</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-1">Community Dreams Foundation</h4>
                <p className="text-tech-blue text-sm mb-2">Role: Data Analyst</p>
                <p className="text-gray-300 text-sm">Built a system with a shopping cart, automated appointment scheduling system, and chatbot</p>
              </div>
              
              <div className="h-px bg-white/10"></div>
              
              <div>
                <h4 className="text-white font-medium mb-1">RIT (collaboration with Rochester Police Department)</h4>
                <p className="text-tech-purple text-sm mb-2">Academic Project</p>
                <p className="text-gray-300 text-sm">Cleaned data, identified crime hotspots, did demographic analysis, studied racial and gender bias, and predicted future crime patterns</p>
              </div>
            </div>
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
