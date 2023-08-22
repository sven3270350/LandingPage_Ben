import { NextPage } from "next";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import IntroSection from "components/common/InstroSection";
import VideoSection from "components/common/VideoSection";
import ModuleMarketPlaces from "components/common/ModuleMarketPlaces";
import ProposalSection from "components/common/ProposalSection";
import RequestDemo from "components/common/RequestDemo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import { useMediaSize } from "components/hooks/media-size";

interface SwiperProps {
  className: string;
  direction: "horizontal" | "vertical";
  scrollbar?: boolean;
  mousewheel?: boolean;
  modules?: any[];
  onSlideChange?: (swiper: any) => void;
  navigation?: boolean;
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

const Home: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const { isTablet } = useMediaSize();

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideToTwo = () => {
    const NextBtn = document.querySelector(
      ".mySwiper>.swiper-button-next"
    ) as HTMLElement;
    NextBtn.click();
  };

  const swiperProps: SwiperProps = {
    className: "mySwiper",
    direction: "vertical",
    scrollbar: false,
    modules: [Mousewheel, Navigation, EffectCoverflow],
    mousewheel: true,
    onSlideChange: handleSlideChange,
    navigation: true,
    effect: "coverflow",
    coverflowEffect: {
      slideShadows: true,
      rotate: 0,
      stretch: 0,
      depth: -60,
      scale: 1,
      modifier: 1,
    },
  };

  return (
    <>
      <Header activeSlide={activeSlide} />
      {isTablet ? (
        <div className="flex flex-col w-full">
          <IntroSection />
          <VideoSection />
          <ModuleMarketPlaces />
          <ProposalSection />
          <RequestDemo />
          <Footer />
        </div>
      ) : (
        <Swiper {...swiperProps}>
          <SwiperSlide>
            <IntroSection handleSlideToTwo={handleSlideToTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <VideoSection />
          </SwiperSlide>
          <SwiperSlide>
            <ModuleMarketPlaces />
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between h-full">
              <ProposalSection />
              <RequestDemo />
              <Footer />
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default Home;
