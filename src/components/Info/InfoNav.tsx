import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function InfoNav() {
  return (
    <div className="flex justify-between md:flex-row flex-col items-center md:mb-2 mb-6 md:gap-0 gap-3">
      <h1 className="text-xl tracking-tight font-semibold">
        Hi, I&apos;m Kush Chaudhary⚡
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
            className="text-sm text-zinc-400 hover:underline hover:text-emerald-100 transition-colors"
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
  );
}
