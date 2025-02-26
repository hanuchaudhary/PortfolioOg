import React from "react";
import { H2Heading } from "../H2Heading";
import { H3Heading } from "../H3Heading";
import Description from "../Description";
import { Project } from "@/Data/data";

export const currentProject: Project = {
  id: 69,
  title: "CrossPostHub",
  description:
    "SaaS platform for cross-posting content on multiple social media platforms. This tool helps users to efficiently manage and distribute their content across various social networks, saving time and effort. It includes features like scheduling and AI caption to ensure the best performance for each post.",
  githubLink: "https://github.com/hanuchaudhary/CrossPostHub.",
  learnings: [
    "Building a SaaS platform",
    "Working with social media APIs",
    "Creating a scheduling system",
    "Media management",
    "Payment integration",
  ],
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "Razorpay",
    "NextAuth",
    "Prisma",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "OAuth2.0 | OAuth1.0",
    "GeminiAPI",
  ],
};

export function CurrentProject() {
  return (
    <div className="projects mt-6 space-y-5">
      <H2Heading>currently working on</H2Heading>
      <div className="flex flex-col">
        <H3Heading>
          <span className="font-semibold text-xl w-full">
            <a
              target="_blank"
              href={currentProject.liveLink || currentProject.githubLink}
              className="hover:text-blue-100 transition-colors"
            >
              {currentProject.title}
            </a>
            <span className="h-10 w-10 bg-green-400 rounded-full" />
          </span>
        </H3Heading>
        <Description>{currentProject.description}</Description>
      </div>
    </div>
  );
}
