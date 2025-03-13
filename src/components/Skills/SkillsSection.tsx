import React from "react";
import { SkillTag } from "./SkillTag";
import { H2Heading } from "../H2Heading";

export function SkillsSection() {
  const primarySkills :string[] = [
    "nextjs", 
    "react",
    "typescript",
    "tailwindcss",
    "nodejs",
    "postgresql",
    "express",
    "motion",
  ] 
  return (
    <div className="space-y-5">
      <H2Heading>primary skills</H2Heading>
      <ul className="flex flex-wrap text-stone-400">
        {primarySkills.map((skill,index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </ul>
    </div>
  );
}
