const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A fully responsive e-commerce platform with payment integration",
    image: "/images/projects/ecommerce.jpg",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    client: "RetailCorp Inc.",
    year: "2023",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication",
    image: "/images/projects/banking.jpg",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Redux"],
    client: "FinanceNow",
    year: "2022",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description:
      "Comprehensive system for hospital management and patient records",
    image: "/images/projects/healthcare.jpg",
    category: "Web Application",
    technologies: ["Angular", "Spring Boot", "MySQL"],
    client: "MedLife Hospital",
    year: "2023",
  },
  {
    id: 4,
    title: "Real Estate Portal",
    description: "Property listing and management platform with virtual tours",
    image: "/images/projects/realestate.jpg",
    category: "Web Development",
    technologies: ["Vue.js", "Django", "PostgreSQL"],
    client: "HomeFind Realty",
    year: "2022",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Web Development",
  "Mobile App",
  "Web Application",
  "Desktop Application",
];

export { projectsData, categories };
