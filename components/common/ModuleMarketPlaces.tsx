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
  coverflowEffect?: {
    slideShadows?: boolean;
    rotate?: number;
    stretch?: number;
    depth?: number;
    scale?: number;
    modifier?: number;
  };
}

interface SlidesProps {
  img: string;
  title: string;
  label: string;
  btnlabel: string;
}

interface ModuleMarketPlacesProps {
  activeSlide?: number;
}
interface TilesProps {
  tiles: string[];
}

const ModuleMarketPlaces: React.FC<ModuleMarketPlacesProps> = ({
  activeSlide,
}) => {
  const Tiles: TilesProps = {
    tiles: [
      "Portfolio",
      "Calendar",
      "Raise",
      "Marketplace",
      "Groups",
      "My Cryptool",
    ],
  };
  const { isTablet } = useMediaSize();
  const [swiperPosition, setSwiperPosition] = useState<number>(0);
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
  const swiperProps: SwiperProps = {
    modules: [EffectCoverflow, Navigation],
    className: "!pt-[58px] !pb-[400px] w-[1392px] img-swiper",
    navigation: true,
    slidesPerView: 3,
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
      slideShadows: true,
      rotate: 0,
      stretch: 0,
      depth: -80,
      scale: 0.8,
      modifier: 1,
    },
  };
  const slides: SlidesProps[] = [
    {
      img: "/assets/icons/5.jpg",
      title: "Portfolio",
      label: "in-a-box",
      btnlabel: "Learn more",
    },
    {
      img: "/assets/icons/6.jpg",
      title: "Calendar",
      label: "in-a-box",
      btnlabel: "Learn more",
    },
    {
      img: "/assets/icons/1.jpg",
      title: "Raise",
      label: "in-a-box",
      btnlabel: "Learn more",
    },
    {
      img: "/assets/icons/2.jpg",
      title: "Marketplace",
      label: "in-a-box",
      btnlabel: "Learn more",
    },
    {
      img: "/assets/icons/3.jpg",
      title: "Groups",
      label: "in-a-box",
      btnlabel: "Learn more",
    },
    {
      img: "/assets/icons/4.jpg",
      title: "My Cryptool",
      label: "in-a-box",
      btnlabel: "Learn more",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1392) {
        setSwiperPosition((window.innerWidth - 1414) / 2);
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
      <div className="overflow-hidden">
        <Swiper
          style={{ transform: `translate3d(${swiperPosition}px, 0px, 0px)` }}
          {...swiperProps}
        >
          {slides.map((item, index) => {
            return (
              <>
                <SwiperSlide key={index} id={item.title} className="relative">
                  <Image
                    className="rounded-[44px]"
                    width={533}
                    alt="Swiper image"
                    height={300}
                    src={item.img}
                  />
                  <div className="absolute top-[20%] left-[20%] text-white text-base">
                    {item.title}
                  </div>
                  <div className="absolute top-[29%] left-[20%] text-white text-base">
                    {item.label}
                  </div>
                  <div className="absolute top-[70%] left-[20%] z-20 text-white">
                    <HoverEffectBtn
                      className="svg-wrapper opacity-[.8] z-50 hover:opacity-[1] hover:font-semibold !w-[104px] h-[40px]"
                      strokeDashoffset={-168}
                      width={104}
                      height={40}
                      handleClick={handleClick}
                      label={item.btnlabel}
                    />
                  </div>
                  <div className="absolute top-[120%] left-[0%] flex flex-col justify-center items-center w-[517px] module-description animate-normal-animation duration-1000">
                    <div className="text-[#2F4644] font-normal text-[52px] !leading-[120%] tracking-[-2px] mb-20">
                      {item.title}
                    </div>
                    <div className="text-[#2F4644] text-center text-2xl font-light !leading-[120%] mb-14">
                      Buy or sell tokens, unvested allocations, NFTs,
                      <br />
                      Ambassador Program rights, and more..
                    </div>
                    <div>
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
                </SwiperSlide>
              </>
            );
          })}
          <div
            className="absolute right-[443px] top-[22%] z-10 cursor-pointer"
            onClick={handleNextClick}
          >
            <NextBtn width={37} />
          </div>
          <div
            className="absolute left-[443px] top-[22%] z-10 cursor-pointer"
            onClick={handlePrevClick}
          >
            <PrevBtn width={37} />{" "}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ModuleMarketPlaces;
