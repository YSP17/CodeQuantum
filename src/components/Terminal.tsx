
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  commands: string[];
  prompt?: string;
  className?: string;
  typingSpeed?: number;
  initialDelay?: number;
  commandDelay?: number;
  loop?: boolean;
}

export function Terminal({
  commands,
  prompt = "~$",
  className,
  typingSpeed = 50,
  initialDelay = 500,
  commandDelay = 1000,
  loop = false,
}: TerminalProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Wait initial delay before starting
    const initialTimeout = setTimeout(() => {
      // Start typing animation
      const typingInterval = setInterval(() => {
        if (currentCommandIndex >= commands.length) {
          if (loop) {
            setCurrentCommandIndex(0);
            setDisplayedText("");
            setCharIndex(0);
          }
          clearInterval(typingInterval);
          return;
        }

        const currentCommand = commands[currentCommandIndex];
        
        if (charIndex < currentCommand.length) {
          setDisplayedText((prev) => prev + currentCommand[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          clearInterval(typingInterval);
          
          // After finishing typing, wait before next command
          setTimeout(() => {
            setDisplayedText((prev) => prev + "\n");
            setCurrentCommandIndex((prev) => prev + 1);
            setCharIndex(0);
          }, commandDelay);
        }
      }, typingSpeed);

      // Clean up interval
      return () => clearInterval(typingInterval);
    }, initialDelay);

    // Clean up timeout
    return () => clearTimeout(initialTimeout);
  }, [
    commands, 
    currentCommandIndex, 
    charIndex, 
    typingSpeed, 
    initialDelay, 
    commandDelay,
    loop
  ]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={cn("code-window w-full bg-black/70 rounded-lg border border-white/10", className)}>
      <div className="flex items-center justify-between bg-gray-900/80 px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400">terminal</div>
      </div>
      <div className="p-4 overflow-hidden font-mono">
        <div className="text-gray-300 text-sm whitespace-pre-wrap">
          {displayedText.split('\n').map((line, i) => (
            <div key={i} className="flex">
              <span className="text-tech-green mr-2">{prompt}</span>
              <span>{line}</span>
              {i === displayedText.split('\n').length - 1 && showCursor && (
                <span className="inline-block h-4 w-2 bg-tech-blue animate-pulse ml-1"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
