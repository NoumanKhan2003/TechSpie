import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = ({ leftColRef, addToContactRefs }) => {
  const contactItems = [
    {
      icon: <FaPhone className="text-2xl text-purple-600" />,
      title: "Phone",
      content: "+1 (123) 456-7890",
      href: "tel:+11234567890",
    },
    {
      icon: <FaEnvelope className="text-2xl text-purple-600" />,
      title: "Email",
      content: "info@codespie.com",
      href: "mailto:info@codespie.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-purple-600" />,
      title: "Address",
      content: "123 Tech Street, Suite 100, Innovation City, 12345",
    },
  ];

  return (
    <div
      ref={leftColRef}
      className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl p-8 transform transition duration-300 hover:-translate-y-1"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 border-b border-purple-100 pb-3">
        Get In Touch
      </h2>
      {contactItems.map((item, index) => (
        <div
          key={index}
          ref={addToContactRefs}
          className="flex mb-8 hover:bg-white p-4 rounded-lg transition-all duration-300 group"
        >
          <div className="mr-5 icon bg-purple-100 p-4 rounded-full">
            {item.icon}
          </div>
          <div>
            <h5 className="font-bold text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
              {item.title}
            </h5>
            {item.href ? (
              <a
                href={item.href}
                className="text-gray-600 hover:text-purple-500 transition-colors"
              >
                {item.content}
              </a>
            ) : (
              <p className="text-gray-600">{item.content}</p>
            )}
          </div>
        </div>
      ))}
      <div className="mt-12 bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">
          Office Hours
        </h3>
        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className="text-gray-600">Saturday - Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactInfo;
