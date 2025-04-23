
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "scale-in" | "slide-in";
  threshold?: number;
  delay?: number;
}

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-in",
  threshold = 0.1,
  delay = 0,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "scale-in":
        return "animate-scale-in";
      case "slide-in":
        return "animate-fade-in";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className, getAnimationClass())}
      style={{ 
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
}
