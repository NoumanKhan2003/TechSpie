import React, { useState } from "react";

const ServiceHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative w-full bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 overflow-hidden">
        {/* Blob Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 pt-12">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Main Heading */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                style={{
                  fontFamily: "Noto Serif",
                  animation: "fadeFloat 3s ease-in-out infinite",
                }}
              >
                <span className="inline-block">Transform</span>{" "}
                <span className="inline-block text-purple-600">Your</span>{" "}
                <span className="inline-block">Business</span>
                <br />
                <span className="inline-block text-purple-700">
                  With Our
                </span>{" "}
                <span className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
            </div>
            <div
              className={`mb-3 transition-all duration-800 delay-600 ${
                isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            >
              <div className="relative flex items-center justify-center">
                <div className="w-30 h-1 bg-gradient-to-r from-transparent to-blue-300 rounded-full"></div>
                <div className="w-15 h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-3 rounded-full relative overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse"></div>
                </div>
                <div className="w-30 h-1 bg-gradient-to-r from-blue-300 to-transparent rounded-full"></div>
              </div>
            </div>
            {/* Subheading */}
            <div className="max-w-3xl mx-auto">
              <p
                className={`text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                We deliver cutting-edge digital solutions that drive growth,
                enhance efficiency, and transform the way you do business. From
                strategy to implementation, our expert team is here to turn your
                vision into reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <button
                className={`px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  animation: "zoomInOut 3s ease-in-out infinite",
                }}
              >
                Get Started Today
              </button>
              <button
                className={`px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 hover:shadow-lg transition-all duration-1000 delay-800 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  animation: "zoomInOut 3s ease-in-out infinite",
                }}
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.08);
            }
          }
              @keyframes fadeFloat {
            0%, 100% { 
              transform: translateY(0);
              opacity: 1;
            }
            50% { 
              transform: translateY(-10px);
              opacity: 0.9;
            }
          }
        `}
      </style>
    </>
  );
};

export default ServiceHero;
