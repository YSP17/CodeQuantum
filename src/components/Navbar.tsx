
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
  className?: string;
}

export function Navbar({ items, className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        isScrolled 
          ? "bg-black/50 backdrop-blur-xl shadow-md" 
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-xl font-semibold gradient-text"
        >
          &lt;DevName /&gt;
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href.replace("#", "")}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-sm text-gray-300 hover:text-white hover:text-glow transition-all duration-300 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism py-4 shadow-lg">
          <div className="container mx-auto space-y-4">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href.replace("#", "")}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="block text-gray-300 hover:text-white hover:text-glow px-4 py-2 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
