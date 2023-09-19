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
interface MobileSwiperProps {
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
  const { isMobile, isTablet } = useMediaSize();
  const [swiperPosition, setSwiperPosition] = useState<number>(0);
  const [mobileSwiperPosition, setMobileSwiperPosition] = useState<number>(0);
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
    className:
      "!pt-[48px] !pb-[220px] sm:!pb-[250px] md:!pb-[290px] lg:!pb-[320px] xl:!pb-[360px] w-[1560px] img-swiper",
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
      scale: 0.8,
      modifier: 1,
    },
  };
  const MobileSwiperProps: MobileSwiperProps = {
    modules: [EffectCoverflow, Navigation, Pagination],
    className: "!pt-[24px] !pb-[175px] w-[900px] mobile-swiper",
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
      scale: 0.8,
      modifier: 1,
    },
  };
  const slides: SlidesProps[] = [
    {
      img: "/assets/icons/Portfolio_Graph_v2.png",
      title: "Portfolio",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Manage and monitor your entire crypto portfolio, including, vested, unvested, staked assets, and more..",
    },
    {
      img: "/assets/icons/Calendar_Graph_v3.png",
      title: "Calendar",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Monitor and sync all events related to your groups or portfolio, and never miss a thing..",
    },
    {
      img: "/assets/icons/Raise_Graph_v2.png",
      title: "Raise",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Create or participate in VC, presale, and crowdfunding pools in one-click..",
    },
    {
      img: "/assets/icons/Market_Graph_v2.png",
      title: "Market",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Buy or sell tokens, unvested allocations, NFTs, Ambassador Program rights, and more..",
    },
    {
      img: "/assets/icons/Groups_Graph_v3.png",
      title: "Groups",
      label: "in-a-box",
      btnlabel: "Learn more",
      description: "Create, manage or join VC or Investment groups with ease..",
    },
    {
      img: "/assets/icons/My_Cryptool_Graph_v2.png",
      title: "My Cryptool",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Combine your Cryptool most important widgets into one overview..",
    },
  ];
  const mobileSlides: SlidesProps[] = [
    {
      img: "/assets/icons/Portfolio_Graph_v2.png",
      title: "Portfolio",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Manage and monitor your entire crypto portfolio, including, vested, unvested, staked assets, and more..",
    },
    {
      img: "/assets/icons/Calendar_Graph_v3.png",
      title: "Calendar",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Monitor and sync all events related to your groups or portfolio, and never miss a thing..",
    },
    {
      img: "/assets/icons/Raise_Graph_v2.png",
      title: "Raise",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Create or participate in VC, presale, and crowdfunding pools in one-click..",
    },
    {
      img: "/assets/icons/Market_Graph_v2.png",
      title: "Market",
      label: "in-a-box",
      btnlabel: "Learn more",
      description:
        "Buy or sell tokens, unvested allocations, NFTs, Ambassador Program rights, and more..",
    },
    {
      img: "/assets/icons/Groups_Graph_v3.png",
      title: "Groups",
      label: "in-a-box",
      btnlabel: "Learn more",
      description: "Create, manage or join VC or Investment groups with ease..",
    },
    {
      img: "/assets/icons/My_Cryptool_Graph_v2.png",
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
        setSwiperPosition((window.innerWidth - 1575) / 2);
        setMobileSwiperPosition((window.innerWidth - 945) / 2);
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
        "mt-[48px] flex flex-col justify-center",
        !isTablet && "h-full",
        isTablet && "!mt-0 mb-10 px-3"
      )}
    >
      <div
        className={cx(
          "text-[#00F2DE] text-center text-base md:text-lg lg:text-xl xl:text-2xl font-medium !leading-[120%] tracking-[-1px]",
          activeSlide === 2 && "animate-normal-animation duration-1000"
        )}
      >
        Explore
      </div>
      <div
        className={cx(
          "text-[#2F4644] text-center not-italic font-normal text-3xl md:text-4xl lg:text-5xl xl:text-[52px] !leading-[120%]",
          activeSlide === 2 && "animate-normal-animation duration-1000"
        )}
      >
        Check out the integrated modules
      </div>
      <div
        className={cx(
          "text-[#2F4644] text-center text-base md:text-lg lg:text-xl xl:text-2xl not-italic font-light !leading-[120%]",
          activeSlide === 2 && "animate-normal-animation duration-1000"
        )}
      >
        Learn how all the Cryptool integrated modules work together
      </div>
      <div className="overflow-hidden">
        {!isMobile ? (
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
                    <div>
                      <Image
                        className="rounded-lg"
                        width={6000}
                        alt="Swiper image"
                        height={4300}
                        src={item.img}
                      />
                    </div>
                    <div className="absolute top-[112%] left-[7px] flex flex-col justify-center items-center w-[517px] module-description animate-normal-animation duration-1000">
                      <div className="text-[#2F4644] font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl !leading-[120%] mb-2 md:mb-3 lg:mb-4 xl:mb-5">
                        {item.title}
                      </div>
                      <div className="text-[#2F4644] text-center w-[330px] sm:w-full text-base md:text-base lg:text-lg xl:text-xl font-light !leading-[120%] mb-4 md:mb-6 lg:mb-8 xl:mb-10 max-w-[517px]">
                        {item.description}
                      </div>
                      <div>
                        <button
                          type="button"
                          className={cx(
                            "inline-block font-sans cursor-pointer text-[#2F4644] font-normal not-italic text-base md:text-base lg:text-lg xl:text-xl hover:font-semibold focus:outline-none border-b-[3px] border-transparent hover:border-[#00F2DE] border-solid"
                          )}
                        >
                          Learn more
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        ) : (
          <Swiper
            style={{
              transform: `translate3d(${mobileSwiperPosition}px, 0px, 0px)`,
            }}
            {...MobileSwiperProps}
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
                    <div>
                      <Image
                        className="rounded-lg"
                        width={6000}
                        alt="Swiper image"
                        height={4300}
                        src={item.img}
                      />
                    </div>
                    <div className="absolute top-[112%] left-[-110px] flex flex-col justify-center items-center w-[517px] module-description animate-normal-animation duration-1000">
                      <div className="text-[#2F4644] font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl !leading-[120%] mb-2 md:mb-3 lg:mb-4 xl:mb-5">
                        {item.title}
                      </div>
                      <div className="text-[#2F4644] text-center w-[330px] sm:w-full text-base sm:text-base md:text-base lg:text-lg xl:text-xl font-light !leading-[120%] mb-4 md:mb-6 lg:mb-8 xl:mb-10 max-w-[517px]">
                        {item.description}
                      </div>
                      <div>
                        <button
                          type="button"
                          className={cx(
                            "inline-block cursor-pointer text-[#2F4644] font-normal not-italic text-base md:text-base lg:text-lg xl:text-xl hover:font-semibold focus:outline-none border-b-[3px] border-transparent hover:border-[#00F2DE] border-solid"
                          )}
                        >
                          Learn more
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default ModuleMarketPlaces;
