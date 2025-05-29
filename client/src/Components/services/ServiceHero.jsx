import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const ServiceHero = () => {
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const mainTl = gsap.timeline();

    mainTl
      .fromTo(
        headerRef.current,
        { opacity: 0, y: -50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );
  }, []);

  return (
<section
  className="relative w-full bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 overflow-hidden"
>
  {/* Blurred Blob Background */}
  <div
    className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-[500px] h-[500px] bg-purple-300 opacity-30 rounded-full filter blur-3xl"
    style={{
      animation: "pulseBlob 6s ease-in-out infinite",
    }}
  ></div>

  {/* Keyframes for animations */}
  <style>
    {`
      @keyframes fadeUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes pulseBlob {
        0%, 100% {
          transform: translateX(-50%) scale(1);
        }
        50% {
          transform: translateX(-50%) scale(1.1);
        }
      }
      @keyframes zoomInOut {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      }
    `}
  </style>

  <div className="container mx-auto px-4 pt-12"> {/* Added pt-12 for top padding */}
    <div className="flex flex-col items-center text-center space-y-8">
      {/* Main Heading with fade-up animation */}
      <div
        className="space-y-4"
        style={{
          animation: "fadeUp 1s ease-out forwards",
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
          <span className="inline-block">Transform</span>{" "}
          <span className="inline-block text-purple-600">Your</span>{" "}
          <span className="inline-block">Business</span>
          <br />
          <span className="inline-block text-purple-700">With Our</span>{" "}
          <span className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>
      </div>

      {/* Sub Paragraph */}
      <div className="max-w-3xl mx-auto">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
          We deliver cutting-edge digital solutions that drive growth, enhance efficiency, and transform the way you
          do business. From strategy to implementation, our expert team is here to turn your vision into reality.
        </p>
      </div>

      {/* CTA Buttons with zoomInOut animation */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-300 ease-in-out"
          style={{
            animation: "zoomInOut 3s ease-in-out infinite",
          }}
        >
          Get Started Today
        </button>
        <button
          className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-50 hover:shadow-lg transition-all duration-300 ease-in-out"
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


 
   
  );
}



export default ServiceHero;
