import React from "react";

interface NextBtnProps {
  className?: string;
  width?: number;
  height?: number;
}

const NextBtn: React.FC<NextBtnProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 38 38"
    fill="#DCDCDC"
  >
    <g filter="url(#filter0_d_318_831)">
      <rect
        x="4"
        width="30"
        height="30"
        rx="15"
        fill="#DCDCDC"
        shapeRendering="crispEdges"
      />
      <mask
        id="mask0_318_831"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="0"
        width="30"
        height="30"
      >
        <rect x="4" width="30" height="30" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_318_831)">
        <path
          d="M16 22.5L14.4062 20.9062L20.3125 15L14.4062 9.09375L16 7.5L23.5 15L16 22.5Z"
          fill="#2F4644"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_318_831"
        x="0"
        y="0"
        width="38"
        height="38"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_318_831"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_318_831"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default NextBtn;
