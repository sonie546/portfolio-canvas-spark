
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Purchasing and Supplies Management",
      institution: "Taita Taveta University",
      year: "2014 - 2018",
      description: "Focused on software development methodologies and web technologies. Completed multiple internships and led the university's coding club."
    },
    {
      id: 2,
      degree: "Web Development Certification",
      institution: "Tech Academy",
      year: "2013 - 2014",
      description: "Intensive full-stack web development bootcamp covering modern technologies and industry best practices."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12">
          {education.map((item) => (
            <div key={item.id} className="mb-10 relative pl-8 border-l-2 border-blue-100 md:pl-10">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
                  <div className="flex items-center text-blue-600 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{item.year}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-3 text-gray-600">
                  <GraduationCap size={18} className="mr-2" />
                  <span>{item.institution}</span>
                </div>
                
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
