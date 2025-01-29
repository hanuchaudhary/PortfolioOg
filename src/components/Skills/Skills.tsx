import { Skills } from "@/app/Data/data";
import React from "react";
import { SkillTag } from "./SkillTag";

export function SkillsPage() {
  return (
    <div className="skills mt-6 space-y-2">
      <h1 className="text-lg font-semibold">Skills and tech</h1>
      <ul className="flex flex-wrap text-neutral-400">
        {Skills.map((skill) => (
          <SkillTag key={skill.name} skill={skill.name} />
        ))}
      </ul>
    </div>
  );
}
