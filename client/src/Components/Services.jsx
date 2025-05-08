import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Responsive, SEO-friendly websites and web applications tailored to your business goals.',
    image: 'yyy', // Replace with actual path
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for Android and iOS with smooth performance and great UX.',
    image: 'yyy',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric designs with intuitive interfaces to improve engagement and experience.',
    image: 'yyy',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud-based solutions for storage, hosting, and business operations.',
    image: 'yyy',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">Services We Provide</h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore our core offerings designed to support your digital transformation journey.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
            >
              <div className="flex justify-center mb-4">
                <img src={service.image} alt={service.title} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

