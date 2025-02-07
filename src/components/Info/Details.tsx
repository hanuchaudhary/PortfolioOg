import React from "react";

export function Info() {
  return (
    <>
      <div className="info">
        <ul className="text-sm text-neutral-400">
          <li>I&apos;m a full-stack engineer from India.</li>
          <li>
            Write technical blogs on{" "}
            <span>
              <a
                href="https://dev.to/hanuchaudhary"
                target="_blank"
                className="text-emerald-100 underline"
              >
                Dev.to
              </a>{" "}
              and {" "}
              <a
                href="https://medium.com/@kushchaudharyog"
                target="_blank"
                className="text-emerald-100 underline"
              >
                Medium
              </a>
            </span>
          </li>
          <li>Currently pursuing B.Tech in Computer Science.</li>
          <li>Let&apos;s talk how we can work together!</li>

          <h1 className="bg-emerald-200 select-none mt-1 text-emerald-950 text-xs border border-emerald-400 inline-block rounded-full px-2 py-1 ">
            🍻 | Available for freelance work.
          </h1>
        </ul>
      </div>
    </>
  );
}
