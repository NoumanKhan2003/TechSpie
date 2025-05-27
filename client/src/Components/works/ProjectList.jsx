import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ filteredProjects, resetFilters }) => {
  const projectsRef = useRef(null);
  const projectRefs = useRef([]);

  projectRefs.current = [];

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.killTweensOf(projectRefs.current);

    const tl = gsap.timeline();

    if (projectRefs.current.length > 0) {
      tl.to(projectRefs.current, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        stagger: 0.05,
        duration: 0.3,
        onComplete: () => {
          projectRefs.current = [];
        },
      });
    }

    tl.from(projectRefs.current, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all",
      delay: 0.2,
    });
  }, [filteredProjects]);

  return (
    <>
      <div
        ref={projectsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} ref={addToRefs} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl text-gray-500">
            No projects match the current filters
          </h3>
          <button
            onClick={resetFilters}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {filteredProjects.length > 6 && (
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 shadow-sm transition-all">
            Load More Projects
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectList;
