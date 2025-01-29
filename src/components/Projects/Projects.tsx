import { Projects } from "@/app/Data/data";
import React from "react";

export default function ProjectsPage() {
  return (
    <div className="space-y-1">
      <h1 className="text-lg font-semibold">Projects</h1>
      <ul className="space-y-1">
        {Projects.map((project) => (
          <li key={project.id} className="text-sm  text-neutral-400">
            <div className="flex items-center justify-between">
              <span className="flex">
                <a
                  target="_blank"
                  className="text-white underline hover:text-emerald-100 transition-colors"
                  href={project.liveLink}
                >
                  {project.title}
                </a>
                <p className="md:block hidden pl-2">{project.description}</p>
              </span>

              <a
                href={project.githubLink}
                target="_blank"
                className="text-white underline hover:text-emerald-100 transition-colors"
              >
                repo
              </a>
            </div>
            <p className="md:hidden block mt-1.5">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
