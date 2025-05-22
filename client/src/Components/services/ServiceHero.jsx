import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const ServiceHero = () => {
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const mainTl = gsap.timeline();
    
    // Hero section animation
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
    <section className="py-28 bg-gradient-to-r from-violet-400 to-indigo-400 text-white text-center px-4">
      <h1 ref={headerRef} className="text-4xl md:text-5xl font-bold mb-4">
        Our Services
      </h1>
      <p ref={subtitleRef} className="text-lg md:text-xl">
        We provide a wide range of digital solutions to help your business
        thrive.
      </p>
    </section>
  );
};

export default ServiceHero;