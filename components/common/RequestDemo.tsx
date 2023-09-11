import React from "react";
import Image from "next/image";

const RequestDemo = () => {
  return (
    <div className="relative cursor-pointer">
      <Image
        alt="request demo"
        width={70}
        height={69}
        className="absolute right-[50px] xs:top-[-970px] 2xs:top-[-817px] 2md:top-[-640px] 3md:top-[-480px] 2lg:top-[-460px] 3lg:top-[-450px] 4lg:top-[-277px]"
        src="/assets/icons/Request_a_demo.png"
      />
    </div>
  );
};

export default RequestDemo;
