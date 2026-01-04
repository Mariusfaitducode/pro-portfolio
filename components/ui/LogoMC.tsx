import React from 'react';

interface LogoMCProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  lightBlue?: string;
  darkBlue?: string;
  className?: string;
}

export const LogoMC: React.FC<LogoMCProps> = ({
  size,
  width,
  height,
  lightBlue = '#000',
  darkBlue = '#0047FF',
  className = '',
}) => {
  const svgWidth = width || size || 150;
  const svgHeight = height || size || 150;

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 150 150"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* M - Top part (light blue) */}
      <path
        fill={lightBlue}
        d="m 13.136683,21.578417 0.0197,35.036317 H 50.678519 L 86.073144,21.418988 Z"
      />
      {/* M - Bottom part (light blue) */}
      <path
        fill={lightBlue}
        d="m 50.617813,91.843254 -37.574124,0.0985 0.176312,35.333846 73.111653,-0.28151 z"
      />
      {/* C (dark blue) - Adjusted to touch M perfectly */}
      <path
        fill={darkBlue}
        d="M 86.073144,21.418988 33.180048,74.312074 86.669694,127.00633 H 135.585861 L 82.493924,74.113244 135.387041,21.418988 Z"
      />
    </svg>
  );
};

