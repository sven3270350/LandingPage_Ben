import CloseEye from "public/assets/icons/CloseEye";
import OpenEye from "public/assets/icons/OpenEye";
import React, { useState } from "react";

const ChangePasswordPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  return (
    <div className="flex justify-center items-center bg-slate-300 w-full h-[100vh]">
      <div className="w-[424px] flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white">
        <div>
          <div className="text-[#2F4644] text-center text-[22px] font-medium not-italic leading-[22px]">
            Change Password
          </div>
        </div>
        <div className="w-full">
          <div className="text-[#2F4644] text-base font-semibold mt-6 mb-2">
            Old Password
          </div>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl"
              placeholder="Enter your old password"
              required
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center px-4"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <OpenEye width={20} height={20} />
              ) : (
                <CloseEye width={20} height={20} />
              )}
            </button>
          </div>
          <div className="text-[#2F4644] text-base font-semibold mt-6 mb-2">
            New Password
          </div>
          <div className="relative">
            <input
              type={isNewPasswordVisible ? "text" : "password"}
              id="password"
              className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl"
              placeholder="Enter your new password"
              required
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center px-4"
              onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
            >
              {isNewPasswordVisible ? (
                <OpenEye width={20} height={20} />
              ) : (
                <CloseEye width={20} height={20} />
              )}
            </button>
          </div>
          <div className="text-[#2F4644] text-base font-semibold mt-6 mb-2">
            Confirm Password
          </div>
          <div className="relative">
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              id="password"
              className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl"
              placeholder="Enter your new password"
              required
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center px-4"
              onClick={() =>
                setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
              }
            >
              {isConfirmPasswordVisible ? (
                <OpenEye width={20} height={20} />
              ) : (
                <CloseEye width={20} height={20} />
              )}
            </button>
          </div>
          <div className="flex flex-row justify-between w-full mt-8">
            <div className="w-[160px] px-6 py-2 border-solid border-[1px] border-[#2F4644] rounded-[29px] bg-white text-[#2F4644] flex justify-center cursor-pointer">
              Cancel
            </div>
            <div className="w-[160px] px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center cursor-pointer">
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
