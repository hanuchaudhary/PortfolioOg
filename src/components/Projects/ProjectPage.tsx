import React from "react";
import { HyperText } from "../magicui/hyper-text";
import { ProjectsSection } from "./ProjectSection";

export default function ProjectPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <HyperText startOnView={true}>* projects</HyperText>
      <ProjectsSection />
    </div>
  );
}
