import { projectsData } from "@/Data/data";
import React from "react";
import ProjectTile from "./ProjectTile";
import { H2Heading } from "../H2Heading";
import Link from "next/link";
import {  ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <div className="space-y-5">
      <H2Heading>projects</H2Heading>
      <div className="flex flex-col gap-5">
        {projectsData.slice(0, 3).map((project,index) => (
          <ProjectTile key={index} project={project} />
        ))}
      </div>
      <Link href="/projects" className="flex items-center text-lg font-semibold text-blue-500 underline">
        View more projects <ArrowUpRight />
      </Link>
    </div>
  );
}
