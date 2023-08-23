import React from "react";
import Image from "next/image";

const VideoSection = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex items-center flex-col mt-[98px] font-sans max-w-[1560px]">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="text-[#00F2DE] font-medium text-2xl font-sans">
            Discover
          </div>
          <div className="mt-2 text-[#2F4644] font-normal text-[52px] !leading-[120%] tracking-[-2px] font-sans">
            Get to know our platform
          </div>
          <div className="text-[#2F4644] text-2xl font-light !leading-[120%] tracking-[-2px] font-sans">
            Investing and managing capital, made easy
          </div>
        </div>
        <Image
          src="/assets/icons/image_platform.png"
          width={1187}
          height={500}
          alt="Introduction Video"
        />
      </div>
    </div>
  );
};

export default VideoSection;
