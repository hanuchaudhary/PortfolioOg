import React from "react";

export function H3Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-xl font-semibold group-hover:text-blue-500 transition-colors duration-300 ${className}`}
    >
      {children}
    </h3>
  );
}
