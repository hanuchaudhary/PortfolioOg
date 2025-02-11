import React from "react";
import { SkillsSection } from "@/components/Skills/SkillsSection";
import { WritingsSection } from "@/components/Writings/WritingsSection";
import { Contributions } from "@/components/Conributions/Contributions";
import {ProjectsSection} from "@/components/Projects/ProjectSection";
import { CurrentProject } from "@/components/Projects/CurrentProject";
import InfoV2 from "@/components/Info/InfoV2";

export default function Home() {
  return (
    <div className="bg-primary max-w-4xl mx-auto h-full font-mono text-white">
      <div
        className=" space-y-12"
      >
        <InfoV2 />

        <CurrentProject />

        <ProjectsSection />

        <Contributions />

        <WritingsSection />

        <SkillsSection />
      </div>
    </div>
  );
}
