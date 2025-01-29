import React from "react";

export function Info() {
  return (
    <>
      <div className="info">
        <ul className="text-sm text-neutral-400">
          <li>I'm a full-stack engineer from India.</li>
          <li>
            Write technical blogs on{" "}
            <span>
              <a
                href="https://dev.to/ashutoshdwivedi"
                target="_blank"
                className="text-green-500 underline"
              >
                Dev.to
              </a>{" "}
              and {" "}
              <a
                href="https://hashnode.com/@ashutoshdwivedi"
                target="_blank"
                className="text-green-500 underline"
              >
                Medium
              </a>
            </span>
          </li>
          <li>Currently pursuing B.Tech in Computer Science.</li>
          <li>Let's talk how we can work together!</li>

          <h1 className="bg-green-500 select-none mt-1 text-green-950 text-xs border border-green-600 inline-block rounded-full px-2 py-1 ">
            🍻 | Available for freelance work.
          </h1>
        </ul>
      </div>
    </>
  );
}
