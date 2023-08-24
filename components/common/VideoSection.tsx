import React from "react";
import Image from "next/image";

const VideoSection = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex items-center flex-col mt-[96px] font-sans max-w-[1560px]">
        <div className="flex flex-col justify-center items-center mb-20">
          <div className="text-[#00F2DE] font-medium text-2xl font-sans tracking-[-2px] leading-[120%]">
            Discover
          </div>
          <div className="mt-2 text-[#2F4644] font-normal text-[52px] !leading-[120%] tracking-[-2px] font-sans">
            Platform for Users, VCs, and Start-ups
          </div>
          <div className="text-[#2F4644] text-2xl font-light !leading-[120%] tracking-[-2px] font-sans">
            See how the Cryptool platform makes investing and managing crypto
            assets easy
          </div>
        </div>
        <Image
          src="/assets/icons/image_platform.png"
          width={1187}
          height={684.5}
          alt="Introduction Video"
          className="mb-5"
        />
      </div>
    </div>
  );
};

export default VideoSection;
