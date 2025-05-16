import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "../Components/Home";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/Choose";
import Team from "../Components/Team";
import OurApproach from "../Components/Approach";
import ContactForm from "../Components/Form";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    gsap.fromTo(
      "main > div > div",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 80 },
            ease: "power3.inOut",
          });
        }
      });
    });
  }, []);

  return (
    <main className="bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50 relative">
      <div className="space-y-0 relative">
        <div id="home">
          <Home />
        </div>

        <div>
          <Services />
        </div>

        <div>
          <WhyChooseUs />
        </div>

        <div>
          <Team />
        </div>

        <div>
          <OurApproach />
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
