import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import HoverEffectBtn from "components/common/loginBtn/HoverEffectBtn";
import { useEffect, useState } from "react";
import NextBtn from "public/assets/icons/NextBtn";
import PrevBtn from "public/assets/icons/PrevBtn";
import { cx } from "@emotion/css";
import { useMediaSize } from "components/hooks/media-size";

interface SwiperProps {
  modules: (typeof EffectCoverflow | typeof Navigation)[];
  className?: string;
  navigation?: boolean;
  slidesPerView?: number;
  loop?: boolean;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  onSlideChange: (swiper: any) => void,
  coverflowEffect?: {
    slideShadows?: boolean;
    rotate?: number;
    stretch?: number;
    depth?: number;
    scale?: number;
    modifier?: number;
  };
}
interface ModuleMarketPlacesProps {
  activeSlide?: number;
}
interface TilesProps {
  tiles: string[]
}

const ModuleMarketPlaces: React.FC<ModuleMarketPlacesProps> = ({
  activeSlide,
}) => {
  const Tiles: TilesProps = {tiles: ["Portfolio", "Calendar", "Raise", "Marketplace", "Groups", "My Cryptool"]}
  const { isTablet } = useMediaSize();
  const [swiperPosition, setSwiperPosition] = useState<number>(0);
  const [activeTile, setActiveTile] = useState<string>('Calendar');
  const handleNextClick = () => {
    const NextBtn = document.querySelector(
      ".img-swiper>.swiper-button-next"
    ) as HTMLElement;
    NextBtn.click();
  };
  const handlePrevClick = () => {
    const PrevBtn = document.querySelector(
      ".img-swiper>.swiper-button-prev"
    ) as HTMLElement;
    PrevBtn.click();
  };
  const handleClick = () => {
    window.open(
      "https://docs.google.com/document/d/19iuROlL5QV43Li6KRaPkuBIDWDIv1c3OdBbwgS9Upew/edit",
      "_blank"
    );
  };
  const handleChange = (swiper: any) => {
    const nextSlide = document.querySelector(".img-swiper .swiper-slide-next")?.getAttribute('id');
    console.log(nextSlide, swiper)
    setActiveTile(nextSlide ?? "");
  }
  const swiperProps: SwiperProps = {
    modules: [EffectCoverflow, Navigation],
    className: "!pt-[58px] !pb-[58px] w-[1392px] img-swiper",
    navigation: true,
    slidesPerView: 3,
    loop: true,
    effect: "coverflow",
    onSlideChange: handleChange,
    coverflowEffect: {
      slideShadows: true,
      rotate: 0,
      stretch: 0,
      depth: -80,
      scale: 0.8,
      modifier: 1,
    },
  };
  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 1392) {
        setSwiperPosition((window.innerWidth - 1392) / 2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className={cx("pt-[96px] h-full", !isTablet && "overflow-y-scroll")}>
      <div
        className={cx(
          "text-[#00F2DE] text-center text-2xl font-medium !leading-[120%] tracking-[-1px]",
          activeSlide === 2 && "animate-normal-animation duration-1000"
        )}
      >
        Explore
      </div>
      <div
        className={cx(
          "text-[#2F4644] text-center not-italic font-normal text-[52px] !leading-[120%] tracking-[-2px]",
          activeSlide === 2 && "animate-normal-animation duration-1000"
        )}
      >
        Check out the integrated the modules
      </div>
      <div
        className={cx(
          "text-[#2F4644] text-center text-2xl not-italic font-light !leading-[120%]",
          activeSlide === 2 && "animate-normal-animation duration-1000"
        )}
      >
        Learn how the integrated modules work
      </div>
      <div>
        <Swiper
          style={{ transform: `translate3d(${swiperPosition}px, 0px, 0px)` }}
          {...swiperProps}
        >
          <SwiperSlide id="Portfolio">
            <Image
              className="rounded-[44px]"
              width={533}
              alt="Swiper image"
              height={300}
              src="/assets/icons/5.jpg"
            />
            <div className="absolute top-[20%] left-[20%] text-white text-base">
              Portfolio
            </div>
            <div className="absolute top-[29%] left-[20%] text-white text-base">
              in-a-box
            </div>
            <div className="absolute top-[70%] left-[20%] z-20 text-white">
              <HoverEffectBtn
                className="svg-wrapper opacity-[.8] z-50 hover:opacity-[1] hover:font-semibold !w-[104px] h-[40px]"
                strokeDashoffset={-168}
                width={104}
                height={40}
                handleClick={handleClick}
                label={"Learn more"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide id="Calendar">
            <Image
              className="rounded-[44px]"
              width={533}
              alt="Swiper image"
              height={300}
              src="/assets/icons/6.jpg"
            />
            <div className="absolute top-[20%] left-[20%] text-white text-base">
              Calendar
            </div>
            <div className="absolute top-[29%] left-[20%] text-white text-base">
              in-a-box
            </div>
            <div className="absolute top-[70%] left-[20%] z-20 text-white">
              <HoverEffectBtn
                className="svg-wrapper opacity-[.8] z-50 hover:opacity-[1] hover:font-semibold !w-[104px] h-[40px]"
                strokeDashoffset={-168}
                width={104}
                height={40}
                handleClick={handleClick}
                label={"Learn more"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide id="Raise">
            <Image
              className="rounded-[44px]"
              width={533}
              alt="Swiper image"
              height={300}
              src="/assets/icons/1.jpg"
            />
            <div className="absolute top-[20%] left-[20%] text-white text-base">
              Raise
            </div>
            <div className="absolute top-[29%] left-[20%] text-white text-base">
              in-a-box
            </div>
            <div className="absolute top-[70%] left-[20%] z-20 text-white">
              <HoverEffectBtn
                className="svg-wrapper opacity-[.8] z-50 hover:opacity-[1] hover:font-semibold !w-[104px] h-[40px]"
                strokeDashoffset={-168}
                width={104}
                height={40}
                handleClick={handleClick}
                label={"Learn more"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide id="Marketplace">
            <Image
              className="rounded-[44px]"
              width={533}
              height={300}
              alt="Swiper image"
              src="/assets/icons/2.jpg"
            />
            <div className="absolute top-[20%] left-[20%] text-white text-base">
              Marketplace
            </div>
            <div className="absolute top-[29%] left-[20%] text-white text-base">
              in-a-box
            </div>
            <div className="absolute top-[70%] left-[20%] z-20 text-white">
              <HoverEffectBtn
                className="svg-wrapper opacity-[.8] z-50 hover:opacity-[1] hover:font-semibold !w-[104px] h-[40px]"
                strokeDashoffset={-168}
                width={104}
                height={40}
                handleClick={handleClick}
                label={"Learn more"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide id="Groups">
            <Image
              className="rounded-[44px]"
              width={533}
              alt="Swiper image"
              height={300}
              src="/assets/icons/3.jpg"
            />
            <div className="absolute top-[20%] left-[20%] text-white text-base">
              Groups
            </div>
            <div className="absolute top-[29%] left-[20%] text-white text-base">
              in-a-box
            </div>
            <div className="absolute top-[70%] left-[20%] z-20 text-white">
              <HoverEffectBtn
                className="svg-wrapper opacity-[.8] z-50 hover:opacity-[1] hover:font-semibold !w-[104px] h-[40px]"
                strokeDashoffset={-168}
                width={104}
                height={40}
                handleClick={handleClick}
                label={"Learn more"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide id="My Cryptool">
            <Image
              className="rounded-[44px]"
              width={533}
              alt="Swiper image"
              height={300}
              src="/assets/icons/4.jpg"
            />
            <div className="absolute top-[20%] left-[20%] text-white text-base">
              My Cryptool
            </div>
            <div className="absolute top-[29%] left-[20%] text-white text-base">
              in-a-box
            </div>
            <div className="absolute top-[70%] left-[20%] z-20 text-white">
              <HoverEffectBtn
                className="svg-wrapper opacity-[.8] z-50 hover:opacity-[1] hover:font-semibold !w-[104px] h-[40px]"
                strokeDashoffset={-168}
                width={104}
                height={40}
                handleClick={handleClick}
                label={"Learn more"}
              />
            </div>
          </SwiperSlide>
          <div
            className="absolute right-[443px] top-[41%] z-10 cursor-pointer"
            onClick={handleNextClick}
          >
            <NextBtn width={37} />
          </div>
          <div
            className="absolute left-[443px] top-[41%] z-10 cursor-pointer"
            onClick={handlePrevClick}
          >
            <PrevBtn width={37} />{" "}
          </div>
        </Swiper>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[517px]">
          <div
            className={cx(
              "text-[#2F4644] font-normal text-[52px] !leading-[120%] tracking-[-2px] mb-20",
              activeSlide === 2 && "animate-normal-animation duration-1000"
            )}
          >
            {activeTile}
          </div>
          <div
            className={cx(
              "text-[#2F4644] text-center text-2xl font-light !leading-[120%] mb-14",
              activeSlide === 2 && "animate-normal-animation duration-1000"
            )}
          >
            Buy or sell tokens, unvested allocations, NFTs,
            <br />
            Ambassador Program rights, and more..
          </div>
          <div
            className={
              activeSlide === 2
                ? "animate-normal-animation duration-1000"
                : String(false)
            }
          >
            <HoverEffectBtn
              className="svg-wrapper hover:font-semibold !w-[104px] text-[#2F4644] h-[40px] mb-5"
              strokeDashoffset={-168}
              width={104}
              height={40}
              handleClick={handleClick}
              label={"Learn more"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleMarketPlaces;
