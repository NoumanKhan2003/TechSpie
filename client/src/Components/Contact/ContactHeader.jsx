import React from "react";

const ContactHeader = ({ headerRef }) => {
  return (
    <div ref={headerRef} className="text-center mb-16 relative">
      <h1 className="mt-10 text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        Contact Us
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-lg mx-auto text-lg">
        We'd love to hear from you. Please fill out the form below or reach out
        directly using our contact information.
      </p>
    </div>
  );
};

export default ContactHeader;
