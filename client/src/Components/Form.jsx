import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactItemsRef = useRef([]);
  const formRef = useRef(null);
  const formItemsRef = useRef([]);

  contactItemsRef.current = [];
  formItemsRef.current = [];

  const addToContactRefs = (el) => {
    if (el && !contactItemsRef.current.includes(el)) {
      contactItemsRef.current.push(el);
    }
  };

  const addToFormRefs = (el) => {
    if (el && !formItemsRef.current.includes(el)) {
      formItemsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "center 50%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        contactItemsRef.current,
        { x: -50, opacity: 0, stagger: 0.2 },
        {
          x: 0,
          opacity: 1,
          stagger: {
            each: 0.2,
            ease: "power2.out",
          },
          duration: 0.6,
        },
        "-=0.4"
      )
      .fromTo(
        formRef.current,
        {
          opacity: 0,
          scale: 0.9,
          rotationY: 5,
          transformOrigin: "center",
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      )
      .fromTo(
        formItemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4"
      );
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-16 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div ref={titleRef}>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
              We'd love to hear from you. Reach out to us using the form or the
              contact details below.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                Icon: FaPhoneAlt,
                title: "Phone",
                content: "+1 (123) 456-7890",
                href: "tel:+11234567890",
              },
              {
                Icon: FaEnvelope,
                title: "Email",
                content: "contact@company.com",
                href: "mailto:contact@company.com",
              },
              {
                Icon: FaMapMarkerAlt,
                title: "Address",
                content: "123 Main Street, City, Country",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={addToContactRefs}
                className="flex items-center space-x-4 hover-tilt"
              >
                <item.Icon className="text-violet-600 w-6 h-6" />
                <div>
                  <p className="text-gray-800 font-medium">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-violet-600 transition"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={formRef}
          className="bg-white rounded-2xl shadow-xl p-8 hover-3d"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { type: "text", name: "name", placeholder: "Your Name" },
              { type: "email", name: "email", placeholder: "Your Email" },
              {
                type: "textarea",
                name: "message",
                placeholder: "Your Message",
              },
            ].map((field, index) => (
              <div key={index} ref={addToFormRefs} className="group">
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all duration-200 resize-none"
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all duration-200"
                    required
                  />
                )}
              </div>
            ))}
            <button
              ref={addToFormRefs}
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover-lift"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
