"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { Activity } from "react-github-calendar";
import Description from "../Description";
import { H2Heading } from "../H2Heading";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => <div className="" />,
});

function GithubCalender() {
  const [totalCount, setTotalCount] = useState(0);

  const processContributions = useCallback((contributions: Activity[]) => {
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <H2Heading>Proof of Work</H2Heading>
        <Description>
          All the work I have done so far in public &amp;&amp; people&apos;s appreciation
        </Description>
      </div>
      <GitHubCalendar
        theme={{
          dark: ["#161B22", "#631C03", "#BD561D", "#FA7A19", "#FDDF68"],
        }}
        username="hanuchaudhary"
        transformData={processContributions}
        totalCount={totalCount}
      />
    </div>
  );
}

export default GithubCalender;
