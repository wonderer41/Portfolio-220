'use client';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ darkClassName }) => {
  // Check the user's preferred color scheme
  const prefersDarkMode = useMemo(() => {
    const preferredtheme = window.matchMedia('(prefers-color-scheme: dark)');
    return preferredtheme.matches; 
  }, []);

  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

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
    const button = document.getElementsByTagName('body')[0];
    if (isDarkMode) {
      button.classList.add(darkClassName);
    } else {
      button.classList.remove(darkClassName);
    }
  }

  return (
    <div>
      <button className="btn" data-testid="themeSwitcherButton" onClick={toggleTheme}>
        {isDarkMode ? <Image src='/ThemeSwitcher/Moon.svg' width={18} height={18} alt='Moon Icon'/> : <Image src='/ThemeSwitcher/Sun.svg' width={18} height={18} alt='Sun Icon'/>}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string.isRequired,
};

ThemeSwitcher.defaultProps = {
  darkClassName: 'dark',
};

export default ThemeSwitcher;
