import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroTitleRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 0.6,
      },
    });

    masterTl
      .fromTo(
        heroTitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        heroTextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

    return () => {
      masterTl.kill();
    };
  }, []);

  return (
 <section className="min-h-[70vh] flex items-start pt-20 relative">
  <div className="outer-container w-full">
    <div className="relative min-h-[70vh] w-full flex items-start justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-white text-purple-600">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-10 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
        <div className="absolute -bottom-6 left-20 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-4 mt-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold py-2">
          <span
            className="block text-black"
            style={{
              animation: "fadeFloat 3s ease-in-out infinite",
            }}
          >
            Innovating
          </span>
          <span
            className="block bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent py-2"
            style={{
              animation: "fadeFloat 3s ease-in-out infinite",
            }}
          >
            with Purpose
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed">
          We are a team of passionate innovators focused on turning groundbreaking ideas into cutting-edge digital experiences. Learn more about our journey and vision.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold rounded-lg transition-transform duration-500 hover:scale-105">
            <span className="relative z-10">Meet the Team</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group px-6 py-3 border-2 border-purple-300 text-purple-600 font-semibold rounded-lg backdrop-blur-sm hover:border-purple-500 hover:bg-purple-100 transition-transform duration-500 hover:scale-105">
            <span className="flex items-center justify-center">
              Explore Projects
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
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeFloat {
            0%, 100% { 
              transform: translateY(0);
              opacity: 1;
            }
            50% { 
              transform: translateY(-10px);
              opacity: 0.8;
            }
          }
        `}
      </style>
    </div>
  </div>
</section>




  );
};

export default AboutHero;
