import React from "react";
import webDevImg from "../Assets/web development.png";
import mobileAppImg from "../Assets/mobile devv.png";
import cloudImg from "../Assets/cloud.png";
import uiuxImg from "../Assets/ui.png";

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
  return (
    <section className="py-24">
      {" "}
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Services We Provide
          </h2>
          <p className="text-xl text-gray-600">
            Explore our core offerings designed to support your digital
            transformation journey.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className={`${service.bgColor} rounded-xl p-6 hover:scale-105 transition`}
            >
              <img
                src={service.image}
                alt={service.title}
                className={`w-16 h-16 mx-auto mb-4 ${service.iconColor}`}
              />
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
