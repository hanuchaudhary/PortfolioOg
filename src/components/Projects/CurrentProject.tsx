import React from "react";

export function CurrentProject() {
  return (
    <div className="projects mt-6 space-y-1">
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
          <p className="text-neutral-400 pl-2">
            SaaS platform for cross-posting content on multiple social media
            platforms.
          </p>
        </div>
        <span className="h-2 w-2 bg-green-400 rounded-full"></span>
      </div>
    </div>
  );
}
