import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../utils/gsapUtils.js";

const WhyChooseUs = () => {
  const whyChooseUsRef = useRef(null);

  useEffect(() => {
    const sectionEl = whyChooseUsRef.current;
    // Why Choose Us section - parallax and reveal animation
    gsap.fromTo(
      sectionEl,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 85%",
          toggleActions: "play none none reverse",
          scrub: 0.5,
        },
      }
    );

    return () => {
      const triggers = ScrollTrigger.getAll().filter(
        (trigger) => trigger.vars.trigger === sectionEl
      );
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 bg-white text-center px-4">
      <div ref={whyChooseUsRef} className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[rgb(138,12,173)]">
          Why Choose Us?
        </h2>
        <p className="text-gray-700 text-lg">
          We combine creativity, technology, and strategy to deliver impactful
          digital experiences. From concept to launch, we collaborate closely
          with you to create tailored software that truly solves problems.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
