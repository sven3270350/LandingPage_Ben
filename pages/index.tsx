import { NextPage } from "next";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import IntroSection from "components/common/InstroSection";
import VideoSection from "components/common/VideoSection";
import ModuleMarketPlaces from "components/common/ModuleMarketPlaces";
import ProposalSection from "components/common/ProposalSection";
import RequestDemo from "components/common/RequestDemo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
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
}

const Home: NextPage = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const { isMobile } = useMediaSize();


  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  const swiperProps: SwiperProps = {
    className: "mySwiper",
    direction: "vertical",
    scrollbar: false,
    modules: [Mousewheel],
    mousewheel: true,
    onSlideChange: handleSlideChange,
  };

  return (
    <>
      <Header activeSlide={activeSlide} />
      {isMobile ? 
      <div className="flex flex-col w-full">
        <IntroSection />
        <VideoSection />
        <ModuleMarketPlaces />
        <ProposalSection />
        <RequestDemo />
        <Footer />
      </div>:
      <Swiper {...swiperProps}>
        <SwiperSlide>
          <IntroSection />
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
      }
    </>
  );
};

export default Home;
