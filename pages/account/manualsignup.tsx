import { useCustomRouter } from "components/hooks/custom-router";
import CloseEye from "public/assets/icons/CloseEye";
import OpenEye from "public/assets/icons/OpenEye";
import React, { useState } from "react";

const ManualSignUpPage = () => {
    const { goToForgotPassword } = useCustomRouter();
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
    const [ isRepeatPasswordVisible, setIsRepeatPasswordVisible ] = useState(false);
    return (
        <div className="flex justify-center items-center bg-slate-300 w-full">
            <div className="w-[425px] flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white">
                <div className="text-[#2F4644] text-center text-[22px] not-italic leading-[22px]">Sign Up</div>
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
                    <div className="text-[#2F4644] text-base font-semibold mt-6 mb-2">
                        Repeat Password
                    </div>
                    <div className="relative">
                        <input type={isRepeatPasswordVisible ? "text" : "password"} id="password" className="bg-[#F0F0F0] border border-gray-300 text-black text-sm block w-full px-3 py-2 rounded-xl" placeholder="Enter your password" required />
                        <button className="absolute inset-y-0 right-0 flex items-center px-4" onClick={()=> setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}>
                            {isRepeatPasswordVisible ? <OpenEye width={20} height={20} /> : <CloseEye width={20} height={20} />}
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-[15px] w-full">
                    <input type="checkbox" />
                    <div className="text-[#54716F] font-normal text-xs leading-[180%]">I agree to receive promotional updates from Cryptool.</div>
                </div>
                <div>
                    <div className="w-full px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center cursor-pointer">
                        Create Account
                    </div>
                    <div className="text-[#54716F] text-center text-xs leading-[180%] font-normal flex flex-col justify-center items-center mt-4">
                        <div>By proceeding, you confirm that you have read and agree</div>
                        <div className="flex flex-row">
                            <div>to Cryptool’s&nbsp;</div>
                            <div className="font-semibold text-[#2F4644] cursor-pointer">Terms of Use</div>
                            <div>&nbsp;and&nbsp;</div>
                            <div className="font-semibold text-[#2F4644] cursor-pointer">Privacy Policy</div>
                            <div>.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManualSignUpPage;