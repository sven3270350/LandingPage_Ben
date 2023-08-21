import React from "react";

interface MailProps {
  className?: string;
  width?: number;
  height?: number;
}

const Mail: React.FC<MailProps> = ({ className, width, height }) => (
  <svg
    className={className}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
  >
    <mask
      id="mask0_328_99"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="16"
      height="16"
    >
      <rect width="16" height="16" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_328_99)">
      <path
        d="M2.66659 13.3332C2.29992 13.3332 1.98603 13.2026 1.72492 12.9415C1.46381 12.6804 1.33325 12.3665 1.33325 11.9998V3.99984C1.33325 3.63317 1.46381 3.31928 1.72492 3.05817C1.98603 2.79706 2.29992 2.6665 2.66659 2.6665H13.3333C13.6999 2.6665 14.0138 2.79706 14.2749 3.05817C14.536 3.31928 14.6666 3.63317 14.6666 3.99984V11.9998C14.6666 12.3665 14.536 12.6804 14.2749 12.9415C14.0138 13.2026 13.6999 13.3332 13.3333 13.3332H2.66659ZM7.99992 8.6665L13.3333 5.33317V3.99984L7.99992 7.33317L2.66659 3.99984V5.33317L7.99992 8.6665Z"
        fill="#2F4644"
      />
    </g>
  </svg>
);

export default Mail;
