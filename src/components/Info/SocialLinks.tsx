import React from "react";

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
            className="group border-b border-dashed border-stone-200/60 leading-none md:text-base text-sm text-stone-300 hover:text-orange-500 hover:border-orange-500 transition-colors duration-300"
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
