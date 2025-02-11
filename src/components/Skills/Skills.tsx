import { Skills } from "@/app/Data/data";
import React from "react";
import { SkillTag } from "./SkillTag";

export function SkillsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold">Skills and tools</h1>
      <ul className="flex flex-wrap text-neutral-400">
        {Skills.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </ul>
    </div>
  );
}
