import { useCustomRouter } from "components/hooks/custom-router";
import Link from "next/link";
import router from "next/router";
import Check from "public/assets/icons/Check";
import Close from "public/assets/icons/Close";
import Linkedin from "public/assets/icons/Linkedin";
import Telegram from "public/assets/icons/Telegram";
import Twitter from "public/assets/icons/Twitter";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpSubscribePage = () => {
  const [email, setEmail] = useState("");
  const { goToManualSignUp } = useCustomRouter();
  const notify = () =>
    toast(
      <div className="flex justify-between items-center">
        Response successfully submitted
        <Check width={24} height={24} />
      </div>
    );
  useEffect(() => {
    if (router.asPath !== "/") {
      const next = document.querySelector("#__next");
      next?.classList.remove("h-[100vh]");
    }
  });
  return (
    <div className="flex justify-center items-center bg-slate-300 w-full py-8">
      <div className="w-[427px] relative flex justify-center items-center p-8 flex-col gap-8 rounded-xl bg-white">
        <div className="w-full">
          <div className="text-[#2F4644] text-center text-[22px] font-medium not-italic leading-[22px]">
            Subscribe
          </div>
          <div className="text-[#658885] text-center text-base font-normal mt-6">
            Subscribe and stay up to date with our latest
            <br />
            news and events.
          </div>
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
        </div>
        <div className="w-full">
          <div className="text-[#2F4644] text-base font-semibold">
            What type of User are you?
          </div>
          <div className="flex items-center justify-start gap-[15px] w-full mt-[13px]">
            <input type="checkbox" />
            <div className="text-[#54716F] font-normal text-xs leading-[180%]">
              Individual Investor
            </div>
          </div>
          <div className="flex items-center justify-start gap-[15px] w-full mt-[13px]">
            <input type="checkbox" />
            <div className="text-[#54716F] font-normal text-xs leading-[180%]">
              Venture Capital
            </div>
          </div>
          <div className="flex items-center justify-start gap-[15px] w-full mt-[13px]">
            <input type="checkbox" />
            <div className="text-[#54716F] font-normal text-xs leading-[180%]">
              Project
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-[#2F4644] text-base font-semibold">
            How large is your Network or Community?
          </div>
          <div className="flex items-center justify-start gap-[15px] w-full mt-[13px]">
            <input type="checkbox" />
            <div className="text-[#54716F] font-normal text-xs leading-[180%]">
              Not Applicable
            </div>
          </div>
          <div className="flex items-center justify-start gap-[15px] w-full mt-[13px]">
            <input type="checkbox" />
            <div className="text-[#54716F] font-normal text-xs leading-[180%]">
              Less than 100
            </div>
          </div>
          <div className="flex items-center justify-start gap-[15px] w-full mt-[13px]">
            <input type="checkbox" />
            <div className="text-[#54716F] font-normal text-xs leading-[180%]">
              In between 100 and 1,000
            </div>
          </div>
          <div className="flex items-center justify-start gap-[15px] w-full mt-[13px]">
            <input type="checkbox" />
            <div className="text-[#54716F] font-normal text-xs leading-[180%]">
              In between 1,000 and 10,000
            </div>
          </div>
          <div className="flex items-center justify-start gap-[15px] w-full mt-[13px]">
            <input type="checkbox"></input>
            <div className="text-[#54716F] font-normal text-xs leading-[180%]">
              More than 10,000
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-[#2F4644] text-base font-semibold">
            Follow us on
          </div>
          <Link
            href={"https://t.me/cryptool_io"}
            className="flex flex-row items-center mt-3"
          >
            <div className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base">
              <Telegram width={16} height={16} />
            </div>
            <div className="ml-2 text-[#2F4644] font-normal text-sm leading-6">
              Telegram
            </div>
          </Link>
          <Link
            href={"https://twitter.com/cryptool_io"}
            className="flex flex-row items-center mt-3"
          >
            <div className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base">
              <Twitter width={16} height={16} />
            </div>
            <div className="ml-2 text-[#2F4644] font-normal text-sm leading-6">
              Twitter
            </div>
          </Link>
          <Link
            href={"https://linkedin.com/company/cryptool-io"}
            className="flex flex-row items-center mt-3"
          >
            <div className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base">
              <Linkedin width={16} height={16} />
            </div>
            <div className="ml-2 text-[#2F4644] font-normal text-sm leading-6">
              LinkedIn
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-start gap-[15px] w-full">
          <input type="checkbox" />
          <div className="text-[#54716F] font-normal text-xs leading-[180%]">
            I agree to receive updates from Cryptool.
          </div>
        </div>
        <div className="w-full">
          <div
            className="w-full px-6 py-2 rounded-[29px] bg-[#2F4644] text-white flex justify-center mt-4 cursor-pointer"
            onClick={
              () => notify()
              // goToManualSignUp()
            }
          >
            Submit
          </div>
          <ToastContainer
            className={"loginpage-toast custom-toast-container"}
            position="bottom-right"
            autoClose={2000}
            closeButton={false}
            pauseOnHover={false}
            theme={"dark"}
          />
        </div>
        <div className="absolute top-[10px] right-[10px]">
          <Close width={32} height={32} />
        </div>
      </div>
    </div>
  );
};

export default SignUpSubscribePage;
