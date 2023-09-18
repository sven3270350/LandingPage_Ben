import React from "react";
import Image from "next/image";
import { cx } from "@emotion/css";
import { useMediaSize } from "components/hooks/media-size";
import Play from "public/assets/icons/Play";
interface VideoSectionProps {
  activeSlide?: number;
}

const VideoSection: React.FC<VideoSectionProps> = ({ activeSlide }) => {
  const { isTablet } = useMediaSize();
  return (
    <div
      className={cx(
        "flex justify-center items-center",
        !isTablet && "h-full",
        isTablet && "mb-10 px-3"
      )}
    >
      <div
        className={cx(
          "flex items-center flex-col mt-[96px] max-w-[1560px] relative",
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
          src="/assets/icons/CRT_001_SlideDeck_Final.png"
          width={1187}
          height={684.5}
          alt="Introduction Video"
          className={cx(
            "mb-5 w-full rounded-3xl",
            isTablet ? "px-2" : " h-[63vh]"
          )}
        />
        <Image
          src="/assets/icons/coming_soon.png"
          className={cx(
            " absolute 3xs:top-[45%] 2xs:top-[55%] top-[60%] w-[66%]"
          )}
          width={800}
          height={200}
          alt="coming soon"
        />
        <div className="h-[120px] w-full absolute sm:top-[78%] top-[73%] flex items-center justify-center">
          <Play
            className={cx(
              "w-[100px] rounded-full cursor-pointer hover:w-[120px] duration-300",
              isTablet && "!w-[8%] hover:!w-[10%]"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
