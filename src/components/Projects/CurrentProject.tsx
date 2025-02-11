import React from "react";
import { H2Heading } from "../H2Heading";
import { H3Heading } from "../H3Heading";

export function CurrentProject() {
  return (
    <div className="projects mt-6 space-y-5">
      <H2Heading>* currently working on</H2Heading>
      <div className="flex flex-col">
        <H3Heading>
          <h3 className="font-semibold text-xl">
            <a
              target="_blank"
              href="https://crossposthub.vercel.app/"
              className="hover:text-emerald-100 transition-colors"
            >
              CrossPostHub
            </a>
          </h3>
        </H3Heading>
        <p className="text-muted-foreground">
          SaaS platform for cross-posting content on multiple social media
          platforms.
        </p>
        <span className="h-2 w-2 bg-green-400 rounded-full"></span>
      </div>
    </div>
  );
}
