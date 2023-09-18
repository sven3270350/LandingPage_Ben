import React from "react";

interface UnClickProps {
  className?: string;
  width?: number;
  height?: number;
}

const UnClick: React.FC<UnClickProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    stroke="var(--Accent, #00F2DE)"
    strokeWidth={"1px"}
    fill="#F0F0F0"
  >
    <path
      d="M4 0.5H16C17.933 0.5 19.5 2.067 19.5 4V16C19.5 17.933 17.933 19.5 16 19.5H4C2.067 19.5 0.5 17.933 0.5 16V4C0.5 2.067 2.067 0.5 4 0.5Z"
      fill="#F0F0F0"
      stroke="#00F2DE"
    />
  </svg>
);

export default UnClick;
