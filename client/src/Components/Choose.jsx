import React from "react";
import { GiPuzzle } from "react-icons/gi";
import { FaBoltLightning } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="relative py-24 z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50 to-white -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover the key reasons why our software solutions stand out, and
            how we can help your business scale and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div className="group bg-white backdrop-blur-sm bg-opacity-80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
            <div className="bg-gradient-to-br from-violet-600 to-purple-600 p-6 rounded-2xl mb-6 shadow-lg group-hover:shadow-violet-200 transition-shadow duration-300">
              <GiPuzzle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Custom Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We tailor every solution to meet your specific business needs with
              high-quality, custom-built applications.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white backdrop-blur-sm bg-opacity-80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
            <div className="bg-gradient-to-br from-violet-600 to-purple-600 p-6 rounded-2xl mb-6 shadow-lg group-hover:shadow-violet-200 transition-shadow duration-300">
              <FaBoltLightning className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Scalable & Reliable
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our solutions grow with your business, ensuring performance,
              scalability, and reliability at every stage.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white backdrop-blur-sm bg-opacity-80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
            <div className="bg-gradient-to-br from-violet-600 to-purple-600 p-6 rounded-2xl mb-6 shadow-lg group-hover:shadow-violet-200 transition-shadow duration-300">
              <MdGroups className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Expert Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team of experts is available for continuous support, ensuring
              you get the most from our solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
