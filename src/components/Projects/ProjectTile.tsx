import React from "react";
import { H3Heading } from "../H3Heading";
import { Project } from "@/app/Data/data";

interface ProjectTileProps {
  project: Project;
}

export default function ProjectTile({ project }: ProjectTileProps) {
  return (
    <a
      className="group"
      key={project.id}
      href={project.liveLink ? project.liveLink : project.githubLink}
      target="_blank"
    >
      <div className="flex flex-col">
        <H3Heading>{project.title}</H3Heading>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
    </a>
  );
}
