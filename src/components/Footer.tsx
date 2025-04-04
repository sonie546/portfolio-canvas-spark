import React from 'react';
import { ArrowUp } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold mb-2">
              <span className="text-blue-400">Dev</span>Portfolio
            </div>
            <p className="edit to \xA9 2025 Doreen. All rights reserved">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button onClick={scrollToTop} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full mb-4 transition-colors">
              <ArrowUp size={18} />
            </button>
            
            <p className="text-gray-400 text-sm">
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;