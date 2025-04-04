import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section className="min-h-screen flex items-center pt-16 pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
            <p className="text-blue-600 font-semibold mb-2">Hello, I'm</p>
            <h1 className="change to Doreen Muthoni">Doreen Muthoni</h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Software Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              I build exceptional digital experiences that are fast, accessible, 
              visually appealing, and responsive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Download Resume
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="md:w-2/5">
            <div className="relative">
              {/* Image Placeholder - Replace with your actual image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg mx-auto">
                <img alt="Profile" className="w-full h-full object-cover" src="/lovable-uploads/6314bea6-76f1-4258-9d6b-b19f74663b26.jpg" />
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute w-full h-full rounded-full border-4 border-dashed border-blue-300 top-4 left-4 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;