import { cx } from "@emotion/css";
import React, { useEffect, useState } from "react";
import LoginBtn from "./loginBtn/loginBtn";
import { ROUTE_PATH } from "components/hooks/route-path";
import Link from "next/link";
import Image from "next/image";
import Notifications from "public/assets/icons/Notifications";
import Help from "public/assets/icons/Help";
import Group from "public/assets/icons/Group";
import HoverEffectBtn from "components/common/loginBtn/HoverEffectBtn";
import MobileMenu from "public/assets/icons/MobileMenu";
import { useMediaSize } from "components/hooks/media-size";
import MobileMenuCancel from "public/assets/icons/MobileMenuCancel";
import Mail from "public/assets/icons/Mail";
import Twitter from "public/assets/icons/Twitter";
import Linkedin from "public/assets/icons/Linkedin";
import Telegram from "public/assets/icons/Telegram";
import Calendar from "public/assets/icons/Calendar";
interface HeaderProps {
  activeSlide: number;
}
const Header: React.FC<HeaderProps> = ({ activeSlide }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [ismenuClick, setIsMenuClick] = useState(false);
  const { isTablet } = useMediaSize();
  const [mousePosition, setMousePosition] = useState(false);
  const onScroll = () => {
    if (window.scrollY > window.innerHeight - 70) {
      setMousePosition(true);
    } else {
      setMousePosition(false);
    }
  };
  useEffect(() => {
    if (isTablet) {
      setIsMenuClick(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isTablet]);

  return (
    <nav
      className={cx(
        "fixed z-20 top-0 bg-transparent px-[50px] py-4 text-white w-full font-sans",
        activeSlide > 0 || mousePosition ? "isSticky" : "",
        isTablet && ismenuClick ? "h-[100vh] !bg-[#03D9C8]" : ""
      )}
    >
      <div className="flex justify-center">
        <div className="flex items-center justify-between max-w-[1560px] w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-row flex-shrink-0 justify-between 2xl:gap-[121px] gap-0">
              <div>
                {activeSlide || mousePosition ? (
                  <Image
                    width={163}
                    height={50}
                    alt="LogoBlack"
                    src="/assets/icons/FooterLogo.png"
                  />
                ) : (
                  <Image
                    width={163}
                    height={50}
                    src="/assets/icons/LogoWhite.svg"
                    alt="LogoWhite"
                  />
                )}
              </div>
              {!isTablet && (
                <div className="hidden md:flex items-center">
                  <HoverEffectBtn
                    className="svg-wrapper opacity-[.9] hover:opacity-[1] mx-1"
                    strokeDashoffset={-165}
                    width={100}
                    height={40}
                    textClass="font-normal not-italic text-base hover:font-semibold"
                    label="Portfolio"
                  />
                  <HoverEffectBtn
                    className="svg-wrapper opacity-[.9] hover:opacity-[1] mx-1"
                    strokeDashoffset={-165}
                    width={100}
                    height={40}
                    textClass="font-normal not-italic text-base hover:font-semibold"
                    label="Raise"
                  />
                  <HoverEffectBtn
                    className="svg-wrapper opacity-[.9] hover:opacity-[1] mx-1"
                    strokeDashoffset={-165}
                    width={100}
                    height={40}
                    textClass="font-normal not-italic text-base hover:font-semibold"
                    label="Market"
                  />
                </div>
              )}
            </div>
          </div>

          {!isTablet && (
            <div className="flex flex-row items-center">
              {isLogin && !isTablet && (
                <div className="hidden 2xl:flex flex-row items-center mr-10 w-[333px]">
                  <HoverEffectBtn
                    className="svg-wrapper opacity-[.9] hover:opacity-[1] mx-1"
                    strokeDashoffset={-165}
                    width={100}
                    height={40}
                    textClass="font-normal not-italic text-base hover:font-semibold"
                    label="My Crptool"
                  />
                  <HoverEffectBtn
                    className="svg-wrapper opacity-[.9] hover:opacity-[1] mx-1"
                    strokeDashoffset={-165}
                    width={100}
                    height={40}
                    textClass="font-normal not-italic text-base hover:font-semibold"
                    label="My Calendar"
                  />
                  <HoverEffectBtn
                    className="svg-wrapper opacity-[.9] hover:opacity-[1] mx-1"
                    strokeDashoffset={-165}
                    width={100}
                    height={40}
                    textClass="font-normal not-italic text-base hover:font-semibold"
                    label="My Group"
                  />
                </div>
              )}
              <div className="flex flex-row justify-center items-center">
                {isLogin && (
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="h-9 w-[300px] focus-visible:outline-none block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Search"
                      required
                    />
                  </div>
                )}
                {isLogin ? (
                  <div className="flex flex-row items-center ml-4 gap-4">
                    <Link href={ROUTE_PATH.Login} passHref className="w-[20px]">
                      <Notifications width={20} height={20} />
                    </Link>
                    <Link href={ROUTE_PATH.Login} passHref className="w-[20px]">
                      <Help width={20} height={20} />
                    </Link>
                    <Link href={ROUTE_PATH.Login} passHref className="w-[20px]">
                      <Group width={20} height={20} />
                    </Link>
                    <Link href={ROUTE_PATH.Login} passHref className="w-[40px]">
                      <Image
                        width={40}
                        height={40}
                        src="/assets/icons/account_background.svg"
                        alt="account_background"
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-row items-center ml-4 gap-3">
                    <LoginBtn
                      label="Log in"
                      setIsLogin={setIsLogin}
                      isLogin={isLogin}
                    />
                    <LoginBtn
                      label="Sign up"
                      setIsLogin={setIsLogin}
                      isLogin={isLogin}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          {isTablet ? (
            <button
              className={cx(
                "px-3 py-2 rounded-3xl",
                ismenuClick &&
                  "bg-white transition-all ease-in-out duration-500"
              )}
              onClick={() => setIsMenuClick(!ismenuClick)}
            >
              {ismenuClick ? (
                <MobileMenuCancel width={20} height={20} />
              ) : (
                <MobileMenu width={20} height={20} />
              )}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      {isTablet && ismenuClick && (
        <div className="mt-[10px] flex flex-col justify-between h-5/6 text-[#2F4644]">
          <div className="flex flex-col gap-2">
            <div className="text-[#2F4644] text-base not-italic font-normal cursor-pointer menuitem px-3 py-2 rounded-2xl">
              Portfolio
            </div>
            <div className="text-[#2F4644] text-base not-italic font-normal cursor-pointer menuitem px-3 py-2 rounded-2xl">
              Raise
            </div>
            <div className="text-[#2F4644] text-base not-italic font-normal cursor-pointer menuitem px-3 py-2 rounded-2xl">
              Market
            </div>
            {isLogin && (
              <>
                <div className="text-[#2F4644] text-base not-italic font-normal cursor-pointer menuitem px-3 py-2 rounded-2xl">
                  My Cryptool
                </div>
                <div className="text-[#2F4644] text-base not-italic font-normal cursor-pointer menuitem px-3 py-2 rounded-2xl">
                  My Calendar
                </div>
                <div className="text-[#2F4644] text-base not-italic font-normal cursor-pointer menuitem px-3 py-2 rounded-2xl">
                  My Group
                </div>
              </>
            )}
          </div>
          <div>
            <LoginBtn
              className="w-full blue"
              label="Log In"
              setIsLogin={setIsLogin}
              isLogin={isLogin}
            />
            <LoginBtn
              className="w-full mt-[10px] red"
              label="Sing Up"
              setIsLogin={setIsLogin}
              isLogin={isLogin}
            />
            <div className="flex flex-col mt-16">
              <div className="flex flex-row space-x-2 justify-center">
                <Link
                  target="blank"
                  href={"mailto:info@cryptool.io"}
                  className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                >
                  <Mail width={14} height={16} />
                </Link>
                <Link
                  target="blank"
                  href={"https://twitter.com/cryptool_io"}
                  className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                >
                  <Twitter width={14} height={16} />
                </Link>
                <Link
                  target="blank"
                  href={"https://linkedin.com/company/cryptool-io"}
                  className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                >
                  <Linkedin width={14} height={16} />
                </Link>
                <Link
                  target="blank"
                  href={"https://t.me/cryptool_io"}
                  className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                >
                  <Telegram width={14} height={16} />
                </Link>
                <Link
                  target="blank"
                  href={"https://calendly.com/cryptool_io/"}
                  className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base"
                >
                  <Calendar width={14} height={16} />
                </Link>
              </div>
              <div className="mt-2 text-[#54716F] text-base font-normal text-center">
                © 2023 Cryptool. All rights reserved
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
