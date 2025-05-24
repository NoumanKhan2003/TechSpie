import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const missionTl = gsap.timeline({
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 90%",
        end: "top 60%",
        scrub: 0.6,
      },
    });

    missionTl.fromTo(
      missionRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    return () => {
      missionTl.kill();
    };
  }, []);

  return (
    <section className="py-16 bg-white/80 backdrop-blur-sm">
      <div className="md:flex md:space-x-8 px-4">
        <div
          ref={missionRef}
          className="md:w-1/2 p-6 bg-purple-50 rounded-xl border border-purple-100 shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-600">
            Our Mission
          </h2>
          <p className="text-gray-700">
            Our mission is to empower businesses by providing cutting-edge
            software and exceptional service.
          </p>
        </div>
        <div
          ref={valuesRef}
          className="md:w-1/2 mt-8 md:mt-0 p-6 bg-indigo-50 rounded-xl border border-indigo-100 shadow-sm"
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            Our Values
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong className="text-purple-600">Innovation</strong>: Embracing
              new ideas to solve complex problems.
            </li>
            <li>
              <strong className="text-purple-600">Integrity</strong>: Building
              trust through transparency and honesty.
            </li>
            <li>
              <strong className="text-purple-600">Customer Centricity</strong>:
              Putting clients first in everything we do.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
