import React, { forwardRef } from "react";

const ProjectCard = forwardRef(({ project }, ref) => {
  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white group border border-gray-100 hover:-translate-y-2"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4">
            <span className="inline-block px-3 py-1 bg-white/90 text-blue-600 rounded-full text-xs font-medium">
              {project.category || "Web Application"}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base line-clamp-3">
          {project.description}
        </p>

        <div className="flex justify-between mb-5 text-sm text-gray-500 border-t border-gray-100 py-3">
          <span className="flex items-center">
            <span className="mr-1 text-blue-500">👤</span>
            {project.client}
          </span>
          <span className="flex items-center">
            <span className="mr-1 text-blue-500">📅</span>
            {project.year}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <button className="w-full mt-2 py-2.5 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-sm">
          View Project
        </button>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
