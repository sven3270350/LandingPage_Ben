import Link from "next/link";
import React, { useState } from "react";

interface HoverEffectBtnProps {
  className?: string;
  width?: number;
  height?: number;
  handleClick?:() => void;
  label?: string;
  strokeDashoffset?:number
}

const HoverEffectBtn: React.FC<HoverEffectBtnProps> = ({
  className,
  width,
  height,
  label,
  handleClick,
  strokeDashoffset
}) => 
{
  
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  return (
    <div className={className} onClick={() => {
      handleClick;
      setIsLoading(true);
    }}>
      <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
        <rect id="shape" strokeDashoffset={strokeDashoffset} height={height} width={width} />
      </svg>
      <div id="text">
        <Link href="">
          <span className="spot"></span>
          {isLoading? "Coming Soon":label}
        </Link>
      </div>
    </div>
)};

export default HoverEffectBtn;
