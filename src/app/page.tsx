"use client";
import React from "react";
import { OpenSourceContributions, Projects, Skills } from "./Data/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const infoArray = [
    "I'm a full-stack engineer from India.",
    "Write technical blogs on Medium",
    "Currently persuing B.Tech in Computer Science.",
    "Let's talk how we can work together!",
  ];

  return (
    <div className="h-screen selection:bg-neutral-500 selection:text-white  bg-zinc-900 text-white">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl h-full mx-auto p-11"
      >
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl tracking-tight font-semibold">
            Hi, I&apos;m Kush Chaudhary.
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
              <motion.a
                key={social.link}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                target="_blank"
                rel="noreferrer"
                href={social.link}
              >
                <Image width={20} height={20} src={social.icon} alt="" />
              </motion.a>
            ))}

            <a
              href="mailto:kushchaudharyog@gmail.com"
              className="text-sm text-zinc-500 hover:text-white hover:underline transition-colors"
            >
              kushchaudharyog@gmail.com
            </a>
          </div>
        </div>
        <div className="info">
          <ul className="space-y-1 text-sm text-neutral-500">
            {infoArray.map((info, index) => (
              <li key={index}>
                •{" "}
                {info.includes("Medium") ? (
                  <span>
                    Write technical blogs on{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-white"
                      href="https://medium.com/@kushchaudharyog"
                    >
                      Medium
                    </a>
                    ,
                  </span>
                ) : (
                  info
                )}
              </li>
            ))}

            <h1 className="bg-green-200 select-none text-green-950 text-xs border border-green-300 inline-block rounded-full px-2 py-1 ">
              🍻 | Available for freelance work.
            </h1>
          </ul>
        </div>
        <div className="projects mt-4 space-y-3">
          <h1 className="text-xl font-semibold">Projects</h1>
          <ul className="space-y-1">
            {Projects.map((project) => (
              <li
                key={project.id}
                className="text-sm flex justify-between text-neutral-500"
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
          <ul className="space-y-1 text-sm text-neutral-500">
            {OpenSourceContributions.map((contribution) => (
              <li key={contribution.id} className="flex items-center gap-2">
                <Image width={20} height={20} src={"/github.svg"} alt="" />
                <a
                  target="_blank"
                  className="underline text-white"
                  href={contribution.link}
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
                className="flex items-center text-sm mr-1 select-none"
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
