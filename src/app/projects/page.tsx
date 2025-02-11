import ProjectPage from "@/components/Projects/ProjectPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | Kush Chaudhary",
  description: "Projects I have worked on",
};

export default function page() {
  return <ProjectPage />;
}
