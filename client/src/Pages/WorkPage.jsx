import React, { useState } from "react";
import { projectsData } from "../Data/projectsData";
import ProjectGrid from "../Components/works/ProjectGrid";
import CtaSection from "../Components/works/CtaSection";
import WorkHeader from "../Components/works/WorkHeader";

const WorkPage = () => {
  const [filter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <WorkHeader />
      <ProjectGrid projects={filteredProjects} />
      <CtaSection />
    </div>
  );
};

export default WorkPage;
