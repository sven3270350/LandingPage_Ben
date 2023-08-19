import React from "react";
import Image from "next/image";

const RequestDemo = () => {
  return (
    <div className="relative cursor-pointer">
      <Image
        alt="request demo"
        width={70}
        height={69}
        className="absolute right-[50px] top-[11px]"
        src="/assets/icons/Request_a_demo.png"
      />
    </div>
  );
};

export default RequestDemo;
