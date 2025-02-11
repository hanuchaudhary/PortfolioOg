import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import { H3Heading } from "../H3Heading";

export function SocialLinks() {
  return (
    <div className="py-4">
      <div className="flex space-x-3 md:space-x-7">
        {[
          {
            link: "https://github.com/hanuchaudhary",
            name: "github",
          },
          {
            link: "https://www.linkedin.com/in/kush-chaudhary-54448628a/",
            name: "linkedin",
          },
          {
            link: "https://x.com/KushChaudharyOg",
            name: "x",
          },
        ].map((social) => (
          <a
            key={social.link}
            target="_blank"
            className="group underline md:text-xl text-base font-semibold hover:text-blue-500 text-blue-50 transition-colors duration-300"
            rel="noreferrer"
            href={social.link}
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
}
