import React from "react";
import { SkillsSection } from "@/components/Skills/SkillsSection";
import { WritingsSection } from "@/components/Writings/WritingsSection";
import { Contributions } from "@/components/Conributions/Contributions";
import { ProjectsSection } from "@/components/Projects/ProjectSection";
import { CurrentProject } from "@/components/Projects/CurrentProject";
import { Info } from "@/components/Info/Info";
import { SocialSection } from "@/components/Info/SocialSection";
import GitHubCalendar from "@/components/Info/GithubCalender";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-10">
        <Info />

        <GitHubCalendar />

        <CurrentProject />

        <ProjectsSection />

        <Contributions />

        <WritingsSection />

        <SkillsSection />

        <SocialSection />
      </div>
    </div>
  );
}
