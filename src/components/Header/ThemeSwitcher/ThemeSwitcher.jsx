'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  // Initialize state from localStorage if available, fallback to system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Update theme when system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <button
      className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 
        bg-white dark:bg-zinc-800 
        ring-1 ring-zinc-900/5 dark:ring-white/10 
        hover:ring-zinc-900/10 dark:hover:ring-white/20
        active:ring-teal-400 dark:active:ring-teal-400
        shadow-sm hover:shadow-md"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      data-testid="themeSwitcherButton"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Moon className="w-5 h-5 text-zinc-500 hover:text-zinc-400" />
      ) : (
        <Sun className="w-5 h-5 text-teal-500 hover:text-teal-600" />
      )}
    </button>
  );
};

export default ThemeSwitcher;