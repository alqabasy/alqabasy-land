import React from 'react';

export const BrandLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logo-bg" x1="0" y1="0" x2="100" y2="100">
        <stop stopColor="#064E3B"/>
        <stop offset="1" stopColor="#047857"/>
      </linearGradient>
      <linearGradient id="logo-leaf" x1="0" y1="100" x2="100" y2="0">
        <stop stopColor="#34D399"/>
        <stop offset="1" stopColor="#10B981"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.2"/>
      </filter>
    </defs>
    
    <rect width="100" height="100" rx="24" fill="url(#logo-bg)"/>
    
    {/* The leaf symbol sweeping behind */}
    <path d="M 20 80 C 20 50 50 20 80 20 C 80 50 50 80 20 80 Z" fill="url(#logo-leaf)" opacity="0.9" />
    
    {/* The Qaf shape (white) layered over */}
    <g filter="url(#shadow)">
      <circle cx="58" cy="46" r="11" fill="transparent" stroke="#fff" strokeWidth="8"/>
      <path d="M 47 46 L 47 58 C 47 75 24 75 24 58" stroke="#fff" strokeWidth="8" strokeLinecap="round" fill="none"/>
      
      {/* Dots for Qaf */}
      <circle cx="50" cy="24" r="4.5" fill="#fff" />
      <circle cx="66" cy="24" r="4.5" fill="#fff" />
    </g>
  </svg>
);
