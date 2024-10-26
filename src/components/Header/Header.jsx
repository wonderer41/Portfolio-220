'use client';
import Navbar from "@/components/Header/Navbar/Navbar";
import ThemeSwitcher from "@/components/Header/ThemeSwitcher/ThemeSwitcher";

export default function Header() {
  return (
    <div className="flex flex-row justify-end gap-4 md:justify-between lg:gap-0 lg:justify-between px-12 pt-6 pb-2">
      <div className='w-12 h-10 sm:hidde'/>
      <Navbar />
      <ThemeSwitcher darkClassName={"dark"}/>
    </div>
  );
}