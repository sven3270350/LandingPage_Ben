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
      btnLabel: "Sign Up",
    },
    {
      title: "Manager",
      price: 119.99,
      label: "Starting from per account",
      walletAccessCount: "unlimited",
      entires: "unlimited",
      maxGroupSize: "unlimited",
      btnLabel: "Sign Up",
    },
  ];
  return (
    <div className=" h-[60vh]">
      <div className="flex flex-col justify-center items-center mt-[96px]">
        <div className="text-[#00F2DE] text-center text-2xl font-medium !leading-[120%] tracking-[-2px]">
          Get going
        </div>
        <div className="text-[#2F4644] font-normal text-[52px] !leading-[120%] tracking-[-2px]">
          Learn about our account options
        </div>
        {/* <div className="text-[#2F4644] text-2xl font-light !leading-[120%] tracking-[-2px] mb-10">
          Get the most out of cryptool
        </div> */}
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
                {item.price}
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
              <button
                type="button"
                className="inline-block w-[176px] rounded-3xl text-[#2F4644] bg-[#00f2de] py-2 font-normal text-base shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
              >
                {item.btnLabel}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProposalSection;
