import React, {useState, useEffect, useRef } from "react";

function TeamHero() {
  const[isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (    
      <section className="relative pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-16 w-full overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-white text-white">
      <div className="absolute inset-0">
        <div className="absolute top-32 right-16 w-48 h-48 bg-purple-300 rounded-full opacity-45 animate-bounce blur-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple-300 rounded-full opacity-50 animate-bounce blur-md"></div>
        <div className="absolute top-16 left-3/4 w-24 h-24 bg-purple-300 rounded-full opacity-50 animate-bounce blur-md"></div>
        <div className="absolute bottom-16 left-1/6 w-32 h-32 bg-violet-200 rounded-full opacity-48 animate-ping blur-lg"></div>
        <div className="absolute bottom-40 left-12 w-48 h-48 bg-purple-200 rounded-full opacity-55 animate-ping blur-lg"></div>
      </div>

      <div className="relative z-10 w-full px-0 text-center" ref={heroRef}>
        <div className="max-w-5xl mx-auto px-4">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tight leading-none transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <span className="text-gray-900 drop-shadow-lg">Meet The</span>
            <br />
            <span className="text-purple-700 relative inline-block hover:scale-105 transform transition-all duration-300">
              Creative Minds
              {/* <span className="absolute bottom-2 left-0 w-full h-6 bg-gradient-to-r from-purple-400 to-pink-400 opacity-60 -z-10 transform -rotate-1 hover:rotate-1 hover:scale-110 transition-all duration-300"></span> */}
            </span>
          </h1>

          <div
            className={`mb-6 transition-all duration-800 delay-600 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
          >
            <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mx-auto rounded-full relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulse"></div>
            </div>
          </div>

          <p
            className={`text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light mb-6 transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
          >
            <span className="text-gray-800 font-medium">Behind every</span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
              extraordinary project
            </span>{" "}
            <span className="text-gray-700">is a team of passionate innovators who turn</span>{" "}
            <span className="text-purple-700 font-semibold hover:text-purple-800 transition-colors duration-300">
              dreams into digital reality
            </span>
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">Meet Our Team</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Our Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;