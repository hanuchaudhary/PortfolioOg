"use client";
import React from "react";
import { OpenSourceContributions, Projects, Skills } from "./Data/data";
import { motion } from "framer-motion";

export default function Home() {
  const infoArray = [
    "I'm a full-stack engineer from India.",
    "Write technical blogs on Medium",
    "Currently persuing B.Tech in Computer Science.",
    "Let's talk how we can work together!",
  ];

  return (
    <div className="h-screen  bg-zinc-900 text-white">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="max-w-3xl h-full mx-auto p-10"
      >
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl tracking-tight font-semibold">
            Hi, I'm Kush Chaudhary.
          </h1>
          <div className="flex items-center justify-center space-x-4">
            {[
              {
                link: "https://github.com/hanuchaudhary",
                icon: "/github.svg",
              },
              {
                link: "https://www.linkedin.com/in/kush-chaudhary-54448628a/",
                icon: "/linkedin.svg",
              },
              {
                link: "https://x.com/KushChaudharyOg",
                icon: "/x.svg",
              },
            ].map((social) => (
              <a target="_blank" rel="noreferrer" href={social.link}>
                <img src={social.icon} alt="" />
              </a>
            ))}

            <h3 className="text-sm text-zinc-500">kushchaudharyog@gmail.com</h3>
          </div>
        </div>
        <div className="info">
          <ul className="space-y-1">
            {infoArray.map((info, index) => (
              <li key={index} className="text-[15px] text-neutral-500">
                {info}
              </li>
            ))}
            <h1 className="bg-green-200 text-green-950 text-xs border border-green-300 inline-block rounded-full px-2 py-1 ">
              🍻 | Available for freelance work.
            </h1>
          </ul>
        </div>
        <div className="projects mt-4 space-y-3">
          <h1 className="text-xl font-semibold">Projects</h1>
          <ul>
            {Projects.map((project) => (
              <li
                key={project.id}
                className="text-[15px] flex justify-between text-neutral-500"
              >
                <div className="flex gap-2">
                  <h1>{project.id}.</h1>
                  <a className="text-white underline" href={project.liveLink}>
                    {project.title}
                  </a>
                  <p>{project.description}</p>
                </div>

                <a
                  className="text-white underline"
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="opensourse mt-5 space-y-3">
          <h1 className="text-xl font-semibold">Open Source Contributions</h1>
          <ul className="space-y-1 text-[15px] text-neutral-500">
            {OpenSourceContributions.map((contribution) => (
              <li key={contribution.id} className="flex items-center gap-2">
                <img src={contribution.image} alt="" />
                <a
                  target="_blank"
                  className="underline text-white"
                  href={contribution.title}
                >
                  {contribution.title}
                </a>
                <p>{contribution.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="skills mt-4 space-y-3">
          <h1 className="text-xl font-semibold">Skills and tech</h1>
          <ul className="flex flex-wrap text-neutral-500">
            {Skills.map((skill) => (
              <motion.li
                key={skill.name}
                className="flex items-center text-[15px] mr-1 select-none"
                whileHover={{
                  color: "#f9f9f9",
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
                }}
              >
                <h1>{skill.name}, </h1>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
