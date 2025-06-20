import React from "react";
import OutboundRoundedIcon from "@mui/icons-material/OutboundRounded";

const LetsWorkTogether = () => {
  return (
    <div className="w-full overflow-hidden py-3 relative">
      {/* Marquee Row 1 */}
      <div className="flex animate-marquee whitespace-nowrap">
        <span
          className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-purple-950 font-abril"
          style={{ minWidth: "max-content", marginRight: "32px" }}
        >
          <OutboundRoundedIcon
            sx={{
              fontSize: { xs: 60, sm: 80, md: 90, lg: 110 },
              verticalAlign: "middle",
            }}
          />{" "}
          Let's Work Together{" "}
        </span>
        <span
          className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-purple-950 font-abril"
          style={{ minWidth: "max-content", marginRight: "32px" }}
        >
          <OutboundRoundedIcon
            sx={{
              fontSize: { xs: 60, sm: 80, md: 90, lg: 110 },
              verticalAlign: "middle",
            }}
          />{" "}
          Let's Work Together{" "}
        </span>
      </div>

      {/* Marquee Row 2 */}
      <div className="flex animate-antimarquee whitespace-nowrap mt-1 sm:mt-2">
        <span
          className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-purple-950 font-abril"
          style={{ minWidth: "max-content", marginRight: "32px" }}
        >
          <OutboundRoundedIcon
            sx={{
              fontSize: { xs: 60, sm: 80, md: 90, lg: 110 },
              verticalAlign: "middle",
            }}
          />{" "}
          Let's Work Together{" "}
        </span>
        <span
          className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-purple-950 font-abril"
          style={{ minWidth: "max-content", marginRight: "32px" }}
        >
          <OutboundRoundedIcon
            sx={{
              fontSize: { xs: 60, sm: 80, md: 90, lg: 110 },
              verticalAlign: "middle",
            }}
          />{" "}
          Let's Work Together{" "}
        </span>
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
            animation: marquee 10s linear infinite;
            display: flex;
            width: fit-content;
          }
          @keyframes antimarquee {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          .animate-antimarquee {
            animation: antimarquee 10s linear infinite;
            display: flex;
            width: fit-content;
          }
        `}
      </style>
    </div>
  );
};

export default LetsWorkTogether;
