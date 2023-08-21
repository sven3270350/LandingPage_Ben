import React from "react";

interface CalendarProps {
  className?: string;
  width?: number;
  height?: number;
}

const Calendar: React.FC<CalendarProps> = ({ className, width, height }) => (
  <svg
    clipRule="evenodd"
    fill="#2f4644"
    fillRule="evenodd"
    className={className}
    width={width}
    height={height}
    imageRendering="optimizeQuality"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Layer_x0020_1">
      <path d="m397 491h-382c-9 0-15-7-15-15v-292h511v192c-2 0-4-1-6-1h-88c-12 0-21 10-21 22v87c0 3 0 5 1 7zm-397-322v-78c0-9 7-16 15-16h63v30c0 29 24 53 53 53 28 0 52-24 52-52v-31h146v30c0 29 23 53 52 53s52-24 52-52v-31h64c8 0 14 7 14 15v79zm142 142h-91c-4 0-8-4-8-9v-66c0-5 4-8 8-8h91c5 0 9 3 9 8v66c0 4-4 9-9 9zm-85-15h79v-54h-79zm244 15h-90c-5 0-9-4-9-9v-66c0-5 4-8 9-8h90c5 0 9 3 9 8v66c0 4-4 9-9 9zm-85-15h80v-54h-80zm-74 137h-91c-4 0-8-3-8-8v-66c0-4 4-8 8-8h91c5 0 9 4 9 8v66c0 5-4 8-9 8zm-85-14h79v-54h-79zm244 14h-90c-5 0-9-3-9-8v-66c0-4 4-8 9-8h90c5 0 9 4 9 8v66c0 5-4 8-9 8zm-85-14h80v-54h-80zm160-131 63-46h-63zm83-60c2-1 4 0 6 1 2 2 4 4 4 7v66c0 4-4 9-8 9h-92c-4 0-8-4-8-9v-66c0-5 4-8 8-8zm-4 20-66 48h66zm-138-111h-122c-4 0-7-3-7-8 0-4 3-7 7-7h122c4 0 7 3 7 7 0 5-3 8-7 8z"></path>
      <path d="m131 144c-22 0-39-18-39-39v-46c0-21 17-38 39-38 21 0 38 17 38 38v47c0 20-17 38-38 38z"></path>
      <path d="m381 144c-21 0-38-18-38-39v-46c0-21 17-38 38-38s38 17 38 38v47c0 20-17 38-38 38z"></path>
      <path d="m417 491c-1 0-2 0-3 0-3-1-4-4-4-7v-87c0-4 3-8 7-8h88c3 0 5 2 6 5 2 3 1 6-1 8l-88 87c-1 2-3 2-5 2z"></path>
    </g>
  </svg>
);

export default Calendar;
