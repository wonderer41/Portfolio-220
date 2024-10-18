'use client';

import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ darkClassName = 'dark' }) => {
  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply the selected theme (dark or light) when the component mounts
  useEffect(() => {
    applyTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);
  
  useLayoutEffect(() => {
    const preferredtheme = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(preferredtheme.matches);
  }, []);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the selected theme by adding/removing a class to the body element
  function applyTheme() {
    const button = document.getElementsByTagName('body')[0];
    if (isDarkMode) {
      button.classList.add(darkClassName);
    } else {
      button.classList.remove(darkClassName);
    }
  }

  return (
    <div>
      <button className="group btn text-red-500" data-testid="themeSwitcherButton" onClick={toggleTheme}>
        {isDarkMode ? 
        (<svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.376 15.378C20.1872 15.8734 18.9119 16.1277 17.624 16.126C12.239 16.126 7.874 11.761 7.874 6.37599C7.874 5.04599 8.14 3.77899 8.622 2.62399C6.84547 3.36511 5.32797 4.61535 4.26063 6.21725C3.19329 7.81915 2.62384 9.70107 2.624 11.626C2.624 17.011 6.989 21.376 12.374 21.376C14.2989 21.3762 16.1808 20.8067 17.7827 19.7394C19.3846 18.672 20.6349 17.1545 21.376 15.378Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>)
 : <Image src='/ThemeSwitcher/Sun.svg' width={18} height={18} alt='Sun Icon'/>}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string.isRequired,
};


export default ThemeSwitcher;
