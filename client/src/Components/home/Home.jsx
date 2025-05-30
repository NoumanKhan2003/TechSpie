import React from "react";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { Link as RouterLink } from "react-router-dom";
const stats = [
  {
    label: "Active Users",
    value: "10M+",
  },
  {
    label: "Uptime",
    value: "99.9%",
  },
  {
    label: "Support",
    value: "24/7",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen flex items-center pt-10 relative">
      <div className="outer-container w-full py-8">
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-white text-purple-600">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping"></div>
          </div>

          {/* Main Content Container */}
          <div
            className="relative z-10 text-center px-6 max-w-6xl mx-auto space-y-6"
            style={{ perspective: "1200px" }}
          >
            {/* Main Heading */}
            <h1 className=" text-5xl md:text-7xl lg:text-8xl font-bold py-0 mt-10 md:mt-9">
              <span className="block text-black">Build the</span>
              <span className="block bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent animate-pulse py-2">
                Future Today
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-0 text-xl text-black md:text-2xl max-w-3xl mx-auto leading-relaxed ">
              Transform your ideas into reality with our cutting-edge platform.
              Experience the power of innovation at your fingertips.
            </p>

            {/* CTA Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink to="/contact">
                <button
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="relative z-10">
                    Get Started <ArrowOutwardOutlinedIcon sx={{ ml: 1 }} />{" "}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </RouterLink>
              <RouterLink to="/team">
                <button
                  className="group px-6 py-4 border-2 border-purple-300 text-purple-600 font-semibold rounded-lg backdrop-blur-sm hover:border-purple-500 hover:bg-purple-100 transition-transform duration-500 hover:scale-105 cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="flex items-center justify-center">
                    Meet the Team
                    <Groups2OutlinedIcon sx={{ ml: 1 }} />
                  </span>
                </button>
              </RouterLink>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center transition-transform duration-500 hover:scale-105"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 animate-bounce text-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-purple-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
