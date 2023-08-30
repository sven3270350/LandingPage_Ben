import HoverEffectBtn from "components/common/loginBtn/HoverEffectBtn";
import React from "react";
import LoginBtn from "./loginBtn/loginBtn";
import { cx } from "@emotion/css";

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
    <div>
      <div className="flex flex-col justify-center items-center pt-[96px]">
        <div
          className={cx(
            "text-[#00F2DE] text-center text-2xl font-medium !leading-[120%] tracking-[-2px]",
            activeSlide === 3 && "animate-normal-animation duration-1000"
          )}
        >
          Get going
        </div>
        <div
          className={cx(
            "text-[#2F4644] text-center font-normal text-[52px] !leading-[120%] tracking-[-2px]",
            activeSlide === 3 && "animate-normal-animation duration-1000"
          )}
        >
          Learn about our account options
        </div>
      </div>
      <div
        className={cx(
          "flex justify-center",
          activeSlide === 3 && "animate-normal-animation duration-1000"
        )}
      >
        <div className="flex flex-wrap max-w-[1560px] justify-center items-center gap-6 mb-5 pb-8 pt-16 mt-12 border-t-[1px] border-solid border-[#DCDCDC]">
          {plans.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col col-auto min-w-[390px] w-[30%] items-start"
              >
                <div className="text-[#2F4644] text-[22px] font-medium not-italic leading-[100%] mb-6">
                  {item.title}
                </div>
                <div className="text-[#54716F] text-base not-italic font-normal">
                  {item.label}
                </div>
                <div className="text-[#54716F] text-[52px] flex items-end not-italic font-normal leading-[120%] tracking-[-2px] mb-12">
                  ${item.price}
                  <div className="text-base leading-[39px] font-normal ml-[5px]">
                    {item.price > 0 && "per month"}
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 mb-[88px] w-full">
                  <div className="text-[#54716F] text-base not-italic font-normal flex flex-row gap-4">
                    Wallet Access per Account
                    <div className="text-[#2F4644] font-semibold">
                      {item.walletAccessCount}
                    </div>
                  </div>
                  <div className="text-[#54716F] text-base not-italic flex flex-row gap-4">
                    Portfolio Asset & Allocation Entries
                    <div className="text-[#2F4644] font-semibold">
                      {item.entires}
                    </div>
                  </div>
                  <div className="text-[#54716F] text-base not-italic flex flex-row gap-4">
                    Max Group Size (# User Accounts)
                    <div className="text-[#2F4644] font-semibold">
                      {item.maxGroupSize}
                    </div>
                  </div>
                </div>
                <HoverEffectBtn
                  className="svg-wrapper mb-12 hover:font-normal text-[#2F4644] font-light text-2xl !w-[125px] leading-[120%] tracking-[-2px]"
                  strokeDashoffset={-195}
                  role="Proposal"
                  width={125}
                  height={40}
                  label={"Learn more"}
                />
                <LoginBtn
                  label={item.btnLabel}
                  className="!flex svg-wrapper opacity-[.8] hover:opacity-[1] !w-[140px] blue !rounded-3xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProposalSection;
