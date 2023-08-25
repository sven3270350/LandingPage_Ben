import Image from "next/image";
import FooterItem from "./FooterMenu";
import Link from "next/link";
import Mail from "public/assets/icons/Mail";
import Twitter from "public/assets/icons/Twitter";
import Linkedin from "public/assets/icons/Linkedin";
import Telegram from "public/assets/icons/Telegram";
import Calendar from "public/assets/icons/Calendar";
import { useMediaSize } from "components/hooks/media-size";
import { cx } from "@emotion/css";
import RequestDemo from "./RequestDemo";
interface MenuItem {
  title: string;
  items: string[];
}
const Footer = () => {
  const MenuItems: MenuItem[] = [
    { title: "Cryptool", items: ["Documentation", "Tokenomics", "Partners"] },
    {
      title: "Company",
      items: ["About Us", "Terms of Use", "Legal & Privacy", "Disclaimer"],
    },
    {
      title: "Support",
      items: ["Contact Support", "Services & Pricing", "FAQ"],
    },
  ];
  const { isTablet } = useMediaSize();
  return (
    <div className={cx("flex justify-center", isTablet ? "" : "h-[289px]")}>
      <div
        className={cx(
          "w-full flex justify-center pt-8 pb-12 pr-64 pl-44 border-solid border-t-[1px] border-[#F0F0F0] footer-gradient",
          isTablet ? "flex-col" : "flex-row-reverse"
        )}
      >
        <div
          className={cx(
            "max-w-[1560px] w-full flex justify-between",
            isTablet ? "flex-col" : "flex-row-reverse"
          )}
        >
          <div className="flex flex-wrap justify-around">
            {MenuItems.map((item) => (
              <FooterItem
                key={item.title}
                title={item.title}
                items={item.items}
              />
            ))}
          </div>
          <div>
            <Image
              width={225}
              height={69}
              alt="LogoBlack"
              src="/assets/icons/LogoBlack.png"
            />
            <div className="flex flex-col mt-16">
              <div className="flex flex-row space-x-2">
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
              <div className="mt-2 text-[#2F4644] text-base font-normal font-sans">
                © 2023 Cryptool. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
