import { cx } from "@emotion/css";
import { useEffect, useState } from "react";
import LoginBtn from "./loginBtn/loginBtn";
import { ROUTE_PATH } from "components/hooks/route-path";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const onScroll = () => {
    if (window.scrollY > window.innerHeight - 65) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={cx(
        "sticky z-20 top-0 bg-transparent px-[50px] py-4 text-white w-full",
        stickyNav ? "isSticky" : ""
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row flex-shrink-0 justify-between 2xl:gap-[121px] gap-0">
            <div>
              {stickyNav ? (
                <Image
                  width={163}
                  height={50}
                  src="/assets/icons/LogoBlack.png"
                  alt="LogoBlack"
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
            <div className="hidden md:flex items-center">
              <Link
                href={ROUTE_PATH.HOME}
                className="mx-4 navItem opacity-[.8] hover:opacity-[1] relative overflow-hidden hover:text-white text-center rounded-md text-sm"
              >
                Portfolio
                <div className="hoverEvent absolute bottom-[-24px] w-[90%] rounded-full h-6 left-[5%] bg-[#6fadfba1]"></div>
              </Link>
              <Link
                href={ROUTE_PATH.HOME}
                className="mx-4 navItem opacity-[.8] hover:opacity-[1] relative overflow-hidden hover:text-white text-center rounded-md text-sm"
              >
                Raise
                <div className="hoverEvent absolute bottom-[-24px] w-[90%] rounded-full h-6 left-[5%] bg-[#6fadfba1]"></div>
              </Link>
              <Link
                href={ROUTE_PATH.HOME}
                className="mx-4 navItem opacity-[.8] hover:opacity-[1] relative overflow-hidden hover:text-white text-center rounded-md text-sm"
              >
                Marketplace
                <div className="hoverEvent absolute bottom-[-24px] w-[90%] rounded-full h-6 left-[5%] bg-[#6fadfba1]"></div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center">
          {isLogin && (
            <div className="hidden 2xl:flex flex-row items-center mr-10 w-[333px]">
              <Link
                href={ROUTE_PATH.HOME}
                className="mx-4 navItem w-full opacity-[.8] hover:opacity-[1] relative overflow-hidden lg:block hidden hover:text-white text-center rounded-md text-sm"
              >
                My Cryptool
                <div className="hoverEvent absolute bottom-[-24px] w-[90%] rounded-full h-6 left-[5%] bg-[#6fadfba1]"></div>
              </Link>
              <Link
                href={ROUTE_PATH.HOME}
                className="mx-4 navItem w-full opacity-[.8] hover:opacity-[1] relative overflow-hidden lg:block hidden hover:text-white text-center rounded-md text-sm"
              >
                My Calendar
                <div className="hoverEvent absolute bottom-[-24px] w-[90%] rounded-full h-6 left-[5%] bg-[#6fadfba1]"></div>
              </Link>
              <Link
                href={ROUTE_PATH.HOME}
                className="mx-4 navItem w-full opacity-[.8] hover:opacity-[1] relative overflow-hidden lg:block hidden hover:text-white text-center rounded-md text-sm"
              >
                My Group
                <div className="hoverEvent absolute bottom-[-24px] w-[90%] rounded-full h-6 left-[5%] bg-[#6fadfba1]"></div>
              </Link>
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
                <Link href={ROUTE_PATH.HOME} passHref className="w-[20px]">
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icons/notifications.svg"
                    alt="notifications"
                  />
                </Link>
                <Link href={ROUTE_PATH.HOME} passHref className="w-[20px]">
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icons/help.svg"
                    alt="help"
                  />
                </Link>
                <Link href={ROUTE_PATH.HOME} passHref className="w-[20px]">
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icons/groups_2.svg"
                    alt="groups_2"
                  />
                </Link>
                <Link href={ROUTE_PATH.HOME} passHref className="w-[40px]">
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
      </div>
    </nav>
  );
};

export default Header;
