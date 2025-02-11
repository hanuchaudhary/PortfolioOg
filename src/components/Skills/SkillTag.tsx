import React from "react";

export function SkillTag({ skill }: { skill: string }) {
  return (
    <li className="flex bg-neutral-800 border hover:text-white transition-colors border-neutral-700 px-4 py-2 mb-1 text-neutral-300 items-center text-base mr-1 select-none">
      <span>{skill}</span>
    </li>
  );
}
