import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";
import Description from "../Description";
import GitHubCalendar from "./GithubCalender";

export function Info() {
  return (
    <div>
      <HyperText className="text-4xl">Kush Chaudhary</HyperText>
      <h2 className="text-muted-foreground flex items-center gap-3">
        Uttar Pradesh, India{" "}
        <Image
          src={"/Flag_of_India.svg.webp"}
          height={23}
          width={23}
          alt="india"
        />
      </h2>
      <Description>
        I write technical blogs on{" "}
        <a
          href="https://dev.to/hanuchaudhary"
          target="_blank"
          className="text-orange-100 border-b border-orange-100/30 border-dashed leading-none hover:border-orange-100/70 transition-colors"
        >
          Dev.to
        </a>{" "}
        and{" "}
        <a
          href="https://medium.com/@kushchaudharyog"
          target="_blank"
          className="text-orange-100 border-b border-orange-100/30 border-dashed leading-none hover:border-orange-100/70 transition-colors"
        >
          Medium
        </a>
      </Description>
      <div className="md:my-8 my-4">
        <GitHubCalendar />
      </div>
    </div>
  );
}
