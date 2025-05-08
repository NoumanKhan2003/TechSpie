import React from 'react';

const teamMembers = [
  {
    name: 'Aviral',
    role: 'Founder',
    image: 'z',
    linkedin: 'x',
    email: 'y',
  },
  {
    name: 'Nouman',
    role: 'Co-Founder',
    image: 'zz',
    linkedin: 'xx',
    email: 'yy',
  },
  {
    name:'Sajal ',
    role: 'Full-Stack-Developer',
    image: 'zzz',
    linkedin: 'xxx',
    email: 'yyyy',
  },
  {
    name: 'Mahek ',
    role: 'Full-Stack-Developer',
    image: 'zzzz',
    linkedin:'xxxxxxxx',
    email: 'yyyy',
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mb-12">
          A passionate and experienced team dedicated to delivering impactful software solutions.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-800">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
              
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                  title="LinkedIn"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.75v2.34h.07c.66-1.24 2.27-2.54 4.68-2.54 5 0 5.93 3.29 5.93 7.56V24h-5v-7.63c0-1.82-.03-4.17-2.54-4.17s-2.93 1.98-2.93 4.04V24h-5V8z" />
                  </svg>
                </a>

                
                <a
                  href={`mailto:${member.email}`}
                  className="text-purple-600 hover:text-purple-800"
                  title="Email"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4h16v16H4z" stroke="none" />
                    <path d="M22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;


