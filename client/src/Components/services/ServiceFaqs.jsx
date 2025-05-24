import React, { useRef, useEffect, useState } from "react";

import { gsap, ScrollTrigger } from "../../utils/gsapUtils.js";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { faqItems } from "../../data/serviceData.jsx";

const ServiceFaqs = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const faqHeadingRef = useRef(null);
  const faqItemsRef = useRef([]);

  // Reset array refs
  faqItemsRef.current = [];

  const addToFaqItemsRef = (el) => {
    if (el && !faqItemsRef.current.includes(el)) {
      faqItemsRef.current.push(el);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    // Store current ref values to avoid stale closure issues in cleanup
    const headingNode = faqHeadingRef.current;
    const itemsNodes = [...faqItemsRef.current];

    // FAQ section - improved animations
    gsap.fromTo(
      headingNode,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: headingNode,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    itemsNodes.forEach((item, index) => {
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

    return () => {
      const triggers = ScrollTrigger.getAll().filter(
        (trigger) =>
          trigger.vars.trigger === headingNode ||
          itemsNodes.includes(trigger.vars.trigger)
      );
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          ref={faqHeadingRef}
          className="text-4xl font-bold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqItems.map((item, index) => (
            <div
              key={index}
              ref={addToFaqItemsRef}
              className={`bg-white p-0 rounded-xl shadow-md transition-all duration-300 overflow-hidden ${
                activeFaq === index
                  ? "shadow-lg shadow-purple-200/50 border-purple-100 ring-1 ring-purple-100"
                  : "hover:shadow-lg"
              }`}
            >
              <div
                className={`flex justify-between items-center cursor-pointer p-5 group ${
                  activeFaq === index ? "bg-purple-50" : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                <h4
                  className={`font-semibold text-lg transition-colors duration-300 ${
                    activeFaq === index
                      ? "text-purple-700"
                      : "text-gray-700 group-hover:text-purple-600"
                  }`}
                >
                  {item.q}
                </h4>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeFaq === index
                      ? "bg-purple-600 text-white rotate-180"
                      : "bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600"
                  }`}
                >
                  <IoIosArrowDropdownCircle
                    className={`transition-transform duration-300 ${
                      activeFaq === index ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </div>
              </div>
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: activeFaq === index ? "300px" : "0",
                  opacity: activeFaq === index ? 1 : 0,
                }}
              >
                <div className="p-5 pt-0 border-t border-purple-50">
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-xl shadow-purple-300/20 hover:shadow-purple-400/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="font-medium">Still have questions?</span>
            <FaArrowRight className="ml-2" size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceFaqs;
