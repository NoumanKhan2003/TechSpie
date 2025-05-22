import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4">
   
     {/* Hero Section */}
<section className="relative py-20 mt-12 text-white overflow-hidden">
  

  
  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(138,12,173)] to-indigo-700"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-12 rounded-3xl shadow-2xl backdrop-blur-md bg-white/10">
    <motion.h1
      className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        color: '#fff',
        textShadow: '0 2px 10px rgba(0,0,0,0.2)',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          background: 'linear-gradient(to right, #fff, rgb(255,182,255))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Crafting Digital Experiences
      </span>
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      style={{ color: 'rgba(255,255,255,0.9)' }}
    >
      We deliver innovative software solutions to help your business grow beautifully.
    </motion.p>


  </div>
</section>


      {/* Mission & Values Section */}
      <section className="py-16">
        <div className="md:flex md:space-x-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>Our Mission</h2>
            <p className="text-gray-700">
            Our mission is to empower businesses by providing cutting-edge software and exceptional service.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'black' }}>Our Values</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong style={{ color: 'black' }}>Innovation</strong>: Embracing new ideas to solve complex problems.</li>
              <li><strong style={{ color: 'black' }}>Integrity</strong>: Building trust through transparency and honesty.</li>
              <li><strong style={{ color: 'black' }}>Customer Centricity</strong>: Putting clients first in everything we do.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
<section className="py-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'black' }}>Technologies We Use</h2>
  <div className="flex flex-wrap justify-center gap-8 text-center"
  >
    {['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Figma', 'AWS'].map((tech, idx) => (
      <motion.div
        key={tech}
    className="bg-white px-6 py-4 rounded-xl text-white font-semibold"
     style={{
              background: 'linear-gradient(to right, black, #9b2fc3)',
            }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
      >
        {tech}
      </motion.div>
    ))}
  </div>
</section>


{/* Our Process Section */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-14" style={{ color: 'black' }}>
      Our Process
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {[
        {
          step: "1",
          title: "Discovery",
          description: "We understand your goals, audience, and challenges to tailor our solutions.",
        },
        {
          step: "2",
          title: "Design",
          description: "We create intuitive, beautiful interfaces focused on user experience.",
        },
        {
          step: "3",
          title: "Development",
          description: "We build scalable, robust applications using the latest technologies.",
        },
        {
          step: "4",
          title: "Delivery & Support",
          description: "We ensure a smooth launch and offer ongoing support and updates.",
        },
      ].map((item, idx) => (
        <motion.div
          key={item.step}
          className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div
            className="w-14 h-14 flex items-center justify-center mx-auto rounded-full mb-5 text-white text-xl font-bold shadow-lg"
            style={{
              background: 'linear-gradient(to right, black, #9b2fc3)',
            }}
          >
            {item.step}
          </div>
          <h4 className="text-xl font-semibold mb-2" style={{ color: 'black' }}>
            {item.title}
          </h4>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUs;


