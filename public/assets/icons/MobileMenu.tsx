import React from "react";

interface MobileMenuProps {
  className?: string;
  width?: number;
  height?: number;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  className,
  width,
  height,
}) => (
  <>
    <svg
      className={className}
      width={width}
      height={height}
      fill="#2F4644"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </>
);

export default MobileMenu;
