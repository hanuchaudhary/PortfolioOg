import React from "react";

export function H2Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
}
