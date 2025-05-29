import React, { useEffect, useRef, useState, useMemo } from "react";
import ProjectList from "./ProjectList";
import FilterButton from "./filter/FilterButton";
import FilterDropdown from "./filter/FilterDropdown";

const ProjectGrid = ({ projects }) => {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [filters, setFilters] = useState({
    category: "All",
    year: "All",
    technologies: [],
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filterOptions = useMemo(() => {
    const categories = [
      "All",
      ...new Set(projects.map((project) => project.category || "Other")),
    ];

    const years = [
      "All",
      ...new Set(projects.map((project) => project.year)),
    ].sort((a, b) => b - a);

    const techs = [
      ...new Set(projects.flatMap((project) => project.technologies || [])),
    ].sort();

    return { categories, years, techs };
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (
        filters.category !== "All" &&
        (project.category || "Other") !== filters.category
      ) {
        return false;
      }

      if (filters.year !== "All" && project.year !== filters.year) {
        return false;
      }

      if (filters.technologies.length > 0) {
        const projectTechs = project.technologies || [];
        if (
          !filters.technologies.every((tech) => projectTechs.includes(tech))
        ) {
          return false;
        }
      }

      return true;
    });
  }, [projects, filters]);

  const toggleTechFilter = (tech) => {
    setFilters((prev) => {
      const newTechs = prev.technologies.includes(tech)
        ? prev.technologies.filter((t) => t !== tech)
        : [...prev.technologies, tech];

      return { ...prev, technologies: newTechs };
    });
  };

  const resetFilters = () => {
    setFilters({
      category: "All",
      year: "All",
      technologies: [],
    });
    setShowFilterDropdown(false);
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured{" "}
            <span className="text-blue-600" style={{ fontWeight: "600" }}>
              Projects
            </span>
          </h2>

          <FilterButton
            showFilterDropdown={showFilterDropdown}
            setShowFilterDropdown={setShowFilterDropdown}
            filters={filters}
            resetFilters={resetFilters}
          />

          {showFilterDropdown && (
            <FilterDropdown
              dropdownRef={dropdownRef}
              filters={filters}
              setFilters={setFilters}
              filterOptions={filterOptions}
              toggleTechFilter={toggleTechFilter}
              resetFilters={resetFilters}
              setShowFilterDropdown={setShowFilterDropdown}
            />
          )}
        </div>

        <ProjectList
          filteredProjects={filteredProjects}
          resetFilters={resetFilters}
        />
      </div>
    </div>
  );
};

export default ProjectGrid;
