import React from "react";

export function SkillTag({ skill }: { skill: string }) {
  return (
    <li className="flex bg-neutral-800 border border-neutral-700 px-2 rounded-xl text-white items-center text-sm mr-1 select-none">
      <span>{skill}</span>
    </li>
  );
}
