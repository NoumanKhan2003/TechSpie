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
    <section className="relative py-20 mt-12 text-gray-800 overflow-hidden">
      <div className="absolute inset-0"></div>

      <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 py-10">
        {/* Decorative animated blobs */}
        <div className="absolute inset-0 pointer-events-none h-100">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping"></div>
        </div>

        {/* Main content with minimal height and animated heading */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-8 py-10 rounded-3xl shadow-xl backdrop-blur-md bg-white/80 border border-white/20 hover:shadow-2xl transition-all duration-300">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-700 transition-all duration-700 ease-in-out">
            Our Story
          </span>

          <h1
            ref={heroTitleRef}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight transition-all duration-700 ease-in-out opacity-0 translate-y-4"
          >
            <span className="inline-block bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
              Passionate About Innovation
            </span>
          </h1>

          <p
            ref={heroTextRef}
            className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed opacity-0 translate-y-4 transition-all duration-700 ease-in-out"
          >
            We're a team of creative thinkers and technical experts dedicated
            to transforming ideas into exceptional digital experiences that
            inspire and engage.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
              Meet Our Team
            </button>
            <button className="px-8 py-3 rounded-full border border-purple-300 text-purple-700 font-medium hover:bg-purple-50 transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out">
              Our Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
