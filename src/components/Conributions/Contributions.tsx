import { OpenSourceContributions } from "@/app/Data/data";
import Image from "next/image";
import React from "react";

export function Contributions() {
  return (
    <div className="space-y-1">
      <h1 className="text-lg font-semibold">Open Source Contributions</h1>
      <ul className="space-y-1 text-sm text-neutral-400">
        {OpenSourceContributions.map((contribution) => (
          <li key={contribution.id} className="flex items-center gap-2">
            <Image width={20} height={20} src={"/github.svg"} alt="" />
            <a
              target="_blank"
              className="underline hover:text-emerald-100 transition-colors text-white"
              href={contribution.link}
            >
              {contribution.title}
            </a>
            <p>{contribution.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
