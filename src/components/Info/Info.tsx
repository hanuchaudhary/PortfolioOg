import React from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";
import Description from "../Description";

export function Info() {
  return (
    <div>
      <HyperText className="text-4xl lowercase">Kush Chaudhary</HyperText>
      <h2 className="text-muted-foreground flex items-center gap-3 mb-2">
        Uttar Pradesh, India{" "}
        <Image
          src={"/Flag_of_India.svg.webp"}
          height={25}
          width={25}
          alt="india"
        />
      </h2>

      <Description>
        I&apos;m a 20 y/o full-stack engineer, currently pursuing B.Tech in
        Computer Science with niche expertise in building highly robust, secure,
        and scalable applications using the latest and most efficient
        technologies. My mission is to deliver innovative solutions that create
        value for businesses and end-users while ensuring unparalleled
        performance and scalability.
        <br />I write technical blogs on{" "}
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
    </div>
  );
}
