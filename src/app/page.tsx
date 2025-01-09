import Socials from "@/components/Socials";
import React from "react";
import { Skills } from "./Data/data";

export default function Home() {
  const infoArray = [
    "🍻 | Available for freelance work.",
    "I'm a full-stack engineer from India.",
    "Worked with few startups, learn more",
    "Make videos about frontend on YouTube",
    "Write technical blogs on Medium",
    "Let's talk how we can work together!",
  ];

  return (
    <div className="max-h-screen bg-neutral-900 text-white">
      <div className="max-w-3xl h-full mx-auto p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl tracking-tight font-semibold">
            Hi, I'm Kush Chaudhary.
          </h1>
          <Socials />
        </div>
        <div className="info">
          <ul>
            {infoArray.map((info, index) => (
              <li key={index} className="text-sm">
                {info}
              </li>
            ))}
          </ul>
        </div>
        <div className="projects mt-4">
          <h1 className="text-lg">Projects</h1>
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="text-sm flex">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Github
                </a>
                <p>{project.users} users</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="opensourse mt-5">
          <h1>Open Source Contributions</h1>
          <ul>
            {openSourceContributions.map((contribution) => (
              <li key={contribution.id} className="flex items-center gap-2">
                <img src={contribution.image} alt="" />
                <h1>{contribution.title}</h1>
                <p>{contribution.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h1>Skills</h1>
          <ul className="flex flex-wrap">
            {Skills.map((skill) => (
              <li key={skill.name} className="flex items-center gap-2 text-sm">
                {/* <img src={`/${skill.icon}.svg`} alt="" /> */}
                <span>{skill.icon}</span>
                <h1>{skill.name}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
