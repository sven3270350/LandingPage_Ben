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
    viewBox="0 0 100 100"
    fill="none"
  >
    <rect width="100" height="100" rx="50" fill="#00F2DE" />
    <path
      d="M38.3722 64.0186C38.0638 64.0186 37.768 63.8955 37.5499 63.6764C37.3319 63.4573 37.2094 63.1602 37.2094 62.8503V37.1492C37.2094 36.9462 37.2621 36.7467 37.3622 36.5704C37.4624 36.3941 37.6065 36.2471 37.7805 36.1438C37.9544 36.0405 38.1522 35.9845 38.3542 35.9813C38.5562 35.9782 38.7556 36.028 38.9326 36.1259L62.1888 48.9764C62.3711 49.0773 62.5231 49.2254 62.629 49.4054C62.7349 49.5854 62.7907 49.7907 62.7907 49.9998C62.7907 50.2089 62.7349 50.4141 62.629 50.5942C62.5231 50.7742 62.3711 50.9223 62.1888 51.0232L38.9326 63.8737C38.7609 63.9687 38.5681 64.0185 38.3722 64.0186Z"
      fill="#FAF7F7"
    />
  </svg>
);

export default Play;
