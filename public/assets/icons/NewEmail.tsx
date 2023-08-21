import React from "react";

interface NewEmailProps {
  className?: string;
  width?: number;
  height?: number;
}

const NewEmail: React.FC<NewEmailProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 49 48"
    fill="none"
  >
    <mask
      id="mask0_501_669"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="49"
      height="48"
    >
      <rect x="0.5" width="48" height="48" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_501_669)">
      <path
        d="M9.5 42C8.7 42 8 41.7 7.4 41.1C6.8 40.5 6.5 39.8 6.5 39V9C6.5 8.2 6.8 7.5 7.4 6.9C8 6.3 8.7 6 9.5 6H39.5C40.3 6 41 6.3 41.6 6.9C42.2 7.5 42.5 8.2 42.5 9V39C42.5 39.8 42.2 40.5 41.6 41.1C41 41.7 40.3 42 39.5 42H9.5ZM9.5 39H39.5V32.2H32.2C31.3333 33.5333 30.2083 34.5583 28.825 35.275C27.4417 35.9917 26 36.35 24.5 36.35C23 36.35 21.5583 35.9917 20.175 35.275C18.7917 34.5583 17.6667 33.5333 16.8 32.2H9.5V39ZM24.5123 33.35C25.8708 33.35 27.1 32.9583 28.2 32.175C29.3 31.3917 30.2333 30.4 31 29.2H39.5V9H9.5V29.2H18C18.7667 30.4 19.7041 31.3917 20.8123 32.175C21.9205 32.9583 23.1539 33.35 24.5123 33.35Z"
        fill="#54716F"
      />
    </g>
  </svg>
);

export default NewEmail;
