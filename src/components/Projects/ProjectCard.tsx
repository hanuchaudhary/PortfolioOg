import React from "react";
import { H3Heading } from "../H3Heading";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/app/Data/data";
import { SkillTag } from "../Skills/SkillTag";

export default function ProjectCard(project: Project) {
  return (
    <div className="border group border-muted-foreground/40 p-6 hover:border-blue-500 transition-colors duration-300">
      <a
        href={project.liveLink ? project.liveLink : project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between"
      >
        <H3Heading>{project.title}</H3Heading>
        <ArrowUpRight className="w-6 h-6 group-hover:text-blue-500 transition-colors duration-300" />
      </a>
      <p className="mt-2 text-muted-foreground">{project.description}</p>

      <h4 className="text-lg font-semibold">learnings</h4>
      <ul className="mt-2 ml-4 list-disc list-inside text-muted-foreground">
        {project.learnings?.map((learning, index) => (
          <li key={index}>{learning}</li>
        ))}
      </ul>
      <h4 className="text-lg font-semibold">tecnologies</h4>
      <div className="mt-2 flex flex-wrap">
        {project.technologies?.map((technology, index) => (
          <SkillTag key={index} skill={technology} />
        ))}
      </div>
    </div>
  );
}
