import React from "react";
import Image from "next/image";
import ArrowBelow from "public/assets/icons/ArrowBelow";
import { cx } from "@emotion/css";
interface IntroSectionProps {
  activeSlide?: number;
  handleSlideToTwo?: () => void;
}
const IntroSection: React.FC<IntroSectionProps> = ({
  handleSlideToTwo,
  activeSlide,
}) => {

  return (
    <div className="w-full bg-firstSection h-full flex justify-center">
      <div className="max-w-[1560px] w-full">
        <div className="flex flex-wrap">
          <div className={"relative w-full h-[100vh] max-w-[750px]"}>
            <Image
              className={cx(
                "absolute top-[20%] left-[0%]",
                activeSlide === 0 && "animate-normal-animation duration-1000"
              )}
              width={650}
              height={279.92}
              src="/assets/icons/LogoWhiteBlur.png"
              alt="IntroImage"
            />
            <button
              type="button"
              className={cx(
                "absolute fuller-button blue top-[60%] left-[19%] rounded-3xl text-white flex justify-center items-center flex-shrink-0 w-[324px] py-2 px-6 font-normal text-base shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]",
                activeSlide === 0 && "animate-normal-animation duration-1000"
              )}
            >
              Start Managing Today
            </button>
            <div
              className={cx(
                "absolute text-white left-[0%] text-start top-[75%] opacity-[.8] font-robotic text-4xl tracking-wide max-w-[668px]",
                activeSlide === 0 && "animate-normal-animation duration-1000"
              )}
            >
              Automated tool to easily manage, raise, invest and trade
              cryptocurrency assets
            </div>
          </div>
          <div className="relative w-full max-w-[750px]">
            <div className={cx("absolute top-[20%] left-[5%]",activeSlide === 0 && "animate-normal-animation duration-1000")}>
              <video src="/assets/icons/Modules.mp4" width={750} autoPlay loop />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center mt-[-32px]"
          onClick={handleSlideToTwo}
        >
          <ArrowBelow className="z-10" />
          <ArrowBelow className="z-10 mt-[-9px]" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
