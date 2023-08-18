import React from "react";
import Image from "next/image";

const VideoSection = () => {
  return (
    <div className="lg:mx-40 mx-0 flex justify-center">
      <Image
        src="/assets/icons/image_platform.png"
        width={1375}
        height={795}
        alt="Introduction Video"
      />
    </div>
  );
};

export default VideoSection;
