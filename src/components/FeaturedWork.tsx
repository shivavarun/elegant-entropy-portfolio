import React from 'react';
import { featuredProjects } from '@/data/featuredProjects';
import { ProjectCard } from './ProjectCard';

const FeaturedWork: React.FC = () => {
  return (
    <section id="featured-work" className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Recent Work & Case Studies
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg">
            A selection of my recent professional work, highlighting expertise in full-stack development, modern web optimization, and responsive user interfaces. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
