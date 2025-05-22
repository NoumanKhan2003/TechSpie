import React, { useRef } from "react";
import { GiPuzzle } from "react-icons/gi";
import { FaBoltLightning } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { gsap } from "../../utils/gsapUtils";
import { useGSAP } from "@gsap/react";

const WhyChooseUs = () => {
  const textRef = useRef(null);
  const cardRefs = useRef([]);

  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 0.6,
      },
    });
    tl.fromTo(
      textRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }
    );
    tl.fromTo(
      cardRefs.current,
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=0.3"
    );
  });

  const features = [
    {
      icon: <GiPuzzle className="w-12 h-12 text-white" />,
      title: "Custom Solutions",
      description:
        "We tailor every solution to meet your specific business needs with high-quality, custom-built applications.",
    },
    {
      icon: <FaBoltLightning className="w-12 h-12 text-white" />,
      title: "Scalable & Reliable",
      description:
        "Our solutions grow with your business, ensuring performance, scalability, and reliability at every stage.",
    },
    {
      icon: <MdGroups className="w-12 h-12 text-white" />,
      title: "Expert Support",
      description:
        "Our team of experts is available for continuous support, ensuring you get the most from our solutions.",
    },
  ];

  return (
    <div className="relative py-24 z-10 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={textRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Discover the key reasons why our software solutions stand out, and
            how we can help your business scale and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group bg-white backdrop-blur-sm bg-opacity-90 p-8 rounded-2xl shadow-md transition-all duration-300 hover-3d-deep"
            >
              <div className="bg-gradient-to-br from-violet-400 to-purple-500 p-6 rounded-2xl mb-6 shadow-md group-hover:shadow-violet-200 transition-shadow duration-300 hover-tilt">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
