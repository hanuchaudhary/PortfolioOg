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
import InfoV2 from "@/components/Info/InfoV2";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-mono bg-primary text-primary-foreground text-lg">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl h-full mx-auto space-y-12 md:p-11 px-4 py-10"
      >
        <Navbar />
        <InfoV2/>

        <CurrentProject />

        <ProjectsPage />

        <Contributions />

        <WritingsPage />

        <SkillsPage />
      </motion.div>
    </div>
  );
}
