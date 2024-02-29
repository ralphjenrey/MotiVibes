//Theme.js
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as RNEThemeProvider } from 'react-native-elements';

// Define your initial theme
const initialTheme = {
  light: {
    primaryColor: '#3498db',
    secondaryColor: '#2ecc71',
    backgroundColor: '#ffffff',
    textColor: '#000000',
  },
  dark: {
    primaryColor: '#3498db',
    secondaryColor: '#2ecc71',
    backgroundColor: '#1e1e1e',
    textColor: '#ffffff',
  },
};

// Create a context for your theme
const ThemeContext = createContext(initialTheme);

// Create a provider component to wrap your app with
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentTheme = isDarkMode ? initialTheme.dark : initialTheme.light;

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <RNEThemeProvider useDark={isDarkMode}>
        {children}
      
      </RNEThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme throughout your app
export const useTheme = () => useContext(ThemeContext);
