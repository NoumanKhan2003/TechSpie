import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa6";
import { SiMongodb, SiTailwindcss, SiFigma } from "react-icons/si";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const ourProcess = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your goals, audience, and challenges to tailor our solutions.",
    icon: <HiMagnifyingGlassPlus size={40} />,
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
    icon: <MdOutlineDesignServices size={40} />,
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
    icon: <FaCode size={40} />,
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
    icon: <FiNavigation size={40} />,
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

          // Apply hover animation
          gsap.to(card, {
            scale: 1.08,
            y: -8,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 15px 30px -10px rgba(124, 58, 237, 0.5)",
            background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)",
          });

          gsap.to(icon, {
            scale: 1.3,
            rotationY: 360,
            duration: 0.6,
            ease: "back.out(1.7)",
            color: "#fff",
            clearProps: "rotation,y", // Clear any floating animation properties
          });
        },

        leave: () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.in",
            boxShadow: "0 5px 15px -5px rgba(124, 58, 237, 0.2)",
            background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)",
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
            color: "#c4b5fd",
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
    <div className="container mx-auto px-4 bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 mt-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-800 via-purple-800 to-slate-900"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-12 rounded-3xl shadow-2xl backdrop-blur-md bg-slate-900/50">
          <h1
            ref={heroTitleRef}
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          >
            <span className="inline-block bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">
              Crafting Digital Experiences
            </span>
          </h1>
          <p
            ref={heroTextRef}
            className="text-lg md:text-xl mb-6 text-gray-200"
          >
            We deliver innovative software solutions to help your business grow
            beautifully.
          </p>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-slate-900/50 backdrop-blur-sm">
        <div className="md:flex md:space-x-8 px-4">
          <div
            ref={missionRef}
            className="md:w-1/2 p-6 bg-slate-800/50 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-violet-300">
              Our Mission
            </h2>
            <p className="text-gray-200">
              Our mission is to empower businesses by providing cutting-edge
              software and exceptional service.
            </p>
          </div>
          <div
            ref={valuesRef}
            className="md:w-1/2 mt-8 md:mt-0 p-6 bg-slate-800/50 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-violet-300">
              Our Values
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>
                <strong className="text-violet-300">Innovation</strong>:
                Embracing new ideas to solve complex problems.
              </li>
              <li>
                <strong className="text-violet-300">Integrity</strong>: Building
                trust through transparency and honesty.
              </li>
              <li>
                <strong className="text-violet-300">Customer Centricity</strong>
                : Putting clients first in everything we do.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-slate-900">
        <h2
          ref={techTitleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
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
              className="tech-card p-6 rounded-xl text-gray-200 font-semibold bg-gradient-to-br from-slate-800 to-violet-900 transition-all duration-300 flex flex-col items-center gap-3 min-w-[140px] shadow-lg shadow-violet-900/20 overflow-hidden cursor-pointer"
            >
              <div
                ref={addToTechIconsRefs}
                className="icon-container text-violet-300 text-4xl relative z-10"
              >
                {tech.icon}
              </div>
              <span className="relative z-10">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 overflow-x-hidden" ref={processContainerRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" ref={processTextRef}>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6 mt-4"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a structured yet flexible approach to deliver
              high-quality software tailored to your goals.
            </p>
          </div>

          {/* Desktop Process Line */}
          <div className="hidden md:block relative mb-16">
            <div
              ref={processLineRef}
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 transform -translate-y-1/2"
            ></div>
            <div className="flex justify-between">
              {ourProcess.map((step, index) => (
                <div key={index} className="relative">
                  <div
                    ref={addToDotsRefs}
                    className={`w-8 h-8 rounded-full ${step.bg} border-4 ${step.borderColor} z-10 relative hover-rotate`}
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
                <div className="group relative bg-slate-800/80 backdrop-blur-sm p-6 border border-slate-700 rounded-xl shadow-lg shadow-violet-900/20 transition-all duration-300 hover-3d">
                  <div
                    ref={addToNumberBadgesRefs}
                    className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-slate-900 shadow-md flex items-center justify-center border-2 border-violet-500 font-bold text-lg text-violet-300"
                  >
                    {step.step}
                  </div>

                  <div
                    ref={addToIconsRefs}
                    className={`${step.bg} ${step.iconColor} ${step.hoverBg} p-4 rounded-full mb-6 transition-colors duration-300 w-16 h-16 flex items-center justify-center hover-tilt`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
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
