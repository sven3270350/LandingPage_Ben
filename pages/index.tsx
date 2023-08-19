import { NextPage } from "next";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import IntroSection from "components/common/InstroSection";
import VideoSection from "components/common/VideoSection";
import ModuleMarketPlaces from "components/common/ModuleMarketPlaces";
import ProposalSection from "components/common/ProposalSection";
import RequestDemo from "components/common/RequestDemo";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

interface SwiperProps {
  className: string
  direction: "horizontal" | "vertical";
  scrollbar?: boolean;
  mousewheel?: boolean;
  modules?: any[];
  onSlideChange?: (swiper: any) => void;
}

const Home = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  const swiperProps: SwiperProps = {
    className: "mySwiper",
    direction: "vertical",
    scrollbar: false,
    modules: [Mousewheel],
    mousewheel: true,
    onSlideChange: handleSlideChange
  };

  return (
    <>
    <Header activeSlide={activeSlide} />
    <Swiper {...swiperProps}>
      <SwiperSlide><IntroSection /></SwiperSlide>
      <SwiperSlide><VideoSection /></SwiperSlide>
      <SwiperSlide><ModuleMarketPlaces /></SwiperSlide>
      <SwiperSlide><ProposalSection /><Footer /></SwiperSlide>
    </Swiper>
    </>
  );
};

export default Home;
