import React from "react";
import img from "../../Assets/aviral.jpg";
import img2 from "../../Assets/nouman.jpg";
import { Typography } from "@mui/material";
// Example data from JSON
const works = [
  {
    id: 1,
    year: 2023,
    client: "<client name>",
    title: "<Project Title>",
    tags: ["Branding", "Website", "SEO"],
    image: img,
    mainText: "Website",
    arrowBg: "#cf90e5",
  },
  {
    id: 2,
    year: 2025,
    client: "Nouman Khan Neville",
    title: "<Project Title>",
    tags: ["Branding", "Website", "SEO"],
    image: img2,
    mainText: "Website33",
    arrowBg: "#cf90e5",
  },
  {
    id: 3,
    year: 2023,
    client: "<client name>",
    title: "<Project Title>",
    tags: ["Branding", "Website", "SEO"],
    image: img,
    mainText: "Website",
    arrowBg: "#cf90e5",
  },
  {
    id: 4,
    year: 2023,
    client: "<client name>",
    title: "<Project Title>",
    tags: ["Branding", "Website", "SEO"],
    image: img2,
    mainText: "Website",
    arrowBg: "#cf90e5",
  },
];

const WorkCard = ({ work }) => (
  <div className="flex flex-col justify-between">
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
      {/* Top Tag Buttons */}
      <div className="absolute flex gap-2 top-3 right-3 z-20">
        {work.tags.map((tag) => (
          <button
            key={tag}
            className="bg-gray-100 text-black text-xs md:text-base px-3 md:px-5 py-1.5 md:py-2 rounded-full font-medium shadow-sm transition hover:bg-gray-200"
          >
            {tag}
          </button>
        ))}
      </div>
      {/* Main Image */}
      <div className="aspect-[1.35/1] w-full relative">
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover object-center"
        />
        {/* Overlaid MainText */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-white text-[10vw] md:text-[6vw] font-bold tracking-wider flex items-center"
            style={{
              fontFamily: "Montserrat, Arial, sans-serif",
              WebkitTextStroke: "2px white",
              color: "transparent",
              letterSpacing: "0.1em",
            }}
          >
            {work.mainText}
          </span>
        </div>
        {/* Arrow circle */}
        <div className="absolute right-4 md:right-8 bottom-4 md:bottom-8 z-10">
          <div
            className="w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center"
            style={{
              background: work.arrowBg,
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path d="M13 27L27 13" />
              <path d="M15 13h12v12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    {/* Data line at the bottom */}
    <div className="mt-5 md:mt-8 px-1">
      <div className="flex flex-wrap items-center text-gray-800 text-base md:text-lg font-medium gap-2 mb-1 md:mb-2">
        <span>{work.year}</span>
        <span className="text-xl md:text-2xl">•</span>
        <span>{work.client}</span>
      </div>
      <div className="text-xl md:text-3xl font-semibold leading-tight">
        {work.title}
      </div>
    </div>
  </div>
);

const Work = () => {
  // Split works into left and right columns based on index
  const leftWorks = works.filter((_, idx) => idx % 2 === 0);
  const rightWorks = works.filter((_, idx) => idx % 2 === 1);

  return (
    <>
      <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-center mb-2 text-gray-800 mt-8 md:mt-10">
        Our Work
      </h1>
      <div className="max-w-5xl mx-auto py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-2 sm:px-4">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-10 md:gap-20">
          {leftWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 md:gap-10">
          <h4 className="font-bold text-xl sm:text-3xl md:text-6xl font-abril text-blue-950 mb-2 md:mb-0 md:block hidden">
            • Take a Look at Our Projects
          </h4>
          {rightWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
