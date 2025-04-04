
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for managing online store operations, with analytics, inventory management, and order processing.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user roles, and progress tracking features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 3,
      title: "Finance Tracker",
      description: "A personal finance tracking application that helps users manage expenses, set budgets, and visualize spending patterns.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      tech: ["React", "Express", "PostgreSQL", "Redux"],
      liveLink: "#",
      repoLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-xs bg-blue-50 text-blue-600 rounded-full px-2 py-1 mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="flex items-center space-x-1">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </Button>
                  </a>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="flex items-center space-x-1">
                      <Github size={16} />
                      <span>Code</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
