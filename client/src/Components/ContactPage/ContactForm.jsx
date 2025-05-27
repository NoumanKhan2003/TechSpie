import React, { useState } from "react";
import { gsap } from "../../utils/gsapUtils";
import { CiCircleCheck } from "react-icons/ci";

const ContactForm = ({ rightColRef, addToFormRefs }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const submitTl = gsap.timeline();

      submitTl.to(document.querySelectorAll(".form-field"), {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      });

      console.log("Form submitted:", formData);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSubmitted(true);

      gsap.to(".success-message", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      setTimeout(() => {
        setSubmitted(false);
        gsap.to(".form-field", {
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power1.out",
        });
      }, 3000);
    } else {
      const errorFields = document.querySelectorAll(".border-red-500");
      gsap.to(errorFields, {
        x: 3,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
      });
    }
  };

  const handleFocus = (e) => {
    gsap.to(e.target, {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(124, 58, 237, 0.2)",
      duration: 0.3,
      ease: "power2.out",
    });

    const label = e.target.previousElementSibling;
    if (label && label.tagName === "LABEL") {
      gsap.to(label, {
        y: -3,
        color: "rgb(124, 58, 237)",
        fontWeight: "600",
        duration: 0.3,
      });
    }
  };

  const handleBlur = (e) => {
    gsap.to(e.target, {
      scale: 1,
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    });

    const label = e.target.previousElementSibling;
    if (label && label.tagName === "LABEL" && !e.target.value) {
      gsap.to(label, {
        y: 0,
        color: "#6B7280",
        fontWeight: "500",
        duration: 0.3,
      });
    }
  };

  return (
    <div
      ref={rightColRef}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-purple-100 pb-3">
          Send a Message
        </h2>

        {submitted && (
          <div className="success-message mb-6 p-4 bg-green-100 text-green-700 rounded-lg border-l-4 border-green-500 flex items-center">
            <CiCircleCheck className="text-green-600 text-xl font-bold" />

            <span>Thank you! Your message has been sent successfully.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div ref={addToFormRefs} className="form-field">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2 transition-all duration-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none transition-all duration-300 ${
                errors.name ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div ref={addToFormRefs} className="form-field">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2 transition-all duration-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none transition-all duration-300 ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div ref={addToFormRefs} className="form-field">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-medium mb-2 transition-all duration-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none transition-all duration-300 ${
                errors.subject ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Enter subject"
            />
            {errors.subject && (
              <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          <div ref={addToFormRefs} className="form-field">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2 transition-all duration-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none transition-all duration-300 ${
                errors.message ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div ref={addToFormRefs} className="form-field">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 font-medium shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
