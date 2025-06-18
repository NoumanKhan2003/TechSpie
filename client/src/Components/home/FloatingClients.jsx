import React from 'react'

const clients = [
  { name: "FirmusVision" },
  { name: "IdealPR" },
  { name: "LoveSecure" },
  { name: "Amarhans" }
]

const FloatingClients = () => {
  return (
    <div className="w-full overflow-hidden py-3 relative bg-white">
      <div className="flex animate-marquee whitespace-nowrap">

        {/* First set */}
        {clients.map((client, idx) => (
          <span
            key={`first-${idx}`}
            className="inline-block text-9xl font-bold text-purple-950 font-abril"
            style={{ minWidth: 'max-content', marginRight: '130px' }}
          >
            {client.name}
          </span>
        ))}

        {/* Second set for seamless loop */}
        {clients.map((client, idx) => (
          <span
            key={`second-${idx}`}
            className="inline-block text-9xl font-bold text-purple-950 font-abril"
            style={{ minWidth: 'max-content', marginRight: '130px' }}
          >
            {client.name}
          </span>
        ))}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 13s linear infinite;
            display: flex;
            width: fit-content;
          }
        `}
      </style>
    </div>
  )
}

export default FloatingClients