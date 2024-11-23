'use client';
import React, {useEffect, useState} from 'react';
import '../styles/layout.css';

const GradientScroll: React.FC = () => {
  type colorKey = keyof typeof colors;
  const [gradientPosition, setGradientPosition] = useState(50); // Start at 50%
  const [colorScheme, setColorScheme] = useState('light');

  const colors = {
    "dark": "57547f",
    "light": "a7e4ff"
  } as const;

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = window.scrollY / scrollHeight;
      const newGradientPosition = 50 - scrollFraction * 40; // From 50% to 10%
      setGradientPosition(newGradientPosition);
    };

    const detectColorScheme = () => {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setColorScheme(isDarkMode ? 'dark' : 'light');
    };

    // Run detection on load
    detectColorScheme();

    // Set up listener for color scheme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', detectColorScheme);

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listeners
    return () => {
      mediaQuery.removeEventListener('change', detectColorScheme);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg"
      style={{
        backgroundImage: `linear-gradient(45deg, #${colorScheme == 'dark' ? '111111': 'FEFEFE'} ${gradientPosition}%, #${colors[colorScheme as colorKey]})`,
        transition: 'background-image 2s ease',
      }}
    >
    </div>
  );
};

export default GradientScroll;
