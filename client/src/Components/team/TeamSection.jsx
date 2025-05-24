import React, { useEffect, useRef } from "react";
import { gsap } from "../../utils/gsapUtils";
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = ({ title, members, isLeadership = false }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    titleAnimation
      .fromTo(
        titleRef.current.querySelector("h2"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(
        titleRef.current.querySelector("div"),
        { width: 0, opacity: 0 },
        { width: "100%", opacity: 1, duration: 0.8, ease: "power3.inOut" },
        "-=0.3"
      );
    const cards = sectionRef.current.querySelectorAll(".team-card");
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-14 md:py-16 w-full">
      <div className="text-center mb-8 md:mb-12" ref={titleRef}>
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 md:mb-4">
          {title}
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-purple-400 mx-auto mb-4 md:mb-6"></div>
      </div>

      <div
        className={`grid gap-6 sm:gap-8 w-full ${
          isLeadership
            ? "grid-cols-1 lg:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {members.map((member, index) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            index={index}
            isLeadership={isLeadership}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
