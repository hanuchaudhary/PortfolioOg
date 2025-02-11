import React from "react";
import { WritingsSection } from "./WritingsSection";
import { HyperText } from "../magicui/hyper-text";
import { Star } from "../Star";

export default function WritingsPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <HyperText startOnView={true}>* writings</HyperText>
      <WritingsSection />
    </div>
  );
}
