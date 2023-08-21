import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import HoverEffectBtn from "components/common/loginBtn/HoverEffectBtn";

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

const ModuleMarketPlaces = () => {
  const swiperProps: SwiperProps = {
    modules: [EffectCoverflow, Navigation],
    className: "!pt-11 !pb-20",
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
  const handleClick = () => {
    window.open(
      "https://docs.google.com/document/d/19iuROlL5QV43Li6KRaPkuBIDWDIv1c3OdBbwgS9Upew/edit",
      "_blank"
    );
  };
  return (
    <div className="lg:mx-40 mx-0 mt-[97px]">
      <div className="text-[#00F2DE] text-center text-2xl font-medium !leading-[120%] tracking-[-2px]">
        Implement
      </div>
      <div className="text-[#2F4644] text-center not-italic font-normal text-[52px] !leading-[120%] tracking-[-2px]">
        Check out all the integrated the modules
      </div>
      <div className="text-[#2F4644] text-center text-2xl not-italic font-light !leading-[120%] tracking-[-2px]">
        Use the modules to make crypto easy
      </div>
      <Swiper {...swiperProps}>
        <SwiperSlide>
          <Image
            className="rounded-[44px]"
            width={533}
            alt="Swiper image"
            height={300}
            src="/assets/icons/5.jpg"
          />
          <div className="absolute top-[20%] left-[20%] text-white text-base">
            Hedge Fund-
            <br />
            in-a-box
          </div>
          <div className="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm">
            Learn more
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-[44px]"
            width={533}
            alt="Swiper image"
            height={300}
            src="/assets/icons/6.jpg"
          />
          <div className="absolute top-[20%] left-[20%] text-white text-base">
            Hedge Fund-
            <br />
            in-a-box
          </div>
          <div className="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm">
            Learn more
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-[44px]"
            width={533}
            alt="Swiper image"
            height={300}
            src="/assets/icons/1.jpg"
          />
          <div className="absolute top-[20%] left-[20%] text-white text-base">
            Hedge Fund-
            <br />
            in-a-box
          </div>
          <div className="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm">
            Learn more
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-[44px]"
            width={533}
            height={300}
            alt="Swiper image"
            src="/assets/icons/2.jpg"
          />
          <div className="absolute top-[20%] left-[20%] text-white text-base">
            Hedge Fund-
            <br />
            in-a-box
          </div>
          <div className="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm">
            Learn more
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-[44px]"
            width={533}
            alt="Swiper image"
            height={300}
            src="/assets/icons/3.jpg"
          />
          <div className="absolute top-[20%] left-[20%] text-white text-base">
            Hedge Fund-
            <br />
            in-a-box
          </div>
          <div className="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm">
            Learn more
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-[44px]"
            width={533}
            alt="Swiper image"
            height={300}
            src="/assets/icons/4.jpg"
          />
          <div className="absolute top-[20%] left-[20%] text-white text-base">
            Hedge Fund-
            <br />
            in-a-box
          </div>
          <div className="absolute top-[70%] underline cursor-pointer underline-offset-1 left-[20%] text-white text-sm">
            Learn more
          </div>
        </SwiperSlide>
        <div className="flex flex-col justify-center items-center !mt-11 lg:mx-40 mx-0">
          <div className="flex flex-col justify-center items-center w-[513px]">
            <div className="text-[#2F4644] font-normal text-[52px] !leading-[120%] tracking-[-2px] mb-12">
              Cryptool Marketplace
            </div>
            <div className="text-[#2F4644] text-center text-2xl font-light !leading-[120%] tracking-[-2px] mb-8">
              Search a Listing, make an offer and buy your required
              <br />
              allocation
            </div>
            <HoverEffectBtn
              className="svg-wrapper opacity-[.8] hover:opacity-[1] mx-1 w-[100px] h-[40px]"
              strokeDashoffset={-165}
              width={100}
              height={40}
              handleClick={handleClick}
              label={"Learn more"}
            />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ModuleMarketPlaces;
