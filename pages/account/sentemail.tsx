import { useCustomRouter } from "components/hooks/custom-router";
import NewEmail from "public/assets/icons/NewEmail";
import React from "react";

const SentEmailPage = () => {
  const { goToHome } = useCustomRouter();
  return (
    <div className="flex justify-center items-center bg-slate-300 w-full h-[100vh]">
      <div className="w-[565px] flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white">
        <div className="p-6 bg-[#E2EEED] rounded-full">
          <NewEmail width={24} height={24} />
        </div>
        <div className="w-full">
          <div className="text-[#2F4644] text-[22px] not-italic font-medium leading-[22px] text-center">
            A verification email has been sent to your email
          </div>
          <div className="text-center text-[#54716F] text-base not-italic font-normal mt-3">
            Thank you for subscribing! Stay tuned for
          </div>
          <div className="text-center text-[#54716F] text-base not-italic font-normal">
            further updates on Cryptool platform
          </div>
          <div className="text-center text-[#54716F] text-base not-italic font-normal">
            development, features, and launch!
          </div>
        </div>
        <div
          className="w-[360px] px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center cursor-pointer"
          onClick={() => goToHome()}
        >
          Back to Landing Page
        </div>
      </div>
    </div>
  );
};

export default SentEmailPage;
