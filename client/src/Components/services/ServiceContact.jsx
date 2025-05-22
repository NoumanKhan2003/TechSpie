import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../utils/gsapUtils.js";

const ServiceContact = () => {
  const contactSectionRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    const sectionNode = contactSectionRef.current;
    const formNode = contactFormRef.current;

    // Contact section animations
    gsap.fromTo(
      sectionNode,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: sectionNode,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Enhanced form animation
    const formElements = formNode.querySelectorAll(".form-element");

    gsap.fromTo(
      formNode,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionNode,
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
          trigger: formNode,
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

    return () => {
      const triggers = ScrollTrigger.getAll().filter(
        (trigger) =>
          trigger.vars.trigger === sectionNode ||
          trigger.vars.trigger === formNode
      );
      triggers.forEach((trigger) => trigger.kill());

      formElements.forEach((element) => {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.removeEventListener("focus", () => {});
          element.removeEventListener("blur", () => {});
        }
      });
    };
  }, []);

  return (
    <section
      ref={contactSectionRef}
      id="contact"
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
  );
};

export default ServiceContact;
