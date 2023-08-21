import { useCustomRouter } from "components/hooks/custom-router";
import CloseEye from "public/assets/icons/CloseEye";
import OpenEye from "public/assets/icons/OpenEye";
import React, { useState } from "react";

const LoginPage = () => {
    const { goToForgotPassword } = useCustomRouter();
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
    return (
        <div className="flex justify-center items-center bg-slate-300 w-full">
            <div className="w-[425px] flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white">
                <div className="text-[#2F4644] text-center text-[22px] not-italic leading-[22px]">Log In</div>
                <div className="w-full">
                    <div className="text-[#2F4644] text-base font-semibold mb-2">
                        Email Address
                    </div>
                    <input type="email" id="email" className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl" placeholder="Enter your email address" required />
                    <div className="text-[#2F4644] text-base font-semibold mt-6 mb-2">
                        Password
                    </div>
                    <div className="relative">
                        <input type={isPasswordVisible ? "text" : "password"} id="password" className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl" placeholder="Enter your password" required />
                        <button className="absolute inset-y-0 right-0 flex items-center px-4" onClick={()=> setIsPasswordVisible(!isPasswordVisible)}>
                            {isPasswordVisible ? <OpenEye width={20} height={20} /> : <CloseEye width={20} height={20} />}
                        </button>
                    </div>
                    <div className="w-full px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center mt-8 cursor-pointer">
                        Log In
                    </div>
                    <div className="text-center text-[#54716F] text-xs leading-[180%] font-normal mt-4 cursor-pointer" onClick={() => goToForgotPassword() }>Forgot password?</div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;