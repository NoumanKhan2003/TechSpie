import React from 'react'

const clients = [
  { name: "FirmusVision" },
  { name: "IdealPR" },
  { name: "LoveSecure" },
  { name: "Amarhans" }
]

const FloatingClients = () => {
  return (
    <div className="w-full overflow-hidden py-3 relative bg-transparent">
      <div className="flex animate-floating-marquee whitespace-nowrap">

        {/* First set */}
        {clients.map((client, idx) => (
          <span
            key={`first-${idx}`}
            className="inline-block font-bold text-purple-950 font-abril
              text-5xl md:text-9xl"
            style={{
              minWidth: 'max-content',
              marginRight: '39px', // base
              // Responsive marginRight
              ...(window.innerWidth >= 640 && { marginRight: '48px' }),
              ...(window.innerWidth >= 1024 && { marginRight: '80px' }),
              ...(window.innerWidth >= 1280 && { marginRight: '130px' }),
            }}
          >
            {client.name}
          </span>
        ))}

        {/* Second set for seamless loop */}
        {clients.map((client, idx) => (
          <span
            key={`second-${idx}`}
            className="inline-block font-bold text-purple-950 font-abril
              text-5xl md:text-9xl"
            style={{
              minWidth: 'max-content',
              marginRight: '39px',
              ...(window.innerWidth >= 640 && { marginRight: '48px' }),
              ...(window.innerWidth >= 1024 && { marginRight: '80px' }),
              ...(window.innerWidth >= 1280 && { marginRight: '130px' }),
            }}
          >
            {client.name}
          </span>
        ))}
      </div>
      <style>
        {`
          @keyframes floating-marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-floating-marquee {
            animation: floating-marquee 17s linear infinite;
            display: flex;
            width: fit-content;
          }
        `}
      </style>
    </div>
  )
}

export default FloatingClients;