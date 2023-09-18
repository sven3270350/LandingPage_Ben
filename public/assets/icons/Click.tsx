import React from "react";

interface ClickProps {
  className?: string;
  width?: number;
  height?: number;
}

const Click: React.FC<ClickProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 21 20"
  >
    <mask
      id="mask0_1200_2031"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="21"
      height="20"
    >
      <rect x="0.5" width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1200_2031)">
      <path
        d="M8.49213 15L4.5 10.641L5.6811 9.35897L8.49213 12.3846L15.3189 5L16.5 6.30769L8.49213 15Z"
        fill="#2F4644"
      />
    </g>
  </svg>
);

export default Click;
