import React from "react";
import { H2Heading } from "../H2Heading";
import { H3Heading } from "../H3Heading";
import Description from "../Description";
import { Project } from "@/Data/data";

export const currentProject: Project = {
  id: 69,
  title: "CrossPostHub",
  description:
    "A SaaS platform for seamless cross-posting across multiple social media platforms. It includes AI-generated captions, post scheduling, media management, and payment integration.",
  githubLink: "https://github.com/hanuchaudhary/CrossPostHub.",
  keyFeatures: [
    "Multi-platform content posting",
    "AI-generated captions",
    "Post scheduling",
    "Image & media management",
    "Built-in image editor",
    "Secure payment processing",
    "Real-time updates (SSE)",
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
    "OAuth 2.0 / OAuth 1.0",
  ],
};

export function CurrentProject() {
  return (
    <div className="projects mt-6 space-y-5">
      <H2Heading>currently working on</H2Heading>
      <div className="flex flex-col">
        <H3Heading>
          <span className="font-semibold md:text-[16px] text-base w-full">
            <a
              target="_blank"
              href={currentProject.liveLink || currentProject.githubLink}
              className="hover:text-orange-100 transition-colors"
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
