import React from "react";

export function SkillTag({ skill }: { skill: string }) {
  return (
    <li className="flex bg-neutral-800 border border-neutral-700 px-2 rounded-xl mb-1 text-neutral-300 items-center text-xs mr-1 select-none">
      <span>{skill}</span>
    </li>
  );
}
