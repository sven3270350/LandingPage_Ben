import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArrowBelow from "public/assets/icons/ArrowBelow";

const IntroSection = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <div className="mt-[-82px]">
      <div
        className="bg-firstSection relative"
        style={{ height: `${windowHeight}px` }}
      >
        <Image
          className="absolute top-[20%] left-[5%]"
          width={650}
          height={200}
          src="/assets/icons/LogoWhite.svg"
          alt="IntroImage"
        />
        <button
          type="button"
          className="absolute top-[60%] left-[14%] rounded-3xl text-[#2F4644] bg-[#00f2de] flex justify-center items-center flex-shrink-0 w-[324px] py-2 px-6 font-normal text-base shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
        >
          Start Managing Today
        </button>
        <div className="absolute top-[75%] left-[5%] text-white opacity-[.8] text-4xl tracking-wide">
          Automated tool to easily manage, raise,
          <br />
          invest, and trade cryptocurrency assets
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[-32px] lg:mx-40 mx-0">
        <ArrowBelow className="z-10" />
        <ArrowBelow className="z-10 mt-[-9px]" />
        <div className="text-[#00F2DE] font-medium text-2xl">Discover</div>
        <div className="mt-10 text-[#2F4644] font-normal text-[52px] !leading-[120%] tracking-[-2px]">
          Get to know our platform
        </div>
        <div className="text-[#2F4644] text-2xl font-light !leading-[120%] tracking-[-2px]">
          Investing and managing capital, made easy
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
