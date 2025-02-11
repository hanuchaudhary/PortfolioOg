import React from "react";
import { H3Heading } from "../H3Heading";
import { Project } from "@/app/Data/data";
import Description from "../Description";
import { ArrowUpRight } from "lucide-react";

interface ProjectTileProps {
  project: Project;
}

export default function ProjectTile({ project }: ProjectTileProps) {
  return (
    <a
      className="group relative"
      key={project.id}
      href={project.liveLink ? project.liveLink : project.githubLink}
      target="_blank"
    >
      <div className="flex flex-col">
        <H3Heading>{project.title}</H3Heading>
        <Description>{project.description}</Description>
      </div>
      <span className="absolute top-0 right-0 text-blue-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight />
      </span>
    </a>
  );
}
