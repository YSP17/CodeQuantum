
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  animate?: boolean;
  delay?: number;
  speed?: number;
}

export function CodeBlock({
  code,
  language = "typescript",
  className,
  animate = false,
  delay = 0,
  speed = 30,
}: CodeBlockProps) {
  const [displayedCode, setDisplayedCode] = useState(animate ? "" : code);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const timeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index >= code.length) {
          clearInterval(typingInterval);
          return;
        }

        setDisplayedCode((prev) => prev + code.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [animate, code, delay, index, speed]);

  const highlightCode = (code: string) => {
    // Very simplified syntax highlighting
    return code
      .replace(
        /(const|let|var|function|return|import|export|from|class|interface|type|extends|implements)/g,
        '<span class="text-tech-purple">$1</span>'
      )
      .replace(
        /(".*?"|'.*?'|`.*?`)/g,
        '<span class="text-tech-green">$1</span>'
      )
      .replace(
        /\b(true|false|null|undefined|this)\b/g,
        '<span class="text-tech-pink">$1</span>'
      )
      .replace(
        /\b(\d+)\b/g, 
        '<span class="text-amber-400">$1</span>'
      )
      .replace(
        /(\/\/.*)/g,
        '<span class="text-gray-500">$1</span>'
      );
  };

  return (
    <div
      className={cn(
        "code-window group relative w-full font-mono text-sm",
        className
      )}
    >
      {/* Code header */}
      <div className="flex items-center justify-between bg-code/80 px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        {language && (
          <div className="text-xs text-gray-400">{language}</div>
        )}
      </div>

      {/* Code content */}
      <div className="overflow-x-auto p-4">
        <pre 
          className="text-gray-200" 
          dangerouslySetInnerHTML={{ 
            __html: highlightCode(displayedCode) 
          }} 
        />
        {animate && index < code.length && (
          <span className="inline-block h-4 w-2 animate-pulse bg-tech-blue"></span>
        )}
      </div>
    </div>
  );
}
