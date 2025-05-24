import React from "react";
import { FaMobileAlt, FaServer, FaTools } from "react-icons/fa";
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

const faqItems = [
  {
    q: "What industries do you serve?",
    a: "We serve healthcare, fintech, logistics, education, retail, and more.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we provide long-term support, feature enhancements, and bug fixes.",
  },
  {
    q: "How does the project process work?",
    a: "We follow a 4-step process: Discovery → Design → Development → Delivery.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern technologies like React, Node.js, Python, and cloud services.",
  },
  {
    q: "Can you integrate with existing systems?",
    a: "Absolutely! We can integrate with various APIs and legacy systems.",
  },
];

export { services, faqItems };
