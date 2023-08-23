import HoverEffectBtn from "components/common/loginBtn/HoverEffectBtn";
import { useMediaSize } from "components/hooks/media-size";
import React from "react";
import LoginBtn from "./loginBtn/loginBtn";

interface Plan {
  title: string;
  price: number;
  label: string;
  walletAccessCount: string | number;
  entires: string | number;
  maxGroupSize: string | number;
  btnLabel: string;
}
const ProposalSection = () => {
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
      entires: "unlimited",
      maxGroupSize: "100",
      btnLabel: "Coming Soon",
    },
    {
      title: "Manager",
      price: 119.99,
      label: "Starting from",
      walletAccessCount: "unlimited",
      entires: "unlimited",
      maxGroupSize: "unlimited",
      btnLabel: "Coming Soon",
    },
  ];
  const { isTablet } = useMediaSize();
  return (
    <div className={isTablet ? "" : "h-full"}>
      <div className="flex flex-col justify-center items-center mt-[96px]">
        <div className="text-[#00F2DE] text-center text-2xl font-medium !leading-[120%] tracking-[-2px]">
          Get going
        </div>
        <div className="text-[#2F4644] text-center font-normal text-[52px] !leading-[120%] tracking-[-2px]">
          Learn about our account options
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap max-w-[1560px] justify-between items-center gap-6 mb-4 pt-5 lg:mx-40 mt-5 mx-0 border-t-[1px] border-solid border-[#DCDCDC]">
          {plans.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col col-auto min-w-[350px] w-[30%] items-start font-sans"
              >
                <div className="text-[#2F4644] text-[22px] font-medium not-italic leading-[100%] mb-6">
                  {item.title}
                </div>
                <div className="text-[#54716F] text-base not-italic font-normal">
                  {item.label}
                </div>
                <div className="text-[#54716F] text-[52px] not-italic font-normal leading-[120%] tracking-[-2px] mb-5">
                  ${item.price}
                  <label className="text-base font-normal leading-10 ml-[5px]">
                    {item.price > 0 && "per month"}
                  </label>
                </div>
                <div className="flex flex-col items-start gap-4 mb-10">
                  <div className="text-[#54716F] text-base not-italic font-semibold flex flex-row gap-4">
                    Wallet Access per Account
                    <div className="text-black">{item.walletAccessCount}</div>
                  </div>
                  <div className="text-[#54716F] text-base not-italic font-semibold flex flex-row gap-4">
                    Portfolio Asset & Allocation Entries
                    <div className="text-black">{item.entires}</div>
                  </div>
                  <div className="text-[#54716F] text-base not-italic font-semibold flex flex-row gap-4">
                    Max Group Size (# User Accounts)
                    <div className="text-black">{item.maxGroupSize}</div>
                  </div>
                  <HoverEffectBtn
                    className="svg-wrapper opacity-[.8] hover:opacity-[1] hover:font-normal text-[#2F4644] font-light text-2xl !w-[120px] leading-[120%] tracking-[-2px] font-sans"
                    strokeDashoffset={-195}
                    role="Proposal"
                    width={120}
                    height={40}
                    label={"Learn more"}
                  />
                </div>
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
