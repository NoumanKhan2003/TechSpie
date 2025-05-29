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
 
    <div className="relative overflow-hidden py-20  bg-gradient-to-b from-purple-100 via-purple-50 to-white">
      <div
        className="
          relative z-10 max-w-4xl mx-auto text-center px-8 py-16
          rounded-3xl m-10
          bg-white/70 backdrop-blur-md border border-purple-200
          shadow-lg shadow-purple-300
          transition-transform transition-shadow transition-opacity duration-700 ease-in-out
          hover:shadow-2xl hover:scale-105 hover:opacity-100
          opacity-90
          "
      >
        <h1
          className="
            text-4xl md:text-6xl font-extrabold leading-tight
            text-purple-900
            transition-colors duration-500
            hover:text-purple-800
          "
        >
          Exceptional Digital Solutions
        </h1>

        <p
          className="
            text-lg md:text-xl mt-6
            text-purple-700
            leading-relaxed max-w-3xl mx-auto
            transition-opacity duration-700
            opacity-90
            hover:opacity-100
          "
        >
          From web development to digital marketing, we provide comprehensive
          solutions that drive growth and deliver exceptional results for your
          business.
        </p>
      </div>
    </div>
  );
}



export default ServiceHero;
