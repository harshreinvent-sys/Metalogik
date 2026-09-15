import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function LaserCuttingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 5h10v6H19zM21 11h6v6h-6zM22 17h4l2 6h-8z" />
      <path d="M24 23v10" strokeDasharray="2 2.5" />
      <path d="M12 39h24" />
      <path d="M18 33l-3 4M30 33l3 4M24 36v-2M15 41l-2 3M33 41l2 3M20 43l-1 2M28 43l1 2" />
    </svg>
  );
}

export function CncBendingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 5h8v7h-8z" />
      <path d="M22 12h4l2 7h-8z" />
      <path d="M24 19v3" />
      <path d="M9 41h30M13 41v-8h22v8" />
      <path d="M8 30l16-6 16 6" />
      <path d="M14 27l-4 3M34 27l4 3" />
    </svg>
  );
}

export function FabricationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="6" />
      <path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.3 11.3l3.5 3.5M33.2 33.2l3.5 3.5M11.3 36.7l3.5-3.5M33.2 14.8l3.5-3.5" />
      <path d="M24 11a13 13 0 0 1 9.2 3.8L30 18a8.5 8.5 0 0 0-12 0l-3.2-3.2A13 13 0 0 1 24 11z" />
      <path d="M37 24a13 13 0 0 1-3.8 9.2L30 30a8.5 8.5 0 0 0 0-12l3.2-3.2A13 13 0 0 1 37 24z" />
      <path d="M24 37a13 13 0 0 1-9.2-3.8L18 30a8.5 8.5 0 0 0 12 0l3.2 3.2A13 13 0 0 1 24 37z" />
      <path d="M11 24a13 13 0 0 1 3.8-9.2L18 18a8.5 8.5 0 0 0 0 12l-3.2 3.2A13 13 0 0 1 11 24z" />
    </svg>
  );
}

export function FinishingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M24 9l16 8-16 8-16-8z" />
      <path d="M8 24l16 8 16-8" />
      <path d="M8 31l16 8 16-8" />
    </svg>
  );
}

export function PrecisionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="22" cy="26" r="15" />
      <circle cx="22" cy="26" r="9" />
      <circle cx="22" cy="26" r="3" />
      <path d="M22 26L37 11" />
      <path d="M37 11h6M37 11V5" />
    </svg>
  );
}

export function QualityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M24 5l15 5v13c0 9-6 16-15 20-9-4-15-11-15-20V10z" />
      <path d="M17 24l5 5 9-10" />
    </svg>
  );
}

export function DeliveryIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="27" r="15" />
      <path d="M24 17v10l6 4" />
      <path d="M20 5h8M24 5v7" />
      <path d="M36 12l3-3" />
    </svg>
  );
}

export function ReliableIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 19l7-5 8 1 5 3" />
      <path d="M44 19l-7-5-8 1" />
      <path d="M4 32l7 4" />
      <path d="M44 32l-7 4" />
      <path d="M11 14v22M37 14v22" />
      <path d="M24 18l-6 5a2.5 2.5 0 0 0 3.5 3.5L24 24" />
      <path d="M24 24l3 3a2.5 2.5 0 0 1-3.5 3.5L21 28" />
      <path d="M24 30l3 3a2.5 2.5 0 0 1-3.5 3.5L20 33" />
      <path d="M20 26.5l3 3M24 24l7 6.5" />
    </svg>
  );
}

export function PowerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M27 5L12 27h10l-2 16 16-23H26z" />
    </svg>
  );
}

export function ThicknessIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 14h24v6H12zM12 22h24v6H12zM12 30h24v6H12z" />
      <path d="M42 14v22M40 14h4M40 36h4" />
      <path d="M6 20l-2 2 2 2M4 22h4" />
    </svg>
  );
}
