import React, { useEffect, useRef } from "react";
import { gsap } from "../../utils/gsapUtils";

const TeamHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="relative py-20 md:py-28 lg:py-32 w-full overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-600 text-white">
      <div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        ref={heroRef}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
            Meet Our Team
            <span className="block h-1 w-24 md:w-32 bg-gradient-to-r from-purple-300 to-blue-300 mx-auto mt-4 rounded-full"></span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-purple-100 leading-relaxed font-light">
            The talented people behind Codespie who bring creativity, expertise,
            and passion to every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
