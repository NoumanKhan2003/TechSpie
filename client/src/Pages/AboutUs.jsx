import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaLightbulb,
  FaPaintBrush,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFigma } from "react-icons/si";


gsap.registerPlugin(ScrollTrigger);

const ourProcess = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your goals, audience, and challenges to tailor our solutions.",
    icon: <FaLightbulb size={40} />,
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
    borderColor: "border-purple-300",
    hoverBg: "hover:bg-purple-200",
    hoverBorder: "hover:border-purple-500",
    shadowColor: "shadow-purple-200",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create intuitive, beautiful interfaces focused on user experience.",
    icon: <FaPaintBrush size={40} />,
    bg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    borderColor: "border-indigo-300",
    hoverBg: "hover:bg-indigo-200",
    hoverBorder: "hover:border-indigo-500",
    shadowColor: "shadow-indigo-200",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build scalable, robust applications using the latest technologies.",
    icon: <FaLaptopCode size={40} />,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderColor: "border-blue-300",
    hoverBg: "hover:bg-blue-200",
    hoverBorder: "hover:border-blue-500",
    shadowColor: "shadow-blue-200",
  },
  {
    step: "04",
    title: "Delivery & Support",
    description:
      "We ensure a smooth launch and offer ongoing support and updates.",
    icon: <FaRocket size={40} />,
    bg: "bg-green-100",
    iconColor: "text-green-600",
    borderColor: "border-green-300",
    hoverBg: "hover:bg-green-200",
    hoverBorder: "hover:border-green-500",
    shadowColor: "shadow-green-200",
  },
];

const techStack = [
  {
    name: "React",
    icon: <FaReact className="text-4xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl" />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-4xl" />,
  },
  {
    name: "AWS",
    icon: <FaAws className="text-4xl" />,
  },
];

const AboutUs = () => {
  // Section and element refs for animation targeting
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const techStackRef = useRef(null);
  const techTitleRef = useRef(null);
  const processContainerRef = useRef(null);
  const processLineRef = useRef(null);
  const processTextRef = useRef(null);

  // Array refs for grouped animation targets
  const stepsRef = useRef([]);
  const dotsRef = useRef([]);
  const iconsRef = useRef([]);
  const numberBadgesRef = useRef([]);
  const techIconsRef = useRef([]);

  // Initialize empty arrays for collection
  stepsRef.current = [];
  dotsRef.current = [];
  iconsRef.current = [];
  numberBadgesRef.current = [];
  techIconsRef.current = [];

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
    // Hero and Mission section animations
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

    const missionTl = gsap.timeline({
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 90%",
        end: "top 60%",
        scrub: 0.6,
      },
    });

    missionTl.fromTo(
      missionRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

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

    // Enhanced Technology section animations with improved structure
    const techTl = gsap.timeline({
      scrollTrigger: {
        trigger: techStackRef.current,
        start: "top 80%",
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
      masterTl.kill();
      missionTl.kill();
      processTl.kill();
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
    <div className="container mx-auto px-4 bg-gray-50">
      {/* Hero Section */}
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
          <p
            ref={heroTextRef}
            className="text-lg md:text-xl mb-6 text-gray-700"
          >
            We deliver innovative software solutions to help your business grow
            beautifully.
          </p>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="md:flex md:space-x-8 px-4">
          <div
            ref={missionRef}
            className="md:w-1/2 p-6 bg-purple-50 rounded-xl border border-purple-100 shadow-sm"
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-600">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to empower businesses by providing cutting-edge
              software and exceptional service.
            </p>
          </div>
          <div
            ref={valuesRef}
            className="md:w-1/2 mt-8 md:mt-0 p-6 bg-indigo-50 rounded-xl border border-indigo-100 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Our Values
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong className="text-purple-600">Innovation</strong>:
                Embracing new ideas to solve complex problems.
              </li>
              <li>
                <strong className="text-purple-600">Integrity</strong>: Building
                trust through transparency and honesty.
              </li>
              <li>
                <strong className="text-purple-600">Customer Centricity</strong>
                : Putting clients first in everything we do.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <h2
          ref={techTitleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
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
              className="tech-card p-6 rounded-xl text-gray-700 font-semibold bg-gradient-to-br from-white to-blue-50 transition-all duration-300 flex flex-col items-center gap-3 min-w-[140px] shadow-md border border-blue-100 overflow-hidden cursor-pointer"
            >
              <div
                ref={addToTechIconsRefs}
                className="icon-container text-indigo-500 text-4xl relative z-10"
              >
                {tech.icon}
              </div>
              <span className="relative z-10">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section
        className="py-24 overflow-x-hidden bg-white"
        ref={processContainerRef}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" ref={processTextRef}>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto mb-6 mt-4"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We follow a structured yet flexible approach to deliver
              high-quality software tailored to your goals.
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
    </div>
  );
};

export default AboutUs;
