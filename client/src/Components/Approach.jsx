import React from 'react';

const steps = [
  {
    title: '1. Discovery',
    description: 'We begin by understanding your business, goals, and challenges to define clear requirements.',
    image: 'xxx',
    bg: 'bg-purple-100',
    hover: 'hover:bg-purple-200'
  },
  {
    title: '2. Planning',
    description: 'We create a roadmap with timelines, milestones, and technologies tailored to your needs.',
    image: 'xxxxx',
    bg: 'bg-indigo-100',
    hover: 'hover:bg-indigo-200'
  },
  {
    title: '3. Development',
    description: 'Our team builds your solution using agile development and continuous feedback.',
    image: 'xxx',
    bg: 'bg-pink-100',
    hover: 'hover:bg-pink-200'
  },
  {
    title: '4. Launch & Support',
    description: 'We launch, monitor, and support your product, ensuring performance and growth.',
    image: 'xxxxx',
    bg: 'bg-green-100',
    hover: 'hover:bg-green-200'
  }
];

const OurApproach = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">Our Approach</h2>
        <p className="text-lg text-gray-600 mb-12">
          We follow a structured yet flexible approach to deliver high-quality software tailored to your goals.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <div className={`${step.bg} ${step.hover} p-4 rounded-full mb-4 transition`}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-16 h-16 object-contain mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;

