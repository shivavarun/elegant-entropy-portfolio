import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FeaturedProject } from '@/data/featuredProjects';

interface ProjectCardProps {
  project: FeaturedProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_8px_40px_rgba(97,218,251,0.12)] hover:border-white/20 hover:bg-white/[0.06]">
      {/* Scroll-animated Preview Window */}
      <div className="relative w-full h-52 md:h-64 overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 pointer-events-none" />
        <img
          src={project.previewImage}
          alt={`${project.title} website preview`}
          className="w-full object-cover object-top transition-all duration-[4s] ease-in-out group-hover:object-bottom"
          style={{ minHeight: '100%' }}
        />
        {/* Floating badge overlay */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-block bg-black/60 backdrop-blur-md text-gray-200 text-[10px] uppercase px-3 py-1.5 rounded-full font-semibold tracking-widest border border-white/10">
            {project.link ? 'Live Project' : 'Completed'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="mb-5 flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#61DAFB] transition-colors duration-300">
              {project.title}
            </h3>
            <span className="inline-block bg-white/[0.08] text-gray-300 text-xs px-3 py-1 rounded-full font-medium tracking-wide border border-white/5">
              {project.role}
            </span>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-[11px] font-semibold text-white/50 mb-3 uppercase tracking-[0.15em]">Highlights</h4>
          <ul className="space-y-2 text-sm">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#61DAFB] mr-3 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.link && (
          <div className="pt-5 border-t border-white/[0.06]">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-[#61DAFB] transition-colors duration-300 group/link"
            >
              View Live Site
              <ExternalLink size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
