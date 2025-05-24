import React, { useEffect, useRef } from "react";
import { gsap } from "../../utils/gsapUtils";
import SocialIcon from "./SocialIcon";

const TeamMemberCard = ({ member, index, isLeadership = false }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
        delay: index * 0.1,
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 w-full ${
        isLeadership ? "md:flex" : ""
      }`}
    >
      <div
        className={`${
          isLeadership ? "md:w-1/3 h-60 md:h-auto" : "h-48 sm:h-52 md:h-60"
        } overflow-hidden`}
      >
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105`}
        />
      </div>
      <div className={`p-4 sm:p-5 md:p-6 ${isLeadership ? "md:w-2/3" : ""}`}>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
          {member.name}
        </h3>
        <p className="text-purple-600 font-medium mb-1 sm:mb-2">
          {member.role}
        </p>
        <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
          {member.bio}
        </p>

        <div className="flex space-x-3 sm:space-x-4">
          {Object.entries(member.socialLinks).map(([platform, link]) => (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-700 transition-colors text-lg sm:text-xl"
              aria-label={`${member.name}'s ${platform}`}
            >
              <SocialIcon platform={platform} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
