import React, { useRef } from "react";
import webDevImg from "../Assets/web development.png";
import mobileAppImg from "../Assets/mobile devv.png";
import cloudImg from "../Assets/cloud.png";
import uiuxImg from "../Assets/ui.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    description:
      "Responsive, SEO-friendly websites and web applications tailored to your business goals.",
    image: webDevImg,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps for Android and iOS with smooth performance and great UX.",
    image: mobileAppImg,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric designs with intuitive interfaces to improve engagement and experience.",
    image: uiuxImg,
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud-based solutions for storage, hosting, and business operations.",
    image: cloudImg,
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "top 15%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      headingRef.current,
      { y: 100, opacity: 0, skewY: 5 },
      { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "power4.out" }
    ).fromTo(
      cardsRef.current,
      { y: 100, opacity: 0, rotationX: -30, transformOrigin: "top" },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: { amount: 0.8, from: "random" },
        duration: 1.2,
        ease: "elastic.out(1, 0.8)",
      },
      "-=0.5"
    );

    cardsRef.current.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -15,
          scale: 1.05,
          rotationY: 3,
          boxShadow: "0 25px 40px rgba(0,0,0,0.1)",
          duration: 0.4,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotationY: 0,
          boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });
  });

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16" ref={headingRef}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Services We Provide
          </h2>
          <p className="text-xl text-gray-700">
            Explore our core offerings designed to support your digital
            transformation journey.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              ref={addToRefs}
              className={`${service.bgColor} rounded-xl p-6 hover-3d transform-gpu`}
            >
              <div className="hover-rotate">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-16 h-16 mx-auto mb-4 ${service.iconColor}`}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
