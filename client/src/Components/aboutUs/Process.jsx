import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ourProcess } from "../../data/aboutUsData.jsx";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const processContainerRef = useRef(null);
  const processLineRef = useRef(null);
  const processTextRef = useRef(null);

  // Array refs for grouped animation targets
  const stepsRef = useRef([]);
  const dotsRef = useRef([]);
  const iconsRef = useRef([]);
  const numberBadgesRef = useRef([]);

  // Initialize empty arrays for collection
  stepsRef.current = [];
  dotsRef.current = [];
  iconsRef.current = [];
  numberBadgesRef.current = [];

  // Helper functions to collect refs for grouped animations
  const addToStepsRefs = (el) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  const addToDotsRefs = (el) => {
    if (el && !dotsRef.current.includes(el)) {
      dotsRef.current.push(el);
    }
  };

  const addToIconsRefs = (el) => {
    if (el && !iconsRef.current.includes(el)) {
      iconsRef.current.push(el);
    }
  };

  const addToNumberBadgesRefs = (el) => {
    if (el && !numberBadgesRef.current.includes(el)) {
      numberBadgesRef.current.push(el);
    }
  };

  useEffect(() => {
    // Process section animations - matches Approach component
    const processTl = gsap.timeline({
      scrollTrigger: {
        trigger: processContainerRef.current,
        start: "top 85%",
        end: "center 60%",
        scrub: 0.4,
      },
    });

    processTl
      .fromTo(
        processTextRef.current,
        { y: 60, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        processLineRef.current,
        { width: "0%", opacity: 0 },
        { width: "100%", opacity: 1, duration: 1.2, ease: "power2.inOut" }
      )
      .fromTo(
        dotsRef.current,
        { scale: 0, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: { each: 0.2, from: "left" },
          duration: 0.6,
          ease: "back.out(2)",
        },
        "-=0.8"
      )
      .fromTo(
        stepsRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: { each: 0.2, from: "left" },
          duration: 0.8,
          ease: "elastic.out(1, 0.75)",
        },
        "-=0.4"
      )
      .fromTo(
        numberBadgesRef.current,
        {
          rotation: -180,
          scale: 0,
          opacity: 0,
        },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          stagger: { each: 0.15, from: "left" },
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

    return () => {
      processTl.kill();
    };
  }, []);

  return (
    <section
      className="py-24 overflow-x-hidden bg-white"
      ref={processContainerRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16" ref={processTextRef}>
          <h2 className="text-7xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1 font-noto-serif">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-purple-700 mx-auto mb-6 mt-1"></div>
          <p className="text-xl text-gray-700 max-w-6xl mx-auto">
            We follow a structured yet flexible approach to deliver high-quality
            software tailored to your goals. From the initial consultation to
            final deployment, our team collaborates closely with you at every
            step.
          </p>
        </div>

        {/* Desktop Process Line */}
        <div className="hidden md:block relative mb-16">
          <div
            ref={processLineRef}
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 transform -translate-y-1/2"
          ></div>
          <div className="flex justify-between">
            {ourProcess.map((step, index) => (
              <div key={index} className="relative">
                <div
                  ref={addToDotsRefs}
                  className={`w-8 h-8 rounded-full bg-white border-4 border-purple-300 z-10 relative hover-rotate`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 lg:gap-8">
          {ourProcess.map((step, index) => (
            <div
              key={index}
              ref={addToStepsRefs}
              className="flex justify-center"
            >
              <div className="group relative bg-white p-6 border border-gray-200 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover-3d">
                <div
                  ref={addToNumberBadgesRefs}
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-purple-400 font-bold text-lg text-purple-600"
                >
                  {step.step}
                </div>

                <div
                  ref={addToIconsRefs}
                  className={`bg-purple-50 text-purple-600 hover:bg-purple-100 p-4 rounded-full mb-6 transition-colors duration-300 w-16 h-16 flex items-center justify-center hover-tilt`}
                >
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
