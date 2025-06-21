import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaLightbulb,
  FaPaintBrush,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiFlutter,
  SiKotlin,
  SiFirebase,
  SiGoogleclassroom,
  SiGooglecloud,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const ourProcess = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your goals, audience, and challenges to tailor our solutions.",
    icon: <FaLightbulb size={40} />,
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
    borderColor: "border-purple-300",
    hoverBg: "hover:bg-purple-200",
    hoverBorder: "hover:border-purple-500",
    shadowColor: "shadow-purple-200",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create intuitive, beautiful interfaces focused on user experience.",
    icon: <FaPaintBrush size={40} />,
    bg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    borderColor: "border-indigo-300",
    hoverBg: "hover:bg-indigo-200",
    hoverBorder: "hover:border-indigo-500",
    shadowColor: "shadow-indigo-200",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build scalable, robust applications using the latest technologies.",
    icon: <FaLaptopCode size={40} />,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderColor: "border-blue-300",
    hoverBg: "hover:bg-blue-200",
    hoverBorder: "hover:border-blue-500",
    shadowColor: "shadow-blue-200",
  },
  {
    step: "04",
    title: "Delivery & Support",
    description:
      "We ensure a smooth launch and offer ongoing support and updates.",
    icon: <FaRocket size={40} />,
    bg: "bg-green-100",
    iconColor: "text-green-600",
    borderColor: "border-green-300",
    hoverBg: "hover:bg-green-200",
    hoverBorder: "hover:border-green-500",
    shadowColor: "shadow-green-200",
  },
];

const techStack = [
  {
    name: "React.Js",
    icon: <FaReact className="text-4xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl" />,
  },
  {
    name: "Express.js",
    icon: <FaLaptopCode className="text-4xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl" />,
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative className="text-4xl" />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-4xl" />,
  },
  {
    name: "Kotlin",
    icon: <SiKotlin className="text-4xl" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-4xl" />,
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud className="text-4xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl" />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-4xl" />,
  },
  {
    name: "AWS",
    icon: <FaAws className="text-4xl" />,
  },
];

export { ourProcess, techStack };
