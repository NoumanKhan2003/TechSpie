import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen flex items-center pt-10">
      {" "}
      <section className="container mx-auto px-4 z-10 flex flex-col md:flex-row gap-12 py-24">
        <div className="w-full md:w-1/2 space-y-6">
          <h1>
            <span className="block text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent pl-2 pt-3">
              Transforming Ideas
            </span>
            <span className="block text-3xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent pl-2">
              into Scalable Software
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed pl-2">
            We provide custom software development services to help businesses,
            startups, and individuals turn their ideas into reality. From web
            and mobile apps to cloud solutions and enterprise systems, we
            deliver end-to-end solutions tailored to your needs.
          </p>

          <div className="flex gap-4 pl-2">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-purple-200 transform hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-violet-600 text-violet-600 rounded-xl text-lg font-semibold hover:bg-violet-50 transform hover:-translate-y-0.5 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section (Right) */}
      </section>
    </main>
  );
};

export default Home;
