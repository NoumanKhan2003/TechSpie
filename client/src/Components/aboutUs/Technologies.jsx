import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStack } from "../../data/aboutUsData";

gsap.registerPlugin(ScrollTrigger);

const TechnologiesSection = () => {
  const techStackRef = useRef(null);
  const techTitleRef = useRef(null);
  const techIconsRef = useRef([]);

  // Initialize empty array for collection
  techIconsRef.current = [];

  const addToTechIconsRefs = (el) => {
    if (el && !techIconsRef.current.includes(el)) {
      techIconsRef.current.push(el);
    }
  };

  // Add a dedicated function for applying floating animations
  const applyFloatingAnimations = () => {
    // Clear any existing animations
    techIconsRef.current.forEach((icon) => {
      gsap.killTweensOf(icon);
    });

    // Apply new floating animations
    techIconsRef.current.forEach((icon, index) => {
      // Create random but smooth floating effect
      const yAmount = 8 + Math.random() * 5; // Random float amount
      const duration = 2 + Math.random() * 1.5; // Random duration
      const delay = index * 0.1; // Staggered start

      gsap.to(icon, {
        y: yAmount * (index % 2 === 0 ? 1 : -1), // Alternate up/down
        rotate: index % 2 === 0 ? 5 : -5, // Gentle rotation
        duration: duration,
        delay: delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        onComplete: () => gsap.set(icon, { clearProps: "all" }),
      });
    });
  };

  useEffect(() => {
    // Enhanced Technology section animations with improved structure
    const techTl = gsap.timeline({
      scrollTrigger: {
        trigger: techStackRef.current,
        start: "top 90%",
        toggleActions: "play none none reset",
      },
      onComplete: applyFloatingAnimations, // Apply floating animations after initial animation
    });

    // Initial animations for tech section
    techTl
      .fromTo(
        techTitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }
      )
      .fromTo(
        techStackRef.current.children,
        {
          scale: 0.8,
          opacity: 0,
          y: 30,
          rotationX: 15, // Add a slight 3D tilt
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotationX: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "back.out(1.2)",
        },
        "-=0.3"
      );

    // Tech card hover effects
    document.querySelectorAll(".tech-card").forEach((card, idx) => {
      const icon = card.querySelector(".icon-container");

      // Create hover effect context
      const hoverContext = {
        enter: () => {
          // Pause any existing floating animation on this icon
          gsap.killTweensOf(icon);

          // Apply hover animation with lighter colors
          gsap.to(card, {
            scale: 1.08,
            y: -8,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 15px 30px -10px rgba(147, 197, 253, 0.5)",
            background: "linear-gradient(135deg, #ddd6fe 0%, #bfdbfe 100%)",
          });

          gsap.to(icon, {
            scale: 1.3,
            rotationY: 360,
            duration: 0.6,
            ease: "back.out(1.7)",
            color: "#6366f1",
            clearProps: "rotation,y", // Clear any floating animation properties
          });
        },

        leave: () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.in",
            boxShadow: "0 5px 15px -5px rgba(196, 181, 253, 0.2)",
            background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
            onComplete: () => {
              // Reapply floating animation after hover ends
              const yAmount = 8 + Math.random() * 5;
              const duration = 2 + Math.random() * 1.5;

              gsap.to(icon, {
                y: yAmount * (idx % 2 === 0 ? 1 : -1),
                rotate: idx % 2 === 0 ? 5 : -5,
                duration: duration,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            },
          });

          gsap.to(icon, {
            scale: 1,
            rotationY: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            color: "#8b5cf6",
          });
        },
      };

      // Add event listeners
      card.addEventListener("mouseenter", hoverContext.enter);
      card.addEventListener("mouseleave", hoverContext.leave);

      // Store for cleanup
      card._hoverContext = hoverContext;
    });

    return () => {
      // Cleanup animations
      techTl.kill();

      // Clean up tech card event listeners
      document.querySelectorAll(".tech-card").forEach((card) => {
        if (card._hoverContext) {
          card.removeEventListener("mouseenter", card._hoverContext.enter);
          card.removeEventListener("mouseleave", card._hoverContext.leave);
          delete card._hoverContext;
        }
      });

      // Kill all animations
      techIconsRef.current.forEach((icon) => {
        gsap.killTweensOf(icon);
      });
    };
  }, []);

  return (
    <section className="py-2 bg-gradient-to-b from-white to-blue-50">
      <h2
        ref={techTitleRef}
        className="text-3xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-snug font-noto-serif"
      >
        Technologies We Use
      </h2>
      <div
        ref={techStackRef}
        className="flex flex-wrap justify-center gap-8 text-center"
      >
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="tech-card p-6 rounded-2xl text-gray-700 font-semibold bg-gradient-to-br from-white to-blue-50 transition-all duration-300 flex flex-col items-center gap-3 md:min-w-[160px] min-w-[130px] shadow-md border border-blue-100 overflow-hidden cursor-pointer"
          >
            <div
              ref={addToTechIconsRefs}
              className="icon-container text-indigo-500 text-8xl relative z-10"
            >
              {tech.icon}
            </div>
            <span className="relative z-10">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
