import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Software Development',
    description:
      'Tailored software solutions that streamline your business operations and boost productivity.',
    icon: '🛠️',
  },
  {
    title: 'Web App Development',
    description:
      'Modern, scalable web applications built using the latest technologies and best practices.',
    icon: '💻',
  },
  {
    title: 'Mobile App Development',
    description:
      'iOS and Android apps designed to deliver seamless mobile experiences for your users.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description:
      'Engaging, intuitive interfaces and experiences that put users first in every interaction.',
    icon: '🎨',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Secure cloud-native applications and infrastructure setup for scalable growth.',
    icon: '☁️',
  },
  {
    title: 'Maintenance & Support',
    description:
      'Reliable post-launch support to keep your software optimized, secure, and up-to-date.',
    icon: '🔧',
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-white text-black">
     
      <section className="py-28 bg-gradient-to-r from-[rgb(138,12,173)] to-indigo-600 text-white text-center px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We provide a wide range of digital solutions to help your business thrive.
        </motion.p>
      </section>

    
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[rgb(138,12,173)]">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white text-center px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[rgb(138,12,173)]">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 text-lg">
            We combine creativity, technology, and strategy to deliver impactful digital experiences. From concept to launch, we collaborate closely with you to create tailored software that truly solves problems.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[rgb(138,12,173)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What industries do you serve?',
                a: 'We serve healthcare, fintech, logistics, education, retail, and more.',
              },
              {
                q: 'Do you offer post-launch support?',
                a: 'Yes, we provide long-term support, feature enhancements, and bug fixes.',
              },
              {
                q: 'How does the project process work?',
                a: 'We follow a 4-step process: Discovery → Design → Development → Delivery.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 rounded-md shadow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4 className="font-semibold text-[rgb(138,12,173)] mb-2">{item.q}</h4>
                <p className="text-gray-600">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact  */}
      <section className="py-16 bg-gradient-to-br from-[rgb(138,12,173)] to-indigo-700 text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Something Together</h2>
          <p className="mb-6">Contact us today to discuss your project or get a custom quote.</p>
          <form className="bg-white p-6 rounded-xl shadow-md text-left text-black space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-md"
            />
            <textarea
              placeholder="Tell us about your project"
              rows="4"
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="bg-[rgb(138,12,173)] text-white font-semibold px-6 py-2 rounded-md hover:bg-purple-900"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Service;





