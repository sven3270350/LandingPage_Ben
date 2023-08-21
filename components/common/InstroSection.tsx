import React from "react";
import Image from "next/image";
import ArrowBelow from "public/assets/icons/ArrowBelow";
import { cx } from '@emotion/css'
import { useMediaSize } from "components/hooks/media-size";

const IntroSection = () => {
  const { isMobile } = useMediaSize();

  return (
    <div className="w-full">
      <div
        className="relative bg-firstSection h-[100vh]"
      >
        <Image
          className={cx("absolute top-[20%] left-[5%]",isMobile? "hidden": "block")}
          width={650}
          height={200}
          src="/assets/icons/LogoWhiteBlur.png"
          alt="IntroImage"
        />
        {!isMobile && <button
          type="button"
          className="absolute fuller-button blue top-[60%] left-[14%] rounded-3xl text-white flex justify-center items-center flex-shrink-0 w-[324px] py-2 px-6 font-normal text-base shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
        >
          Start Managing Today
        </button>}
        <div className={cx("absolute text-white left-[5%] text-start",
         isMobile ? "opacity-100 text-xl leading-6 not-italic top-[25%] w-[217px]" : "top-[75%] opacity-[.8] font-robotic text-4xl tracking-wide" )}>
          Automated tool to easily manage, raise, {!isMobile && <br />}invest and trade cryptocurrency assets
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[-32px]">
        <ArrowBelow className="z-10" />
        <ArrowBelow className="z-10 mt-[-9px]" />
      </div>
    </div>
  );
};

export default IntroSection;
