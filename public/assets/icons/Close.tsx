import React from "react";

interface CloseProps {
  className?: string;
  width?: number;
  height?: number;
}

const Close: React.FC<CloseProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
  >
    <mask
      id="mask0_1180_2440"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="32"
      height="32"
    >
      <rect width="32" height="32" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1180_2440)">
      <path
        d="M9.7 24L8 22.3L14.3 16L8 9.7L9.7 8L16 14.3L22.3 8L24 9.7L17.7 16L24 22.3L22.3 24L16 17.7L9.7 24Z"
        fill="#B4B4B4"
      />
    </g>
  </svg>
);

export default Close;
