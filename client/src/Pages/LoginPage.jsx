import React, { useState } from "react";

const LoginPage = () => {
  const [remember, setRemember] = useState(false);

  return (
    <div className="pt-30 pb-10 flex items-center justify-center min-h-screen bg-gray-100">
      <form className="flex flex-col gap-2.5 bg-white p-6 sm:p-8 w-full max-w-md rounded-2xl font-sans shadow-md">
        <div className="flex flex-col">
          <label className="text-[#151717] font-semibold">Email</label>
        </div>
        <div className="flex items-center border border-gray-200 rounded-xl h-12 pl-2.5 transition-colors duration-200 focus-within:border-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            viewBox="0 0 32 32"
            height={20}
          >
            <g data-name="Layer 3" id="Layer_3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
            </g>
          </svg>
          <input
            placeholder="Enter your Email"
            className="ml-2.5 rounded-xl border-none w-full h-full focus:outline-none placeholder:font-sans"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#151717] font-semibold">Password</label>
        </div>
        <div className="flex items-center border border-gray-200 rounded-xl h-12 pl-2.5 transition-colors duration-200 focus-within:border-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            viewBox="-64 0 512 512"
            height={20}
          >
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
          </svg>
          <input
            placeholder="Enter your Password"
            className="ml-2.5 rounded-xl border-none w-full h-full focus:outline-none placeholder:font-sans"
            type="password"
          />
        </div>
        <div className="flex flex-row items-center gap-2.5 justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="mr-1 accent-blue-600"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label
              htmlFor="remember"
              className="text-sm text-black font-normal cursor-pointer select-none"
            >
              Remember me
            </label>
          </div>
          <span className="text-sm ml-1 text-violet-800 font-medium cursor-pointer">
            Forgot password?
          </span>
        </div>
        <button className="self-end my-5 mb-2 bg-[#783181] border-none text-white text-[15px] font-medium rounded-xl h-12 w-full cursor-pointer transition-colors hover:bg-[#52264c]">
          Sign In
        </button>
        <p className="text-center text-black text-sm my-1">
          Don't have an account?{" "}
          <span className="text-violet-800 font-medium cursor-pointer">
            Sign Up
          </span>
        </p>
        <p className="text-center text-black text-sm my-1 border-t pt-2">
          Or With
        </p>
        <div className="flex flex-row gap-2.5">
          <button className="btn google flex-1 h-12 rounded-xl flex justify-center items-center font-medium gap-2.5 border border-gray-200 bg-white cursor-pointer transition-colors duration-200 hover:border-violet-600">
            <svg
              xmlSpace="preserve"
              style={{ enableBackground: "new 0 0 512 512" }}
              viewBox="0 0 512 512"
              y="0px"
              x="0px"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              width={20}
              version="1.1"
            >
              <path
                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
          c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
          C103.821,274.792,107.225,292.797,113.47,309.408z"
                style={{ fill: "#FBBB00" }}
              />
              <path
                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
          c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
          c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                style={{ fill: "#518EF8" }}
              />
              <path
                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
          c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
          c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                style={{ fill: "#28B446" }}
              />
              <path
                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
          c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
          C318.115,0,375.068,22.126,419.404,58.936z"
                style={{ fill: "#F14336" }}
              />
            </svg>
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
