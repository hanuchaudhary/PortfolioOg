import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";

export default function InfoV2() {
  return (
    <div>
      <HyperText startOnView className="text-4xl lowercase">Kush Chaudhary</HyperText>
      <h2 className="text-muted-foreground flex items-center gap-3">
        Uttar Pradesh, India{" "}
        <Image
          src={"/Flag_of_India.svg.webp"}
          height={25}
          width={25}
          alt="india"
        />
      </h2>

      <p className="text-muted-foreground leading-6">
        I'm a full-stack engineer, currently pursuing B.Tech in Computer
        Science. Write technical blogs on{" "}
        <a
          href="https://dev.to/hanuchaudhary"
          target="_blank"
          className="text-emerald-100 underline"
        >
          Dev.to
        </a>{" "}
        and{" "}
        <a
          href="https://medium.com/@kushchaudharyog"
          target="_blank"
          className="text-emerald-100 underline"
        >
          Medium
        </a>
      </p>
    </div>
  );
}
