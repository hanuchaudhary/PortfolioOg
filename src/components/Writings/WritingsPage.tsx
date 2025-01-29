import { Blogs } from "@/app/Data/data";
import React from "react";

export function WritingsPage() {
  return (
    <div className="space-y-1">
      <h1 className="text-lg font-semibold">Writings</h1>
      <ul className="text-sm text-neutral-400">
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
            <p className="text-xs">{blog.Date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
