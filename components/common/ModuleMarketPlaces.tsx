import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import HoverEffectBtn from "components/common/loginBtn/HoverEffectBtn";
import { useEffect, useState } from "react";
// import NextBtn from "public/assets/icons/NextBtn";
// import PrevBtn from "public/assets/icons/PrevBtn";
import { cx } from "@emotion/css";
import { useMediaSize } from "components/hooks/media-size";

interface SwiperProps {
  modules: (typeof EffectCoverflow | typeof Navigation | typeof Pagination)[];
  className?: string;
  navigation?: boolean;
  pagination?: boolean | { clickable: boolean };
  slidesPerView?: number;
  loop?: boolean;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  initialSlide?: number;
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
  description: string;
}

interface ModuleMarketPlacesProps {
  activeSlide?: number;
}

const ModuleMarketPlaces: React.FC<ModuleMarketPlacesProps> = ({
  activeSlide,
}) => {
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
    modules: [EffectCoverflow, Navigation, Pagination],
    className: "!pt-[58px] !pb-[430px] w-[1560px] img-swiper",
    navigation: true,
    pagination: {
      clickable: true,
    },
    slidesPerView: 3,
    loop: true,
    effect: "coverflow",
    initialSlide: 2,
    coverflowEffect: {
      slideShadows: true,
      rotate: 0,
      stretch: 0,
      depth: -100,
      scale: 0.5,
      modifier: 1,
    },
  };
  const slides: SlidesProps[] = [
    {
      img: "/assets/icons/5.jpg",
      title: "Portfolio",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Manage and monitor your entire crypto portfolio, including, vested, unvested, staked assets, and more..",
    },
    {
      img: "/assets/icons/6.jpg",
      title: "Calendar",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Monitor and sync all events related to your groups or portfolio, and never miss a thing..",
    },
    {
      img: "/assets/icons/1.jpg",
      title: "Raise",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Create or participate in VC, presale, and crowdfunding pools in one-click..",
    },
    {
      img: "/assets/icons/2.jpg",
      title: "Market",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Buy or sell tokens, unvested allocations, NFTs, Ambassador Program rights, and more..",
    },
    {
      img: "/assets/icons/3.jpg",
      title: "Groups",
      label: "in-a-box",
      btnlabel: "Learn more",
      description: "Create, manage or join VC or Investment groups with ease..",
    },
    {
      img: "/assets/icons/4.jpg",
      title: "My Cryptool",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Combine your Cryptool most important widgets into one overview..",
    },
  ];
  const handlePrevNext = (index: number) => {
    const currentElement = document.querySelector(
      ".img-swiper .swiper-slide-next"
    ) as HTMLElement;
    console.log(
      "data-swiper",
      Number(currentElement.getAttribute("data-swiper-slide-index"))
    );
    console.log(index, "click");
    if (Number(currentElement.getAttribute("data-swiper-slide-index")) === 5) {
      if (index === 0) {
        handleNextClick();
      }
      if (
        index < Number(currentElement.getAttribute("data-swiper-slide-index"))
      ) {
        handlePrevClick();
      }
    }
    if (Number(currentElement.getAttribute("data-swiper-slide-index")) === 0) {
      if (index === 5) {
        handlePrevClick();
      }
      if (
        index > Number(currentElement.getAttribute("data-swiper-slide-index"))
      ) {
        handleNextClick();
      }
    }
    if (
      Number(currentElement.getAttribute("data-swiper-slide-index")) !== 0 &&
      Number(currentElement.getAttribute("data-swiper-slide-index")) !== 5
    ) {
      if (
        Number(currentElement.getAttribute("data-swiper-slide-index")) > index
      ) {
        handlePrevClick();
      }
      if (
        Number(currentElement.getAttribute("data-swiper-slide-index")) < index
      ) {
        handleNextClick();
      }
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1560) {
        setSwiperPosition((window.innerWidth - 1560) / 2);
      }
    };
    if (isTablet) {
      handleResize();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isTablet]);

  return (
    <div
      className={cx(
        "pt-[96px] h-full flex flex-col justify-center",
        !isTablet && "overflow-y-scroll"
      )}
    >
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
          "text-[#2F4644] text-center not-italic font-normal text-[52px] !leading-[120%]",
          activeSlide === 2 && "animate-normal-animation duration-1000"
        )}
      >
        Check out the integrated modules
      </div>
      <div
        className={cx(
          "text-[#2F4644] text-center text-2xl not-italic font-light !leading-[120%]",
          activeSlide === 2 && "animate-normal-animation duration-1000"
        )}
      >
        Learn how all the Cryptool integrated modules work together
      </div>
      <div className="overflow-hidden">
        <Swiper
          style={{ transform: `translate3d(${swiperPosition}px, 0px, 0px)` }}
          {...swiperProps}
        >
          {slides.map((item, index) => {
            return (
              <div key={index}>
                <SwiperSlide
                  id={item.title}
                  className="relative"
                  key={index}
                  onClick={() => {
                    handlePrevNext(index);
                  }}
                >
                  <Image
                    className=" rounded-lg"
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
                  <div className="absolute top-[120%] left-[7px] flex flex-col justify-center items-center w-[517px] module-description animate-normal-animation duration-1000">
                    <div className="text-[#2F4644] font-normal text-[52px] !leading-[120%] mb-20">
                      {item.title}
                    </div>
                    <div className="text-[#2F4644] text-center text-2xl font-light !leading-[120%] mb-14 max-w-[517px]">
                      {item.description}
                    </div>
                    <div>
                      <HoverEffectBtn
                        className="svg-wrapper hover:font-semibold !w-[104px] text-[#2F4644] h-[40px] mb-5"
                        strokeDashoffset={-150}
                        strokeDasharray="90 300"
                        width={104}
                        height={40}
                        handleClick={handleClick}
                        label={"Learn more"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
          {/* <div
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
          </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default ModuleMarketPlaces;
