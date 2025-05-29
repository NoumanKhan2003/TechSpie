import React, { useRef } from "react";
const WorkHeader = () => {
  const headerRef = useRef(null);

  return (
    <div
      ref={headerRef}
      className="py-20 px-4 relative bg-gradient-to-b from-blue-50 to-white shadow-md border-b border-gray-200"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="title-container mb-6">
          <h1 className="text-8xl font-black mb-4 text-gray-900 leading-none tracking-tight drop-shadow-sm">
            Our{" "}
            <span className="text-blue-700 relative inline-block">
              Work
              <span className="absolute bottom-1 left-0 w-full h-4 bg-blue-300 opacity-60 -z-10 transform -rotate-1"></span>
            </span>
          </h1>
        </div>

        <div className="accent-line w-32 h-2 bg-blue-600 mx-auto mb-8 rounded-full"></div>

        <p className="subtitle text-2xl text-gray-800 max-w-2xl mx-auto leading-relaxed font-normal">
          Discover the innovative solutions we've created for our clients
          <span className="block mt-2 font-medium">
            across various industries and technologies
          </span>
        </p>

        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full -mr-16 -mt-16 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-200 rounded-full -ml-12 -mb-12 opacity-30"></div>
      </div>
    </div>
  );
};

export default WorkHeader;
