import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "../../utils/gsapUtils.js";

const CtaSection = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    // Set initial state to ensure visibility in case of scroll position issues
    gsap.set(ctaRef.current.children, { opacity: 1, y: 0 });

    // Create the animation timeline
    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.8, ease: "power1.out" },
    });

    tl.from(ctaRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
    });

    // Create the scroll trigger
    const st = ScrollTrigger.create({
      trigger: ctaRef.current,
      start: "top 80%",
      onEnter: () => {
        tl.play();
      },
      onEnterBack: () => {
        // Make sure elements are visible when scrolling back up
        gsap.set(ctaRef.current.children, { opacity: 1, y: 0 });
      },
      // Ensure animation completes even if user scrolls quickly
      onLeave: () => {
        if (!tl.isComplete()) tl.progress(1);
      },
    });

    // Cleanup function
    return () => {
      tl.kill();
      st.kill();
    };
  }, []);

  return (
    <div
      ref={ctaRef}
      className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl mb-8 px-4"
    >
      <h2 className="text-3xl font-bold text-white mb-4">
        Have a project in mind?
      </h2>
      <p className="text-blue-100 mb-8 max-w-xl mx-auto">
        We'd love to help bring your ideas to life with our expertise and
        innovative solutions
      </p>
      <Link
        to="/contact"
        className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition duration-300 font-bold shadow-md transform hover:scale-105"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default CtaSection;
