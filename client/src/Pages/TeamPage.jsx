import React, { useEffect, useRef } from "react";
import { teamData } from "../data/teamData";
import TeamHero from "../Components/team/TeamHero";
import TeamSection from "../Components/team/TeamSection";
import { gsap } from "../utils/gsapUtils";
import { FaUsers } from "react-icons/fa";

const Team = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".team-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
        clearProps: "all",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={pageRef} className="overflow-hidden">
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 w-full relative">
        <TeamHero />

        <div className="team-content container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="mb-16 md:mb-24 relative">
            <TeamSection
              title="Leadership"
              members={teamData.leadership}
              isLeadership={true}
            />
          </div>
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
              <FaUsers className="text-4xl" />
            </div>
            <TeamSection
              title="Our Amazing Team"
              members={teamData.team}
              isLeadership={false}
            />
          </div>

          <div className="text-center py-16 opacity-80">
            <p className="text-gray-600 italic">
              "Talent wins games, but teamwork and intelligence win
              championships."
            </p>
            <p className="mt-2 text-purple-600 font-medium">- Michael Jordan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
