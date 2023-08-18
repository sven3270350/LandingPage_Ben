import React from 'react';

interface ArrowBelowProps {
  className?: string;
}

const ArrowBelow: React.FC<ArrowBelowProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="39" height="19" viewBox="0 0 39 19" fill="none">
      <path d="M19.5 19L0.880453 0.25L38.1195 0.250004L19.5 19Z" fill="#02DDCB" />
  </svg>
);

export default ArrowBelow;
