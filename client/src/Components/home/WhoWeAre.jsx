import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <section className="relative pb-20 px-4 overflow-hidden bg-gradient-to-br from-purple-100 via-white to-blue-100">
        
      <div className="relative max-w-6xl mx-auto ">
        <div className="text-center mb-8">{}</div>
        <div className="relative">
          
          <div className=" text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-700 mb-4 leading-tight">
              Who We Are 
            </h1>

            <div className="mb-2">
              <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-noto-serif">
                We are Techspie
              </span>
              <span className="text-lg md:text-2xl text-gray-800 ml-2">— your vision, our responsibility.</span>
            </div>

            <p className="text-base md:text-2xl text-gray-800 leading-normal max-w-4xl mx-auto mb-2">
              We transform ideas into companies, companies into brands, and brands into unstoppable forces
            </p>

            <div className="mb-4">
              <p className="text-sm md:text-base italic text-purple-900 font-medium bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full inline-block border border-purple-200">
                From startup spark to brand legacy — we're your tech partners at every step of the way.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-base md:text-lg text-gray-700 font-semibold">
              <span className="flex items-center gap-2">
                <span className="text-purple-300 mx-2 animate-pulse">✦</span>
                You dream it.
              </span>
              <span className="flex items-center gap-1">
                <span className="text-purple-300 mx-2 animate-pulse">✦</span>
                We build it.
              </span>
              <span className="flex items-center gap-1">
                <span className="text-purple-300 mx-2 animate-pulse">✦</span>
                Together, we make it legendary .
              </span>
            </div>
          </div>
        </div>
      </div>
      </section>  
    </>
  );
};

export default WhoWeAre;
