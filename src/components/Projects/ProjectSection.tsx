import { projectsData } from "@/app/Data/data";
import React from "react";
import ProjectTile from "./ProjectTile";
import { H2Heading } from "../H2Heading";

export function ProjectsSection() {
  return (
    <div className="space-y-5">
      <H2Heading>projects</H2Heading>
      <div className="flex flex-col gap-5">
        {projectsData.slice(0, 3).map((project) => (
          <ProjectTile project={project} />
        ))}
      </div>
    </div>
  );
}
