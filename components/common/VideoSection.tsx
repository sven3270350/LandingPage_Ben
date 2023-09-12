import React from "react";
import Image from "next/image";
import { cx } from "@emotion/css";
import { useMediaSize } from "components/hooks/media-size";
interface VideoSectionProps {
  activeSlide?: number;
}

const VideoSection: React.FC<VideoSectionProps> = ({ activeSlide }) => {
  const { isTablet } = useMediaSize();
  return (
    <div
      className={cx(
        "flex justify-center h-full items-center",
        !isTablet && "overflow-y-scroll"
      )}
    >
      <div
        className={cx(
          "flex items-center flex-col mt-[96px] max-w-[1560px]",
          isTablet && "!mt-5"
        )}
      >
        <div className="flex flex-col justify-center items-center mb-[40px]">
          <div
            className={cx(
              "text-[#00F2DE] text-base md:text-lg lg:text-xl font-medium xl:text-2xl leading-[120%]",
              activeSlide === 1 && "animate-normal-animation duration-1000"
            )}
          >
            Discover
          </div>
          <div
            className={cx(
              "mt-2 text-[#2F4644] font-normal text-center text-3xl md:text-4xl lg:text-5xl xl:text-[52px] text !leading-[120%]",
              activeSlide === 1 && "animate-normal-animation duration-1000"
            )}
          >
            Platform for Users, VCs, and Start-ups
          </div>
          <div
            className={cx(
              "text-[#2F4644] text-base md:text-lg lg:text-xl xl:text-2xl font-light text-center !leading-[120%]",
              activeSlide === 1 && "animate-normal-animation duration-1000"
            )}
          >
            See how the Cryptool platform makes investing and managing crypto
            assets easy
          </div>
        </div>
        <Image
          src="/assets/icons/CRT_001_Background_Video_Coming_Soon.png"
          width={1187}
          height={684.5}
          alt="Introduction Video"
          className="mb-5 w-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export default VideoSection;
