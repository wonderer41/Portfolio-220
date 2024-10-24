"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navOptions } from "@/components/Data";

export function NavbarLink({ href, label }) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <li className="relative py-2 px-3 gap-x-1 text-base inline-flex flex-col">
      <Link
        className={`${
          isActive ? "text-teal-500 dark:text-teal-400" : "text-zinc-800 dark:text-zinc-300"
        } hover:text-teal-500 dark:hover:text-teal-400 `}
        href={href}
      >
        {label}
      </Link>
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[62px] h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></span>
      )}
    </li>
  );
}

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(true);

  const open = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="">
      <button className="inline-flex justify-center gap-x-2 items-center" onClick={open}>
        <span>Menu </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-4 h-4"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 z-10 w-90 w-[200px] h-[284px] gap-24 rounded-tl-[24px] gap-y-2 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
            <div>Navigation</div>
            <button className="" onClick={open}>
              x
            </button>
          </div>
          <ul className="flex flex-col text-zinc-800 dark:text-zinc-300 sm:gap-x-2 sm:px-3">
            <NavbarLink href="/" label="Home" />
            <NavbarLink href="/about" label="About" />
            <NavbarLink href="/projects" label="Projects" />
            <NavbarLink href="/uses" label="Uses" />
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-col items-right sm:flex-row sm:items-center px-3 h-10 dark:bg-zinc-800/90 ring-1 dark:ring-2 ring-zinc-900/5 dark:ring-white/10 shadow-lg rounded-full">
        <div className="hidden sm:flex">
          <ul className="flex flex-col text-zinc-800 dark:text-zinc-300 sm:flex-row sm:gap-x-2 sm:px-3">
            <NavbarLink href="/" label="Home" />
            <NavbarLink href="/about" label="About" />
            <NavbarLink href="/projects" label="Projects" />
            <NavbarLink href="/uses" label="Uses" />
          </ul>
        </div>
        <div className="relative flex justify-center items-center sm:hidden h-24 max-w-5xl pr-4 pl-4 gap-4">
          <Dropdown />
        </div>
      </nav>
    </div>
  );
}
