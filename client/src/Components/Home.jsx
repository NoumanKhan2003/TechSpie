import React from "react";
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 mt-1">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-white rounded-md px-4 py-2 bg-[rgb(138, 12, 173)]"
            style={{ backgroundColor: "rgb(138, 12, 173)" }}
          >
            <span className="text-5xl md:text-6xl block mb-2">
              Transforming Ideas{" "}
            </span>
            <span className="text-3xl md:text-4xl">
              into Scalable Software{" "}
            </span>
          </h1>
          <p className="text-3xl text-gray-600 mb-6 font-semibold">
            We provide custom software development services to help businesses,
            startups, and individuals turn their ideas into reality. From web
            and mobile apps to cloud solutions and enterprise systems, we
            deliver end-to-end solutions tailored to your needs.
          </p>
          <button
            style={{ backgroundColor: "rgb(138, 1, 173)" }}
            className="text-white px-6 py-3 rounded-xl hover:opacity-90 transition duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Image Section (Right) */}
      </div>
    </div>
  );
};

export default Home;
