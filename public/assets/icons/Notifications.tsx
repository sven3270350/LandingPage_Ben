import React from "react";

interface NotificationsProps {
  className?: string;
  width?: number;
  height?: number;
}

const Notifications: React.FC<NotificationsProps> = ({
  className,
  width,
  height,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
  >
    <mask
      id="mask0_157_365"
      style={{maskType:"alpha"}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_157_365)">
      <path
        d="M4 15.5V14H5V9C5 7.80915 5.37153 6.75103 6.11458 5.82563C6.85764 4.90021 7.81944 4.32639 9 4.10417V3C9 2.72222 9.09722 2.48611 9.29167 2.29167C9.48611 2.09722 9.72222 2 10 2C10.2778 2 10.5139 2.09722 10.7083 2.29167C10.9028 2.48611 11 2.72222 11 3V4.10417C12.1806 4.32639 13.1424 4.89583 13.8854 5.8125C14.6285 6.72917 15 7.79167 15 9V14H16V15.5H4ZM9.99558 18C9.58186 18 9.22917 17.8531 8.9375 17.5594C8.64583 17.2656 8.5 16.9125 8.5 16.5H11.5C11.5 16.9167 11.3527 17.2708 11.0581 17.5625C10.7635 17.8542 10.4093 18 9.99558 18ZM6.5 14H13.5V9C13.5 8.02778 13.1597 7.20139 12.4792 6.52083C11.7986 5.84028 10.9722 5.5 10 5.5C9.02778 5.5 8.20139 5.84028 7.52083 6.52083C6.84028 7.20139 6.5 8.02778 6.5 9V14Z"
        fill="#2F4644"
      />
    </g>
  </svg>
);

export default Notifications;
