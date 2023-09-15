import React from "react";

interface TwitterProps {
  className?: string;
  width?: number;
  height?: number;
}

const Twitter: React.FC<TwitterProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 18 17"
    fill="none"
  >
    <path
      d="M2.96829 2.09088L1.93561 2.07779L2.55815 2.81525L12.8769 15.0388L13.0466 15.2399L13.328 15.2399L15.6062 15.2399L16.6278 15.2399L16.0064 14.513L5.57938 2.31696L5.41257 2.12185L5.13815 2.11837L2.96829 2.09088Z"
      stroke="#2F4644"
    />
    <path
      d="M14.2692 1.54967L16.2051 1.5597L3.86054 15.8076L1.61509 15.8076L14.2692 1.54967Z"
      fill="#2F4644"
    />
    <path
      d="M7.99968 8.50009L8.7433 6.77136L11.5 10L11 12L7.99968 8.50009Z"
      fill="#E2EEED"
    />
  </svg>
);

export default Twitter;
