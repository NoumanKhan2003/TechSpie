import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const tiltRef = useRef(null);

  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        20
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );

    // console.log(e.clientX - tiltRef.current.getBoundingClientRect().x);

    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );

  return (
    <main
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="min-h-screen flex items-center pt-10 relative"
    >
      <section className="container mx-auto px-4 z-10 flex flex-col md:flex-row gap-12 py-24">
        <div id="tilt-head" className="w-full md:w-1/2 space-y-6 relative">
          <h1 id="tilt" ref={tiltRef}>
            <span className="block text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-b from-violet-500 to-purple-600 bg-clip-text text-transparent pl-2 pt-3">
              Transforming Ideas
            </span>
            <span className="block text-3xl md:text-5xl font-bold bg-gradient-to-b from-violet-500 to-purple-600 bg-clip-text text-transparent pl-2">
              into Scalable Software
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed pl-2">
            We provide custom software development services to help businesses,
            startups, and individuals turn their ideas into reality. From web
            and mobile apps to cloud solutions and enterprise systems, we
            deliver end-to-end solutions tailored to your needs.
          </p>

          <div className="flex gap-4 pl-2">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-lg font-semibold hover-lift">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-violet-600 text-violet-600 rounded-xl text-lg font-semibold hover-tilt">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section (Right) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl hover-3d-deep">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-300/40 to-purple-400/50 backdrop-blur-sm rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-violet-700 text-7xl font-bold mb-4 hover-tilt">
                  &lt;/&gt;
                </div>
                <p className="text-violet-900 text-xl">
                  Innovative Solutions for Modern Challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
