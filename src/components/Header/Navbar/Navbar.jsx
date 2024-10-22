'use client';

import Link from "next/link";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navOptions } from "@/components/Data";

export function NavbarLink({href, label}) {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <li className="relative py-2 px-3 gap-x-1 text-base inline-flex flex-col">
            <Link className={`${isActive ? 'text-teal-500 dark:text-teal-400' : 'text-zinc-800 dark:text-zinc-300'} hover:text-teal-500 dark:hover:text-teal-400 `} href={href}>{label}</Link>
            {isActive &&
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[62px] h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></span>
            }
        </li>
    )
}

export function Dropdown () {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="">
    <button className="" onClick={open}>
        Menu ^
    </button>
    {isOpen && (
      <div className="w-90 w-[360px] h-[284px] pt-24 gap-24 rounded-tl-[24px] gap-y-2 bg-white dark:bg-zinc-900">
        <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
          <div>Navigation</div>
          <button className="" onClick={open}>x</button>
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
};

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
        <div className="flex sm:hidden h-24 max-w-5xl pt-6 pr-4 pb-6 pl-4 gap-4">
          <Dropdown />
        </div>
      </nav>
    </div>
  );
}
