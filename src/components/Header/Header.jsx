'use client';
import Navbar from "@/components/Header/Navbar/Navbar";
import ThemeSwitcher from "@/components/Header/ThemeSwitcher/ThemeSwitcher";
import {navOptions} from "@/components/Data";

export default function Header() {
  return (
    <div className="header">
      <div className='w-48 h-40'/>
      <Navbar options={navOptions} />
      <ThemeSwitcher darkClassName={"dark"}/>
    </div>
  );
}