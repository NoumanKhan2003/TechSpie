import React, {useState, useEffect} from "react";

function WorkHeader() {
  const[isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (    
      <div className="py-12 px-4 relative bg-gradient-to-br from-purple-50 via-purple-25 to-white shadow-2xl border-b border-purple-200 overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-10 animate-pulse blur-sm"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full opacity-15 animate-bounce blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-8 animate-ping blur-sm"></div>
      </div>

      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-20 animate-pulse blur-sm"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`max-w-3xl mx-auto relative z-10 bg-white bg-opacity-90 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-2xl shadow-xl border border-purple-100 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        
        <div
          className={`title-container mb-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-7xl font-black mb-4 text-gray-900 leading-none tracking-tight drop-shadow-lg">
            <span
              className={`inline-block transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              Our{" "}
            </span>
            <span
              className={`text-purple-700 relative inline-block transition-all duration-700 delay-400 hover:scale-105 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              Work
              <span className="absolute bottom-1 left-0 w-full h-4 bg-gradient-to-r from-purple-400 to-pink-400 opacity-70 -z-10 transform -rotate-1 transition-all duration-300 hover:rotate-1 hover:scale-110"></span>
              
              <span className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></span>
            </span>
          </h1>
        </div>

        
        <div
          className={`accent-line-container mb-8 transition-all duration-800 delay-600 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
        >
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mx-auto rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>
        </div>

        
        <div
          className={`subtitle-container transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed font-normal text-center">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              Discover the innovative solutions
            </span>{" "}
            we've created for our clients
            <span className="block mt-2 font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300">
              across various industries and technologies
            </span>
          </p>
        </div>

        
        <div
          className={`mt-8 text-center transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <button className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore Our Work
          </button>
        </div>
      </div>

    
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full -mr-16 -mt-16 opacity-20 animate-pulse blur-sm"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full -ml-12 -mb-12 opacity-20 animate-bounce blur-sm"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-15 animate-pulse blur-sm"></div>
    </div>
  );
};

export default WorkHeader;
