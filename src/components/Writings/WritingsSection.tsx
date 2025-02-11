import { Blogs } from "@/app/Data/data";
import React from "react";
import { H2Heading } from "../H2Heading";
import { H3Heading } from "../H3Heading";

export function WritingsSection() {
  return (
    <div className="space-y-5">
      <H2Heading>writings</H2Heading>
      <div className="space-y-3">
        {Blogs.map((blog) => (
          <a
            key={blog.title}
            target="_blank"
            className="group flex items-center justify-between"
            href={blog.link}
          >
            <H3Heading>{blog.title}</H3Heading>
            <p className="text-sm text-muted-foreground">{blog.Date}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
