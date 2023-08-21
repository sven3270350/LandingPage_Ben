import React from "react";

interface TelegramProps {
  className?: string;
  width?: number;
  height?: number;
}

const Telegram: React.FC<TelegramProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 14 16"
    fill="none"
  >
    <path
      d="M13.9589 3.08098L11.8464 13.0435C11.687 13.7466 11.2714 13.9216 10.6807 13.5904L7.46199 11.2185L5.90886 12.7122C5.73699 12.8841 5.59324 13.0279 5.26199 13.0279L5.49324 9.74973L11.4589 4.3591C11.7182 4.12785 11.4026 3.99973 11.0557 4.23098L3.68074 8.87473L0.50574 7.88098C-0.184885 7.66535 -0.197385 7.19035 0.64949 6.8591L13.0682 2.07473C13.6432 1.8591 14.1464 2.20285 13.9589 3.08098Z"
      fill="#2F4644"
    />
  </svg>
);

export default Telegram;
