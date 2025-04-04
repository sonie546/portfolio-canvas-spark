
import React from 'react';

const Skills = () => {
  const frontendSkills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", 
    "React.js", "Next.js", "TailwindCSS", "Redux"
  ];
  
  const backendSkills = [
    "Node.js", "Express", "Python", "Django",
    "MongoDB", "PostgreSQL", "Firebase", "REST API"
  ];
  
  const toolsSkills = [
    "Git", "GitHub", "Docker", "AWS", 
    "CI/CD", "Jest", "Webpack", "Figma"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Frontend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Frontend Development</h3>
            <div className="flex flex-wrap">
              {frontendSkills.map((skill, index) => (
                <span key={index} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Backend Development</h3>
            <div className="flex flex-wrap">
              {backendSkills.map((skill, index) => (
                <span key={index} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Tools & Technologies</h3>
            <div className="flex flex-wrap">
              {toolsSkills.map((skill, index) => (
                <span key={index} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
