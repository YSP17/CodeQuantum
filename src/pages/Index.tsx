import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Navigation items
  const navItems = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Education", href: "education" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  // Particle animation effect (simplified version)
  useEffect(() => {
    const createParticleAnimation = () => {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '1';
      canvas.style.opacity = '0.2';
      document.body.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Particles array
      const particles: Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
      }> = [];
      
      // Create particles
      const createParticles = () => {
        for (let i = 0; i < 50; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            color: i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#8b5cf6' : '#f59e0b'
          });
        }
      };
      
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          
          p.x += p.speedX;
          p.y += p.speedY;
          
          // Wrap particles around edges
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
          
          // Draw connections
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
            
            if (distance < 120) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(100, 150, 255, ${0.1 - distance / 120 * 0.1})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      };
      
      // Handle window resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles.length = 0;
        createParticles();
      };
      
      window.addEventListener('resize', handleResize);
      createParticles();
      animate();
      
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        document.body.removeChild(canvas);
      };
    };
    
    const cleanup = createParticleAnimation();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar items={navItems} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
