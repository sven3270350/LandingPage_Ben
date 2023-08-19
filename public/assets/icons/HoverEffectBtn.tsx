import Link from "next/link";
import React from "react";

interface HoverEffectBtnProps {
  className?: string;
  width?: number;
  height?: number;
  label?: string;
}

const HoverEffectBtn: React.FC<HoverEffectBtnProps> = ({
  className,
  width,
  height,
  label,
}) => (
  <div className={className}>
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <rect id="shape" height={height} width={width} />
    </svg>
    <div id="text">
      <Link href="">
        <span className="spot"></span>
        {label}
      </Link>
    </div>
  </div>
);

export default HoverEffectBtn;
