import { Projects } from "@/app/Data/data";
import React from "react";
import ProjectTile from "./ProjectTile";

export default function ProjectsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">* projects</h1>
      <div className="flex flex-col gap-5">
        {Projects.slice(0, 3).map((project) => (
          <ProjectTile project={project} />
        ))}
      </div>
    </div>
  );
}
