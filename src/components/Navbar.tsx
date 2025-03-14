"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const links = [
  { href: "/", text: "home", key: "h" },
  { href: "/writings", text: "writings", key: "w" },
  { href: "/projects", text: "projects", key: "p" },
  { href: "/skills", text: "skills", key: "s" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    const link = links.find((link) => link.key === key);
    if (link) {
      router.push(link.href, { scroll: true });
    }
  };

  React.useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <nav className="flex max-w-3xl mx-auto pb-8 text-sm text-muted-foreground items-center gap-4">
      {links.map(({ href, text, key }) => (
        <h4
          className="hover:text-orange-500 sm:text-sm text-xs duration-300 transition-colors"
          key={key}
        >
          <Link href={href}>
            <span className={`${pathname === href && "text-orange-500"}`}>
              [{key}]
            </span>{" "}
            {text}
          </Link>
        </h4>
      ))}
    </nav>
  );
}
