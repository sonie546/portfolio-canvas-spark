
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row md:space-x-8 mt-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-gray-600 mb-4">
              Hello! I'm a passionate software developer with expertise in building web applications
              that are not only functional but also intuitive and efficient. My journey in tech began
              when I discovered my love for solving complex problems through code.
            </p>
            <p className="text-gray-600 mb-4">
              With over 5 years of experience in the industry, I've had the opportunity to work on a 
              diverse range of projects from e-commerce platforms to sophisticated data visualization 
              tools. I believe in writing clean, maintainable code and continuously learning to stay 
              at the forefront of technological advancements.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me hiking in the mountains, experimenting with new 
              cooking recipes, or contributing to open-source projects. I'm always open to discussing 
              new projects and opportunities!
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">20+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">10+</h3>
                <p className="text-gray-600">Open Source Contributions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
