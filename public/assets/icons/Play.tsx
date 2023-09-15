import React from "react";

interface PlayProps {
  className?: string;
  width?: number;
  height?: number;
}

const Play: React.FC<PlayProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 128 128"
    fill="none"
  >
    <g filter="url(#filter0_d_1098_2105)">
      <rect x="4" width="120" height="120" rx="60" fill="#00F2DE" />
      <g filter="url(#filter1_d_1098_2105)">
        <path
          d="M45.4546 87.9813C44.8566 87.9813 44.2832 87.7343 43.8604 87.2947C43.4375 86.855 43.2 86.2588 43.2 85.637V34.0635C43.2001 33.6561 43.3022 33.2558 43.4964 32.902C43.6906 32.5482 43.9701 32.2531 44.3074 32.0458C44.6446 31.8385 45.028 31.7262 45.4197 31.7199C45.8115 31.7136 46.198 31.8135 46.5413 32.0099L91.6328 57.7967C91.9863 57.999 92.2811 58.2964 92.4864 58.6576C92.6917 59.0188 92.8 59.4307 92.8 59.8502C92.8 60.2698 92.6917 60.6817 92.4864 61.0429C92.2811 61.4041 91.9863 61.7014 91.6328 61.9038L46.5413 87.6906C46.2084 87.8812 45.8346 87.9812 45.4546 87.9813Z"
          fill="#FAF7F7"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_1098_2105"
        x="0"
        y="0"
        width="128"
        height="128"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          result="effect1_dropShadow_1098_2105"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1098_2105"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_1098_2105"
        x="39.2"
        y="31.7196"
        width="57.6"
        height="64.2617"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          result="effect1_dropShadow_1098_2105"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1098_2105"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Play;
