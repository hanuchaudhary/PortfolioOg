"use client";

import React from "react";
import { motion } from "framer-motion";
import { Info } from "@/components/Info/Details";
import { SkillsPage } from "@/components/Skills/Skills";
import { WritingsPage } from "@/components/Writings/WritingsPage";
import { Contributions } from "@/components/Conributions/Contributions";
import ProjectsPage from "@/components/Projects/Projects";
import { CurrentProject } from "@/components/Projects/CurrentProject";
import InfoNav from "@/components/Info/InfoNav";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-neutral-400 selection:text-white font-mono text-white">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl h-full mx-auto space-y-4 md:p-11 px-4 py-10"
      >
        <InfoNav />
        <Info />

        <CurrentProject />

        <ProjectsPage />

        <Contributions />

        <WritingsPage />

        <SkillsPage />
      </motion.div>
    </div>
  );
}
