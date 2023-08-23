import { useCustomRouter } from "components/hooks/custom-router";
import Check from "public/assets/icons/Check";
import CloseEye from "public/assets/icons/CloseEye";
import OpenEye from "public/assets/icons/OpenEye";
import UnCheck from "public/assets/icons/UnCheck";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const { goToForgotPassword } = useCustomRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nonAlphanumericRegex = /[^a-zA-Z0-9]/;
  const [btnClick, setBtnClick] = useState(false);
  const notify = () => toast("Log in Button is Clicked!")
  return (
    <div className="flex justify-center items-center bg-slate-300 w-full h-[100vh]">
      <div className="w-[425px] flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white">
        <div className="text-[#2F4644] text-center text-[22px] not-italic leading-[22px] font-medium">
          Log In
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
          {!email.includes("@") && email !== "" && btnClick && (
            <div className="text-[#E24747] pl-3 mt-2 font-normal text-xs leading-[180%">
              Email is not valid
            </div>
          )}
          <div className="text-[#2F4644] text-base font-semibold mt-6 mb-2">
            Password
          </div>
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={isPasswordVisible ? "text" : "password"}
              id="password"
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
          <div
            className="w-full px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center mt-8 cursor-pointer"
            onClick={() => {
              notify();
              setBtnClick(true);
            }}
          >
            Log In
          </div>
          <ToastContainer className={"loginpage-toast"} position="bottom-left" autoClose={2000} closeButton={false} />
          <div
            className="text-center text-[#54716F] text-xs leading-[180%] font-normal mt-4 cursor-pointer"
            onClick={() => goToForgotPassword()}
          >
            Forgot password?
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
