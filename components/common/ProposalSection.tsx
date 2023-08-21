import HoverEffectBtn from "components/common/loginBtn/HoverEffectBtn";
import { useMediaSize } from "components/hooks/media-size";
import React from "react";

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
      label: "Use Cryptool free",
      walletAccessCount: "1",
      entires: "5",
      maxGroupSize: "10",
      btnLabel: "Try Now",
    },
    {
      title: "Premium",
      price: 2.99,
      label: "Starting from per account",
      walletAccessCount: "5",
      entires: "unlimited",
      maxGroupSize: "50",
      btnLabel: "Sign up",
    },
    {
      title: "Manager",
      price: 119.99,
      label: "Starting from per account",
      walletAccessCount: "unlimited",
      entires: "unlimited",
      maxGroupSize: "unlimited",
      btnLabel: "Sign up",
    },
  ];
  const { isMobile } = useMediaSize();
  return (
    <div className={isMobile ? "" : "h-[70vh]"}>
      <div className="flex flex-col justify-center items-center mt-[96px]">
        <div className="text-[#00F2DE] text-center text-2xl font-medium !leading-[120%] tracking-[-2px]">
          Get going
        </div>
        <div className="text-[#2F4644] font-normal text-[52px] !leading-[120%] tracking-[-2px]">
          Learn about our account options
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 mb-4 mt-4 lg:mx-40 mx-0">
        {plans.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col col-auto w-[410px] h-[489px] items-start"
            >
              <div className="text-[#2F4644] text-[22px] font-medium not-italic leading-[100%] mb-6">
                {item.title}
              </div>
              <div className="text-[#54716F] text-[52px] not-italic font-normal leading-[120%] tracking-[-2px]">
                ${item.price}
              </div>
              <div className="text-[#54716F] text-base not-italic font-normal mb-8">
                {item.label}
              </div>
              <div className="flex flex-col items-start gap-4 mb-20">
                <div className="text-[#54716F] text-base not-italic font-normal flex flex-row gap-4">
                  Wallet acces per account
                  <div className="text-black">{item.walletAccessCount}</div>
                </div>
                <div className="text-[#54716F] text-base not-italic font-normal flex flex-row gap-4">
                  Asset & Allocation Entires
                  <div className="text-black">{item.entires}</div>
                </div>
                <div className="text-[#54716F] text-base not-italic font-normal flex flex-row gap-4">
                  Max Group size (# User Accounts)
                  <div className="text-black">{item.maxGroupSize}</div>
                </div>
                <div className="text-[#2F4644] cursor-pointer font-light text-2xl leading-[120%] tracking-[-2px] underline underline-offset-1">
                  Learn more
                </div>
              </div>
              <HoverEffectBtn
                className="svg-wrapper opacity-[.8] hover:opacity-[1] mx-1 !w-[120px]"
                strokeDashoffset={-195}
                width={120}
                height={40}
                label={item.btnLabel}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProposalSection;
