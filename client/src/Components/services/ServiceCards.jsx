import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../utils/gsapUtils.js";
import { FaTools, FaServer, FaMobileAlt } from "react-icons/fa";
import { FaCloudArrowUp } from "react-icons/fa6";
import { MdOutlineDesignServices, MdOutlineSupportAgent } from "react-icons/md";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions that streamline your business operations and boost productivity.",
    icon: <FaTools size={36} className="text-purple-600" />,
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
  },
  {
    title: "Web App Development",
    description:
      "Modern, scalable web applications built using the latest technologies and best practices.",
    icon: <FaServer size={36} className="text-indigo-600" />,
    bg: "bg-indigo-50",
    iconBg: "bg-indigo-100",
  },
  {
    title: "Mobile App Development",
    description:
      "iOS and Android apps designed to deliver seamless mobile experiences for your users.",
    icon: <FaMobileAlt size={36} className="text-blue-600" />,
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    title: "UI/UX Design",
    description:
      "Engaging, intuitive interfaces and experiences that put users first in every interaction.",
    icon: <MdOutlineDesignServices size={40} className="text-pink-600" />,
    bg: "bg-pink-50",
    iconBg: "bg-pink-100",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure cloud-native applications and infrastructure setup for scalable growth.",
    icon: <FaCloudArrowUp size={36} className="text-cyan-600" />,
    bg: "bg-cyan-50",
    iconBg: "bg-cyan-100",
  },
  {
    title: "Maintenance & Support",
    description:
      "Reliable post-launch support to keep your software optimized, secure, and up-to-date.",
    icon: <MdOutlineSupportAgent size={40} className="text-emerald-600" />,
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
  },
];

const ServiceCards = () => {
  const servicesRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const serviceIconsRef = useRef([]);

  // Reset array refs
  serviceCardsRef.current = [];
  serviceIconsRef.current = [];

  const addToServiceCardsRef = (el) => {
    if (el && !serviceCardsRef.current.includes(el)) {
      serviceCardsRef.current.push(el);
    }
  };

  const addToServiceIconsRef = (el) => {
    if (el && !serviceIconsRef.current.includes(el)) {
      serviceIconsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Services section - animated entry with staggered effect
    const servicesTl = gsap.timeline({
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });

    // Staggered card animations
    servicesTl
      .fromTo(
        serviceCardsRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotationX: 10,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
        }
      )
      // Icons animations with floating effect
      .fromTo(
        serviceIconsRef.current,
        { scale: 0, opacity: 0, rotation: -30 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=1.2"
      );

    // Add continuous floating animation to service icons
    serviceIconsRef.current.forEach((icon, index) => {
      gsap.to(icon, {
        y: index % 2 === 0 ? 8 : -8,
        rotation: index % 2 === 0 ? 5 : -5,
        duration: 2 + index * 0.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });

    // Add hover animations to service cards
    serviceCardsRef.current.forEach((card, index) => {
      const icon = card.querySelector(".icon-container");

      card.addEventListener("mouseenter", () => {
        // Card animation
        gsap.to(card, {
          y: -10,
          scale: 1.03,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
          ease: "power2.out",
        });

        // Kill existing icon animations
        gsap.killTweensOf(serviceIconsRef.current[index]);

        // New engaging icon hover animation
        gsap.to(icon, {
          scale: 1.15,
          duration: 0.4,
          ease: "elastic.out(1.2, 0.5)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)",
        });

        // Create pulsing glow effect
        gsap.to(icon, {
          boxShadow: "0 0 20px rgba(124, 58, 237, 0.7)",
          repeat: 1,
          yoyo: true,
          duration: 0.8,
        });

        // Subtle movement of the icon content
        gsap.to(icon.children[0], {
          y: -3,
          scale: 1.1,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        // Card animation
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          duration: 0.3,
          ease: "power2.in",
        });

        // Icon animation reset
        gsap.to(icon, {
          scale: 1,
          boxShadow: "none",
          backgroundColor: "",
          duration: 0.3,
          ease: "power2.in",
          clearProps: "boxShadow",
        });

        // Reset icon content
        gsap.to(icon.children[0], {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            // Restart the floating animation
            gsap.to(serviceIconsRef.current[index], {
              y: index % 2 === 0 ? 8 : -8,
              rotation: index % 2 === 0 ? 5 : -5,
              duration: 2 + index * 0.1,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          },
        });
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      serviceCardsRef.current.forEach((card, index) => {
        if (card) {
          card.removeEventListener("mouseenter", () => {});
          card.removeEventListener("mouseleave", () => {});
          gsap.killTweensOf(serviceIconsRef.current[index]);
        }
      });
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div ref={servicesRef} className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addToServiceCardsRef}
              className={`${service.bg} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform`}
            >
              <div
                ref={addToServiceIconsRef}
                className={`icon-container ${service.iconBg} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(138,12,173)]">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
