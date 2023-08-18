import React from "react";
import Image from "next/image";

const RequestDemo = () => {
  return (
    <div className="relative">
      <Image
        alt="request demo"
        width={209}
        height={108}
        className="absolute right-[0px] top-[-170px]"
        src="/assets/icons/Request_a_demo.png"
      />
    </div>
  );
};

export default RequestDemo;
