'use client';
import Navbar from "@/components/Header/Navbar/Navbar";
import ThemeSwitcher from "@/components/Header/ThemeSwitcher/ThemeSwitcher";

export default function Header() {
  return (
    <div className="header flex flex-row justify-between px-12 pt-6 pb-2">
      <div className='w-12 h-10'/>
      <Navbar />
      <ThemeSwitcher darkClassName={"dark"}/>
    </div>
  );
}