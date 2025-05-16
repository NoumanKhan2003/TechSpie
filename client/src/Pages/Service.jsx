import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Import better icons
import { FaTools, FaServer, FaMobileAlt } from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlineSupportAgent } from "react-icons/md";
import { FaCloudArrowUp } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

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

const Service = () => {
  // Create refs for animation targets
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const servicesRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const faqItemsRef = useRef([]);
  const contactSectionRef = useRef(null);
  const contactFormRef = useRef(null);
  const serviceIconsRef = useRef([]);
  const whyChooseUsRef = useRef(null);
  const faqHeadingRef = useRef(null);

  // Reset array refs
  serviceCardsRef.current = [];
  faqItemsRef.current = [];
  serviceIconsRef.current = [];

  // Helper functions to add elements to refs
  const addToServiceCardsRef = (el) => {
    if (el && !serviceCardsRef.current.includes(el)) {
      serviceCardsRef.current.push(el);
    }
  };

  const addToFaqItemsRef = (el) => {
    if (el && !faqItemsRef.current.includes(el)) {
      faqItemsRef.current.push(el);
    }
  };

  const addToServiceIconsRef = (el) => {
    if (el && !serviceIconsRef.current.includes(el)) {
      serviceIconsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Create a main timeline for coordinated animations
    const mainTl = gsap.timeline();

    // Hero section - enhanced animation with split text effect
    mainTl
      .fromTo(
        headerRef.current,
        { opacity: 0, y: -50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );

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

    // Why Choose Us section - parallax and reveal animation
    gsap.fromTo(
      whyChooseUsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: whyChooseUsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
          scrub: 0.5,
        },
      }
    );

    // FAQ section - improved animations
    gsap.fromTo(
      faqHeadingRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: faqHeadingRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    faqItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Contact section animations
    gsap.fromTo(
      contactSectionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Enhanced form animation
    const formElements =
      contactFormRef.current.querySelectorAll(".form-element");

    gsap.fromTo(
      contactFormRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Stagger in form elements
    gsap.fromTo(
      formElements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 80%",
        },
      }
    );

    // Add input focus animations
    formElements.forEach((element) => {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.addEventListener("focus", () => {
          gsap.to(element, {
            boxShadow: "0 0 0 3px rgba(138, 12, 173, 0.2)",
            borderColor: "rgb(138, 12, 173)",
            duration: 0.3,
          });

          // Animate the label
          const label = element.previousElementSibling;
          if (label && label.classList.contains("form-label")) {
            gsap.to(label, {
              y: -5,
              color: "rgb(138, 12, 173)",
              fontWeight: "600",
              duration: 0.3,
            });
          }
        });

        element.addEventListener("blur", () => {
          gsap.to(element, {
            boxShadow: "none",
            borderColor: element.value ? "rgb(138, 12, 173)" : "#e2e8f0",
            duration: 0.3,
          });

          // Reset label if empty
          const label = element.previousElementSibling;
          if (
            label &&
            label.classList.contains("form-label") &&
            !element.value
          ) {
            gsap.to(label, {
              y: 0,
              color: "#6b7280",
              fontWeight: "400",
              duration: 0.3,
            });
          }
        });
      }
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
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
        gsap.killTweensOf(serviceIconsRef.current[index]);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <section className="py-28 bg-gradient-to-r from-violet-400 to-indigo-400 text-white text-center px-4">
        <h1 ref={headerRef} className="text-4xl md:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl">
          We provide a wide range of digital solutions to help your business
          thrive.
        </p>
      </section>

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

      {/* Why Choose Us */}
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

      {/* FAQ Section with GSAP */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            ref={faqHeadingRef}
            className="text-3xl font-bold mb-8 text-center text-[rgb(138,12,173)]"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {/*
              {
                q: 'What industries do you serve?',
                a: 'We serve healthcare, fintech, logistics, education, retail, and more.',
              },
              {
                q: 'Do you offer post-launch support?',
                a: 'Yes, we provide long-term support, feature enhancements, and bug fixes.',
              },
              {
                q: 'How does the project process work?',
                a: 'We follow a 4-step process: Discovery → Design → Development → Delivery.',
              },
            */}
            {faqItemsRef.current.map((item, index) => (
              <div
                key={index}
                ref={addToFaqItemsRef}
                className="bg-white p-5 rounded-md shadow"
              >
                <h4 className="font-semibold text-[rgb(138,12,173)] mb-2">
                  {item.q}
                </h4>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact with redesigned form */}
      <section
        ref={contactSectionRef}
        className="py-20 bg-gradient-to-br from-violet-300 to-indigo-300 text-gray-800"
      >
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-xl opacity-90">
              Contact us today to discuss your project or get a custom quote.
            </p>
          </div>

          <form
            ref={contactFormRef}
            className="bg-white p-8 rounded-2xl shadow-2xl text-black space-y-6"
          >
            <div className="form-element relative">
              <label
                htmlFor="name"
                className="form-label block text-sm font-medium text-gray-500 mb-1 transition-all duration-300"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none transition-all duration-300"
                required
              />
            </div>

            <div className="form-element relative">
              <label
                htmlFor="email"
                className="form-label block text-sm font-medium text-gray-500 mb-1 transition-all duration-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none transition-all duration-300"
                required
              />
            </div>

            <div className="form-element relative">
              <label
                htmlFor="message"
                className="form-label block text-sm font-medium text-gray-500 mb-1 transition-all duration-300"
              >
                Your Project Details
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none transition-all duration-300"
                required
              ></textarea>
            </div>

            <div className="form-element pt-2">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold text-lg shadow-lg hover:shadow-purple-300/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Service;
