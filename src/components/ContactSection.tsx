import React from "react";
import { Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-tech-blue mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-tech-blue/20 rounded-md text-tech-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">yeshwantprem20@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-tech-blue/20 rounded-md text-tech-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">(585) 910-6671</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-tech-blue/20 rounded-md text-tech-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Boston, MA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-white mb-3 font-medium">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/yeshwantsp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-tech-blue/20 rounded-full text-tech-blue hover:bg-tech-blue hover:text-white transition-colors"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Send Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-white focus:outline-none focus:border-tech-blue" 
                    placeholder="Your name" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-white focus:outline-none focus:border-tech-blue" 
                    placeholder="your.email@example.com" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-white focus:outline-none focus:border-tech-blue" 
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-tech-blue text-white py-2 px-4 rounded-md hover:bg-tech-blue/80 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
