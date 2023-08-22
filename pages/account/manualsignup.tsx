import Check from "public/assets/icons/Check";
import CloseEye from "public/assets/icons/CloseEye";
import OpenEye from "public/assets/icons/OpenEye";
import UnCheck from "public/assets/icons/UnCheck";
import React, { useState } from "react";

const ManualSignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const nonAlphanumericRegex = /[^a-zA-Z0-9]/;
  const [btnClick, setBtnClick] = useState(false);
  return (
    <div className="flex justify-center items-center bg-slate-300 w-full">
      <div className="w-[425px] flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white">
        <div className="text-[#2F4644] text-center text-[22px] not-italic leading-[22px]">
          Sign Up
        </div>
        <div className="w-full">
          <div className="text-[#2F4644] text-base font-semibold mb-2">
            Email Address
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl"
            placeholder="Enter your email address"
            required
          />
          {!email.includes("@") && email !== "" && (
            <div className="text-[#E24747] pl-3 mt-2 font-normal text-xs leading-[180%">
              Email is not valid
            </div>
          )}
          <div className="text-[#2F4644] text-base font-semibold mt-6 mb-2">
            Password
          </div>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl"
              placeholder="Enter your password"
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
          {btnClick && (
            <>
              <div className="text-[#54716F] text-base font-normal text-start mt-6 mb-[10px]">
                Password requirement
              </div>
              <div className="text-[#54716F] gap-[15px] font-normal text-xs leading-[180%] flex flex-row items-center">
                {password.length > 5 && password !== "" ? (
                  <Check width={16} height={16} />
                ) : (
                  <UnCheck width={16} height={16} />
                )}
                must be at least 6 characters
              </div>
              <div className="text-[#54716F] gap-[15px] font-normal text-xs leading-[180%] flex flex-row items-center">
                {password.length < 21 && password !== "" ? (
                  <Check width={16} height={16} />
                ) : (
                  <UnCheck width={16} height={16} />
                )}
                must be fewer than 20 characters
              </div>
              <div className="text-[#54716F] gap-[15px] font-normal text-xs leading-[180%] flex flex-row items-center">
                {password.length < 21 && password !== "" ? (
                  <Check width={16} height={16} />
                ) : (
                  <UnCheck width={16} height={16} />
                )}
                must be different from previous password
              </div>
              <div className="text-[#54716F] gap-[15px] font-normal text-xs leading-[180%] flex flex-row items-center">
                {nonAlphanumericRegex.test(password) && password !== "" ? (
                  <Check width={16} height={16} />
                ) : (
                  <UnCheck width={16} height={16} />
                )}
                must include a character that is not a letter or number
              </div>
            </>
          )}

          <div className="text-[#2F4644] text-base font-semibold mt-6 mb-2">
            Repeat Password
          </div>
          <div className="relative">
            <input
              type={isRepeatPasswordVisible ? "text" : "password"}
              id="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl"
              placeholder="Enter your password"
              required
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center px-4"
              onClick={() =>
                setIsRepeatPasswordVisible(!isRepeatPasswordVisible)
              }
            >
              {isRepeatPasswordVisible ? (
                <OpenEye width={20} height={20} />
              ) : (
                <CloseEye width={20} height={20} />
              )}
            </button>
          </div>
          {btnClick &&
            password !== confirmPassword &&
            confirmPassword !== "" && (
              <div className="text-[#E24747] mt-[10px] text-xs font-normal">
                Password does not match
              </div>
            )}
          <div className="text-[#2F4644] text-base font-semibold mt-6 mb-2">
            Ambassador Program
          </div>
          <input
            type="text"
            id="text"
            className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl"
            placeholder="Coming soon!"
            required
          />
        </div>
        <div className="flex items-center justify-start gap-[15px] w-full">
          <input type="checkbox" />
          <div className="text-[#54716F] font-normal text-xs leading-[180%]">
            I agree to receive promotional updates from Cryptool.
          </div>
        </div>
        <div>
          <div
            className="w-full px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center cursor-pointer"
            onClick={() => setBtnClick(true)}
          >
            Create Account
          </div>
          <div className="text-[#54716F] text-center text-xs leading-[180%] font-normal flex flex-col justify-center items-center mt-4">
            <div>By proceeding, you confirm that you have read and agree</div>
            <div className="flex flex-row">
              <div>to Cryptool’s&nbsp;</div>
              <div className="font-semibold text-[#2F4644] cursor-pointer">
                Terms of Use
              </div>
              <div>&nbsp;and&nbsp;</div>
              <div className="font-semibold text-[#2F4644] cursor-pointer">
                Privacy Policy
              </div>
              <div>.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualSignUpPage;
