import React from "react";

interface MobileMenuCancelProps {
  className?: string;
  width?: number;
  height?: number;
}

const MobileMenuCancel: React.FC<MobileMenuCancelProps> = ({
  className,
  width,
  height,
}) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="#2F4644"
    >
      <mask
        id="mask0_439_780"
        // maskType="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_439_780)">
        <path
          d="M6.0625 15L5 13.9375L8.9375 10L5 6.0625L6.0625 5L10 8.9375L13.9375 5L15 6.0625L11.0625 10L15 13.9375L13.9375 15L10 11.0625L6.0625 15Z"
          fill="#2F4644"
        />
      </g>
    </svg>
  </>
);

export default MobileMenuCancel;
