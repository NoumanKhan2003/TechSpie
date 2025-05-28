import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const tiltRef = useRef(null);

  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        20
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );

    // console.log(e.clientX - tiltRef.current.getBoundingClientRect().x);

    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );

  return (
    <main
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="min-h-screen flex items-center pt-10 relative"
    >
      <div className="outer-container w-full py-8">
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-white text-purple-600">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping"></div>
          </div>

          {/* Main Content Container */}
          <div
            className="relative z-10 text-center px-6 max-w-6xl mx-auto space-y-6"
            style={{ perspective: "1200px" }}
          >
            {/* Main Heading */}
            <h1 className=" text-5xl md:text-7xl lg:text-8xl font-bold py-4">
              <span className="block text-black">Build the</span>
              <span className="block bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent animate-pulse py-4">
                Future Today
              </span>
              {/* <span className="block">Today</span> */}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-xl text-black md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into reality with our cutting-edge platform.
              Experience the power of innovation at your fingertips.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:rotate-x-6 hover:rotate-y-3"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                className="group px-8 py-4 border-2 border-purple-300 text-purple-600 font-semibold rounded-lg backdrop-blur-sm hover:border-purple-500 hover:bg-purple-100 transition-transform duration-500 hover:scale-105 hover:rotate-y-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="flex items-center justify-center">
                  Watch Demo
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10V7a3 3 0 00-3-3H6a3 3 0 00-3 3v1"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats Section with 3D hover */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Active Users", value: "10M+" },
                { label: "Uptime", value: "99.9%" },
                { label: "Support", value: "24/7" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center transition-transform duration-500 hover:scale-105 hover:-rotate-x-3 hover:rotate-y-3"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 animate-bounce text-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-purple-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce rotate-3">
            <div className="w-6 h-10 border-2 border-purple-200 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
