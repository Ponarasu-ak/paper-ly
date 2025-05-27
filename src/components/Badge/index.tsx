import React from "react";

interface BadgeProps {
  label: string;
  iconFront?: React.ReactNode;
  iconBack?: React.ReactNode;
  padding?: string; // Tailwind padding classes, e.g., 'px-3 py-1'
  borderColor?: string; // Tailwind border color classes, e.g., 'border-red-500'
  backgroundColor?: string; // Tailwind bg color classes, e.g., 'bg-red-100'
  className?: string; // Additional class names
  style?: React.CSSProperties; // Optional inline styles
}

const Badge: React.FC<BadgeProps> = ({
  label,
  iconFront,
  iconBack,
  className = "",
  padding = "8px 12px",
  backgroundColor = "#f3f4f6",
  borderColor = "#d1d5dc",
  style = {},
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-1 rounded-full text-sm font-medium  ${className}`}
      style={{
        padding: padding,
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        ...style,
      }}
    >
      {iconFront && <span className="mr-1">{iconFront}</span>}
      {label}
      {iconBack && <span className="ml-1">{iconBack}</span>}
    </div>
  );
};

export { Badge };
