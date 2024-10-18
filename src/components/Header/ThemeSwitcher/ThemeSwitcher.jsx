'use client';

import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ darkClassName = 'dark'}) => {
  // Check the user's preferred color scheme
  useLayoutEffect(() => {
    const preferredtheme = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(preferredtheme.matches); 
  }, []);

  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply the selected theme (dark or light) when the component mounts
  useEffect(() => {
    applyTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the selected theme by adding/removing a class to the body element
  function applyTheme() {
    const body = document.getElementsByTagName('body')[0];
    if (isDarkMode) {
      body.classList.add(darkClassName);
    } else {
      body.classList.remove(darkClassName);
    }
  }

  return (
    <div>
      <button className="dark:bg-zinc-800/90" data-testid="themeSwitcherButton" onClick={toggleTheme}>
        {isDarkMode ? <Image src='/ThemeSwitcher/Moon.svg' width={18} height={18} alt='Moon Icon'/> : <Image src='/ThemeSwitcher/Sun.svg' width={18} height={18} alt='Sun Icon'/>}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string.isRequired,
};

export default ThemeSwitcher;
