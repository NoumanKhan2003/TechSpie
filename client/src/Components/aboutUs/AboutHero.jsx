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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-indigo-100 to-white"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-12 rounded-3xl shadow-lg backdrop-blur-md bg-white/70">
        <h1
          ref={heroTitleRef}
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
        >
          <span className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Crafting Digital Experiences
          </span>
        </h1>
        <p ref={heroTextRef} className="text-lg md:text-xl mb-6 text-gray-700">
          We deliver innovative software solutions to help your business grow
          beautifully.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
