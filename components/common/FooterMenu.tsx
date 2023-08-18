import React from "react";

interface FooterItemProps {
  title: string;
  items: string[];
}

const FooterItem: React.FC<FooterItemProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col w-44">
      <div className="text-[#2f4644] text-base font-semibold mb-6">{title}</div>
      {items.map((item, index) => (
        <div key={index} className="pb-4 text-[#54716F] font-normal">
          {item}
        </div>
      ))}
    </div>
  );
};

export default FooterItem;
