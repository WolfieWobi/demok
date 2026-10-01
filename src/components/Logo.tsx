import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 32,
  showText = true,
  textColor = 'text-slate-900',
}) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* MindPillar Stylized Classical Pillar Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="pillarGrad" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8A7CFF" />
            <stop offset="50%" stopColor="#7062E5" />
            <stop offset="100%" stopColor="#5B4BE0" />
          </linearGradient>
        </defs>

        {/* Top Capital Architrave Bar */}
        <path
          d="M6 10C6 7.79086 7.79086 6 10 6H30C32.2091 6 34 7.79086 34 10C34 11.1046 33.1046 12 32 12H8C6.89543 12 6 11.1046 6 10Z"
          fill="url(#pillarGrad)"
        />

        {/* Left Column with curved capital flare */}
        <path
          d="M8 12C6.89543 12 6 12.8954 6 14V28C6 30.2091 7.79086 32 10 32C11.1046 32 12 31.1046 12 30V14C12 12.8954 11.1046 12 10 12H8Z"
          fill="url(#pillarGrad)"
        />

        {/* Center Column */}
        <rect
          x="17"
          y="12"
          width="6"
          height="20"
          rx="3"
          fill="url(#pillarGrad)"
        />

        {/* Right Column with curved capital flare */}
        <path
          d="M32 12C33.1046 12 34 12.8954 34 14V28C34 30.2091 32.2091 32 30 32C28.8954 32 28 31.1046 28 30V14C28 12.8954 28.8954 12 30 12H32Z"
          fill="url(#pillarGrad)"
        />

        {/* Subtle base accents */}
        <circle cx="9" cy="30" r="1.5" fill="#FFFFFF" fillOpacity="0.4" />
        <circle cx="20" cy="30" r="1.5" fill="#FFFFFF" fillOpacity="0.4" />
        <circle cx="31" cy="30" r="1.5" fill="#FFFFFF" fillOpacity="0.4" />
      </svg>

      {showText && (
        <span className={`text-[21px] font-bold tracking-[-0.03em] ${textColor}`}>
          MindPillar
        </span>
      )}
    </div>
  );
};
