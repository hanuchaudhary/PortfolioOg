import React from "react";

export function H3Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors duration-300">
      {children}
    </h3>
  );
}
