import React, { useRef } from "react";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { FaArrowsAltH } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discovery",
    number: "01",
    description:
      "We begin by understanding your business, goals, and challenges to define clear requirements.",
    icon: <HiMagnifyingGlassPlus size={40} />,
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
    borderColor: "border-purple-300",
    hoverBg: "hover:bg-purple-200",
    hoverBorder: "hover:border-purple-500",
    shadowColor: "shadow-purple-200",
  },
  {
    title: "Planning",
    number: "02",
    description:
      "We create a roadmap with timelines, milestones, and technologies tailored to your needs.",
    icon: <SlCalender size={40} />,
    bg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    borderColor: "border-indigo-300",
    hoverBg: "hover:bg-indigo-200",
    hoverBorder: "hover:border-indigo-500",
    shadowColor: "shadow-indigo-200",
  },
  {
    title: "Development",
    number: "03",
    description:
      "Our team builds your solution using agile development and continuous feedback.",
    icon: <FaArrowsAltH size={40} />,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderColor: "border-blue-300",
    hoverBg: "hover:bg-blue-200",
    hoverBorder: "hover:border-blue-500",
    shadowColor: "shadow-blue-200",
  },
  {
    title: "Launch & Support",
    number: "04",
    description:
      "We launch, monitor, and support your product, ensuring performance and growth.",
    icon: <FiNavigation size={40} />,
    bg: "bg-green-100",
    iconColor: "text-green-600",
    borderColor: "border-green-300",
    hoverBg: "hover:bg-green-200",
    hoverBorder: "hover:border-green-500",
    shadowColor: "shadow-green-200",
  },
];

const OurApproach = () => {
  const sectionRef = useRef(null);
  const processLineRef = useRef(null);
  const textRef = useRef(null);
  const stepsRef = useRef([]);
  const dotsRef = useRef([]);
  const iconsRef = useRef([]);
  const numberBadgesRef = useRef([]);

  stepsRef.current = [];
  dotsRef.current = [];
  iconsRef.current = [];
  numberBadgesRef.current = [];

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

  useGSAP(() => {
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "center 60%",
        scrub: 0.4,
      },
    });

    masterTl
      .fromTo(
        textRef.current,
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
  });

  return (
    <section className="py-24 overflow-x-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16" ref={textRef}>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Our Approach
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6 mt-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a structured yet flexible approach to deliver high-quality
            software tailored to your goals.
          </p>
        </div>

        {/* Desktop Process Line */}
        <div className="hidden md:block relative mb-12">
          <div
            ref={processLineRef}
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 transform -translate-y-1/2"
          ></div>
          <div className="flex justify-between">
            {steps.map((step, index) => (
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
          {steps.map((step, index) => (
            <div
              key={index}
              ref={addToStepsRefs}
              className="flex justify-center"
            >
              <div
                className={`group relative bg-white p-6 border border-gray-200 rounded-xl shadow-lg ${step.shadowColor} transition-all duration-300 hover-3d`}
              >
                <div
                  ref={addToNumberBadgesRefs}
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-gray-100 font-bold text-lg text-purple-800"
                >
                  {step.number}
                </div>

                <div
                  ref={addToIconsRefs}
                  className={`${step.bg} ${step.iconColor} ${step.hoverBg} p-4 rounded-full mb-6 transition-colors duration-300 w-16 h-16 flex items-center justify-center hover-tilt`}
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

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 hover-lift"
          >
            Start Your Project
            <FaArrowRight className="ml-2" size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
