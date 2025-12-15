"use client";

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="20" cy="20" r="18" fill="currentColor" style={{ opacity: 0.1 }} />
      
      {/* Stack/Boxes representing "Stack" */}
      <rect x="8" y="16" width="8" height="8" rx="1" fill="currentColor" />
      <rect x="10" y="14" width="8" height="8" rx="1" fill="currentColor" style={{ opacity: 0.8 }} />
      <rect x="12" y="12" width="8" height="8" rx="1" fill="currentColor" style={{ opacity: 0.6 }} />
      
      {/* Gear/Cog representing Operations */}
      <circle cx="28" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="28" cy="20" r="2" fill="currentColor" />
      
      {/* Connecting lines/arrows representing automation */}
      <path
        d="M16 20 L24 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ opacity: 0.6 }}
      />
      <path
        d="M24 18 L26 19 L24 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ opacity: 0.6 }}
      />
    </svg>
  );
}

