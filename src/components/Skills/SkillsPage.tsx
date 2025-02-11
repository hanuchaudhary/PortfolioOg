import React from "react";
import { Star } from "../Star";
import { HyperText } from "../magicui/hyper-text";
import { skillsData } from "@/app/Data/data";
import { SkillTag } from "./SkillTag";

export function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <div className="flex text-4xl font-semibold items-center gap-2">
        <Star />
        <HyperText startOnView={true}>skills and technologies</HyperText>
      </div>
      <div className="mt-8 space-y-4 flex flex-wrap gap-2">
        {skillsData.map((skill) => (
          <SkillTag skill={skill} />
        ))}
      </div>
    </div>
  );
}
