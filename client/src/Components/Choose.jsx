import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-purple-900 to-rgb(138,12,173)">
      <div className="container mx-auto text-center text-white">
       
        <h2 className="text-4xl font-semibold mb-4">
          Why Choose Us
        </h2>

        {/* Subheading */}
        <p className="text-lg mb-12 px-4">
          Discover the key reasons why our software solutions stand out, and how we can help your business scale and succeed.
        </p>

        {/* Key Features */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="bg-[rgb(138,12,173)] p-6 rounded-full mb-6 shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
            <p className="text-gray-700">
              We tailor every solution to meet your specific business needs with high-quality, custom-built applications.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="bg-[rgb(138,12,173)] p-6 rounded-full mb-6 shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4.586l2.707-2.707m0 0L20 12m-5.293-2.707L12 8"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Scalable & Reliable</h3>
            <p className="text-gray-700">
              Our solutions grow with your business, ensuring performance, scalability, and reliability at every stage.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
            <div className="bg-[rgb(138,12,173)] p-6 rounded-full mb-6 shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
            <p className="text-gray-700">
              Our team of experts is available for continuous support, ensuring you get the most from our solutions.
            </p>
          </div>
        </div>

       
        </div>
      </div>
    
  );
};

export default WhyChooseUs;
