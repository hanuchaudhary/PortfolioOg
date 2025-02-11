import { HyperText } from "@/components/magicui/hyper-text";
import { SkillsPage } from "@/components/Skills/SkillsPage";
import { SkillsSection } from "@/components/Skills/SkillsSection";
import React from "react";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <HyperText startOnView={true}>* skills</HyperText>
      <SkillsSection/>
    </div>
  );
}
