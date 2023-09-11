import Link from "next/link";
import React from "react";

interface FooterItemProps {
  title: string;
  items: string[];
}

const FooterItem: React.FC<FooterItemProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col w-44">
      <div className="text-[#2f4644] text-start text-base font-semibold mb-6">
        {title}
      </div>
      {items.map((item, index) =>
        item === "Documentation" || item === "Tokenomics" ? (
          <Link
            href={
              "https://docs.google.com/document/d/19iuROlL5QV43Li6KRaPkuBIDWDIv1c3OdBbwgS9Upew/edit"
            }
            target="blank"
            key={index}
            className="mb-4 w-fit text-[#54716F] font-normal cursor-pointer hover:font-semibold"
          >
            {item}
          </Link>
        ) : (
          <div key={index} className="mb-4 w-fit text-[#54716F] font-normal">
            {item}
          </div>
        )
      )}
    </div>
  );
};

export default FooterItem;
