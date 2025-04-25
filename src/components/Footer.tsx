
import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-semibold gradient-text">
              &lt;YSP17 /&gt;
            </a>
            <p className="text-gray-400 mt-1">Transforming Data, Driving Innovation</p>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {currentYear} Yeshwant Santhanakrishnan Premanand. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
