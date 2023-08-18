import Image from "next/image";
import FooterItem from "./FooterMenu";
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
      items: ["Contact Support", "Servieces & Pricing", "FAQ"],
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-between pt-8 pb-12 pr-64 pl-44 border-solid border-t-[1px] border-[#F0F0F0] footer-gradient">
        <div>
          <Image
            width={225}
            height={69}
            alt="LogoBlack"
            src="/assets/icons/FooterLogo.png"
          />
          <div className="flex flex-col mt-16">
            <div className="flex flex-row space-x-2">
              <div className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base">
                <Image
                  width={14}
                  height={16}
                  alt="mail"
                  src="/assets/icons/mail.svg"
                />
              </div>
              <div className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base">
                <Image
                  width={14}
                  height={16}
                  alt="Vector"
                  src="/assets/icons/Vector.svg"
                />
              </div>
              <div className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base">
                <Image
                  width={14}
                  height={16}
                  alt="Linkedin"
                  src="/assets/icons/Linkedin.svg"
                />
              </div>
              <div className="cursor-pointer p-2 rounded-full w-fit bg-[#E2EEED] flex items-center text-base">
                <Image
                  width={14}
                  height={16}
                  alt="brands_telegram"
                  src="/assets/icons/fa-brands_telegram-plane.svg"
                />
              </div>
            </div>
            <div className="mt-2 text-[#54716F] text-base font-normal">
              © 2023 Cryptool. All rights reserved
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around">
          {MenuItems.map((item) => (
            <FooterItem
              key={item.title}
              title={item.title}
              items={item.items}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
