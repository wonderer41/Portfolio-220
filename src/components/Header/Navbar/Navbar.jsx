'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export function NavbarLink({href, label}) {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <li className="relative py-2 px-3 gap-x-1 text-base inline-flex flex-col">
            <Link className={`${isActive ? 'text-teal-500 dark:text-teal-400' : 'text-zinc-800 dark:text-zinc-300'} hover:text-teal-500 dark:hover:text-teal-400 `} href={href}>{label}</Link>
            {isActive &&
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></span>
            }
        </li>
    )
}


export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row items-center px-3 h-10 border border-zinc-900/5 dark:border-white-500/10 rounded-full">
        <ul className="flex flex-row gap-x-2 items-center px-3">
          <NavbarLink href="/" label="Home" />
          <NavbarLink href="/about" label="About" />
          <NavbarLink href="/projects" label="Projects" />
          <NavbarLink href="/uses" label="Uses" />
        </ul>
      </nav>
    </div>
  );
}
