import { useCustomRouter } from "components/hooks/custom-router";
import React from "react";

const ForgotPasswordPage = () => {
  const { goToNewEmail } = useCustomRouter();
  return (
    <div className="flex justify-center items-center bg-slate-300 w-full">
      <div className="w-[424px] flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white">
        <div>
          <div className="text-[#2F4644] text-center text-[22px] font-medium not-italic leading-[22px]">
            Forgot your password?
          </div>
          <div className="text-[#658885] text-center text-base font-normal not-italic mt-6">
            Please enter your email address below to receive an email with
            instructions on how to reset your password in just a few minutes.
          </div>
        </div>
        <div className="w-full">
          <div className="text-[#2F4644] text-base font-semibold mb-2">
            Email Address
          </div>
          <input
            type="email"
            id="email"
            className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div
          className="w-full px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center cursor-pointer"
          onClick={() => goToNewEmail()}
        >
          Send Instructions
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
