import React, {useState, useEffect, useRef } from "react";

function WorkHeader() {
  const[isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (    
      <section className="relative py-6 md:py-8 lg:py-10 w-full overflow-hidden bg-gradient-to-br from-purple-50 via-purple-25 to-white text-white">
      
      <div className="absolute inset-0">
 
        <div className="absolute top-3/4 left-1/5 w-52 h-52 bg-purple-300 rounded-full opacity-30 animate-ping blur-2xl"></div>

        <div className="absolute top-32 right-16 w-48 h-48 bg-purple-300 rounded-full opacity-40 animate-bounce blur-lg"></div>
        
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple-300 rounded-full opacity-45 animate-bounce blur-md"></div>
  
        <div className="absolute top-16 left-3/4 w-24 h-24 bg-purple-300 rounded-full opacity-45 animate-bounce blur-md"></div>
        
        <div className="absolute bottom-40 left-12 w-48 h-48 bg-purple-200 rounded-full opacity-25 animate-ping blur-2xl"></div>
        
      </div>

      <div className="relative z-10 w-full px-0 text-center" ref={heroRef}>
        <div className="max-w-6xl mx-auto px-4">
          
          <div
            className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              <span className="block text-gray-900 drop-shadow-lg mb-2">Explore</span>
              <span className="block relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 transition-all duration-500">
                  Our Creative Work
                </span>
                
                <div className="absolute -bottom-3 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-60"></div>
              </span>
            </h1>
          </div>

          <div
            className={`mb-6 transition-all duration-800 delay-600 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
          >
            <div className="relative flex items-center justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-300 rounded-full"></div>
              <div className="w-10 h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-3 rounded-full relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse"></div>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-300 to-transparent rounded-full"></div>
            </div>
          </div>

          <div
            className={`mb-8 transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
          >
            <div className="max-w-4xl mx-auto">
              
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                <span className="text-gray-800 font-light">Explore our collection of </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 font-bold">
                  exceptional projects
                </span>
                <span className="text-gray-700 font-light"> that showcase our passion for design and innovation</span>
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
          >
            <button className="px-10 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-700 hover:via-blue-700 hover:to-purple-800 text-white font-bold text-base rounded-full shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHeader;
