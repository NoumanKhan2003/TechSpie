import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CallToAction = ({ title, description, buttonText, buttonLink }) => {
  const ctaRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    ctaTl.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.2)" }
    );

    return () => {
      if (ctaTl) ctaTl.kill();
    };
  }, []);

  return (
    <section
      ref={ctaRef}
      className="py-10 my-12 rounded-4xl overflow-hidden relative bg-gradient-to-r from-purple-600 to-indigo-600"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 bg-white rounded-full w-64 h-64 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 bg-white rounded-full w-80 h-80 -ml-40 -mb-40"></div>
      </div>

      <div
        ref={contentRef}
        className="max-w-4xl mx-auto text-center px-6 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <Link
          to={buttonLink}
          className="inline-block bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
