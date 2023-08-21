import { useCustomRouter } from "components/hooks/custom-router";
import Facebook from "public/assets/icons/Facebook";
import Google from "public/assets/icons/Google";

const Signup = () => {
  const { goToManualSignUp } = useCustomRouter();
  return (
    <div className="flex justify-center items-center bg-slate-300 w-full">
      <div className="w-[427px] flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white">
        <div className="text-[#2F4644] text-center text-[22px] not-italic leading-[22px]">
          Sign Up using
        </div>
        <div className="w-full">
          <div>
            <div className="w-full p-3 rounded-[36px] bg-[#F0F0F0] flex justify-center gap-6 cursor-pointer">
              <Google width={20} height={20} /> Sign Up with Google
            </div>
            <div className="w-full p-3 rounded-[36px] bg-[#F0F0F0] flex justify-center gap-6 mt-4 cursor-pointer">
              <Facebook width={20} height={20} /> Sign Up with Google
            </div>
          </div>
          <div className="flex flex-row text-[#54716F] mt-[17px] mb-[19px] items-center">
            <div className="h-[1px] bg-[#DCDCDC] w-full"></div>
            <div className="px-2 py-[2px] text-base not-italic font-normal">
              Or
            </div>
            <div className="h-[1px] bg-[#DCDCDC] w-full"></div>
          </div>
          <div
            className="w-full px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center mt-4 cursor-pointer"
            onClick={() => goToManualSignUp()}
          >
            Create Account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
