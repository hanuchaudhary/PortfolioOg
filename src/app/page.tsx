"use client";

import React from "react";
import {
  Blogs,
  InfoArray,
  OpenSourceContributions,
  Projects,
  Skills,
} from "./Data/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-neutral-500 selection:text-white font-mono tracking-tight  bg-zinc-900 text-white">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl h-full mx-auto md:p-11 px-4 py-10"
      >
        <div className="flex justify-between md:flex-row flex-col items-center md:mb-2 mb-6 md:gap-0 gap-3">
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

            {typeof window !== "undefined" && window.innerWidth > 768 ? (
              <a
                href="mailto:kushchaudharyog@gmail.com"
                className="text-sm text-zinc-500 hover:underline hover:text-emerald-100 transition-colors"
              >
                kushchaudharyog@gmail.com
              </a>
            ) : (
              <a href="mailto:kushchaudharyog@gmail.com">
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>
        <div className="info">
          <ul className="space-y-1 text-sm text-neutral-500">
            {InfoArray.map((info, index) => (
              <li key={index}>
                •{" "}
                {info.includes("Medium") ? (
                  <span>
                    Write technical blogs on{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-emerald-100 transition-colors text-white"
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

        <div className="projects mt-6 space-y-2">
          <h2 className="text-lg font-semibold">Currently working on</h2>
          <div className="flex items-center justify-between">
            <div className="flex text-sm">
              <a
                target="_blank"
                href="https://crossposthub.vercel.app/"
                className="text-white underline hover:text-emerald-100 transition-colors"
              >
                CrossPostHub.
              </a>
              <p className="text-neutral-500 pl-2">
                SaaS platform for cross-posting content on multiple social media
                platforms.
              </p>
            </div>
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
          </div>
        </div>
        <div className="projects mt-6 space-y-2">
          <h1 className="text-lg font-semibold">Projects</h1>
          <ul className="space-y-2">
            {Projects.map((project) => (
              <li key={project.id} className="text-sm  text-neutral-500">
                <div className="flex items-center justify-between">
                  <span className="flex">
                    <a
                      target="_blank"
                      className="text-white underline hover:text-emerald-100 transition-colors"
                      href={project.liveLink}
                    >
                      {project.title}
                    </a>
                    <p className="md:block hidden pl-2">
                      {project.description}
                    </p>
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

        <div className="opensourse mt-6 space-y-2">
          <h1 className="text-lg font-semibold">Open Source Contributions</h1>
          <ul className="space-y-1 text-sm text-neutral-500">
            {OpenSourceContributions.map((contribution) => (
              <li key={contribution.id} className="flex items-center gap-2">
                <Image width={20} height={20} src={"/github.svg"} alt="" />
                <a
                  target="_blank"
                  className="underline hover:text-emerald-100 transition-colors text-white"
                  href={contribution.link}
                >
                  {contribution.title}
                </a>
                <p>{contribution.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="blogs mt-6 space-y-2">
          <h1 className="text-lg font-semibold">Blogs</h1>
          <ul className="text-sm text-neutral-500">
            {Blogs.map((blog) => (
              <li
                key={blog.title}
                className="flex justify-between items-center gap-2"
              >
                <a
                  target="_blank"
                  className="underline hover:text-emerald-100 transition-colors text-white"
                  href={blog.link}
                >
                  {blog.title}
                </a>
                <p>{blog.Date}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="skills mt-6 space-y-2">
          <h1 className="text-lg font-semibold">Skills and tech</h1>
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
