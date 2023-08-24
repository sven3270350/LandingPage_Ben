import React from "react";

interface PrevBtnProps {
  className?: string;
  width?: number;
  height?: number;
}

const PrevBtn: React.FC<PrevBtnProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 38 38"
    fill="#DCDCDC"
  >
    <g filter="url(#filter0_d_318_837)">
      <rect
        x="34"
        y="30"
        width="30"
        height="30"
        rx="15"
        transform="rotate(-180 34 30)"
        fill="#DCDCDC"
        shapeRendering="crispEdges"
      />
      <mask
        id="mask0_318_837"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="0"
        width="30"
        height="30"
      >
        <rect
          x="34"
          y="30"
          width="30"
          height="30"
          transform="rotate(-180 34 30)"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_318_837)">
        <path
          d="M22 7.5L23.5938 9.09375L17.6875 15L23.5938 20.9062L22 22.5L14.5 15L22 7.5Z"
          fill="#2F4644"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_318_837"
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
          result="effect1_dropShadow_318_837"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_318_837"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default PrevBtn;
