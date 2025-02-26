import React from "react";
import { Star } from "../Star";
import { HyperText } from "../magicui/hyper-text";
import { skillsData } from "@/Data/data";
import { SkillTag } from "./SkillTag";

export function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <div className="flex text-4xl font-semibold items-center gap-2">
        <Star />
        <HyperText>skills and technologies</HyperText>
      </div>
      <div className="md:mt-6 mt-4 flex flex-wrap gap-1">
        {skillsData.map((skill,index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
