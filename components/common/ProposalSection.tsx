import HoverEffectBtn from "components/common/loginBtn/HoverEffectBtn";
import React from "react";
import LoginBtn from "./loginBtn/loginBtn";
import { cx } from "@emotion/css";
import { useMediaSize } from "components/hooks/media-size";

interface Plan {
  title: string;
  price: number;
  label: string;
  walletAccessCount: string | number;
  entires: string | number;
  maxGroupSize: string | number;
  btnLabel: string;
}

interface ProposalSectionProps {
  activeSlide?: number;
}

const ProposalSection: React.FC<ProposalSectionProps> = ({ activeSlide }) => {
  const { isTablet } = useMediaSize();
  const plans: Plan[] = [
    {
      title: "Free",
      price: 0,
      label: "Use Cryptool for free",
      walletAccessCount: "2",
      entires: "5",
      maxGroupSize: "10",
      btnLabel: "Coming Soon",
    },
    {
      title: "Premium",
      price: 2.99,
      label: "Starting from",
      walletAccessCount: "10",
      entires: "Unlimited",
      maxGroupSize: "100",
      btnLabel: "Coming Soon",
    },
    {
      title: "Manager",
      price: 119.99,
      label: "Starting from",
      walletAccessCount: "Unlimited",
      entires: "Unlimited",
      maxGroupSize: "Unlimited",
      btnLabel: "Coming Soon",
    },
  ];
  return (
    <div className="flex flex-col justify-center">
      <div
        className={cx(
          "flex flex-col justify-center items-center mt-[96px]",
          isTablet && "!mt-3 mb-10 px-3"
        )}
      >
        <div
          className={cx(
            "text-[#00F2DE] text-center text-base md:text-lg lg:text-xl xl:text-2xl font-medium !leading-[120%]",
            activeSlide === 3 && "animate-normal-animation duration-1000"
          )}
        >
          Get going
        </div>
        <div
          className={cx(
            "text-[#2F4644] text-center font-normal text-3xl md:text-4xl lg:text-5xl xl:text-[52px] !leading-[120%]",
            activeSlide === 3 && "animate-normal-animation duration-1000"
          )}
        >
          Learn about our account options
        </div>
        <div
          className={cx(
            "text-[#2F4644] text-center text-base md:text-lg lg:text-xl xl:text-2xl not-italic font-light !leading-[120%]",
            activeSlide === 3 && "animate-normal-animation duration-1000"
          )}
        >
          Sign-up and start enjoying all benefits according your needs
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={cx(
            "flex max-w-[1560px] justify-center items-center mb-5 pt-9 mt-2 lg:mt-4 xl:mt-6 border-t-[1px] border-solid border-[#DCDCDC]",
            isTablet ? "flex-col gap-5" : "flex-wrap"
          )}
        >
          {plans.map((item, index) => {
            return (
              <div key={index} className={isTablet ? "w-full" : ""}>
                <div className="flex flex-col h-full">
                  <div className="flex flex-col col-auto sm:w-[396px] py-7 px-2 sm:px-[22px] items-start border border-solid rounded-xl bg-[#dcdcdc33]">
                    <div className="text-[#2F4644] text-base md:text-lg lg:text-xl xl:text-[22px] font-medium not-italic leading-[100%] mb-6">
                      {item.title}
                    </div>
                    <div className="text-[#54716F] text-sm xl:text-base not-italic font-normal">
                      {item.label}
                    </div>
                    <div className="text-[#54716F] text-3xl md:text-4xl lg:text-5xl xl:text-[52px] flex items-end not-italic font-normal leading-[120%] mb-6 md:mb-8 lg:mb-10 xl:mb-12">
                      ${item.price}
                      <div className="text-base leading-[39px] font-normal ml-[5px]">
                        {item.price > 0 && "per month"}
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 mb-10 md:mb-12 lg:mb-16 xl:mb-[88px] w-full">
                      <div className="text-[#54716F] text-sm xl:text-base not-italic font-normal flex flex-row gap-4">
                        Wallet Access per Account
                        <div className="text-[#2F4644] font-semibold">
                          {item.walletAccessCount}
                        </div>
                      </div>
                      <div className="text-[#54716F] text-sm xl:text-base not-italic flex flex-row gap-4">
                        Portfolio Asset & Allocation Entries
                        <div className="text-[#2F4644] font-semibold">
                          {item.entires}
                        </div>
                      </div>
                      <div className="text-[#54716F] text-sm xl:text-base not-italic flex flex-row gap-4">
                        Max Group Size (# User Accounts)
                        <div className="text-[#2F4644] font-semibold">
                          {item.maxGroupSize}
                        </div>
                      </div>
                    </div>
                    {/* <HoverEffectBtn
                      className="svg-wrapper hover:font-normal text-[#2F4644] font-light text-2xl !w-[140px] leading-[120%]"
                      strokeDashoffset={-180}
                      strokeDasharray="135 300"
                      role="Proposal"
                      width={140}
                      height={40}
                      label={"Learn more"}
                    /> */}
                    <button
                      type="button"
                      className={cx(
                        "inline-block cursor-pointer text-[#2F4644] font-normal not-italic text-base md:text-lg lg:text-xl xl:text-2xl hover:font-semibold focus:outline-none border-b-[3px] border-transparent hover:border-[#00F2DE] border-solid"
                      )}
                    >
                      Learn more
                    </button>
                  </div>
                  {/* <LoginBtn
                    label={item.btnLabel}
                    className="!flex svg-wrapper opacity-[.8] hover:opacity-[1] !w-[140px] blue !rounded-3xl"
                  /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProposalSection;
