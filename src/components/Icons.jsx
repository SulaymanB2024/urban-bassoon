import React from 'react';

export const StrategyIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="26" cy="26" r="20" />
    <circle cx="26" cy="26" r="12" strokeDasharray="3 3" opacity="0.5" />
    <path d="M26 10 L26 26 L38 32" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="26" cy="26" r="4" fill="currentColor" stroke="none" />
    <circle cx="26" cy="10" r="2" fill="currentColor" stroke="none" />
    <circle cx="38" cy="32" r="2" fill="currentColor" stroke="none" />
  </svg>
);

export const InfrastructureIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="32" width="10" height="14" rx="1" />
    <rect x="21" y="22" width="10" height="24" rx="1" />
    <rect x="34" y="12" width="10" height="34" rx="1" />
    <line x1="4" y1="46" x2="48" y2="46" strokeLinecap="round" />
    <path d="M13 28 L26 18 L39 8" stroke="currentColor" strokeDasharray="3 3" opacity="0.5" />
    <circle cx="13" cy="28" r="2" fill="currentColor" stroke="none" />
    <circle cx="26" cy="18" r="2" fill="currentColor" stroke="none" />
    <circle cx="39" cy="8" r="2" fill="currentColor" stroke="none" />
  </svg>
);

export const DevelopmentIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="6" y="10" width="40" height="32" rx="3" />
    <line x1="6" y1="18" x2="46" y2="18" />
    <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="17" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="22" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <polyline points="16,26 10,32 16,38" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="36,26 42,32 36,38" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="29" y1="24" x2="23" y2="40" strokeLinecap="round" />
  </svg>
);

export const AnalyticsIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="26" cy="26" r="18" />
    <path d="M26 8 A18 18 0 0 1 44 26" fill="none" strokeWidth="4" opacity="0.3" />
    <path d="M26 8 A18 18 0 0 1 38 38" fill="none" strokeWidth="2" />
    <line x1="26" y1="26" x2="26" y2="8" strokeLinecap="round" />
    <line x1="26" y1="26" x2="38" y2="38" strokeLinecap="round" />
    <circle cx="26" cy="26" r="4" fill="currentColor" stroke="none" />
    <circle cx="26" cy="8" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="38" cy="38" r="2.5" fill="currentColor" stroke="none" />
  </svg>
);

// Additional icons for enhanced design
export const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 10L8 14L16 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const QuoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" opacity="0.1">
    <path d="M10 25C10 20 13 15 18 15V10C10 10 5 17 5 25C5 32 9 35 13 35C17 35 20 32 20 28C20 24 17 21 13 21C12 21 11 21.5 10 22V25ZM25 25C25 20 28 15 33 15V10C25 10 20 17 20 25C20 32 24 35 28 35C32 35 35 32 35 28C35 24 32 21 28 21C27 21 26 21.5 25 22V25Z" />
  </svg>
);

export const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" />
    <path d="M10 18C10 18 16 13 16 9C16 5.68629 13.3137 3 10 3C6.68629 3 4 5.68629 4 9C4 13 10 18 10 18Z" />
  </svg>
);

export const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="16" height="12" rx="2" />
    <path d="M2 6L10 11L18 6" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M5 3C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7C6.10457 7 7 6.10457 7 5C7 3.89543 6.10457 3 5 3ZM3 8.5V17H7V8.5H3ZM8.5 8.5V17H12.5V12.5C12.5 11.3954 13.3954 10.5 14.5 10.5C15.6046 10.5 16.5 11.3954 16.5 12.5V17H20.5V12C20.5 9.51472 18.4853 7.5 16 7.5C14.5 7.5 13.2 8.3 12.5 9.5V8.5H8.5Z" />
  </svg>
);

export const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10C0 14.42 2.865 18.17 6.839 19.49C7.339 19.59 7.521 19.27 7.521 19C7.521 18.77 7.512 18.14 7.508 17.29C4.726 17.9 4.139 15.97 4.139 15.97C3.685 14.81 3.029 14.5 3.029 14.5C2.121 13.88 3.098 13.9 3.098 13.9C4.101 13.97 4.629 14.93 4.629 14.93C5.521 16.45 6.97 16.01 7.539 15.75C7.631 15.1 7.889 14.66 8.175 14.42C5.955 14.18 3.62 13.31 3.62 9.48C3.62 8.39 4.009 7.5 4.649 6.79C4.539 6.55 4.199 5.53 4.749 4.15C4.749 4.15 5.589 3.89 7.489 5.18C8.289 4.97 9.149 4.86 10.009 4.86C10.859 4.86 11.719 4.97 12.529 5.18C14.419 3.89 15.259 4.15 15.259 4.15C15.809 5.53 15.469 6.55 15.369 6.79C16.009 7.5 16.389 8.39 16.389 9.48C16.389 13.32 14.049 14.17 11.819 14.41C12.179 14.71 12.499 15.31 12.499 16.22C12.499 17.52 12.489 18.57 12.489 19C12.489 19.27 12.669 19.6 13.179 19.49C17.149 18.17 20.009 14.42 20.009 10C20.009 4.477 15.529 0 10.009 0H10Z" />
  </svg>
);
