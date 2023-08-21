import React from "react";

interface FacebookProps {
  className?: string;
  width?: number;
  height?: number;
}

const Facebook: React.FC<FacebookProps> = ({ className, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 19 18"
    fill="none"
  >
    <path
      d="M3.78669 0C1.96601 0 0.5 1.46601 0.5 3.28669V14.7133C0.5 16.534 1.96601 18 3.78669 18H9.97981V10.9631H8.11906V8.42962H9.97981V6.26512C9.97981 4.56457 11.0792 3.00319 13.6119 3.00319C14.6373 3.00319 15.3955 3.10163 15.3955 3.10163L15.3359 5.46751C15.3359 5.46751 14.5626 5.4602 13.7187 5.4602C12.8054 5.4602 12.659 5.881 12.659 6.57958V8.42964H15.4085L15.2887 10.9631H12.659V18H15.2133C17.034 18 18.5 16.534 18.5 14.7133V3.2867C18.5 1.46602 17.034 1.8e-05 15.2133 1.8e-05H3.78667L3.78669 0Z"
      fill="#2F4644"
    />
  </svg>
);

export default Facebook;
